import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageProvider";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { LangSwitch } from "./LangSwitch";

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["#home", t.nav.home],
    ["#services", t.nav.services],
    ["#gallery", t.nav.gallery],
    ["#about", t.nav.about],
    ["#contact", t.nav.contact],
  ] as const;

  return (
    <header className={cn("sticky top-0 z-50 border-b transition-all", scrolled ? "border-border bg-background/90 shadow-soft backdrop-blur-lg" : "border-transparent bg-background")}>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#home" aria-label={site.name}><Logo /></a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="rounded-lg px-3 py-2 text-sm font-semibold text-navy/80 transition-colors hover:bg-accent hover:text-navy">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block"><LangSwitch /></div>
          <Button asChild variant="hero" className="hidden md:inline-flex">
            <a href={site.phoneHref}><Phone /> {t.cta.call}</a>
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? <X className="!size-6" /> : <Menu className="!size-6" />}
          </Button>
        </div>
      </div>
      <div className={cn("grid overflow-hidden transition-all duration-300 lg:hidden", open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]")}>
        <div className="min-h-0">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded-lg px-3 text-base font-semibold text-navy hover:bg-accent">
                {label}
              </a>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3">
              <LangSwitch />
              <Button asChild variant="hero"><a href={site.phoneHref}><Phone /> {t.cta.call}</a></Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
