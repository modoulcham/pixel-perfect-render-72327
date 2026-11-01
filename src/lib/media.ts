import { supabase } from "@/integrations/supabase/client";
import { workPhotoSources } from "@/lib/work-photos";

export type MediaItem = {
  id: string;
  kind: "photo" | "document";
  file_path: string;
  mime_type: string | null;
  caption_fi: string;
  caption_en: string;
  /** Only the supplied work photos have French and Russian captions; uploads fall back to English. */
  caption_fr?: string;
  caption_ru?: string;
  category: string;
  sort_order: number;
  url: string;
  /** Smaller copy for grids; falls back to `url`. */
  thumb?: string;
};

/** Columns of a `media_items` row that admins can edit (excludes client-only fields). */
export type MediaPatch = Partial<Omit<MediaItem, "url" | "caption_fr" | "caption_ru" | "thumb">>;

export const MEDIA_BUCKET = "media";

/** Owner-supplied portfolio, also displayed alongside later admin uploads. */
export const workPhotos: MediaItem[] = workPhotoSources.map((p, i) => ({
  id: `work-${i}`,
  kind: "photo",
  file_path: "",
  mime_type: "image/jpeg",
  caption_fi: p.fi,
  caption_en: p.en,
  caption_fr: p.fr,
  caption_ru: p.ru,
  category: p.category,
  sort_order: i,
  url: p.url,
  thumb: p.thumb,
}));

/** Curated shots for the home-page preview. */
export const featuredWorkPhotos = workPhotos.filter((_, i) => workPhotoSources[i]?.featured);

export async function fetchMedia(): Promise<MediaItem[]> {
  const { data, error } = await supabase
    .from("media_items")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });
  if (error || !data?.length) return [];
  const { data: signed } = await supabase.storage.from(MEDIA_BUCKET).createSignedUrls(
    data.map((d) => d.file_path),
    60 * 60 * 24 * 7,
  );
  const map = new Map(signed?.map((s) => [s.path, s.signedUrl]) ?? []);
  return data.map((d) => ({
    ...d,
    kind: d.kind as MediaItem["kind"],
    url: map.get(d.file_path) ?? "",
  }));
}
