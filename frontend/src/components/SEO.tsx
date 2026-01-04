import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  type?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "ThinkmoreAI - AI Powered Digital Solutions & Business Services",
  description="AI-driven web development, webite, mobile apps, automation, analytics, social media & video editing services,and SEO Optimization. Transform your ideas into scalable solutions.",
  keywords = "website development, web & mobile app development, AI Chatbots, data analytics, research reports, social media management, content writing, video editing, custom AI solutions, income tax return, GST services, accounting bookkeeping, tax planning, company incorporation, ROC compliance, TDS TCS compliance, project reports, loan documentation, notice handling, tax assessments, chartered accountant services, artificial intelligence, machine learning, business solutions, digital transformation, enterprise development, iOS development, Android development, web development, automation solutions, predictive analytics, market research, digital marketing, SEO services, social media marketing, content marketing, video production, videoediting, corporate videos, brand marketing, online marketing, marketing automation, lead generation, social media management, video editing, promotional videos, marketing strategy, digital advertising, content creation, tax consultancy, financial services, business compliance",
  ogImage = "https://www.thinkmoreai.com/thinkmoreai.webp",
  ogUrl = "https://www.thinkmoreai.com/",
  canonical = "https://www.thinkmoreai.com/",
  type = "website",
  noindex = false
}) => {
  const fullTitle = title.includes('ThinkmoreAI') ? title : `${title} | ThinkmoreAI`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="ThinkmoreAI" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
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
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content="ThinkmoreAI" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="msvalidate.01" content="" />
      <meta name="google-site-verification" content="" />
      <meta name="yandex-verification" content="" />
    </Helmet>
  );
};

export default SEO;
