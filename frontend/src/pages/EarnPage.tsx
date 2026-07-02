import PageSeo from "@/components/PageSeo";
import EarnWithUs from "@/components/EarnWithUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import DiscoveryCallButton from "@/components/DiscoveryCallButton";

const EarnPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSeo page="earn" />
      <main>
        <div className="pt-20" />
        <EarnWithUs />
        <FAQ />
        <Contact />
      </main>
      <DiscoveryCallButton link="https://cal.id/enquire.thinkmoreai" />
    </div>
  );
};

export default EarnPage;
