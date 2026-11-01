import { ArrowRight, Clock, Handshake, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageProvider";
import { site } from "@/config/site";
import { featuredWorkPhoto } from "@/lib/work-photos";
import { Reveal, Wave } from "./Reveal";

const badgeIcons = [Sparkles, ShieldCheck, Clock, Handshake];

export function Hero() {
  const { t } = useLang();
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy">
      <img
        src={featuredWorkPhoto}
        alt=""
        width={1200}
        height={1600}
        fetchPriority="high"
        className="absolute inset-y-0 right-0 -z-10 h-full w-full object-cover object-[center_45%] lg:w-3/5 lg:[mask-image:linear-gradient(to_right,transparent,black_35%)]"
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 sm:pt-28 lg:pb-36 lg:pt-36">
        <Reveal className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-navy-foreground/20 bg-navy-foreground/10 px-4 py-1.5 text-sm font-semibold text-cyan backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan" /> {t.hero.eyebrow}
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.08] text-navy-foreground sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/80 sm:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="lg">
              <a href="/#contact">
                {t.cta.quote} <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href={site.phoneHref}>
                <Phone /> {t.cta.callNumber} {site.phone}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
      <div className="relative">
        <Wave className="text-background" />
      </div>
      <div className="bg-background">
        <div className="mx-auto -mt-2 grid max-w-7xl grid-cols-2 gap-3 px-4 pb-6 sm:px-6 lg:grid-cols-4">
          {t.hero.badges.map((b, i) => {
            const Icon = badgeIcons[i] ?? ShieldCheck;
            return (
              <Reveal
                key={b}
                delay={i * 80}
                className="flex items-center gap-3 rounded-2xl border bg-card p-4 shadow-soft"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-water">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-navy">{b}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
