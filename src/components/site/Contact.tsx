import { useState, type FormEvent } from "react";
import { z } from "zod";
import { BadgeCheck, CheckCircle2, Mail, MapPin, Phone, Send, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLang } from "@/i18n/LanguageProvider";
import { site } from "@/config/site";
import { supabase } from "@/integrations/supabase/client";
import { Reveal, SectionHeading } from "./Reveal";

type Errors = Partial<Record<"name" | "phone" | "email" | "service" | "message" | "image", string>>;

export function Contact() {
  const { t } = useLang();
  const f = t.contact.form;
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [fileName, setFileName] = useState("");

  const schema = z.object({
    name: z.string().trim().min(2, t.contact.v.name).max(100),
    phone: z.string().trim().regex(/^\+?[0-9\s-]{6,20}$/, t.contact.v.phone),
    email: z.string().trim().email(t.contact.v.email).max(255),
    service: z.string().min(1, t.contact.v.service),
    message: z.string().trim().min(10, t.contact.v.message).max(2000),
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const file = fd.get("image") as File | null;
    const parsed = schema.safeParse(Object.fromEntries(fd));
    const errs: Errors = {};
    if (!parsed.success) parsed.error.issues.forEach((i) => (errs[i.path[0] as keyof Errors] = i.message));
    if (file && file.size > 10 * 1024 * 1024) errs.image = t.contact.v.image;
    setErrors(errs);
    if (!parsed.success || errs.image) return;

    setStatus("sending");
    try {
      let image_path: string | null = null;
      if (file && file.size > 0) {
        const path = `${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
        const up = await supabase.storage.from("quote-uploads").upload(path, file);
        if (!up.error) image_path = path;
      }
      const { error } = await supabase.from("quote_requests").insert({ ...parsed.data, image_path });
      if (error) throw error;
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const services = [...t.services.items.map((s) => s.t), f.other];
  const err = (k: keyof Errors) => errors[k] && <p id={`${k}-err`} className="mt-1.5 text-sm font-medium text-destructive">{errors[k]}</p>;

  return (
    <section id="contact" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} />
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="rounded-3xl border bg-card p-6 shadow-soft sm:p-10">
            {status === "done" ? (
              <div className="flex flex-col items-center py-12 text-center" role="status">
                <CheckCircle2 className="mb-4 h-16 w-16 text-water" />
                <p className="max-w-sm text-lg font-semibold text-navy">{f.success}</p>
                <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>{f.again}</Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">{f.name} *</Label>
                  <Input id="name" name="name" autoComplete="name" className="mt-2 h-12" aria-invalid={!!errors.name} aria-describedby="name-err" />
                  {err("name")}
                </div>
                <div>
                  <Label htmlFor="phone">{f.phone} *</Label>
                  <Input id="phone" name="phone" type="tel" autoComplete="tel" className="mt-2 h-12" aria-invalid={!!errors.phone} aria-describedby="phone-err" />
                  {err("phone")}
                </div>
                <div>
                  <Label htmlFor="email">{f.email} *</Label>
                  <Input id="email" name="email" type="email" autoComplete="email" className="mt-2 h-12" aria-invalid={!!errors.email} aria-describedby="email-err" />
                  {err("email")}
                </div>
                <div>
                  <Label htmlFor="service">{f.service} *</Label>
                  <select id="service" name="service" defaultValue="" className="mt-2 h-12 w-full rounded-md border border-input bg-background px-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-invalid={!!errors.service} aria-describedby="service-err">
                    <option value="" disabled>{f.servicePlaceholder}</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {err("service")}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message">{f.message} *</Label>
                  <Textarea id="message" name="message" rows={5} placeholder={f.messagePlaceholder} className="mt-2" aria-invalid={!!errors.message} aria-describedby="message-err" />
                  {err("message")}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="image" className="flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed px-4 py-3 text-sm font-semibold text-navy transition-colors hover:border-water hover:bg-accent">
                    <Upload className="h-5 w-5 text-water" />
                    <span className="truncate">{fileName || f.image}</span>
                  </label>
                  <input id="image" name="image" type="file" accept="image/*" className="sr-only" onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} />
                  {err("image")}
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto" disabled={status === "sending"}>
                    <Send /> {status === "sending" ? f.sending : f.submit}
                  </Button>
                  {status === "error" && <p className="mt-3 text-sm font-medium text-destructive" role="alert">{f.error}</p>}
                </div>
              </form>
            )}
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-5">
            <div className="rounded-3xl bg-navy-gradient p-7 text-navy-foreground shadow-lift">
              <ul className="space-y-5">
                <InfoRow icon={Phone} label={t.contact.info.phone}><a href={site.phoneHref} className="hover:text-cyan">{site.phone}</a></InfoRow>
                <InfoRow icon={Mail} label={t.contact.info.email}><a href={`mailto:${site.email}`} className="break-all hover:text-cyan">{site.email}</a></InfoRow>
                <InfoRow icon={MapPin} label={t.contact.info.location}>{site.city}, Finland</InfoRow>
                <InfoRow icon={MapPin} label={t.contact.info.area}>{t.contact.info.areaValue}</InfoRow>
                <InfoRow icon={BadgeCheck} label={t.contact.info.id}>{site.businessId}</InfoRow>
              </ul>
            </div>
            <iframe title="Turku map" src={site.mapEmbed} loading="lazy" className="h-64 w-full flex-1 rounded-3xl border shadow-soft lg:min-h-64" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, children }: { icon: typeof Phone; label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-foreground/10 text-cyan"><Icon className="h-5 w-5" /></span>
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-wider text-navy-foreground/60">{label}</p>
        <p className="font-semibold">{children}</p>
      </div>
    </li>
  );
}
