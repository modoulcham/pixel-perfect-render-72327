import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Dict, type Lang } from "./translations";
import { LANG_COOKIE, toLang, writeLang } from "./lang-cookie";

type Ctx = { lang: Lang; t: Dict; setLang: (l: Lang) => void };
const LanguageContext = createContext<Ctx | null>(null);

/** `initialLang` comes from the cookie (read in the root route) so server and client agree. */
export function LanguageProvider({ initialLang, children }: { initialLang: Lang; children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    writeLang(l);
  }, []);

  // One-time move of a choice saved before the cookie existed (it used localStorage).
  useEffect(() => {
    try {
      const legacy = toLang(localStorage.getItem(LANG_COOKIE));
      if (!legacy) return;
      localStorage.removeItem(LANG_COOKIE);
      if (!document.cookie.includes(`${LANG_COOKIE}=`)) setLang(legacy);
    } catch {
      // Storage can be blocked; the cookie is the source of truth anyway.
    }
  }, [setLang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    const t = translations[lang];
    document.title = t.seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.seo.description);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
