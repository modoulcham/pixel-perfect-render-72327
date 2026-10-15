import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, inverted }: { eyebrow: string; title: string; subtitle?: string; inverted?: boolean }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className={cn("mb-3 text-sm font-bold uppercase tracking-[0.18em]", inverted ? "text-cyan" : "text-water")}>{eyebrow}</p>
      <h2 className={cn("text-3xl font-extrabold sm:text-4xl", inverted ? "text-navy-foreground" : "text-navy")}>{title}</h2>
      {subtitle && <p className={cn("mt-4 text-lg", inverted ? "text-navy-foreground/75" : "text-muted-foreground")}>{subtitle}</p>}
    </Reveal>
  );
}

export function Wave({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className={cn("block h-10 w-full sm:h-14", flip && "rotate-180", className)} aria-hidden="true">
      <path d="M0 30C240 60 480 0 720 30s480 30 720 0v30H0z" fill="currentColor" />
    </svg>
  );
}
