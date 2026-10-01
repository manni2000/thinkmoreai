import PageSeo from "@/components/PageSeo";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSeo page="contact" />
      <main>
        <div className="pt-20" />
        <Contact standalone />
      </main>
    </div>
  );
};

export default ContactPage;
