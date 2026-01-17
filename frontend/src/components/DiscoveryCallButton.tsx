import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DiscoveryCallButtonProps {
  link: string;
}

const DiscoveryCallButton: React.FC<DiscoveryCallButtonProps> = ({ link }) => {
  const [showStickyCTA, setShowStickyCTA] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 200px
      if (window.scrollY > 200) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showStickyCTA && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed left-6 top-1/3 -translate-y-1/2 z-40 hidden sm:block"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="hero"
              size="lg"
              asChild
              className="shadow-2xl min-h-[240px] w-16 py-4 px-2 rounded-2xl hover:shadow-accent/50 hover:shadow-2xl transition-all duration-300"
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center h-full gap-2"
              >
                {/* ⚡ Zap – TOP */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                >
                  <Zap className="w-5 h-5" />
                </motion.div>

                {/* 📝 Vertical Text – CENTER */}
                <span
                  className="text-sm font-medium text-center"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  Book a Discovery Call
                </span>

                {/* ➡ Arrow – BOTTOM */}
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </motion.div>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DiscoveryCallButton;
