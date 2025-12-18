import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Mail, Phone, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-rose-50 via-rose-50 to-pink-100 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle 800px at 20% 50%, rgba(245, 166, 35, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle 800px at 80% 50%, rgba(245, 166, 35, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Get In Touch
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Let's Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
              Amazing
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground"
          >
            Ready to transform your ideas into reality? We'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {['name', 'email'].map((field) => (
                <motion.div
                  key={field}
                  whileHover={{ y: -2 }}
                  onFocus={() => setFocusedField(field)}
                  onBlur={() => setFocusedField(null)}
                >
                  <label htmlFor={field} className="block text-sm font-semibold text-foreground mb-3 capitalize">
                    {field} *
                  </label>
                  <motion.div
                    className="relative"
                    animate={{
                      boxShadow: focusedField === field
                        ? "0 0 20px rgba(245, 166, 35, 0.2)"
                        : "0 0 0px rgba(245, 166, 35, 0)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Input
                      id={field}
                      name={field}
                      type={field === 'email' ? 'email' : 'text'}
                      placeholder={field === 'name' ? 'John Doe' : 'john@example.com'}
                      required
                      className="h-12 bg-card border-border focus:border-accent transition-all duration-300"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                className="h-12 bg-card border-border"
              />
            </div>

            <motion.div whileHover={{ y: -2 }}>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your project..."
                required
                rows={5}
                className="bg-card border-border resize-none focus:border-accent transition-all duration-300"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }} >
                    Sending...
                  </motion.div>
                ) : (
                  <>
                    Send Message
                    <motion.div className="overflow-hidden" whileHover={{ x: 5 }}>
                      <Send className="w-5 h-5" />
                    </motion.div>
                  </>
                )}
              </Button>
            </motion.div>
          </motion.form>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Information Cards */}
            {[
              { icon: Phone, label: "Phone", info: "+91-9608826629", href: "tel:+919608826629" },
              { icon: Mail, label: "Email", info: "info@thinkmoreai.com", href: "mailto:info@thinkmoreai.com" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-8 border border-border/50 hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-orange-400 flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="flex-grow">
                    <p className="font-semibold text-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-accent transition-colors duration-300"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-line">{item.info}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-8 bg-gradient-to-br from-accent/20 to-orange-400/10 border-accent/30 hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                Prefer a Call?
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a free consultation to discuss your project.
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="accent" asChild className="group">
                  <a href="/contact">
                    Book a Discovery Call
                    <motion.div whileHover={{ x: 3 }}>
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
