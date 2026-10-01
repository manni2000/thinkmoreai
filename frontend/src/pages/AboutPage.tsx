import { ArrowUpRight, Linkedin } from "lucide-react";
import PageSeo from "@/components/PageSeo";
import Contact from "@/components/Contact";
import { StudioArchitecture, StudioPrinciples, StudioProcess, StudioCTA } from "@/components/StudioExperience";

const founders = [
  {
    name: "Charan Kumar",
    role: "CEO & Founder",
    focus: "Commercial Strategy, Product Growth & Partnerships",
    bio: "Charan drives commercial strategy, product positioning, and venture growth at ThinkMoreAI. Combining deep expertise in market analytics, customer acquisition frameworks, and digital systems, he ensures every platform we engineer drives measurable business ROI.",
    image: "/charan-kumar.png",
    linkedin: "https://www.linkedin.com/in/bcharankumar/",
  },
  {
    name: "Manish Kumar",
    role: "CTO & Founder",
    focus: "Technical Architecture, Software Systems & Applied AI",
    bio: "Manish directs engineering architecture, applied AI research, and software delivery. Specializing in modern distributed systems, neural model integration, and scalable full-stack applications, he sets the technical standards and architectural rigor across all studio builds.",
    image: "/manish-kumar.png",
    linkedin: "https://www.linkedin.com/in/manish-kr-mandal/",
  },
] as const;

function Founders() {
  return <section className="studio-founders studio-section" aria-labelledby="founders-heading">
    <div className="studio-container">
      <div className="studio-founders__heading"><div><span className="studio-kicker studio-kicker--dark">THE PEOPLE BEHIND THE WORK / 01</span><h2 id="founders-heading">Two perspectives.<br/><em>One unified standard.</em></h2></div><p>ThinkMoreAI is founder-led, uniting commercial precision and technical depth at the exact same table.</p></div>
      <div className="studio-founders__grid">{founders.map((founder, index) => <article className="studio-founder" key={founder.name}>
        <div className="studio-founder__portrait studio-founder__portrait--full"><span className="studio-founder__index">0{index + 1} / LEADERSHIP</span><div className="studio-founder__halo" aria-hidden="true"/><img src={founder.image} alt={`Portrait of ${founder.name}`} loading="lazy"/><span className="studio-founder__corner" aria-hidden="true">T·MAI</span></div>
        <div className="studio-founder__details"><div><span className="studio-founder__role">{founder.role}</span><h3>{founder.name}</h3><p className="studio-founder__focus">{founder.focus}</p></div><a href={founder.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${founder.name} on LinkedIn`}><Linkedin size={18}/><ArrowUpRight size={14}/></a></div>
        <p className="studio-founder__bio">{founder.bio}</p>
      </article>)}</div>
    </div>
  </section>;
}

export default function AboutPage() {
  return <main>
    <PageSeo page="about" />
    <section className="studio-page-hero studio-about-hero"><div className="studio-container"><span className="studio-kicker">ABOUT / THINKMOREAI</span><h1>Product thinking.<br/>Engineering depth.<br/><em>Shared ownership.</em></h1><p>We are an AI product and digital engineering studio partnering with ambitious founders, scaling businesses, and enterprise teams. We translate complex technological capabilities into resilient, market-ready digital systems designed for high commercial performance and long-term evolution.</p><div className="studio-page-hero__line"/></div></section>
    <StudioPrinciples />
    <Founders />
    <StudioArchitecture />
    <StudioProcess />
    <StudioCTA />
    <Contact />
  </main>;
}
