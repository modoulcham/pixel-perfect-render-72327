import { useId } from "react";
import type { Lang } from "@/i18n/translations";
import { cn } from "@/lib/utils";

/**
 * Inline SVG flags for the language menu. Emoji flags are avoided because Windows
 * shows them as plain letters ("GB", "FI").
 */
export function Flag({ lang, className }: { lang: Lang; className?: string }) {
  return (
    <svg
      viewBox="0 0 30 20"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={cn(
        "h-3.5 w-[21px] shrink-0 overflow-hidden rounded-[3px] ring-1 ring-black/10",
        className,
      )}
    >
      {lang === "en" ? <UnionJack /> : flags[lang]}
    </svg>
  );
}

const flags: Record<Exclude<Lang, "en">, React.ReactNode> = {
  fi: (
    <>
      <rect width="30" height="20" fill="#fff" />
      <rect x="8" width="5.5" height="20" fill="#002F6C" />
      <rect y="7.25" width="30" height="5.5" fill="#002F6C" />
    </>
  ),
  fr: (
    <>
      <rect width="10" height="20" fill="#0055A4" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#EF4135" />
    </>
  ),
  ru: (
    <>
      <rect width="30" height="6.67" fill="#fff" />
      <rect y="6.67" width="30" height="6.67" fill="#0039A6" />
      <rect y="13.33" width="30" height="6.67" fill="#D52B1E" />
    </>
  ),
};

/** Drawn on a 60×30 canvas and scaled into the 3:2 box; the clip id must be unique per instance. */
function UnionJack() {
  const clip = useId();
  return (
    <svg viewBox="0 0 60 30" width="30" height="20" preserveAspectRatio="xMidYMid slice">
      <clipPath id={clip}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        clipPath={`url(#${clip})`}
        stroke="#C8102E"
        strokeWidth="4"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}
