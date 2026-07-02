import { Helmet } from "react-helmet-async";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seoConfig";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  type?: string;
  noindex?: boolean;
  /** Optional JSON-LD structured data to inject for this page. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const DEFAULT_DESCRIPTION =
  "AI-driven web development, mobile apps, automation, analytics, social media & video editing services, and SEO optimization. Transform your ideas into scalable solutions.";

const SEO: React.FC<SEOProps> = ({
  title = "ThinkmoreAI - AI Powered Digital Solutions & Business Services",
  description = DEFAULT_DESCRIPTION,
  keywords = "AI agency, AI solutions, web development, mobile app development, AI chatbot development, business automation, data analytics, SEO services, digital marketing, custom AI software development company in India",
  ogImage = DEFAULT_OG_IMAGE,
  ogUrl = `${SITE_URL}/`,
  canonical = `${SITE_URL}/`,
  type = "website",
  noindex = false,
  jsonLd,
}) => {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const jsonLdBlocks = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_NAME} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="distribution" content="global" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Per-page structured data */}
      {jsonLdBlocks.map((block, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
