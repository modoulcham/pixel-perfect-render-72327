import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Download, ExternalLink, FileText, X } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { categories, type Category } from "@/i18n/translations";
import { fetchMedia, placeholderPhotos, type MediaItem } from "@/lib/media";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "./Reveal";

export function GalleryAndDocs() {
  const [items, setItems] = useState<MediaItem[] | null>(null);
  useEffect(() => {
    fetchMedia().then(setItems).catch(() => setItems([]));
  }, []);
  const photos = items?.filter((i) => i.kind === "photo") ?? [];
  const docs = items?.filter((i) => i.kind === "document") ?? [];
  return (
    <>
      <Gallery photos={photos.length ? photos : placeholderPhotos} />
      <Documents docs={docs} />
    </>
  );
}

function Gallery({ photos }: { photos: MediaItem[] }) {
  const { t, lang } = useLang();
  const [filter, setFilter] = useState<Category | "all">("all");
  const [index, setIndex] = useState<number | null>(null);
  const shown = filter === "all" ? photos : photos.filter((p) => p.category === filter);
  const caption = (p: MediaItem) => (lang === "fi" ? p.caption_fi : p.caption_en) || p.caption_fi || p.caption_en;

  return (
    <section id="gallery" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} subtitle={t.gallery.subtitle} />
        <div className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0" role="tablist">
          {(["all", ...categories] as const).map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              onClick={() => setFilter(c)}
              className={cn(
                "min-h-11 shrink-0 rounded-full px-5 text-sm font-semibold transition-colors",
                filter === c ? "bg-navy text-navy-foreground" : "bg-card text-navy shadow-soft hover:bg-accent",
              )}
            >
              {c === "all" ? t.gallery.all : t.gallery.cats[c]}
            </button>
          ))}
        </div>
        {shown.length === 0 ? (
          <p className="text-center text-muted-foreground">{t.gallery.empty}</p>
        ) : (
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {shown.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setIndex(i)}
                className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-card shadow-soft focus-visible:ring-2 focus-visible:ring-ring"
              >
                <img src={p.url} alt={caption(p)} loading="lazy" decoding="async" className="w-full transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-4 pt-12 text-left">
                  <span className="block text-xs font-bold uppercase tracking-wider text-cyan">{t.gallery.cats[p.category as Category] ?? p.category}</span>
                  <span className="block font-semibold text-navy-foreground">{caption(p)}</span>
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
      {index !== null && (
        <Lightbox items={shown} index={index} setIndex={setIndex} caption={caption} />
      )}
    </section>
  );
}

function Lightbox({ items, index, setIndex, caption }: { items: MediaItem[]; index: number; setIndex: (i: number | null) => void; caption: (p: MediaItem) => string }) {
  const { t } = useLang();
  const touchX = useRef<number | null>(null);
  const go = useCallback((d: number) => setIndex((index + d + items.length) % items.length), [index, items.length, setIndex]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [go, setIndex]);
  const p = items[index];
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={caption(p)}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy/95 p-4 animate-in fade-in"
      onClick={() => setIndex(null)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <Button variant="glass" size="icon" className="absolute right-4 top-4" aria-label={t.gallery.close} onClick={() => setIndex(null)}><X /></Button>
      <img src={p.url} alt={caption(p)} className="max-h-[78vh] max-w-full rounded-xl object-contain" onClick={(e) => e.stopPropagation()} />
      <p className="mt-4 text-center font-semibold text-navy-foreground">{caption(p)} <span className="text-navy-foreground/60">· {index + 1}/{items.length}</span></p>
      {items.length > 1 && (
        <>
          <Button variant="glass" size="icon" className="absolute left-3 top-1/2 -translate-y-1/2" aria-label={t.gallery.prev} onClick={(e) => { e.stopPropagation(); go(-1); }}><ChevronLeft /></Button>
          <Button variant="glass" size="icon" className="absolute right-3 top-1/2 -translate-y-1/2" aria-label={t.gallery.next} onClick={(e) => { e.stopPropagation(); go(1); }}><ChevronRight /></Button>
        </>
      )}
    </div>
  );
}

function Documents({ docs }: { docs: MediaItem[] }) {
  const { t, lang } = useLang();
  return (
    <section id="documents" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.docs.eyebrow} title={t.docs.title} subtitle={t.docs.subtitle} />
        {docs.length === 0 ? (
          <Reveal className="mx-auto max-w-md rounded-2xl border border-dashed bg-surface p-10 text-center">
            <FileText className="mx-auto mb-3 h-10 w-10 text-water" />
            <p className="text-muted-foreground">{t.docs.empty}</p>
          </Reveal>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {docs.map((d, i) => {
              const title = (lang === "fi" ? d.caption_fi : d.caption_en) || d.caption_fi || d.caption_en;
              const isImg = d.mime_type?.startsWith("image/");
              return (
                <Reveal key={d.id} delay={(i % 4) * 80}>
                  <article className="card-lift flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-soft">
                    <div className="flex aspect-[4/3] items-center justify-center bg-surface">
                      {isImg ? <img src={d.url} alt={title} loading="lazy" className="h-full w-full object-cover" /> : <FileText className="h-14 w-14 text-water" />}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-bold text-navy">{title}</h3>
                      <div className="mt-auto flex gap-2 pt-4">
                        <Button asChild variant="outline" size="sm" className="h-10 flex-1"><a href={d.url} target="_blank" rel="noopener noreferrer"><ExternalLink /> {t.docs.view}</a></Button>
                        <Button asChild variant="navy" size="sm" className="h-10 flex-1"><a href={d.url} download><Download /> {t.docs.download}</a></Button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
