import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Smartphone,
  Bot,
  BarChart3,
  FileSpreadsheet,
  Megaphone,
  Video,
  Receipt,
  Calculator,
  BookOpen,
  Lightbulb,
  Building2,
  FileCheck,
  FileText,
  Scale,
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
    title: "Custom AI Chatbots",
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
    title: "Research Reports",
    tagline: "Clarity Over Complexity.",
    description: "Investor-ready market research and data storytelling from publicly available insights.",
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    tagline: "Strategic Brand Presence. Measurable Impact.",
    description: "Data-driven strategy, content, analytics, and corporate storytelling for sustained brand growth.",
  },
  {
    icon: Video,
    title: "Content & Videography",
    tagline: "Narratives That Perform.",
    description: "High-quality written content and visual storytelling aligned with brand strategy and measurable outcomes.",
  },
  {
    icon: Cpu,
    title: "Custom AI & Digital Solutions",
    tagline: "Built Around Your Business.",
    description: "Tailored AI systems and digital platforms solving complex business challenges secure and scalable.",
  },
];

const caServices = [
  {
    icon: Receipt,
    title: "Income Tax Return (ITR)",
    description: "Accurate. Compliant. On Time.",
  },
  {
    icon: Calculator,
    title: "GST Services",
    description: "Registration, Filing & Compliance — Simplified",
  },
  {
    icon: BookOpen,
    title: "Accounting & Bookkeeping",
    description: "Clean Books. Clear Numbers.",
  },
  {
    icon: Lightbulb,
    title: "Tax Planning & Consultancy",
    description: "Legally Optimized Savings",
  },
  {
    icon: Building2,
    title: "Company Incorporation & ROC",
    description: "From Idea to Entity",
  },
  {
    icon: FileCheck,
    title: "TDS / TCS Compliance",
    description: "Zero Errors. Zero Stress.",
  },
  {
    icon: FileText,
    title: "Project Reports & Loan Docs",
    description: "Bank-Ready Documentation",
  },
  {
    icon: Scale,
    title: "Notice Handling & Assessments",
    description: "Professional Representation You Can Trust",
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
  const isSpecialService = service.title === "Custom AI & Digital Solutions";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.25, 0.4, 0.25, 1] }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`relative h-full rounded-2xl p-8 shadow-sm border hover:shadow-xl transition-all duration-300 overflow-hidden ${
          isSpecialService
            ? "bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200 hover:border-blue-400 hover:shadow-blue-200/50"
            : "bg-gray-100 border-gray-300 hover:border-accent/30"
        }`}
      >
        {/* Subtle gradient overlay on hover */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            isSpecialService
              ? "bg-gradient-to-br from-blue-100/20 via-indigo-100/20 to-blue-200/20"
              : "bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5"
          }`}
        />

        {/* Icon container with refined styling */}
        <div className="relative mb-6">
          <motion.div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${
              isSpecialService
                ? "bg-gradient-to-br from-blue-500 to-indigo-600 border-blue-300"
                : "bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20"
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <service.icon className={`w-8 h-8 ${isSpecialService ? "text-white" : "text-accent"}`} />
          </motion.div>
        </div>

        {/* Content with better hierarchy */}
        <div className="relative space-y-3">
          <h3
            className={`font-heading font-bold text-xl transition-colors duration-300 ${
              isSpecialService
                ? "text-blue-900 group-hover:text-blue-700"
                : "text-gray-900 group-hover:text-accent"
            }`}
          >
            {service.title}
          </h3>

          {service.tagline && (
            <p
              className={`font-semibold text-sm uppercase tracking-wide ${
                isSpecialService ? "text-blue-600" : "text-accent"
              }`}
            >
              {service.tagline}
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

        {/* Subtle corner accent */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            isSpecialService
              ? "bg-gradient-to-br from-blue-200/30 to-transparent"
              : "bg-gradient-to-br from-accent/5 to-transparent"
          }`}
        />
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
            From cutting-edge technology solutions to professional CA services, 
            we deliver excellence across every domain.
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

        {/* CA Services */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-bold text-foreground mb-8 text-center"
          >
            Chartered Accountant Services
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {caServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;