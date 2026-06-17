import Services from "@/components/Services";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import TransformSection from "@/components/TransformSection";
import Contact from "@/components/Contact";
import DiscoveryCallButton from "@/components/DiscoveryCallButton";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="pt-20" />
        <Services />
        <TransformSection />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <DiscoveryCallButton link="https://cal.id/enquire.thinkmoreai" />
    </div>
  );
};

export default ServicesPage;
