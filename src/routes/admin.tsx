import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState, type FormEvent } from "react";
import type { Session } from "@supabase/supabase-js";
import { ArrowDown, ArrowUp, FileText, LogOut, Save, Trash2, Upload } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/site/Logo";
import { categories, translations } from "@/i18n/translations";
import { fetchMedia, MEDIA_BUCKET, type MediaItem } from "@/lib/media";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Hallinta – Momodou's Plumbing Service" },
      { name: "description", content: "Kuvien ja asiakirjojen hallinta." },
      { property: "og:title", content: "Hallinta – Momodou's Plumbing Service" },
      { property: "og:description", content: "Kuvien ja asiakirjojen hallinta." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

const catLabels = translations.fi.gallery.cats;

function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) return setIsAdmin(null);
    supabase.rpc("has_role", { _user_id: session.user.id, _role: "admin" }).then(({ data }) => setIsAdmin(!!data));
  }, [session]);

  return (
    <div className="min-h-screen bg-surface">
      <header className="border-b bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/"><Logo /></Link>
          {session && <Button variant="outline" onClick={() => supabase.auth.signOut()}><LogOut /> Kirjaudu ulos</Button>}
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-10">
        {!ready ? null : !session ? <AuthForm /> : isAdmin === false ? (
          <p className="rounded-2xl bg-card p-8 text-center shadow-soft">Tällä tilillä ei ole ylläpito-oikeuksia.</p>
        ) : isAdmin ? <Manager /> : null}
      </main>
    </div>
  );
}

function AuthForm() {
  const [mode, setMode] = useState<"in" | "up">("in");
  const [busy, setBusy] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email"));
    const password = String(fd.get("password"));
    setBusy(true);
    const { error } =
      mode === "in"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/admin` } });
    setBusy(false);
    if (error) toast.error(error.message);
    else if (mode === "up") toast.success("Tarkista sähköpostisi ja vahvista tili.");
  }
  return (
    <form onSubmit={submit} className="mx-auto max-w-sm space-y-4 rounded-3xl bg-card p-8 shadow-soft">
      <h1 className="text-2xl font-extrabold text-navy">{mode === "in" ? "Ylläpito – kirjaudu" : "Luo ylläpitotili"}</h1>
      <div><Label htmlFor="email">Sähköposti</Label><Input id="email" name="email" type="email" required className="mt-2" /></div>
      <div><Label htmlFor="password">Salasana</Label><Input id="password" name="password" type="password" required minLength={8} className="mt-2" /></div>
      <Button type="submit" variant="hero" className="w-full" disabled={busy}>{mode === "in" ? "Kirjaudu" : "Luo tili"}</Button>
      <button type="button" className="w-full text-sm text-water hover:underline" onClick={() => setMode(mode === "in" ? "up" : "in")}>
        {mode === "in" ? "Ensimmäinen kerta? Luo tili" : "Onko sinulla jo tili? Kirjaudu"}
      </button>
      <p className="text-xs text-muted-foreground">Ensimmäisenä luotu tili saa ylläpito-oikeudet.</p>
    </form>
  );
}

function Manager() {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [uploading, setUploading] = useState(false);
  const load = useCallback(() => fetchMedia().then(setItems), []);
  useEffect(() => { load(); }, [load]);

  async function upload(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const files = (fd.getAll("files") as File[]).filter((f) => f.size > 0);
    if (!files.length) { toast.error("Valitse tiedosto"); return; }
    setUploading(true);
    const kind = String(fd.get("kind"));
    const maxOrder = items.reduce((m, i) => Math.max(m, i.sort_order), 0);
    for (const [i, file] of files.entries()) {
      const path = `${kind}/${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
      const up = await supabase.storage.from(MEDIA_BUCKET).upload(path, file, { contentType: file.type });
      if (up.error) { toast.error(up.error.message); continue; }
      const { error } = await supabase.from("media_items").insert({
        kind, file_path: path, mime_type: file.type,
        caption_fi: String(fd.get("caption_fi") || ""), caption_en: String(fd.get("caption_en") || ""),
        category: String(fd.get("category")), sort_order: maxOrder + i + 1,
      });
      if (error) toast.error(error.message);
    }
    setUploading(false);
    form.reset();
    toast.success("Ladattu");
    load();
  }

  async function remove(item: MediaItem) {
    if (!confirm("Poistetaanko?")) return;
    await supabase.storage.from(MEDIA_BUCKET).remove([item.file_path]);
    await supabase.from("media_items").delete().eq("id", item.id);
    load();
  }

  async function move(list: MediaItem[], idx: number, dir: -1 | 1) {
    const a = list[idx]!, b = list[idx + dir];
    if (!b) return;
    const ao = a.sort_order === b.sort_order ? b.sort_order + dir : b.sort_order;
    await Promise.all([
      supabase.from("media_items").update({ sort_order: ao }).eq("id", a.id),
      supabase.from("media_items").update({ sort_order: a.sort_order }).eq("id", b.id),
    ]);
    load();
  }

  async function save(item: MediaItem, patch: Partial<Omit<MediaItem, "url">>) {
    const { error } = await supabase.from("media_items").update(patch).eq("id", item.id);
    if (error) toast.error(error.message); else { toast.success("Tallennettu"); load(); }
  }

  const photos = items.filter((i) => i.kind === "photo");
  const docs = items.filter((i) => i.kind === "document");

  return (
    <div className="space-y-10">
      <form onSubmit={upload} className="grid gap-4 rounded-3xl bg-card p-6 shadow-soft sm:grid-cols-2">
        <h2 className="text-xl font-extrabold text-navy sm:col-span-2">Lisää kuvia tai asiakirjoja</h2>
        <div><Label>Tyyppi</Label>
          <select name="kind" className="mt-2 h-11 w-full rounded-md border bg-background px-3">
            <option value="photo">Työkuva (galleria)</option>
            <option value="document">Todistus / asiakirja</option>
          </select>
        </div>
        <div><Label>Kategoria (kuville)</Label>
          <select name="category" className="mt-2 h-11 w-full rounded-md border bg-background px-3">
            {categories.map((c) => <option key={c} value={c}>{catLabels[c]}</option>)}
          </select>
        </div>
        <div><Label>Kuvateksti (FI)</Label><Input name="caption_fi" className="mt-2" /></div>
        <div><Label>Caption (EN)</Label><Input name="caption_en" className="mt-2" /></div>
        <div className="sm:col-span-2"><Label>Tiedostot (kuvat tai PDF)</Label><Input name="files" type="file" multiple accept="image/*,application/pdf" className="mt-2 h-auto py-2" /></div>
        <Button type="submit" variant="hero" disabled={uploading} className="sm:w-fit"><Upload /> {uploading ? "Ladataan…" : "Lataa"}</Button>
      </form>
      <ItemList title={`Työkuvat (${photos.length})`} list={photos} move={move} remove={remove} save={save} />
      <ItemList title={`Asiakirjat (${docs.length})`} list={docs} move={move} remove={remove} save={save} />
    </div>
  );
}

