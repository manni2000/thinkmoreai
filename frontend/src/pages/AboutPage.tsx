import About from "@/components/About";
import Contact from "@/components/Contact";
import AIChatbot from "@/components/AIChatbot";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="pt-20" />
        <About />
        <Contact />
      </main>
      <AIChatbot />
    </div>
  );
};

export default AboutPage;
