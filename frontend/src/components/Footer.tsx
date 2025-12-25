import { Linkedin, Twitter, Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
						<img
							src="/thinkmoreai-logo.png"
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
              <a 
                href="#" 
                className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
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
                    className="text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile Apps",
                "AI Chatbots",
                "Data Analytics",
                "CA Services",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    className="text-primary-foreground/60 hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a 
                  href="tel:+919608826629" 
                  className="text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  +91-9608826629
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a 
                  href="mailto:info@thinkmoreai.com" 
                  className="text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  info@thinkmoreai.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="text-center">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} ThinkmoreAI. All rights reserved.
            </p>
            <p className="text-primary-foreground/40 text-xs mt-1">
              Your Vision, Our Execution
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
