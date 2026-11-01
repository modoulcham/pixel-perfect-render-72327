import { useLang } from "@/i18n/LanguageProvider";

/**
 * Menu entries shared by the header and footer. Rendered with the router's `Link`,
 * so moving between pages never reloads the app (a reload re-runs the language setup).
 */
export function useNavLinks() {
  const { t } = useLang();
  return [
    { to: "/", hash: "home", label: t.nav.home },
    { to: "/", hash: "services", label: t.nav.services },
    { to: "/gallery", label: t.nav.gallery },
    { to: "/", hash: "about", label: t.nav.about },
    { to: "/invest", label: t.invest.nav },
    { to: "/", hash: "contact", label: t.nav.contact },
  ] as const satisfies ReadonlyArray<{ to: "/" | "/gallery" | "/invest"; hash?: string; label: string }>;
}
