import { Check, ChevronDown, Globe } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { languageNames, languages } from "@/i18n/translations";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LangSwitch({ inverted }: { inverted?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        aria-label={`Language / Kieli / Sprache: ${languageNames[lang]}`}
        className={cn(
          "inline-flex min-h-10 items-center gap-1.5 rounded-full border px-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          inverted
            ? "border-navy-foreground/25 text-navy-foreground hover:bg-navy-foreground/10"
            : "border-border text-navy hover:bg-accent",
        )}
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        {lang.toUpperCase()}
        <ChevronDown className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40 rounded-xl p-1.5">
        {languages.map((l) => (
          <DropdownMenuItem
            key={l}
            lang={l}
            onSelect={() => setLang(l)}
            className={cn(
              "flex min-h-10 cursor-pointer items-center justify-between gap-4 rounded-lg px-3 text-sm",
              lang === l ? "font-semibold text-navy" : "text-muted-foreground",
            )}
          >
            {languageNames[l]}
            {lang === l && <Check className="h-4 w-4 text-water" aria-hidden="true" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
