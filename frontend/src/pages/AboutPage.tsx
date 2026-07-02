import PageSeo from "@/components/PageSeo";
import About from "@/components/About";
import TransformSection from "@/components/TransformSection";
import Contact from "@/components/Contact";
import DiscoveryCallButton from "@/components/DiscoveryCallButton";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSeo page="about" />
      <main>
        <div className="pt-20" />
        <About />
        <TransformSection />
        <Contact />
      </main>
      <DiscoveryCallButton link="https://cal.id/enquire.thinkmoreai" />
    </div>
  );
};

export default AboutPage;
