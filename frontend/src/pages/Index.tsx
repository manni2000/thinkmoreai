import PageSeo from "@/components/PageSeo";
import Contact from "@/components/Contact";
import { StudioHero, StudioIntro, StudioCapabilities, StudioWork, StudioArchitecture, StudioProcess, StudioPrinciples, StudioCTA } from "@/components/StudioExperience";

export default function Index() {
  return <main>
    <PageSeo page="home" />
    <StudioHero />
    <StudioIntro />
    <StudioCapabilities />
    <StudioWork />
    <StudioArchitecture />
    <StudioProcess />
    <StudioPrinciples />
    <StudioCTA />
    <Contact />
  </main>;
}
