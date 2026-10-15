import { useLang } from "@/i18n/LanguageProvider";
import type { Lang } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const flags: Record<Lang, string> = { fi: "🇫🇮", en: "🇬🇧" };

export function LangSwitch({ inverted }: { inverted?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div role="group" aria-label="Language / Kieli" className={cn("flex items-center rounded-full border p-0.5 text-sm font-semibold", inverted ? "border-navy-foreground/25" : "border-border")}>
      {(["fi", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            "flex min-h-9 items-center gap-1 rounded-full px-2.5 transition-colors",
            lang === l ? "bg-water text-primary-foreground" : inverted ? "text-navy-foreground/80 hover:text-navy-foreground" : "text-muted-foreground hover:text-navy",
          )}
        >
          <span aria-hidden="true">{flags[l]}</span>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
