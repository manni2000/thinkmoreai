import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import {
  Globe,
  Smartphone,
  Bot,
  BarChart3,
  FileSpreadsheet,
  Megaphone,
  Video,
  Cpu,
} from "lucide-react";

const techServices = [
  {
    icon: Globe,
    title: "Website Development",
    tagline: "Engineered for Scale. Security. Performance.",
    description: "Enterprise-grade websites designed for reliability, speed, and long-term growth.",
    color: "from-blue-500 to-cyan-500",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Enterprise Mobility, Built Right.",
    description: "High-performance iOS and Android applications with robust architecture and refined user experience.",
    color: "from-purple-500 to-pink-500",
    features: ["Cross-Platform", "Native Performance", "UI/UX Design"],
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    tagline: "Intelligent Automation at Scale.",
    description: "Secure, trainable AI chatbots for enterprise support, sales enablement, and operational efficiency.",
    color: "from-green-500 to-emerald-500",
    features: ["NLP Integration", "24/7 Support", "Multi-language"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    tagline: "From Data to Strategic Decisions.",
    description: "Advanced dashboards, actionable insights, and predictive analytics for business leadership.",
    color: "from-orange-500 to-red-500",
    features: ["Real-time Dashboards", "Predictive Models", "BI Integration"],
  },
  {
    icon: FileSpreadsheet,
    title: "SEO Optimization",
    tagline: "Rank Higher. Convert Better.",
    description: "Strategic SEO implementation to boost search rankings, drive organic traffic, and increase conversion rates.",
    color: "from-indigo-500 to-purple-500",
    features: ["On-page SEO", "Link Building", "Analytics"],
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    tagline: "Strategic Brand Presence. Measurable Impact.",
    description: "Data-driven strategy, content, analytics, and corporate storytelling for sustained brand growth.",
    color: "from-pink-500 to-rose-500",
    features: ["Content Strategy", "Analytics", "Brand Management"],
  },
  {
    icon: Video,
    title: "Content Writer & Video Editing",
    tagline: "Narratives That Perform.",
    description: "High-quality written content and visual storytelling aligned with brand strategy and measurable outcomes.",
    color: "from-cyan-500 to-blue-500",
    features: ["Video Editing", "Copywriting", "Brand Storytelling"],
  },
  {
    icon: Cpu,
    title: "AI Consultant",
    tagline: "Strategic AI Guidance.",
    description: "Expert consulting to transform your business with AI-driven strategies, implementation roadmap, and measurable ROI optimization.",
    color: "from-purple-600 to-pink-600",
    features: ["AI Strategy", "Implementation", "ROI Optimization"],
    featured: true,
  },
];

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tagline?: string;
  color?: string;
  features?: string[];
  featured?: boolean;
}

const ServiceCard = ({ service, index }: { service: ServiceItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const serviceColor = service.color || "from-blue-500 to-cyan-500";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative"
    >
      <motion.div
        whileHover={{ 
          y: -8,
          scale: 1.02,
          transition: { duration: 0.4, ease: "easeOut" }
        }}
        className={`relative h-full backdrop-blur-sm border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden ${
          service.featured 
            ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-300/50' 
            : 'bg-white/80 border-slate-200/50'
        }`}
      >
        {/* Background gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${serviceColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        
        {/* Floating particles for featured service */}
        {service.featured && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        )}

        {/* Icon and Header */}
        <div className="relative z-10 mb-6 text-center sm:text-left">
          <div className="flex justify-center sm:justify-start">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${serviceColor} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
            </div>
          </div>
          
          {/* Featured badge */}
          {service.featured && (
            <motion.div
              className="absolute -top-2 left-1/2 -translate-x-1/2 sm:left-auto sm:-right-2 sm:translate-x-0 inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full shadow-lg"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-3 h-3" />
              Featured
            </motion.div>
          )}

          <div className="mb-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-slate-500">
              Service
            </span>
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
            {service.title}
          </h3>
          <div className={`h-0.5 bg-gradient-to-r ${serviceColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center sm:origin-left mx-auto sm:mx-0`} />
        </div>

        {/* Tagline */}
        {service.tagline && (
          <div className="relative z-10 mb-4 text-center sm:text-left">
            <p className={`font-semibold text-xs uppercase tracking-wider bg-gradient-to-r ${serviceColor} bg-clip-text text-transparent flex items-center justify-center sm:justify-start gap-2`}>
              {service.tagline}
              {service.featured && <CheckCircle className="w-3 h-3" />}
            </p>
          </div>
        )}

        {/* Description */}
        <div className="relative z-10 mb-4 text-center sm:text-left">
          <p className="text-sm text-slate-600 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Features */}
        {service.features && (
          <div className="relative z-10 space-y-2 text-center sm:text-left">
            <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-2">
              Key Features
            </div>
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ x: 4 }}
                className="flex items-center justify-center sm:justify-start gap-2 group/item"
              >
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${serviceColor} flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200`} />
                <span className="text-xs text-slate-600 group-hover/item:text-slate-900 group-hover/item:font-medium transition-all duration-200">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Bottom accent line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${serviceColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="pt-2 pb-20 md:pt-4 md:pb-28 lg:pt-6 lg:pb-32 bg-gradient-to-b from-amber-50 to-orange-100 relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider mb-6">
            Our Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Comprehensive Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
              Your Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            we deliver cutting-edge technology solutions.
          </p>
        </motion.div>

        {/* Technology Services */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-bold text-foreground mb-8 text-center"
          >
            Technology Services
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {techServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;