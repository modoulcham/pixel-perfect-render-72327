import { createFileRoute } from "@tanstack/react-router";
import { ogLocales, translations } from "@/i18n/translations";
import { site } from "@/config/site";
import { shareImage } from "@/lib/work-photos";
import { Header } from "@/components/site/Header";
import { InvestHero, InvestSectors, InvestSteps } from "@/components/site/Invest";
import { Contact } from "@/components/site/Contact";
import { Footer, MobileBar } from "@/components/site/Footer";

const ogImage = shareImage(site.url);

export const Route = createFileRoute("/invest")({
  head: ({ match }) => {
    const seo = translations[match.context.lang].invest;
    return {
      meta: [
        { title: `${seo.eyebrow} – ${site.name}` },
        { name: "description", content: seo.subtitle },
        { property: "og:title", content: `${seo.eyebrow} – ${site.name}` },
        { property: "og:description", content: seo.subtitle },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: ogLocales[match.context.lang] },
        { name: "twitter:card", content: "summary_large_image" },
        ...(ogImage ? [{ property: "og:image", content: ogImage }] : []),
      ],
    };
  },
  component: InvestPage,
});

function InvestPage() {
  return (
    <>
      <Header />
      <main>
        <InvestHero />
        <InvestSectors />
        <InvestSteps />
        <Contact variant="invest" />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
