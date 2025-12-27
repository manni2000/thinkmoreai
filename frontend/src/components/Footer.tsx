import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle 800px at 20% 50%, rgba(245, 166, 35, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle 800px at 80% 50%, rgba(245, 166, 35, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle 800px at 20% 50%, rgba(245, 166, 35, 0.05) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 17 }}
            >
              <motion.img
                src="/thinkmoreai-logo.png"
                alt="ThinkMoreAI Logo"
                className="h-20 w-auto"
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.4 }}
              />
              <span className="font-heading font-bold text-2xl">ThinkMoreAI</span>
            </motion.div>
            <motion.p 
              className="text-primary-foreground/60 max-w-md leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              viewport={{ once: true }}
            >
              AI-driven development, automation, analytics, and compliance
              delivered with precision and execution excellence.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {[
                { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                { icon: "image", src: "/images/portfolio/x.png", href: "#", label: "X" },
                { icon: FaFacebook, href: "#", label: "Facebook" },
                { icon: FaInstagram, href: "#", label: "Instagram" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {social.icon === "image" ? (
                    <img src={social.src} alt={social.label} className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  ) : (
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  )}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h4 
              className="font-heading font-semibold mb-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Quick Links
            </motion.h4>
            <motion.ul className="space-y-3">
              {[
                {
                  name: "About",
                  href: "/about",
                },
                {
                  name: "Services",
                  href: "/services",
                },
                {
                  name: "Portfolio",
                  href: "/portfolio",
                },
                {
                  name: "Team",
                  href: "/team",
                },
                {
                  name: "Contact",
                  href: "/contact",
                },
              ].map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{link.name}</span>
                    <motion.div
                      className="w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-4"
                    />
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.h4 
              className="font-heading font-semibold mb-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Services
            </motion.h4>
            <motion.ul className="space-y-3">
              {[
                "Web Development",
                "Mobile Apps",
                "AI Chatbots",
                "Data Analytics",
                "CA Services",
              ].map((service, index) => (
                <motion.li 
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href="/services"
                    className="text-primary-foreground/60 hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{service}</span>
                    <motion.div
                      className="w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-4"
                    />
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h4 
              className="font-heading font-semibold mb-4"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact Info
            </motion.h4>
            <motion.div className="space-y-4">
              {[
                {
                  icon: Phone,
                  info: "+91-9608826629",
                  href: "tel:+919608826629",
                  label: "Phone"
                },
                {
                  icon: Mail,
                  info: "info@thinkmoreai.com",
                  href: "mailto:info@thinkmoreai.com",
                  label: "Email"
                },
              ].map((contact, index) => (
                <motion.div 
                  key={contact.label}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <contact.icon className="w-5 h-5 text-accent" />
                  </motion.div>
                  <motion.a 
                    href={contact.href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {contact.info}
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Booking Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-4"
            >
              <Button
                variant="accent"
                size="lg"
                asChild
                className="w-full text-sm py-3 h-12 min-h-[48px]"
              >
                <a href="https://cal.id/enquire.thinkmoreai" target="_blank" rel="noopener noreferrer">
                  Book Discovery Call
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-primary-foreground/10 flex flex-col items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <motion.p 
              className="text-primary-foreground/50 text-sm flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <span>© {currentYear} ThinkmoreAI. All rights reserved.</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
              </motion.div>
            </motion.p>
            <motion.p 
              className="text-primary-foreground/40 text-xs mt-1"
              whileHover={{ scale: 1.02 }}
            >
              Your Vision, Our Execution
            </motion.p>
          </div>
          <motion.div
            className="flex items-center gap-4 text-primary-foreground/40 text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#"
              className="hover:text-accent transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Privacy Policy
            </motion.a>
            <span>•</span>
            <motion.a
              href="#"
              className="hover:text-accent transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Terms of Service
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
