import { useEffect, useRef, useState } from "react";
import { BadgeCheck, Building2, CheckCircle2, Clock, Handshake, Home, Leaf, MapPin, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageProvider";
import { site } from "@/config/site";
import g1 from "@/assets/g1.jpg";
import { Reveal, SectionHeading, Wave } from "./Reveal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (!e) return;
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / 1200);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const statIcons = [BadgeCheck, MapPin, Users, Clock];

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <img src={g1} alt={t.about.title} loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift sm:aspect-[4/3] lg:aspect-[4/5]" />
          <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-card p-5 shadow-lift sm:left-auto sm:right-6 sm:w-72">
            <p className="font-bold text-navy">{site.owner}</p>
            <p className="text-sm text-muted-foreground">{t.about.role}</p>
          </div>
        </Reveal>
        <Reveal delay={100} className="pt-6 lg:pt-0">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-water">{t.about.eyebrow}</p>
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">{t.about.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t.about.p1}</p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{t.about.p2}</p>
          <div className="mt-10 grid grid-cols-2 gap-4">
            {t.about.stats.map((s, i) => {
              const Icon = statIcons[i]!;
              return (
                <div key={i} className="rounded-2xl border bg-card p-5 shadow-soft">
                  <Icon className="mb-3 h-6 w-6 text-water" />
                  <p className="text-2xl font-extrabold text-navy sm:text-3xl">
                    {"v" in s && s.v !== undefined ? <Counter to={s.v} suffix={s.suffix} /> : s.text}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Partners() {
  const { t } = useLang();
  return (
    <section className="relative bg-navy-gradient">
      <Wave className="text-surface" flip />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan">{t.partners.eyebrow}</p>
          <h2 className="text-3xl font-extrabold text-navy-foreground sm:text-4xl">{t.partners.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-foreground/80">{t.partners.text}</p>
          <Button asChild variant="hero" size="lg" className="mt-8"><a href="#contact"><Handshake /> {t.partners.cta}</a></Button>
        </Reveal>
        <Reveal delay={120} className="grid gap-3">
          {t.partners.points.map((p, i) => {
            const Icon = [Building2, Clock, Handshake][i]!;
            return (
              <div key={p} className="flex items-center gap-4 rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-5 backdrop-blur">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-water-gradient text-primary-foreground"><Icon className="h-5 w-5" /></span>
                <span className="text-lg font-semibold text-navy-foreground">{p}</span>
              </div>
            );
          })}
        </Reveal>
      </div>
      <Wave className="text-background" />
    </section>
  );
}

const whyIcons = [ShieldCheck, CheckCircle2, Clock, Home, Leaf];

export function Why() {
  const { t } = useLang();
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.why.items.map((w, i) => {
            const Icon = whyIcons[i]!;
            return (
              <Reveal key={w.t} delay={i * 70}>
                <div className="card-lift h-full rounded-2xl border bg-card p-6 text-center shadow-soft">
                  <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-water"><Icon className="h-6 w-6" /></span>
                  <h3 className="font-bold text-navy">{w.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
