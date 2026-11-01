import { Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, Sprout, Sun, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageProvider";
import { Reveal, SectionHeading, Wave } from "./Reveal";

/** Same order as `t.invest.sectors`: energy, electricity, plumbing & water, agriculture. */
const sectorIcons = [Sun, Zap, Droplets, Sprout];

export function InvestHero() {
  const { t } = useLang();
  return (
    <section className="relative bg-navy-gradient">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28">
        <Reveal className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-navy-foreground/20 bg-navy-foreground/10 px-4 py-1.5 text-sm font-semibold text-cyan backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan" /> {t.invest.eyebrow}
          </p>
          <h1 className="text-3xl font-extrabold leading-[1.1] break-words hyphens-auto text-navy-foreground sm:text-5xl">
            {t.invest.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/80 sm:text-xl">
            {t.invest.subtitle}
          </p>
          <Button asChild variant="hero" size="lg" className="mt-9">
            <a href="#invest-contact">
              {t.invest.cta} <ArrowRight />
            </a>
          </Button>
        </Reveal>
      </div>
      <Wave className="text-background" />
    </section>
  );
}

export function InvestSectors() {
  const { t } = useLang();
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.invest.eyebrow} title={t.invest.sectorsTitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.invest.sectors.map((s, i) => {
            const Icon = sectorIcons[i] ?? Sun;
            return (
              <Reveal key={s.t} delay={i * 80}>
                <article className="card-lift h-full rounded-2xl border bg-card p-7 shadow-soft">
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-water-gradient text-primary-foreground shadow-lift">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="text-xl font-bold text-navy">{s.t}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{s.d}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function InvestSteps() {
  const { t } = useLang();
  return (
    <section className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.invest.eyebrow} title={t.invest.stepsTitle} />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.invest.steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>
              <li className="h-full rounded-2xl border bg-surface p-6">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-navy-foreground">
                  {i + 1}
                </span>
                <h3 className="font-bold text-navy">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Home-page band pointing to the /invest page. */
export function InvestTeaser() {
  const { t } = useLang();
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="grid items-center gap-8 rounded-3xl border bg-surface p-8 shadow-soft sm:p-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-water">
              {t.invest.teaser.eyebrow}
            </p>
            <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
              {t.invest.teaser.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {t.invest.teaser.text}
            </p>
            <Button asChild variant="navy" size="lg" className="mt-7">
              <Link to="/invest">
                {t.invest.teaser.cta} <ArrowRight />
              </Link>
            </Button>
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {t.invest.sectors.map((s, i) => {
              const Icon = sectorIcons[i] ?? Sun;
              return (
                <li key={s.t} className="flex items-center gap-3 rounded-2xl border bg-card p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-water">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-navy">{s.t}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
