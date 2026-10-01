import PageSeo from "@/components/PageSeo";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { StudioCapabilities, StudioProcess, StudioCTA } from "@/components/StudioExperience";

export default function ServicesPage() {
  return <main>
    <PageSeo page="services" />
    <section className="studio-page-hero"><div className="studio-container"><span className="studio-kicker">SERVICES / END TO END</span><h1>From a hard problem<br/>to a working system.</h1><p>Applied AI systems, high-scale web and mobile platforms, mission-critical automation, and data intelligence. Select a focused capability or partner with us to solve complex architectural challenges.</p><div className="studio-page-hero__line"/></div></section>
    <StudioCapabilities />
    <StudioProcess />
    <FAQ />
    <StudioCTA />
    <Contact />
  </main>;
}
