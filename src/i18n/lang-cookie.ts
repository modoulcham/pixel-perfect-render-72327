import { createIsomorphicFn } from "@tanstack/react-start";
import { getCookie } from "@tanstack/react-start/server";
import { languages, type Lang } from "./translations";

/** The language lives in a cookie so the server can render it on the first paint. */
export const LANG_COOKIE = "mps-lang";
export const DEFAULT_LANG: Lang = "fi";

export const toLang = (value: string | null | undefined): Lang | null =>
  languages.includes(value as Lang) ? (value as Lang) : null;

const readCookie = createIsomorphicFn()
  .server(() => getCookie(LANG_COOKIE))
  .client(() => document.cookie.match(new RegExp(`(?:^|;\\s*)${LANG_COOKIE}=([^;]*)`))?.[1]);

/** The visitor's saved language, on the server during SSR and in the browser after. */
export const readLang = (): Lang => toLang(readCookie()) ?? DEFAULT_LANG;

export function writeLang(lang: Lang) {
  document.cookie = `${LANG_COOKIE}=${lang}; path=/; max-age=31536000; samesite=lax`;
}
