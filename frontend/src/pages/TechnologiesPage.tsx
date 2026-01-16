import Technologies from "@/components/Technologies";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import TransformSection from "@/components/TransformSection";
import Contact from "@/components/Contact";
import AIChatbot from "@/components/AIChatbot";

const TechnologiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="pt-20" />
        <Technologies />
        <Process />
        <FAQ />
        <TransformSection />
        <Contact />
      </main>
      <AIChatbot />
    </div>
  );
};

export default TechnologiesPage;
