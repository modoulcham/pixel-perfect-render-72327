import { createFileRoute } from "@tanstack/react-router";
import { ogLocales, translations } from "@/i18n/translations";
import { shareImage } from "@/lib/work-photos";
import { site } from "@/config/site";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Documents, GalleryPreview } from "@/components/site/Gallery";
import { About, Partners, Why } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { InvestTeaser } from "@/components/site/Invest";
import { Footer, MobileBar } from "@/components/site/Footer";

const ogImage = shareImage(site.url);

export const Route = createFileRoute("/")({
  head: ({ match }) => {
    const seo = translations[match.context.lang].seo;
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: ogLocales[match.context.lang] },
        { property: "og:locale:alternate", content: "en_GB" },
        { property: "og:locale:alternate", content: "fr_FR" },
        { property: "og:locale:alternate", content: "ru_RU" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(ogImage ? [{ property: "og:image", content: ogImage }] : []),
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Plumber",
            name: site.name,
            telephone: site.phone,
            email: site.email,
            founder: site.owner,
            taxID: site.businessId,
            address: {
              "@type": "PostalAddress",
              addressLocality: site.city,
              addressRegion: site.region,
              addressCountry: site.country,
            },
            geo: { "@type": "GeoCoordinates", latitude: 60.4518, longitude: 22.2666 },
            areaServed: ["Turku", "Varsinais-Suomi", "Finland"],
          }),
        },
      ],
    };
  },
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <GalleryPreview />
        <Documents />
        <About />
        <Partners />
        <InvestTeaser />
        <Why />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
