import Services from "@/components/Services";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import AIChatbot from "@/components/AIChatbot";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="pt-20" />
        <Services />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <AIChatbot />
    </div>
  );
};

export default ServicesPage;
