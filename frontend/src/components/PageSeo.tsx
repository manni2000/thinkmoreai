import SEO from "@/components/SEO";
import {
  SEO_PAGES,
  SITE_NAME,
  SITE_URL,
  buildKeywords,
  canonicalFor,
} from "@/lib/seoConfig";

type PageKey = keyof typeof SEO_PAGES;

interface PageSeoProps {
  page: PageKey;
  /** Mark the page as noindex (e.g. legal / utility pages). */
  noindex?: boolean;
}

/**
 * Emits unique per-page <title>, meta description, keywords, canonical URL,
 * Open Graph / Twitter tags and a BreadcrumbList JSON-LD block, driven by the
 * central SEO config. Drop <PageSeo page="services" /> at the top of any page.
 */
const PageSeo: React.FC<PageSeoProps> = ({ page, noindex = false }) => {
  const config = SEO_PAGES[page];
  const canonical = canonicalFor(config.path);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      ...(config.path === "/"
        ? []
        : [
            {
              "@type": "ListItem",
              position: 2,
              name: config.title.split(" | ")[0].split(" - ")[0],
              item: canonical,
            },
          ]),
    ],
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: config.title,
    description: config.description,
    url: canonical,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
  };

  return (
    <SEO
      title={config.title}
      description={config.description}
      keywords={buildKeywords(config)}
      canonical={canonical}
      ogUrl={canonical}
      noindex={noindex}
      jsonLd={[webPage, breadcrumb]}
    />
  );
};

export default PageSeo;
