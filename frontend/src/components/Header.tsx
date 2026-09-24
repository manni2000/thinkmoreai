import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/portfolio" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = menuRef.current?.querySelectorAll<HTMLElement>("a, button");
    focusable?.[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
      if (event.key === "Tab" && focusable?.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <a href="#main-content" className="fixed left-4 top-3 z-[100] -translate-y-20 bg-accent px-4 py-3 font-semibold text-accent-foreground transition-transform focus:translate-y-0">Skip to content</a>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${isScrolled || open ? "border-white/10 bg-[#080b10]/90 shadow-2xl shadow-black/20 backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
        <nav className="container-custom flex h-[76px] items-center justify-between" aria-label="Primary navigation">
          <Link to="/" className="group flex items-center gap-2.5" aria-label="ThinkMoreAI home">
            <img src="/thinkmoreai-logo.webp" alt="" className="h-10 w-10 object-contain transition-transform duration-300 group-hover:rotate-3" />
            <span className="font-heading text-base font-semibold tracking-[-0.03em] text-white sm:text-lg">ThinkMore<span className="text-accent">AI</span></span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} aria-current={location.pathname === link.href ? "page" : undefined} className={`relative py-2 text-sm transition-colors ${location.pathname === link.href ? "text-white" : "text-white/58 hover:text-white"}`}>
                {link.name}
                {location.pathname === link.href && <motion.span layoutId="nav-active" className="absolute inset-x-0 -bottom-0.5 h-px bg-accent" />}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <Link to="/earn" className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/48 transition-colors hover:text-accent">Referral program</Link>
            <Link to="/contact" className="group inline-flex h-11 items-center gap-2 border border-accent/40 bg-accent px-5 text-sm font-semibold text-accent-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-white">
              Start a project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button ref={triggerRef} type="button" onClick={() => setOpen((value) => !value)} className="flex h-11 w-11 items-center justify-center border border-white/15 text-white lg:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Mobile navigation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-[#080b10] pt-[76px] lg:hidden">
            <motion.div ref={menuRef} initial={{ y: -18 }} animate={{ y: 0 }} exit={{ y: -18 }} className="container-custom flex min-h-[calc(100svh-76px)] flex-col py-8">
              <div className="flex flex-1 flex-col justify-center">
                {navLinks.map((link, index) => (
                  <Link key={link.name} to={link.href} className="flex min-h-16 items-center justify-between border-b border-white/10 py-4 font-heading text-3xl font-medium text-white">
                    <span>{link.name}</span><span className="font-mono text-[10px] text-white/35">0{index + 1}</span>
                  </Link>
                ))}
              </div>
              <div className="grid gap-3 pb-4">
                <Link to="/contact" className="flex min-h-14 items-center justify-center gap-2 bg-accent px-5 font-semibold text-accent-foreground">Start a project <ArrowUpRight className="h-4 w-4" /></Link>
                <Link to="/earn" className="flex min-h-12 items-center justify-center border border-white/15 px-5 text-sm text-white/70">Explore the referral program</Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
