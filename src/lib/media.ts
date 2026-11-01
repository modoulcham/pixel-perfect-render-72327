import { supabase } from "@/integrations/supabase/client";
import { workPhotoSources } from "@/lib/work-photos";

export type MediaItem = {
  id: string;
  kind: "photo" | "document";
  file_path: string;
  mime_type: string | null;
  caption_fi: string;
  caption_en: string;
  category: string;
  sort_order: number;
  url: string;
};

export const MEDIA_BUCKET = "media";

/** Owner-supplied portfolio, also displayed alongside later admin uploads. */
export const workPhotos: MediaItem[] = workPhotoSources.map((p, i) => ({
  id: `work-${i}`,
  kind: "photo",
  file_path: "",
  mime_type: "image/jpeg",
  caption_fi: p.fi,
  caption_en: p.en,
  category: p.category,
  sort_order: i,
  url: p.url,
}));

export async function fetchMedia(): Promise<MediaItem[]> {
  const { data, error } = await supabase
    .from("media_items")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });
  if (error || !data?.length) return [];
  const { data: signed } = await supabase.storage
    .from(MEDIA_BUCKET)
    .createSignedUrls(data.map((d) => d.file_path), 60 * 60 * 24 * 7);
  const map = new Map(signed?.map((s) => [s.path, s.signedUrl]) ?? []);
  return data.map((d) => ({ ...d, kind: d.kind as MediaItem["kind"], url: map.get(d.file_path) ?? "" }));
}
