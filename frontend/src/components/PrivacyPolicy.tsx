import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Mail, Lock, Eye, User, Globe, AlertTriangle, CheckCircle } from "lucide-react";

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

const PrivacyPolicy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sections = [
    {
      icon: User,
      title: "1. Introduction",
      content: "ThinkMoreAI (\"we\", \"us\", \"our\") respects your privacy. This Policy explains what information we collect when you use our website and services, how we use it, share it, and your choices about it."
    },
    {
      icon: Eye,
      title: "2. Information We Collect",
      subsections: [
        {
          subtitle: "a. Personal Information",
          content: "Name, email, phone (from forms or account signup)\nCompany details (business services inquiries)"
        },
        {
          subtitle: "b. Usage & Technical Data",
          content: "IP address, device type, browser, cookies, behavioral analytics"
        }
      ]
    },
    {
      icon: Lock,
      title: "3. How We Use Information",
      content: "We use data to:\n\n- Provide, operate, and improve services\n- Respond to contact or support requests\n- Personalize content and marketing\n- Analyze usage to optimize performance"
    },
    {
      icon: Shield,
      title: "4. Legal Basis for Processing",
      content: "We process personal data:\n\n- With user consent\n- To perform a contract or deliver services\n- To comply with law or legal requirements"
    },
    {
      icon: Globe,
      title: "5. Cookies & Tracking",
      content: "We use cookies and similar technologies to improve user experience, measure site usage, and provide analytics. You may manage cookie permissions in your browser."
    },
    {
      icon: Mail,
      title: "6. Data Sharing",
      content: "We may share data with:\n\n- Service providers (hosting, analytics)\n- Legal authorities if required\n- Third parties only with consent"
    },
    {
      icon: AlertTriangle,
      title: "7. Third-Party Links",
      content: "Our site may include links to external sites with separate privacy policies; we are not responsible for their practices."
    },
    {
      icon: Shield,
      title: "8. Security",
      content: "We implement reasonable technical and procedural safeguards to protect your data."
    },
    {
      icon: Globe,
      title: "9. International Transfers",
      content: "Data may be processed outside your home country. We apply safeguards to protect it as required by law."
    },
    {
      icon: User,
      title: "10. Children's Privacy",
      content: "We do not knowingly collect personal data from children under 16."
    },
    {
      icon: CheckCircle,
      title: "11. Your Rights",
      content: "Depending on your location, you may have rights to access, correct, delete, or restrict processing of your data."
    },
    {
      icon: Mail,
      title: "12. Contact",
      content: "For privacy questions: info@thinkmoreai.com"
    }
  ];

  return (
    <section className="section-padding pt-28 md:pt-32 surface-grid bg-background relative overflow-hidden">
      {/* Background Animation */}
      <div className="hidden">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle 800px at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle 800px at 80% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
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
            <Shield className="w-4 h-4" />
            Legal & Privacy
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Privacy{" "}
            <span className="gradient-text">Policy</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-4"
          >
            Your privacy is important to us. Learn how we collect, use, and protect your information.
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
                      
                      {section.subsections ? (
                        <div className="space-y-6">
                          {section.subsections.map((subsection, subIndex) => (
                            <div key={subIndex} className="ml-4">
                              <h3 className="text-lg font-semibold text-foreground mb-2">
                                {subsection.subtitle}
                              </h3>
                              <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                                {subsection.content}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                          {section.content}
                        </p>
                      )}
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
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. 
                We may update this policy from time to time, and any changes will be posted on this page with an updated revision date.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
