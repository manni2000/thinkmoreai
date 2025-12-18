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
  Receipt,
  Calculator,
  BookOpen,
  Lightbulb,
  Building2,
  FileCheck,
  FileText,
  Scale,
} from "lucide-react";

const techServices = [
  {
    icon: Globe,
    title: "Website Development",
    tagline: "Fast. Secure. Scalable.",
    description: "Modern websites built for performance and growth.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "iOS & Android, Done Right.",
    description: "High-performance apps with clean UX and strong architecture.",
  },
  {
    icon: Bot,
    title: "Custom AI Chatbots",
    tagline: "Automate Conversations.",
    description: "Smart, trainable chatbots for support, sales, and operations.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    tagline: "Turn Data Into Decisions.",
    description: "Dashboards, insights, and predictive analytics that matter.",
  },
  {
    icon: FileSpreadsheet,
    title: "Research Reports",
    tagline: "Clarity Over Complexity.",
    description: "Investor-ready reports, market research, and data storytelling.",
  },
  {
    icon: Megaphone,
    title: "Social Media & Videography",
    tagline: "Consistency That Converts.",
    description: "Strategy, content, analytics, brand presence, corporate videos, and product reels.",
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
        className="relative h-full bg-gray-100 rounded-2xl p-8 shadow-sm border border-gray-300 hover:shadow-xl hover:border-accent/30 transition-all duration-300 overflow-hidden"
      >
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon container with refined styling */}
        <div className="relative mb-6">
          <motion.div 
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center border border-accent/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <service.icon className="w-8 h-8 text-accent" />
          </motion.div>
        </div>

        {/* Content with better hierarchy */}
        <div className="relative space-y-3">
          <h3 className="font-heading font-bold text-xl text-gray-900 group-hover:text-accent transition-colors duration-300">
            {service.title}
          </h3>
          
          {service.tagline && (
            <p className="text-accent font-semibold text-sm uppercase tracking-wide">
              {service.tagline}
            </p>
          )}
          
          <p className="text-gray-600 text-base leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Subtle corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
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