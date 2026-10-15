import { supabase } from "@/integrations/supabase/client";
import type { Category } from "@/i18n/translations";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import hero from "@/assets/hero.jpg";

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

/** Shown in the gallery until real photos are uploaded via /admin. */
export const placeholderPhotos: MediaItem[] = [
  { src: g1, c: "bathroom", fi: "Kylpyhuoneremontti, Turku", en: "Bathroom renovation, Turku" },
  { src: g2, c: "kitchen", fi: "Keittiön hana-asennus", en: "Kitchen faucet installation" },
  { src: g3, c: "pipes", fi: "Vesijohtoasennus teknisessä tilassa", en: "Water line installation" },
  { src: g4, c: "installations", fi: "Seinä-WC:n asennus", en: "Wall-hung toilet installation" },
  { src: g5, c: "installations", fi: "Pesu- ja astianpesukoneen liitännät", en: "Washer & dishwasher connections" },
  { src: g6, c: "bathroom", fi: "Termostaattisekoittimen asennus", en: "Thermostatic mixer installation" },
  { src: hero, c: "maintenance", fi: "Viemäriliitännän korjaus", en: "Drain connection repair" },
].map((p, i) => ({
  id: `ph-${i}`,
  kind: "photo",
  file_path: "",
  mime_type: "image/jpeg",
  caption_fi: p.fi,
  caption_en: p.en,
  category: p.c as Category,
  sort_order: i,
  url: p.src,
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
