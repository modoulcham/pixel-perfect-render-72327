import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export function DropIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="dropg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--cyan)" />
          <stop offset="1" stopColor="var(--water)" />
        </linearGradient>
      </defs>
      <path d="M20 2C20 2 4 20 4 31a16 16 0 0 0 32 0C36 20 20 2 20 2Z" fill="url(#dropg)" />
      <path d="M12 32l8-7 8 7v8h-5v-5h-6v5h-5z" fill="white" />
    </svg>
  );
}

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  if (site.logoUrl) return <img src={site.logoUrl} alt={site.name} className={cn("h-10 w-auto", className)} />;
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <DropIcon className="h-10 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={cn("text-lg font-extrabold tracking-tight", inverted ? "text-navy-foreground" : "text-navy")}>
          MOMODOU'S
        </span>
        <span className={cn("text-[0.62rem] font-bold tracking-[0.18em]", inverted ? "text-cyan" : "text-water")}>
          PLUMBING SERVICE
        </span>
      </span>
    </span>
  );
}
