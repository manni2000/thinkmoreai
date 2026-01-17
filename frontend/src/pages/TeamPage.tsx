import Team from "@/components/Team";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import TransformSection from "@/components/TransformSection";
import Contact from "@/components/Contact";
import AIChatbot from "@/components/AIChatbot";
import DiscoveryCallButton from "@/components/DiscoveryCallButton";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="pt-20" />
        <Team />
        <TransformSection />
        <Contact />
      </main>
      <AIChatbot />
      <DiscoveryCallButton link="https://cal.id/enquire.thinkmoreai" />
    </div>
  );
};

export default TeamPage;
