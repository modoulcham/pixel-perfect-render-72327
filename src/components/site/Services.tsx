import { Bath, Droplets, Hammer, Waves, WashingMachine, Wrench } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { Reveal, SectionHeading } from "./Reveal";

const icons = [Waves, Droplets, Bath, WashingMachine, Hammer, Wrench];

export function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => {
            const Icon = icons[i]!;
            return (
              <Reveal key={s.t} delay={(i % 3) * 90}>
                <article className="card-lift group h-full rounded-2xl border bg-card p-7 shadow-soft">
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
        <Reveal className="mt-10 text-center">
          <p className="inline-block rounded-full bg-surface px-5 py-3 text-sm font-semibold text-navy">{t.services.more}</p>
        </Reveal>
      </div>
    </section>
  );
}
