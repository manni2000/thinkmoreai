import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isTransparent = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "border-transparent bg-primary/45 text-white backdrop-blur-md"
          : "border-b border-border/70 bg-white/90 text-foreground shadow-[0_12px_38px_-30px_rgba(5,7,13,0.55)] backdrop-blur-xl"
      }`}
    >
      <div className="container-custom">
        <nav className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/thinkmoreai-logo.webp" alt="ThinkMoreAI Logo" className="h-14 w-auto sm:h-16" />
            <div className="flex flex-col leading-tight">
              <span className={`font-heading text-2xl font-extrabold ${isTransparent ? "text-white" : "text-foreground"}`}>
                ThinkMoreAI
              </span>
              <span className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${isTransparent ? "text-white/75" : "text-muted-foreground"}`}>
                Your Vision, Our Execution
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <Link
              to="/earn"
              className={`relative px-4 py-2 text-sm font-bold transition-colors duration-300 ${
                isTransparent ? "text-amber-soft hover:text-amber-200" : "text-accent hover:text-accent/80"
              }`}
            >
              Earn ₹
            </Link>
            {navLinks.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                    isTransparent
                      ? active
                        ? "text-amber-soft"
                        : "text-white/72 hover:text-white"
                      : active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.span
                      layoutId="header-active-link"
                      className="absolute inset-x-4 -bottom-1 h-0.5 bg-accent"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Button variant="accent" asChild className="group">
              <Link to="/contact" className="inline-flex items-center gap-2">
                Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className={`flex h-10 w-10 items-center justify-center border lg:hidden ${
              isTransparent ? "border-white/20 text-white" : "border-border text-foreground"
            }`}
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24 }}
            className="border-t border-border bg-white text-foreground lg:hidden"
          >
            <div className="container-custom py-4">
              <div className="grid gap-1">
                <Link
                  to="/earn"
                  className="border border-accent/40 bg-accent/10 px-4 py-3 text-sm font-bold text-accent"
                >
                  Earn ₹ — Refer & get 10%
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`border px-4 py-3 text-sm font-semibold ${
                      location.pathname === link.href
                        ? "border-accent bg-accent/10 text-foreground"
                        : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Button variant="accent" asChild className="mt-4 w-full">
                <Link to="/contact">Free Consultation</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
