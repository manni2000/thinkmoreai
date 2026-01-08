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
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Enterprise Mobility, Built Right.",
    description: "High-performance iOS and Android applications with robust architecture and refined user experience.",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    tagline: "Intelligent Automation at Scale.",
    description: "Secure, trainable AI chatbots for enterprise support, sales enablement, and operational efficiency.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    tagline: "From Data to Strategic Decisions.",
    description: "Advanced dashboards, actionable insights, and predictive analytics for business leadership.",
  },
  {
    icon: FileSpreadsheet,
    title: "SEO Optimization",
    tagline: "Rank Higher. Convert Better.",
    description: "Strategic SEO implementation to boost search rankings, drive organic traffic, and increase conversion rates.",
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    tagline: "Strategic Brand Presence. Measurable Impact.",
    description: "Data-driven strategy, content, analytics, and corporate storytelling for sustained brand growth.",
  },
  {
    icon: Video,
    title: "Content Writer & Video Editing",
    tagline: "Narratives That Perform.",
    description: "High-quality written content and visual storytelling aligned with brand strategy and measurable outcomes.",
  },
  {
    icon: Cpu,
    title: "AI Consultant",
    tagline: "Strategic AI Guidance.",
    description: "Expert consulting to transform your business with AI-driven strategies, implementation roadmap, and measurable ROI optimization.",
  },
];

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tagline?: string;
}

const ServiceCard = ({ service, index }: { service: ServiceItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isSpecialService = service.title === "AI Consultant";

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
          y: -12,
          scale: 1.02,
          transition: { duration: 0.4, ease: "easeOut" }
        }}
        className={`relative h-full rounded-3xl p-8 shadow-lg border transition-all duration-500 overflow-hidden ${
          isSpecialService
            ? "bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 border-blue-200 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200/50"
            : "bg-white border-gray-200 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/20"
        }`}
      >
        {/* Enhanced gradient overlay */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ${
            isSpecialService
              ? "bg-gradient-to-br from-blue-100/30 via-indigo-100/30 to-cyan-100/30"
              : "bg-gradient-to-br from-accent/5 via-orange-50/20 to-yellow-50/10"
          }`}
        />
        
        {/* Floating particles for special service */}
        {isSpecialService && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
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

        {/* Enhanced icon container */}
        <div className="relative mb-6">
          <motion.div
            className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 shadow-lg ${
              isSpecialService
                ? "bg-gradient-to-br from-blue-500 to-indigo-600 border-blue-300 shadow-blue-200/50"
                : "bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 shadow-accent/10"
            }`}
            whileHover={{ 
              scale: 1.1,
              rotate: isSpecialService ? 5 : 2,
              transition: { duration: 0.3 }
            }}
          >
            <service.icon className={`w-10 h-10 ${isSpecialService ? "text-white" : "text-accent"}`} />
            {isSpecialService && (
              <motion.div
                className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-3 h-3 text-white" />
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Enhanced content hierarchy */}
        <div className="relative space-y-4">
          <h3
            className={`font-heading font-bold text-2xl transition-all duration-300 ${
              isSpecialService
                ? "text-blue-900 group-hover:text-blue-700"
                : "text-gray-900 group-hover:text-accent"
            }`}
          >
            {service.title}
            {isSpecialService && (
              <motion.span
                className="ml-2 inline-flex items-center gap-1 px-2 py-1 bg-yellow-400 text-blue-900 text-xs font-bold rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-3 h-3" />
                Featured
              </motion.span>
            )}
          </h3>

          {service.tagline && (
            <p
              className={`font-semibold text-sm uppercase tracking-wider flex items-center gap-2 ${
                isSpecialService ? "text-blue-600" : "text-accent"
              }`}
            >
              {service.tagline}
              {isSpecialService && (
                <CheckCircle className="w-4 h-4" />
              )}
            </p>
          )}

          <p
            className={`text-base leading-relaxed ${
              isSpecialService ? "text-blue-700" : "text-gray-600"
            }`}
          >
            {service.description}
          </p>
        </div>

        {/* Enhanced corner accents */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className={`w-full h-full rounded-bl-full ${
            isSpecialService
              ? "bg-gradient-to-br from-blue-200/40 to-transparent"
              : "bg-gradient-to-br from-accent/10 to-transparent"
          }`} />
        </div>
        
        {/* Bottom accent line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 ${
          isSpecialService
            ? "bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400"
            : "bg-gradient-to-r from-accent/50 to-transparent"
        }`} />
        
        {/* Hover action indicator */}
        <motion.div
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
          whileHover={{ scale: 1.2, rotate: 45 }}
        >
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="pt-2 pb-20 md:pt-4 md:pb-28 lg:pt-6 lg:pb-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Comprehensive Solutions for{" "}
            <span className="gradient-text">Your Business</span>
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