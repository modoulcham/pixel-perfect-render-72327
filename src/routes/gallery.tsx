import { createFileRoute } from "@tanstack/react-router";
import { ogLocales, translations } from "@/i18n/translations";
import { shareImage } from "@/lib/work-photos";
import { site } from "@/config/site";
import { Header } from "@/components/site/Header";
import { Gallery } from "@/components/site/Gallery";
import { Footer, MobileBar } from "@/components/site/Footer";

const ogImage = shareImage(site.url);

export const Route = createFileRoute("/gallery")({
  head: ({ match }) => {
    const seo = translations[match.context.lang].gallery;
    return {
      meta: [
        { title: seo.pageTitle },
        { name: "description", content: seo.pageDescription },
        { property: "og:title", content: seo.pageTitle },
        { property: "og:description", content: seo.pageDescription },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: ogLocales[match.context.lang] },
        { name: "twitter:card", content: "summary_large_image" },
        ...(ogImage ? [{ property: "og:image", content: ogImage }] : []),
      ],
    };
  },
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
