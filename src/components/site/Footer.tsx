import { MessageCircle, Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageProvider";
import { site } from "@/config/site";
import { Logo } from "./Logo";
import { LangSwitch } from "./LangSwitch";

export function Footer() {
  const { t } = useLang();
  const links = [["#home", t.nav.home], ["#services", t.nav.services], ["#gallery", t.nav.gallery], ["#about", t.nav.about], ["#contact", t.nav.contact]];
  return (
    <footer className="bg-navy pb-28 pt-16 text-navy-foreground md:pb-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <Logo inverted />
          <p className="mt-4 text-navy-foreground/70">{t.footer.tagline}</p>
          <div className="mt-5"><LangSwitch inverted /></div>
        </div>
        <div>
          <h3 className="mb-4 font-bold">{t.footer.links}</h3>
          <ul className="space-y-1">
            {links.map(([h, l]) => <li key={h}><a href={h} className="inline-flex min-h-9 items-center text-navy-foreground/75 hover:text-cyan">{l}</a></li>)}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold">{t.footer.contact}</h3>
          <ul className="space-y-2 text-navy-foreground/75">
            <li><a href={site.phoneHref} className="hover:text-cyan">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="break-all hover:text-cyan">{site.email}</a></li>
            <li>{site.city}, {site.region}</li>
            <li>{t.contact.info.id}: {site.businessId}</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-navy-foreground/10 px-4 pt-6 text-sm text-navy-foreground/60 sm:px-6">
        <p>{t.footer.privacy}</p>
        <p className="mt-2">© {new Date().getFullYear()} {site.name}. {t.footer.rights}</p>
      </div>
    </footer>
  );
}

export function MobileBar() {
  const { t } = useLang();
  return (
    <>
      <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-24 right-4 z-40 md:bottom-6 md:right-6">
        <Button asChild variant="whatsapp" size="icon" className="h-14 w-14"><span><MessageCircle className="!size-7" /></span></Button>
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t bg-background/95 p-3 backdrop-blur md:hidden">
        <Button asChild variant="navy" size="lg"><a href={site.phoneHref}><Phone /> {t.cta.callNumber}</a></Button>
        <Button asChild variant="hero" size="lg"><a href="#contact"><FileText /> {t.cta.quote}</a></Button>
      </div>
    </>
  );
}
