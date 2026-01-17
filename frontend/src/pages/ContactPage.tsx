import Contact from "@/components/Contact";
import AIChatbot from "@/components/AIChatbot";
import DiscoveryCallButton from "@/components/DiscoveryCallButton";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="pt-20" />
        <Contact />
      </main>
      <AIChatbot />
      <DiscoveryCallButton link="https://cal.id/enquire.thinkmoreai" />
    </div>
  );
};

export default ContactPage;
