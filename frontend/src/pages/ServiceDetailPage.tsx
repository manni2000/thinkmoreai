import { Link, Navigate, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import SEO from "@/components/SEO";
import Contact from "@/components/Contact";
import ServiceScene from "@/components/ServiceScene";
import { projects, services } from "@/lib/studioContent";
import { serviceDetails } from "@/lib/serviceDetailContent";
import { canonicalFor } from "@/lib/seoConfig";
import "@/service-detail.css";

const relatedByService: Record<string, string[]> = {
  "web-mobile": ["maison-commerce", "nexapay-fintech", "yumrush-delivery"],
  "data-growth": ["market-research-report"],
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const reduceMotion = useReducedMotion();
  const service = services.find(item => item.slug === slug);
  if (!service) return <Navigate to="/services" replace />;

  const detail = serviceDetails[service.slug];
  const canonical = canonicalFor(`/services/${service.slug}`);
  const related = projects.filter(project => relatedByService[service.slug]?.includes(project.slug));

  return <main className={`service-detail-page service-detail-page--${service.motif}`}>
    <SEO title={`${service.title} | ThinkMoreAI`} description={service.description} canonical={canonical} ogUrl={canonical} jsonLd={{ "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.description, provider: { "@type": "Organization", name: "ThinkMoreAI", url: "https://www.thinkmoreai.com" } }} />

    <section className="service-detail-hero" aria-labelledby="service-detail-title"><div className="studio-container">
      <div className="service-detail-hero__top"><Link to="/services"><ArrowLeft size={15}/> ALL SERVICES</Link><span>SERVICE / {service.number} OF 04</span></div>
      <div className="service-detail-hero__layout"><div className="service-detail-hero__copy"><span className="studio-kicker"><span className="signal-dot"/> THINKMOREAI / CAPABILITIES</span><h1 id="service-detail-title">{service.title}</h1><p className="service-detail-hero__line">{detail.line}</p><p className="service-detail-hero__summary">{service.short}</p><div className="service-detail-hero__actions"><Link to="/contact" className="studio-button studio-button--light">Discuss a project <ArrowUpRight size={17}/></Link><a href="#service-build" className="studio-text-link">Explore the service <ArrowRight size={17}/></a></div></div><ServiceScene kind={service.slug}/></div>
      <div className="service-detail-hero__rail"><span>PRODUCT THINKING</span><span>ENGINEERING</span><span>USEFUL OUTCOMES</span></div>
    </div></section>

    <section id="service-build" className="service-build" aria-labelledby="service-build-title"><div className="studio-container service-build__layout"><div className="service-build__intro"><span className="studio-kicker studio-kicker--dark">01 / WHAT WE BUILD</span><h2 id="service-build-title">Designed for the<br/><em>real work.</em></h2><p>{service.description}</p><div className="service-build__outcome"><span>THE OUTCOME</span><strong>{service.outcome}</strong></div></div><div className="service-build__list" aria-label="Service deliverables">{service.deliverables.map((item,index)=><div key={item}><span>0{index+1}</span><h3>{item}</h3><ArrowUpRight size={19} aria-hidden="true"/></div>)}</div></div></section>

    <section className="service-strategy" aria-labelledby="service-strategy-title"><div className="studio-container"><div className="service-strategy__head"><span className="studio-kicker">02 / THE SYSTEM BEHIND IT</span><h2 id="service-strategy-title">Clear thinking before<br/><em>complex engineering.</em></h2><p>{detail.insight}</p></div><div className="service-strategy__pair"><article><span>THE FRICTION / 01</span><h3>See the problem clearly.</h3><p>{service.problem}</p></article><article><span>OUR RESPONSE / 02</span><h3>Shape the right system.</h3><p>{service.approach}</p></article></div><div className="service-strategy__applications"><span>WHERE THIS HELPS</span><div>{service.applications.map((item,index)=><p key={item}><small>0{index+1}</small>{item}</p>)}</div></div></div></section>

    <section id="technology" className="service-technology" aria-labelledby="service-technology-title"><div className="studio-container"><div className="service-technology__head"><div><span className="studio-kicker studio-kicker--dark">03 / TECHNOLOGY STACK</span><h2 id="service-technology-title">The right tools<br/><em>for the job.</em></h2></div><p>{detail.stackIntro}</p></div><div className="service-technology__layers">{detail.stack.map((layer,index)=><article key={layer.layer}><span className="service-technology__number">0{index+1} / LAYER</span><h3>{layer.layer}</h3><p>{layer.purpose}</p><div className="service-technology__tags">{layer.tools.map(tool=><span key={tool}>{tool}</span>)}</div></article>)}</div><p className="service-technology__note">The final stack is selected during discovery to fit the project and existing systems.</p></div></section>

    <section className="service-delivery" aria-labelledby="service-delivery-title"><div className="studio-container"><div className="service-delivery__head"><span className="studio-kicker">04 / FROM QUESTION TO RELEASE</span><h2 id="service-delivery-title">A process that<br/><em>makes progress visible.</em></h2></div><div className="service-delivery__steps">{detail.stages.map((stage,index)=><motion.article key={stage.title} initial={reduceMotion ? false : { opacity: .55, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .65, delay: reduceMotion ? 0 : index * .08, ease: [0.22, 1, 0.36, 1] }}><span>0{index+1}</span><h3>{stage.title}</h3><p>{stage.description}</p></motion.article>)}</div><div className="service-delivery__foot"><span>DISCOVER</span><span>DESIGN</span><span>BUILD</span><span>IMPROVE</span></div></div></section>

    {related.length > 0 && <section className="service-related" aria-labelledby="service-related-title"><div className="studio-container"><span className="studio-kicker">RELATED PUBLIC WORK</span><h2 id="service-related-title">See the thinking<br/><em>in context.</em></h2><div className="service-related__list">{related.map((project,index)=><Link key={project.slug} to={`/portfolio/${project.slug}`}><span>0{index+1}</span><strong>{project.title}</strong><small>{project.label}</small><ArrowUpRight size={19}/></Link>)}</div></div></section>}

    <section className="service-questions" aria-labelledby="service-questions-title"><div className="studio-container service-questions__layout"><div><span className="studio-kicker studio-kicker--dark">QUESTIONS / {service.number}</span><h2 id="service-questions-title">Before we<br/><em>begin.</em></h2></div><div className="service-questions__list">{service.faq.map(item=><details key={item[0]}><summary>{item[0]}</summary><p>{item[1]}</p></details>)}</div></div></section>
    <Contact />
  </main>;
}
