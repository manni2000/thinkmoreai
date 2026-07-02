import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, User, Shield, Lock, CreditCard, AlertTriangle, CheckCircle, Gavel, Eye } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const TermsOfService = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sections = [
    {
      icon: CheckCircle,
      title: "1. Acceptance",
      content: "Your use of ThinkMoreAI services and site constitutes agreement to these Terms."
    },
    {
      icon: User,
      title: "2. Eligibility",
      content: "You must be 16+ to use the site and services; minors need parental consent."
    },
    {
      icon: FileText,
      title: "3. Services",
      content: "We provide AI solutions, consultancy, and digital services as described on the site."
    },
    {
      icon: Shield,
      title: "4. User Conduct",
      content: "You agree not to misuse our services, infringe on rights, or attempt unauthorized access."
    },
    {
      icon: Lock,
      title: "5. Accounts",
      content: "If you register, keep your credentials secure. You're responsible for activity under your account."
    },
    {
      icon: Eye,
      title: "6. Intellectual Property",
      content: "All site content, trademarks, and software are our property or licensed. You may not copy without permission."
    },
    {
      icon: FileText,
      title: "7. Content You Provide",
      content: "You retain ownership of your data. By submitting content, you grant us the rights to use it to deliver services."
    },
    {
      icon: CreditCard,
      title: "8. Fees & Payment",
      content: "Services may require fees. Payment terms will be specified in separate contracts or invoices."
    },
    {
      icon: AlertTriangle,
      title: "9. Disclaimers",
      content: "Services are provided \"as-is.\" We do not guarantee specific outcomes from AI solutions."
    },
    {
      icon: Shield,
      title: "10. Limitation of Liability",
      content: "We are not liable for indirect or consequential damages arising from service use."
    },
    {
      icon: Gavel,
      title: "11. Termination",
      content: "We may suspend or terminate access if Terms are violated."
    },
    {
      icon: FileText,
      title: "12. Governing Law",
      content: "These Terms are governed by the laws of [Jurisdiction]."
    },
    {
      icon: CheckCircle,
      title: "13. Changes to Terms",
      content: "We may update Terms; continued use means you accept changes."
    }
  ];

  return (
    <section className="section-padding pt-28 md:pt-32 surface-grid bg-background relative overflow-hidden">
      {/* Background Animation */}
      <div className="hidden">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle 800px at 20% 50%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle 800px at 80% 50%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="section-eyebrow mb-6"
          >
            <FileText className="w-4 h-4" />
            Legal Terms
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Terms of{" "}
            <span className="gradient-text">Service</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-4"
          >
            Please read these terms carefully before using our services.
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-sm text-muted-foreground"
          >
            Last Updated: 01/01/2026
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="premium-card bg-white p-8 md:p-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className={`mb-12 last:mb-0 ${index !== sections.length - 1 ? 'border-b border-border/30 pb-8' : ''}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-accent/25 bg-accent/10 text-accent"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-grow">
                      <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
                        {section.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.1 * sections.length }}
              className="mt-12 border border-accent/25 bg-accent/10 p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-foreground">Important Notice</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and such modifications shall be effective immediately upon posting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.1 * (sections.length + 1) }}
              className="mt-8 border border-border bg-secondary/70 p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Gavel className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-foreground">Contact Information</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-3">
                <a 
                  href="mailto:manishmandal9734@gmail.com" 
                  className="font-medium text-accent underline"
                >
                  manishmandal9734@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;
