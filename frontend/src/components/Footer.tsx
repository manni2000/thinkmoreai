import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Web Development",
  "Mobile Apps",
  "AI Chatbots",
  "Data Analytics",
  "Social Media Marketing",
  "SEO Optimization",
];

const socials = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/thinkmoreai", label: "LinkedIn" },
  { icon: FaFacebook, href: "https://www.facebook.com/share/1AzqgtTzzJ/", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/thinkmoreai", label: "Instagram" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark-surface-grid relative overflow-hidden bg-primary py-14 text-primary-foreground">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,191,69,0.08),transparent_42%,rgba(86,242,228,0.08))]" />

      <div className="container-custom relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.7fr_0.8fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/thinkmoreai-logo.webp" alt="ThinkMoreAI Logo" className="h-16 w-auto sm:h-20" />
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-2xl font-extrabold">ThinkMoreAI</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/[0.62]">
                  Your Vision, Our Execution
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-primary-foreground/[0.62]">
              AI-driven development, automation, analytics, and growth systems delivered
              with precision, clarity, and execution discipline.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.055] text-primary-foreground/[0.68] transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-primary-foreground/[0.62] transition-colors hover:text-accent">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold">Services</h4>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="/services" className="text-sm text-primary-foreground/[0.62] transition-colors hover:text-accent">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold">Contact</h4>
            <div className="mt-5 space-y-4">
              {[
                { icon: Phone, info: "+91-9608826629", href: "tel:+919608826629" },
                { icon: Mail, info: "manishmandal9734@gmail.com", href: "mailto:manishmandal9734@gmail.com" },
              ].map((contact) => (
                <a
                  key={contact.info}
                  href={contact.href}
                  className="flex items-center gap-3 text-sm text-primary-foreground/[0.62] transition-colors hover:text-accent"
                >
                  <span className="flex h-9 w-9 items-center justify-center border border-accent/25 bg-accent/10 text-accent">
                    <contact.icon className="h-4 w-4" />
                  </span>
                  {contact.info}
                </a>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild className="mt-6 w-full">
              <a href="https://cal.id/enquire.thinkmoreai" target="_blank" rel="noopener noreferrer">
                Book Discovery Call
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-center text-sm text-primary-foreground/[0.48] sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {currentYear} ThinkMoreAI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="transition-colors hover:text-accent">
              Privacy Policy
            </a>
            <span>/</span>
            <a href="/terms-of-service" className="transition-colors hover:text-accent">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
