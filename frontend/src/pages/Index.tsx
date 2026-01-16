import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
// import Technologies from "@/components/Technologies";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import TransformSection from "@/components/TransformSection";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import AIChatbot from "@/components/AIChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <About />
        <Services />
        {/* <Technologies /> */}
        <Process />
        <Portfolio />
        <TransformSection />
        <Team />
        <Testimonials />
        <WhyChooseUs />
        <FAQ />
        <Contact />
      </main>
      <AIChatbot />
    </div>
  );
};

export default Index;
