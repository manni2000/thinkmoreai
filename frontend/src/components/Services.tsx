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
      </div>
    </section>
  );
};

export default Services;
