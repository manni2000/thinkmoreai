import { motion } from "framer-motion";

const layers = [
  { number: "01", title: "Product interfaces", purpose: "Readable, responsive experiences across web and mobile.", tools: ["React", "Next.js", "Vue", "TypeScript", "Flutter"] },
  { number: "02", title: "Systems & APIs", purpose: "Reliable application logic, data flow, and integrations.", tools: ["Node.js", "Python", "Express", "FastAPI", "REST / GraphQL"] },
  { number: "03", title: "AI & intelligence", purpose: "Assistants, retrieval, automation, and predictive workflows.", tools: ["OpenAI", "Gemini", "RAG", "PyTorch", "TensorFlow"] },
  { number: "04", title: "Delivery & reliability", purpose: "Deployment, monitoring, security, and maintainable operations.", tools: ["AWS", "GCP", "Vercel", "Docker", "CI / CD"] },
];

const Technologies = () => (
  <section className="section-padding border-y border-white/10 bg-[#0c1118]">
    <div className="container-custom">
      <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><span className="section-eyebrow">Technology with a purpose</span><h2 className="mt-6 text-[clamp(2.3rem,4.7vw,4.75rem)] font-medium leading-[1.02] tracking-[-.055em] text-white">The stack follows the system.</h2></div><p className="max-w-2xl text-base leading-8 text-white/52 lg:justify-self-end">Tools are selected around product needs, team constraints, integrations, and long-term ownership—not to decorate a proposal with logos.</p></div>
      <div className="mt-14 grid border-t border-white/10 md:grid-cols-2">
        {layers.map((layer,index)=><motion.article key={layer.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .45, delay: index*.05 }} className="border-b border-white/10 py-7 md:odd:border-r md:odd:pr-8 md:even:pl-8"><div className="flex items-start gap-5"><span className="font-mono text-[10px] text-accent">{layer.number}</span><div><h3 className="text-xl font-medium text-white">{layer.title}</h3><p className="mt-2 text-sm leading-6 text-white/45">{layer.purpose}</p><div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">{layer.tools.map(tool=><span key={tool} className="font-mono text-[10px] uppercase tracking-[.12em] text-white/32">{tool}</span>)}</div></div></div></motion.article>)}
      </div>
    </div>
  </section>
);

export default Technologies;
