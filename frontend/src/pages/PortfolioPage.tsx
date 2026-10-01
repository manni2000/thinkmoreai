import PageSeo from "@/components/PageSeo";
import Contact from "@/components/Contact";
import { StudioWork, StudioCTA } from "@/components/StudioExperience";

export default function PortfolioPage() {
  return <main>
    <PageSeo page="portfolio" />
    <section className="studio-page-hero"><div className="studio-container"><span className="studio-kicker">WORK / PORTFOLIO & CASE STUDIES</span><h1>Engineered with intent.<br/>Built for real impact.</h1><p>Explore our live concept prototypes, application architectures, and technical demonstrations across AI products, full-stack platforms, and data systems. Each preview demonstrates production-grade design and performance.</p><div className="studio-page-hero__line"/></div></section>
    <StudioWork all />
    <StudioCTA />
    <Contact />
  </main>;
}
