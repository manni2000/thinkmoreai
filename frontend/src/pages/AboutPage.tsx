import About from "@/components/About";
import TransformSection from "@/components/TransformSection";
import Contact from "@/components/Contact";
import AIChatbot from "@/components/AIChatbot";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="pt-20" />
        <About />
        <TransformSection />
        <Contact />
      </main>
      <AIChatbot />
    </div>
  );
};

export default AboutPage;
