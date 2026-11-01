import { createFileRoute } from "@tanstack/react-router";
import { translations } from "@/i18n/translations";
import { Header } from "@/components/site/Header";
import { Gallery } from "@/components/site/Gallery";
import { Footer, MobileBar } from "@/components/site/Footer";

const seo = translations.fi.gallery;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: seo.pageTitle },
      { name: "description", content: seo.pageDescription },
      { property: "og:title", content: seo.pageTitle },
      { property: "og:description", content: seo.pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fi_FI" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <Gallery />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
