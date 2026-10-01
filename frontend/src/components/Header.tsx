import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Work", to: "/portfolio" },
  { label: "Services", to: "/services" },
  { label: "Capabilities", to: "/capabilities" },
  { label: "About", to: "/about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 24); update(); window.addEventListener("scroll", update, { passive:true }); return () => window.removeEventListener("scroll", update); }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = menuRef.current?.querySelectorAll<HTMLElement>("a,button");
    focusable?.[0]?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); triggerRef.current?.focus(); }
      if (event.key === "Tab" && focusable?.length) { const first = focusable[0], last = focusable[focusable.length-1]; if (event.shiftKey && document.activeElement===first) {event.preventDefault();last.focus();} else if (!event.shiftKey && document.activeElement===last) {event.preventDefault();first.focus();} }
    };
    document.addEventListener("keydown",handleKey);
    return () => { document.body.style.overflow=previous; document.removeEventListener("keydown",handleKey); };
  },[open]);
  return <>
    <a href="#main-content" className="studio-skip">Skip to content</a>
    <header className={`studio-header ${scrolled||open?"studio-header--scrolled":""}`}><nav className="studio-container studio-header__inside" aria-label="Primary navigation">
      <Link to="/" className="studio-wordmark" aria-label="ThinkMoreAI home"><img src="/thinkmoreai-logo.webp" alt="ThinkMoreAI logo" className="studio-wordmark__logo" width="40" height="40" decoding="async" /><span className="studio-wordmark__text"><span className="studio-wordmark__title">THINKMORE<span>AI</span></span><span className="studio-wordmark__tagline">Your Vision, Our Execution</span></span></Link>
      <div className="studio-header__links">{links.map(link=><Link key={link.label} to={link.to} aria-current={pathname===link.to?"page":undefined} className={pathname===link.to?"is-active":""}>{link.label}</Link>)}</div>
      <Link to="/contact" className="studio-header__cta">Start a project <ArrowUpRight size={16}/></Link>
      <button ref={triggerRef} type="button" className="studio-header__toggle" onClick={()=>setOpen(value=>!value)} aria-label={open?"Close menu":"Open menu"} aria-expanded={open} aria-controls="studio-mobile-nav">{open?<X size={24}/>:<Menu size={24}/>}</button>
    </nav></header>
    <AnimatePresence>{open&&<motion.div id="studio-mobile-nav" ref={menuRef} className="studio-mobile-nav" role="dialog" aria-modal="true" aria-label="Mobile navigation" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><div className="studio-container studio-mobile-nav__inside">{links.map((link,index)=><Link key={link.label} to={link.to} onClick={()=>setOpen(false)}><span>{link.label}</span><small>0{index+1}</small></Link>)}<Link to="/contact" className="studio-mobile-nav__cta" onClick={()=>setOpen(false)}>Start a project <ArrowUpRight size={18}/></Link><p>AI PRODUCTS · DIGITAL ENGINEERING · AUTOMATION</p></div></motion.div>}</AnimatePresence>
  </>;
}
