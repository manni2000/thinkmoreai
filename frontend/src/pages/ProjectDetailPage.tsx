import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "@/components/SEO";
import Contact from "@/components/Contact";
import { StudioCTA } from "@/components/StudioExperience";
import { projects } from "@/lib/studioContent";
import { canonicalFor } from "@/lib/seoConfig";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find(item => item.slug === slug);
  if (!project) return <Navigate to="/portfolio" replace />;
  const canonical = canonicalFor(`/portfolio/${project.slug}`);
  return <main>
    <SEO title={`${project.title} ${project.label} | ThinkMoreAI`} description={project.built} canonical={canonical} ogUrl={canonical} />
    <section className="studio-page-hero"><div className="studio-container"><span className="studio-kicker">WORK / {project.label.toUpperCase()}</span><h1>{project.title}</h1><p>{project.challenge}</p><div className="studio-page-hero__line"/></div></section>
    <section className="studio-case studio-section"><div className="studio-container"><div className="studio-case__image"><img src={project.image} alt={`${project.title} preview`} /></div><div className="studio-case__grid" style={{marginTop:70}}><div className="studio-case__block"><span>01 / THE BRIEF</span><h2>{project.challenge}</h2><p>This {project.label.toLowerCase()} demonstrates ThinkMoreAI's product architecture, interface fidelity, and engineering standards. Explore the problem framing, technical decisions, and user journeys below.</p></div><div className="studio-case__block"><span>02 / WHAT WE EXPLORED</span><h2>{project.built}</h2><div className="studio-case__features">{project.features.map(item=><span key={item}>{item}</span>)}</div></div><div className="studio-case__block"><span>03 / TOOLS & DISCIPLINES</span><h2>Choices shaped by the brief.</h2><div className="studio-case__features">{project.technology.map(item=><span key={item}>{item}</span>)}</div></div><div className="studio-case__block"><span>04 / EXPLORE THE WORK</span><h2>See it in context.</h2><p>Open the public {project.label === "Work sample" ? "sample" : "preview"} to inspect the work directly.</p><a className="studio-text-link studio-text-link--dark studio-case__outbound" href={project.url} target="_blank" rel="noopener noreferrer">Open {project.label === "Work sample" ? "sample" : "public preview"} <ArrowUpRight size={17}/></a></div></div><Link to="/portfolio" className="studio-text-link studio-text-link--dark" style={{marginTop:65}}>Back to all work <ArrowUpRight size={17}/></Link></div></section>
    <StudioCTA />
    <Contact />
  </main>;
}
