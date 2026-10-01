import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  ["01", "Build", "Websites, mobile apps, SaaS products, dashboards, and custom software."],
  ["02", "Automate", "AI assistants, connected workflows, lead handling, reporting, and internal operations."],
  ["03", "Grow", "Data analytics, technical SEO, content systems, and digital campaigns."],
];

const About = () => (
  <section id="about" className="warm-section section-padding relative overflow-hidden">
    <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(10,20,28,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(10,20,28,.06)_1px,transparent_1px)] [background-size:64px_64px]" />
    <div className="container-custom relative">
      <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .55 }}>
          <span className="section-eyebrow">What we build</span>
          <h2 className="mt-6 max-w-xl font-heading text-[clamp(2.35rem,5vw,4.9rem)] font-medium leading-[1.02] tracking-[-.055em] text-[#10151d]">
            Useful systems for real business friction.
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .55, delay: .08 }} className="lg:pt-12">
          <p className="max-w-3xl text-xl leading-9 text-[#3d4651] md:text-2xl md:leading-10">
            ThinkMoreAI works with startups, founders, small businesses, and growing teams to turn manual work, product ideas, and fragmented data into clear digital systems.
          </p>
          <Link to="/about" className="mt-7 inline-flex items-center gap-2 border-b border-[#10151d]/30 pb-1 text-sm font-semibold text-[#10151d] transition-colors hover:border-[#16697a] hover:text-[#16697a]">Meet the founders <ArrowUpRight className="h-4 w-4" /></Link>
        </motion.div>
      </div>

      <div className="mt-16 grid border-y border-[#10151d]/15 md:grid-cols-3 lg:mt-24">
        {capabilities.map(([number, title, description], index) => (
          <motion.article key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .45, delay: index * .07 }} className="group border-b border-[#10151d]/15 py-8 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
            <div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-[.2em] text-[#68717d]">{number}</span><span className="h-2 w-2 rounded-full border border-[#10151d]/30 transition-colors group-hover:border-[#16697a] group-hover:bg-[#16697a]" /></div>
            <h3 className="mt-10 text-2xl font-medium text-[#10151d]">{title}</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#5c6571]">{description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default About;
