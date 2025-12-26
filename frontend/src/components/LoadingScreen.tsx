import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles, Zap, Shield } from "lucide-react";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-navy-deep"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                background: [
                  "radial-gradient(circle 800px at 20% 50%, rgba(245, 166, 35, 0.08) 0%, transparent 50%)",
                  "radial-gradient(circle 800px at 80% 50%, rgba(245, 166, 35, 0.08) 0%, transparent 50%)",
                  "radial-gradient(circle 800px at 20% 50%, rgba(245, 166, 35, 0.08) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute inset-0"
            />

            <motion.div
              animate={{
                background: [
                  "radial-gradient(circle 600px at 80% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
                  "radial-gradient(circle 600px at 20% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
                  "radial-gradient(circle 600px at 80% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute inset-0"
            />

            {/* Floating Orbs */}
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -10, 0], scale: [1, 0.9, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-32 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: "easeOut",
                delay: 0.2
              }}
              className="mb-8"
            >
              <motion.img
                src="/thinkmoreai-logo.png"
                alt="ThinkMoreAI Logo"
                className="w-32 h-32 md:w-40 md:h-40"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Company Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mb-4"
            >
              ThinkMoreAI
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-primary-foreground/80 text-center max-w-md mb-12"
            >
              AI-Powered Digital Solutions
            </motion.p>

            {/* Loading Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center gap-8"
            >
              {/* Loading Dots */}
              <div className="flex items-center gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-accent rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* Feature Icons */}
              <div className="hidden md:flex items-center gap-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-accent" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="w-6 h-6 text-accent" />
                </motion.div>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Shield className="w-6 h-6 text-accent" />
                </motion.div>
              </div>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
              className="mt-12 h-1 bg-accent/20 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-accent to-orange-400 rounded-full"
              />
            </motion.div>
          </div>

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
