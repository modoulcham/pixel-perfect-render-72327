import { createFileRoute } from "@tanstack/react-router";
import { translations } from "@/i18n/translations";
import { site } from "@/config/site";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { GalleryAndDocs } from "@/components/site/Gallery";
import { About, Partners, Why } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer, MobileBar } from "@/components/site/Footer";

const seo = translations.fi.seo;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fi_FI" },
      { property: "og:locale:alternate", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
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
          address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: site.region, addressCountry: site.country },
          geo: { "@type": "GeoCoordinates", latitude: 60.4518, longitude: 22.2666 },
          areaServed: ["Turku", "Varsinais-Suomi"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <GalleryAndDocs />
        <About />
        <Partners />
        <Why />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
