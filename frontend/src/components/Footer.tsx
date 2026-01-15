import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/thinkmoreai-logo.webp"
                alt="ThinkMoreAI Logo"
                className="h-20 w-auto"
              />
              <span className="font-heading font-bold text-2xl">ThinkMoreAI</span>
            </div>
            <p className="text-primary-foreground/60 max-w-md leading-relaxed mb-6">
              AI-driven development, automation, analytics, and compliance
              delivered with precision and execution excellence.
            </p>
            <div className="flex gap-4">
              {[
                { icon: FaLinkedin, href: "https://www.linkedin.com/company/thinkmoreai", label: "LinkedIn" },
                { icon: FaFacebook, href: "https://www.facebook.com/share/1AzqgtTzzJ/", label: "Facebook" },
                { icon: FaInstagram, href: "https://www.instagram.com/thinkmoreai", label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
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
                // {
                //   name: "Technologies",
                //   href: "/technologies",
                // },
                {
                  name: "Team",
                  href: "/team",
                },
                {
                  name: "Contact",
                  href: "/contact",
                },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <div className="w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile Apps",
                "AI Chatbots",
                "Data Analytics",
                "Social Media Marketing",
                "SEO Optimization",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    className="text-primary-foreground/60 hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span>{service}</span>
                    <div className="w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4">
              Contact Info
            </h4>
            <div className="space-y-4">
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
              ].map((contact) => (
                <div key={contact.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <contact.icon className="w-5 h-5 text-accent" />
                  </div>
                  <a 
                    href={contact.href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors duration-300"
                  >
                    {contact.info}
                  </a>
                </div>
              ))}
            </div>
            
            {/* Booking Button */}
            <div className="mt-4">
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
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col items-center justify-center gap-4">
          <div className="text-center">
            <p className="text-primary-foreground/50 text-sm flex items-center gap-2">
              <span>© {currentYear} ThinkMoreAI. All rights reserved.</span>
            </p>
            <p className="text-primary-foreground/40 text-xs mt-1">
              Your Vision, Our Execution
            </p>
          </div>
          <div className="flex items-center gap-4 text-primary-foreground/40 text-xs">
            <a href="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="/terms-of-service" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
