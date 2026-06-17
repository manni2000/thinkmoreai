import { AnimatePresence, motion } from "framer-motion";
import { Bot, ShieldCheck, Sparkles } from "lucide-react";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="dark-surface-grid fixed inset-0 z-50 flex items-center justify-center bg-primary text-primary-foreground"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,191,69,0.12),transparent_45%,rgba(86,242,228,0.1))]" />

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <motion.img
              src="/thinkmoreai-logo.webp"
              alt="ThinkMoreAI Logo"
              className="h-24 w-auto md:h-32"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mt-6 font-heading text-4xl font-extrabold md:text-6xl"
            >
              ThinkMoreAI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.22 }}
              className="mt-4 max-w-md text-base leading-7 text-primary-foreground/[0.68] md:text-lg"
            >
              Preparing AI-powered digital systems.
            </motion.p>

            <div className="mt-8 flex items-center gap-4 text-accent">
              {[Sparkles, Bot, ShieldCheck].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="flex h-11 w-11 items-center justify-center border border-accent/30 bg-accent/10"
                  animate={{ opacity: [0.45, 1, 0.45] }}
                  transition={{ duration: 1.4, repeat: Infinity, delay: index * 0.18 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
              ))}
            </div>

            <div className="mt-9 h-1 w-56 overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-accent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.25, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
