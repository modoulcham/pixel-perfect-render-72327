import { useLang } from "@/i18n/LanguageProvider";

/**
 * Menu entries shared by the header and footer. `link` is spread onto the router's `Link`,
 * so moving between pages never reloads the app (a reload re-runs the language setup).
 */
export function useNavLinks() {
  const { t } = useLang();
  return [
    { key: "home", label: t.nav.home, link: { to: "/", hash: "home" } },
    { key: "services", label: t.nav.services, link: { to: "/", hash: "services" } },
    { key: "gallery", label: t.nav.gallery, link: { to: "/gallery" } },
    { key: "about", label: t.nav.about, link: { to: "/", hash: "about" } },
    { key: "invest", label: t.invest.nav, link: { to: "/invest" } },
    { key: "contact", label: t.nav.contact, link: { to: "/", hash: "contact" } },
  ] as const;
}
