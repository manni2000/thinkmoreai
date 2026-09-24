import { ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const links = [
  ["Services", "/services"], ["Work", "/portfolio"], ["Process", "/process"], ["About", "/about"], ["Team", "/team"], ["Contact", "/contact"],
];
const socials = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/thinkmoreai", label: "LinkedIn" },
  { icon: FaFacebook, href: "https://www.facebook.com/share/1AzqgtTzzJ/", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/thinkmoreai", label: "Instagram" },
];

const Footer = () => (
  <footer className="relative border-t border-white/10 bg-[#080b10] py-12 text-white">
    <div className="container-custom">
      <div className="grid gap-12 lg:grid-cols-[1.25fr_.75fr_.75fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-3"><img src="/thinkmoreai-logo.webp" alt="" className="h-11 w-11 object-contain"/><span className="font-heading text-lg font-semibold">ThinkMore<span className="text-accent">AI</span></span></Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/45">AI-powered products, software, automation, analytics, and growth systems built around real business goals.</p>
          <Link to="/earn" className="mt-6 inline-flex items-center gap-2 text-sm text-white/62 transition-colors hover:text-accent">Referral program <ArrowUpRight className="h-4 w-4"/></Link>
        </div>
        <div><p className="tech-label text-white/30">Explore</p><nav aria-label="Footer navigation" className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 lg:grid-cols-1">{links.map(([name,href])=><Link key={href} to={href} className="text-sm text-white/55 transition-colors hover:text-white">{name}</Link>)}</nav></div>
        <div><p className="tech-label text-white/30">Connect</p><a href="mailto:manishmandal9734@gmail.com" className="mt-5 block break-all text-sm text-white/55 transition-colors hover:text-accent">manishmandal9734@gmail.com</a><a href="tel:+919608826629" className="mt-3 block text-sm text-white/55 transition-colors hover:text-accent">+91 96088 26629</a><div className="mt-6 flex gap-2">{socials.map((social)=><a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/45 transition-colors hover:border-accent/40 hover:text-accent"><social.icon className="h-4 w-4"/></a>)}</div></div>
      </div>
      <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/32 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} ThinkMoreAI. All rights reserved.</p><div className="flex gap-5"><Link to="/privacy-policy" className="hover:text-white">Privacy</Link><Link to="/terms-of-service" className="hover:text-white">Terms</Link><Link to="/faq" className="hover:text-white">FAQ</Link></div></div>
    </div>
  </footer>
);

export default Footer;
