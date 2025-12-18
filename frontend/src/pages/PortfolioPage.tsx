import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import AIChatbot from "@/components/AIChatbot";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="pt-20" />
        <Portfolio />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <AIChatbot />
    </div>
  );
};

export default PortfolioPage;
