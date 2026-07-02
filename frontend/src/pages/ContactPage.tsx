import PageSeo from "@/components/PageSeo";
import Contact from "@/components/Contact";
import DiscoveryCallButton from "@/components/DiscoveryCallButton";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSeo page="contact" />
      <main>
        <div className="pt-20" />
        <Contact />
      </main>
      <DiscoveryCallButton link="https://cal.id/enquire.thinkmoreai" />
    </div>
  );
};

export default ContactPage;
