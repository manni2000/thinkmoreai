import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.25 }}
          className="fixed left-6 top-1/3 z-40 hidden -translate-y-1/2 sm:block"
        >
          <Button
            variant="hero"
            size="lg"
            asChild
            className="min-h-[220px] w-14 border border-accent/40 px-2 py-4 shadow-[0_22px_55px_-25px_rgba(245,166,35,0.9)] transition-all duration-300 hover:-translate-y-1 hover:shadow-accent/40"
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col items-center justify-center gap-3"
            >
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                <Zap className="h-5 w-5" />
              </motion.div>
              <span
                className="text-center text-xs font-semibold uppercase tracking-[0.16em]"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                }}
              >
                Discovery Call
              </span>
              <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                <ArrowRight className="h-5 w-5 rotate-90" />
              </motion.div>
            </a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DiscoveryCallButton;