function ItemList({ title, list, move, remove, save }: {
  title: string; list: MediaItem[];
  move: (l: MediaItem[], i: number, d: -1 | 1) => void; remove: (i: MediaItem) => void; save: (i: MediaItem, p: Partial<Omit<MediaItem, "url">>) => void;
}) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-extrabold text-navy">{title}</h2>
      {list.length === 0 && <p className="text-muted-foreground">Ei vielä sisältöä. Sivustolla näytetään esimerkkikuvat siihen asti.</p>}
      <div className="grid gap-4 md:grid-cols-2">
        {list.map((item, idx) => <Row key={item.id} item={item} idx={idx} list={list} move={move} remove={remove} save={save} />)}
      </div>
    </section>
  );
}

function Row({ item, idx, list, move, remove, save }: {
  item: MediaItem; idx: number; list: MediaItem[];
  move: (l: MediaItem[], i: number, d: -1 | 1) => void; remove: (i: MediaItem) => void; save: (i: MediaItem, p: Partial<Omit<MediaItem, "url">>) => void;
}) {
  const [fi, setFi] = useState(item.caption_fi);
  const [en, setEn] = useState(item.caption_en);
  const [cat, setCat] = useState(item.category);
  const isImg = item.mime_type?.startsWith("image/");
  return (
    <div className="flex gap-4 rounded-2xl bg-card p-4 shadow-soft">
      <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-surface">
        {isImg ? <img src={item.url} alt="" className="h-full w-full object-cover" /> : <FileText className="h-10 w-10 text-water" />}
      </div>
      <div className="min-w-0 flex-1 space-y-2">
        <Input value={fi} onChange={(e) => setFi(e.target.value)} placeholder="Kuvateksti FI" className="h-9" />
        <Input value={en} onChange={(e) => setEn(e.target.value)} placeholder="Caption EN" className="h-9" />
        {item.kind === "photo" && (
          <select value={cat} onChange={(e) => setCat(e.target.value)} className="h-9 w-full rounded-md border bg-background px-2 text-sm">
            {categories.map((c) => <option key={c} value={c}>{catLabels[c]}</option>)}
          </select>
        )}
        <div className="flex flex-wrap gap-1">
          <Button size="sm" variant="navy" onClick={() => save(item, { caption_fi: fi, caption_en: en, category: cat })}><Save /> Tallenna</Button>
          <Button size="sm" variant="outline" aria-label="Ylös" disabled={idx === 0} onClick={() => move(list, idx, -1)}><ArrowUp /></Button>
          <Button size="sm" variant="outline" aria-label="Alas" disabled={idx === list.length - 1} onClick={() => move(list, idx, 1)}><ArrowDown /></Button>
          <Button size="sm" variant="destructive" aria-label="Poista" onClick={() => remove(item)}><Trash2 /></Button>
        </div>
      </div>
    </div>
  );
}
