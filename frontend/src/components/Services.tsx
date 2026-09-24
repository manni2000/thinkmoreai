<<<<<<< ours
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Cpu,
  FileSpreadsheet,
  Globe,
  Megaphone,
  Smartphone,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";

const techServices = [
  {
    icon: Globe,
    title: "Website Development",
    tagline: "High-performance web presence",
    description: "Conversion-ready websites and web apps with speed, SEO, and secure architecture built in.",
    tone: "border-cyan-500/20 bg-cyan-500/10 text-cyan-600",
    features: ["Responsive UI", "SEO foundations", "Fast loading"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Launch-ready mobile products",
    description: "iOS and Android apps shaped around product clarity, performance, and release quality.",
    tone: "border-violet-500/20 bg-violet-500/10 text-violet-600",
    features: ["Cross-platform builds", "Native feel", "API integration"],
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    tagline: "Customer and team automation",
    description: "Secure assistants for support, lead qualification, knowledge search, and workflow execution.",
    tone: "border-emerald-500/20 bg-emerald-500/10 text-emerald-600",
    features: ["NLP flows", "24/7 support", "CRM handoff"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    tagline: "Decision-grade intelligence",
    description: "Dashboards, data pipelines, reports, and predictive insight for leadership teams.",
    tone: "border-amber-500/25 bg-amber-500/10 text-amber-600",
    features: ["BI dashboards", "Predictive models", "KPI reporting"],
  },
  {
    icon: FileSpreadsheet,
    title: "SEO Optimization",
    tagline: "Visibility that compounds",
    description: "Technical SEO, content structure, analytics, and ranking systems built for qualified traffic.",
    tone: "border-sky-500/20 bg-sky-500/10 text-sky-600",
    features: ["Technical audits", "Content plans", "Analytics"],
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    tagline: "Sharper brand momentum",
    description: "Campaign planning, content calendars, reporting, and creative execution for consistent growth.",
    tone: "border-rose-500/20 bg-rose-500/10 text-rose-600",
    features: ["Content strategy", "Performance reports", "Brand systems"],
  },
  {
    icon: Video,
    title: "Content Writing & Video Editing",
    tagline: "Narratives that perform",
    description: "Copy, scripts, short-form videos, motion edits, and visual storytelling aligned to business goals.",
    tone: "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-600",
    features: ["Copywriting", "Video editing", "Storytelling"],
  },
  {
    icon: Cpu,
    title: "AI Consultant",
    tagline: "Strategy before implementation",
    description: "AI readiness audits, opportunity mapping, roadmap design, and implementation governance.",
    tone: "border-accent/30 bg-accent/10 text-accent",
    features: ["AI strategy", "Implementation map", "ROI model"],
    featured: true,
  },
];

const Services = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-[#f5f7fb]">
      <div className="absolute inset-0 surface-grid opacity-70" />
      <div className="container-custom relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="section-eyebrow">Services</span>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            One partner for the systems that move your business forward.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            From AI workflows to full product builds, each service is packaged around clear scope,
            commercial outcomes, and production-grade delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techServices.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className={`premium-card group relative flex min-h-[310px] flex-col p-5 ${
                service.featured ? "border-accent/45 bg-primary text-primary-foreground" : ""
              }`}
            >
              {service.featured && (
                <span className="absolute right-4 top-4 border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Featured
                </span>
              )}

              <div className={`flex h-12 w-12 items-center justify-center border ${service.tone}`}>
                <service.icon className="h-6 w-6" />
              </div>

              <p
                className={`mt-6 text-xs font-semibold uppercase tracking-[0.22em] ${
                  service.featured ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {service.tagline}
              </p>
              <h3
                className={`mt-3 font-heading text-xl font-bold leading-tight ${
                  service.featured ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`mt-3 flex-1 text-sm leading-6 ${
                  service.featured ? "text-primary-foreground/[0.68]" : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>

              <div className="mt-5 space-y-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm">
                    <span
                      className={`h-1.5 w-1.5 ${
                        service.featured ? "bg-accent" : "bg-foreground/40"
                      }`}
                    />
                    <span className={service.featured ? "text-primary-foreground/[0.74]" : "text-foreground/[0.76]"}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 border border-foreground/10 bg-white px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:border-accent/50 hover:text-accent"
          >
            Scope a service roadmap
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
=======
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Braces, ChartNoAxesCombined, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { id: "ai", icon: Bot, title: "AI products & assistants", description: "Custom chatbots, knowledge assistants, AI consulting, and product features designed around a specific workflow.", details: ["Knowledge retrieval", "Support & lead flows", "AI opportunity mapping"] },
  { id: "apps", icon: Braces, title: "Web & mobile applications", description: "Responsive websites, web platforms, and mobile apps with product clarity, performance, and integrations built in.", details: ["Web experiences", "Cross-platform apps", "SaaS & dashboards"] },
  { id: "automation", icon: Workflow, title: "Automation & integrations", description: "Connected workflows that move information, trigger actions, and reduce repetitive operational work.", details: ["Workflow design", "System integrations", "Operational reporting"] },
  { id: "analytics", icon: ChartNoAxesCombined, title: "Data, analytics & growth", description: "Dashboards, research, SEO, content, social media, and reporting systems that make progress easier to see.", details: ["Analytics dashboards", "Technical SEO", "Content & campaigns"] },
];

const ServiceVisual = ({ id }: { id: string }) => (
  <div className="relative h-full min-h-[390px] overflow-hidden bg-[#0b1017] p-5 sm:p-8">
    <div className="surface-grid absolute inset-0 opacity-40" />
    <div className="relative flex items-center justify-between border-b border-white/10 pb-4"><span className="tech-label">Live system diagram</span><span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.16em] text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> illustrative</span></div>
    {id === "ai" && <div className="relative mt-10 grid gap-6"><div className="w-[78%] border border-white/12 bg-white/[.04] p-4 text-sm text-white/68">How can we qualify this lead?</div><div className="ml-auto flex w-[88%] items-center gap-3"><span className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/50" /><span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-2 font-mono text-[9px] uppercase tracking-widest text-accent">Retrieve → reason</span></div><div className="ml-auto w-[88%] border border-accent/20 bg-accent/[.055] p-5"><p className="text-sm leading-6 text-white/72">Structured response with next action, context, and a human handoff.</p><div className="mt-4 h-1 w-2/3 bg-gradient-to-r from-accent to-violet-400" /></div></div>}
    {id === "apps" && <div className="relative mt-9"><div className="mx-auto w-[88%] border border-white/15 bg-[#111720] p-3 shadow-2xl"><div className="flex gap-1.5 border-b border-white/10 pb-3"><i className="h-1.5 w-1.5 rounded-full bg-white/20"/><i className="h-1.5 w-1.5 rounded-full bg-white/20"/><i className="h-1.5 w-1.5 rounded-full bg-white/20"/></div><div className="mt-4 grid grid-cols-[.45fr_1fr] gap-3"><div className="h-44 bg-white/[.035]"/><div className="space-y-3"><div className="h-16 bg-gradient-to-r from-accent/15 to-violet-400/10"/><div className="grid grid-cols-2 gap-3"><div className="h-24 bg-white/[.04]"/><div className="h-24 bg-white/[.04]"/></div></div></div></div><div className="absolute -bottom-8 right-[3%] h-52 w-24 rounded-[1.4rem] border-[5px] border-[#202b39] bg-[#0b1017] p-2"><div className="h-16 rounded-lg bg-gradient-to-br from-accent/20 to-violet-400/20"/><div className="mt-2 h-2 w-full bg-white/8"/><div className="mt-2 h-2 w-3/4 bg-white/8"/><div className="mt-4 h-12 rounded-lg bg-white/[.05]"/></div></div>}
    {id === "automation" && <div className="relative mx-auto mt-12 flex max-w-lg flex-col items-center"><div className="border border-white/12 bg-white/[.04] px-5 py-3 font-mono text-[10px] uppercase tracking-wider text-white/70">New enquiry</div><div className="h-9 w-px bg-accent/45"/><div className="grid w-full grid-cols-3 gap-3">{["Qualify","Create record","Notify team"].map((label,index)=><div key={label} className="relative border border-white/10 bg-[#111720] p-4 text-center text-xs text-white/62"><span className="mx-auto mb-3 block h-2 w-2 rounded-full bg-accent"/>{label}{index<2&&<span className="absolute -right-3 top-1/2 h-px w-3 bg-accent/40"/>}</div>)}</div><div className="h-9 w-px bg-accent/45"/><div className="border border-emerald-300/20 bg-emerald-300/[.06] px-5 py-3 font-mono text-[10px] uppercase tracking-wider text-emerald-200">Follow-up ready</div></div>}
    {id === "analytics" && <div className="relative mt-9 border border-white/10 bg-white/[.025] p-5"><div className="grid grid-cols-3 gap-3">{["Reach","Leads","Actions"].map((label,index)=><div key={label} className="border border-white/8 p-3"><span className="tech-label">{label}</span><div className={`mt-4 h-2 ${index===0?"w-3/4":index===1?"w-1/2":"w-4/5"} bg-gradient-to-r from-accent/65 to-violet-400/50`}/></div>)}</div><svg viewBox="0 0 500 180" className="mt-7 w-full" aria-hidden="true"><defs><linearGradient id="chart" x1="0" x2="1"><stop stopColor="#77e5ff"/><stop offset="1" stopColor="#9690ff"/></linearGradient></defs><path d="M0 150 C70 142,80 90,145 105 S230 145,275 72 S365 78,410 35 S470 28,500 12" fill="none" stroke="url(#chart)" strokeWidth="3"/><path d="M0 150 C70 142,80 90,145 105 S230 145,275 72 S365 78,410 35 S470 28,500 12 V180 H0Z" fill="url(#chart)" opacity=".08"/></svg></div>}
  </div>
);

const Services = () => {
  const [active, setActive] = useState(0);
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-[#080b10]">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div><span className="section-eyebrow">Services / 04 systems</span><h2 className="mt-6 max-w-xl text-[clamp(2.35rem,5vw,5rem)] font-medium leading-[1] tracking-[-.055em] text-white">One team. Connected capabilities.</h2></div>
          <p className="max-w-2xl text-base leading-8 text-white/55 lg:justify-self-end">Choose the problem first. We combine product, engineering, automation, data, and growth skills around what the business needs to accomplish.</p>
        </div>

        <div className="mt-14 hidden border border-white/10 lg:grid lg:grid-cols-[.78fr_1.22fr]" role="tablist" aria-label="Service categories">
          <div className="divide-y divide-white/10">
            {services.map((service, index) => <button key={service.id} type="button" role="tab" aria-selected={active===index} aria-controls={`service-panel-${service.id}`} onClick={()=>setActive(index)} className={`group flex w-full items-start gap-5 p-6 text-left transition-colors duration-200 ${active===index?"bg-white/[.07]":"hover:bg-white/[.035]"}`}><span className={`mt-1 font-mono text-[10px] ${active===index?"text-accent":"text-white/30"}`}>0{index+1}</span><span className="flex-1"><span className={`block text-lg font-medium ${active===index?"text-white":"text-white/56"}`}>{service.title}</span>{active===index&&<span className="mt-2 block text-sm leading-6 text-white/45">{service.description}</span>}</span><ArrowRight className={`mt-1 h-4 w-4 ${active===index?"text-accent":"text-white/20"}`}/></button>)}
          </div>
          <motion.div key={services[active].id} id={`service-panel-${services[active].id}`} role="tabpanel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .25 }}><ServiceVisual id={services[active].id}/></motion.div>
        </div>

        <div className="mt-12 grid gap-5 lg:hidden">
          {services.map((service,index)=><article key={service.id} className="border border-white/10 bg-[#111720]"><div className="p-5"><div className="flex items-center justify-between"><service.icon className="h-5 w-5 text-accent"/><span className="tech-label">0{index+1}</span></div><h3 className="mt-8 text-xl font-medium text-white">{service.title}</h3><p className="mt-3 text-sm leading-7 text-white/52">{service.description}</p><div className="mt-5 flex flex-wrap gap-2">{service.details.map(detail=><span key={detail} className="border border-white/10 px-2.5 py-1.5 text-[11px] text-white/50">{detail}</span>)}</div></div></article>)}
        </div>
        <Link to="/contact" className="mt-10 inline-flex min-h-12 items-center gap-3 border-b border-accent/45 text-sm font-semibold text-white transition-colors hover:text-accent">Discuss the right system <ArrowRight className="h-4 w-4"/></Link>
>>>>>>> theirs
      </div>
    </section>
  );
};

export default Services;
