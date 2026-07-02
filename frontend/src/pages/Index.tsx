import PageSeo from "@/components/PageSeo";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
// import Technologies from "@/components/Technologies";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import TransformSection from "@/components/TransformSection";
import EarnWithUs from "@/components/EarnWithUs";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSeo page="home" />
      <main>
        <Hero />
        <About />
        <Services />
        {/* <Technologies /> */}
        <Process />
        <Portfolio />
        <TransformSection />
        <EarnWithUs />
        <Team />
        <Testimonials />
        <WhyChooseUs />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
