import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { title: "Maison Commerce", category: "Commerce website", label: "Concept demo", description: "A premium storefront concept focused on product discovery and a clean purchase journey.", tags: ["React", "Commerce UX", "Performance"], url: "https://maison.thinkmoreai.com/", image: "/images/portfolio/ecommerce.webp" },
  { title: "NexaPay FinTech", category: "Mobile product", label: "Concept demo", description: "A payment product concept exploring onboarding and transaction-first mobile flows.", tags: ["Flutter", "Node.js", "Secure APIs"], url: "https://nexapay.thinkmoreai.com/", image: "/images/portfolio/mobile.webp" },
  { title: "YumRush Delivery", category: "Ordering platform", label: "Concept demo", description: "A restaurant ordering and delivery concept with clear menu and order-status journeys.", tags: ["Vue", "Python", "AWS"], url: "https://yumrush.thinkmoreai.com/", image: "/images/portfolio/food.webp" },
  { title: "Enterprise SaaS", category: "SaaS website", label: "Concept demo", description: "A product marketing concept using analytics-led framing and structured feature communication.", tags: ["React", "SaaS", "Analytics"], url: "https://enterprise.thinkmoreai.com/", image: "/images/portfolio/saas.webp" },
  { title: "Brand Video Production", category: "Video editing", label: "Work sample", description: "A video and motion editing sample for brand and social storytelling.", tags: ["Motion", "Video", "Brand story"], url: "https://drive.google.com/file/d/134pW1Ai3qzkDdVnT4DAKf_73s0gaW_E8/view?usp=drivesdk", image: "/images/portfolio/video.webp" },
  { title: "Market Research Report", category: "Research", label: "Work sample", description: "A research and data-storytelling sample structured for concise decision support.", tags: ["Research", "Charts", "Insights"], url: "https://drive.google.com/file/d/18U6DK0hfOQD0A4KXeyvBAtGWB_2S7lLS/view?usp=sharing", image: "/images/portfolio/Research-report.webp" },
];

const Portfolio = () => (
  <section id="portfolio" className="warm-section section-padding overflow-hidden">
    <div className="container-custom">
      <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><div><span className="section-eyebrow">Selected work</span><h2 className="mt-6 text-[clamp(2.4rem,5vw,5rem)] font-medium leading-[1] tracking-[-.055em] text-[#10151d]">Work you can open, inspect, and explore.</h2></div><p className="muted-copy max-w-xl text-base leading-8 lg:justify-self-end">Existing public previews and samples from the ThinkMoreAI portfolio. Concept work is labeled clearly and is not presented as client proof.</p></div>
      <div className="mt-14 grid gap-x-7 gap-y-12 md:grid-cols-2">
        {projects.map((project,index)=><motion.a key={project.title} href={project.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .5, delay: (index%2)*.06 }} className={`group block ${index<2?"md:col-span-1":""}`}>
          <div className={`relative overflow-hidden border border-[#10151d]/15 bg-[#10151d] ${index<2?"aspect-[16/10]":"aspect-[16/9]"}`}><img src={project.image} alt={`${project.title} preview`} loading={index<2?"eager":"lazy"} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"/><div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"/><span className="absolute left-4 top-4 border border-white/20 bg-black/35 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[.17em] text-white backdrop-blur-md">{project.label}</span><span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center bg-[#f1f0ec] text-[#10151d] transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"><ArrowUpRight className="h-5 w-5"/></span></div>
          <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]"><div><span className="font-mono text-[9px] uppercase tracking-[.18em] text-[#68717d]">{project.category}</span><h3 className="mt-2 text-2xl font-medium text-[#10151d]">{project.title}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-[#5c6571]">{project.description}</p></div><div className="flex flex-wrap content-start gap-1.5 sm:max-w-[150px] sm:justify-end">{project.tags.map(tag=><span key={tag} className="border border-[#10151d]/15 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-[#5c6571]">{tag}</span>)}</div></div>
        </motion.a>)}
      </div>
    </div>
  </section>
);

export default Portfolio;
