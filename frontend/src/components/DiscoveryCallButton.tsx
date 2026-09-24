import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";

interface DiscoveryCallButtonProps {
  link: string;
}

const DiscoveryCallButton = ({ link }: DiscoveryCallButtonProps) => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowStickyCTA(window.scrollY > 200);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showStickyCTA && (
        <>
          {/* Desktop: slim side tab that expands on hover */}
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -90 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="group fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 sm:block"
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a discovery call"
              className="relative flex items-stretch"
            >
              {/* Soft glow aura */}
              <span className="pointer-events-none absolute -inset-1 rounded-r-2xl bg-accent/30 opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-80" />
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-r-2xl ring-1 ring-accent/40"
                animate={{ opacity: [0.35, 0, 0.35] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Collapsed slim tab */}
              <div className="relative flex min-h-[210px] w-14 flex-col items-center justify-center gap-3 overflow-hidden rounded-r-2xl border-y border-r border-accent-foreground/10 bg-[linear-gradient(180deg,hsl(var(--amber-soft)),hsl(var(--accent)))] px-2 py-5 text-accent-foreground shadow-[0_22px_55px_-25px_rgba(245,166,35,0.9)] transition-shadow duration-300 group-hover:shadow-[0_28px_65px_-24px_rgba(245,166,35,1)]">
                {/* Sheen sweep on hover */}
                <span className="pointer-events-none absolute inset-0 -translate-y-full bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.3),transparent)] transition-transform duration-700 ease-out group-hover:translate-y-full" />

                {/* Live status dot */}
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white/70" />
                </span>

                <CalendarCheck className="h-5 w-5" strokeWidth={2.4} />

                <span
                  className="select-none text-center text-[11px] font-bold uppercase tracking-[0.22em]"
                  style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                >
                  Discovery Call
                </span>

                <ArrowRight className="h-4 w-4 rotate-90 opacity-80" strokeWidth={2.4} />
              </div>

              {/* Panel that slides out on hover */}
              <div className="relative flex max-w-0 items-center overflow-hidden rounded-r-2xl border-y border-r border-accent/40 bg-[linear-gradient(120deg,hsl(var(--amber-soft)),hsl(var(--accent)))] text-accent-foreground opacity-0 shadow-[0_28px_65px_-24px_rgba(245,166,35,1)] transition-all duration-300 ease-out group-hover:max-w-[280px] group-hover:pl-1 group-hover:pr-6 group-hover:opacity-100">
                <div className="flex flex-col whitespace-nowrap py-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-foreground/70">
                    Free · direct scheduling
                  </span>
                  <span className="mt-0.5 font-heading text-lg font-extrabold leading-tight">
                    Book a Discovery Call
                  </span>
                </div>
                <ArrowRight
                  className="ml-4 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={2.6}
                />
              </div>
            </a>
          </motion.div>

          {/* Mobile: compact pill docked bottom-left (clears the chat/WhatsApp stack on the right) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="fixed bottom-5 left-4 z-40 sm:hidden"
            style={{ marginBottom: "env(safe-area-inset-bottom)" }}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a discovery call"
              className="relative flex items-center gap-2.5 overflow-hidden rounded-full border border-accent-foreground/10 bg-[linear-gradient(120deg,hsl(var(--amber-soft)),hsl(var(--accent)))] py-2.5 pl-3 pr-4 text-accent-foreground shadow-[0_16px_40px_-18px_rgba(245,166,35,0.95)] active:scale-95 transition-transform"
            >
              <span className="pointer-events-none absolute -inset-1 rounded-full bg-accent/30 opacity-50 blur-lg" />
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/25">
                <CalendarCheck className="h-4 w-4" strokeWidth={2.4} />
                <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                </span>
              </span>
              <span className="relative text-sm font-bold tracking-tight">
                Discovery Call
              </span>
              <ArrowRight className="relative h-4 w-4" strokeWidth={2.6} />
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DiscoveryCallButton;
