import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useSpring(useTransform(scrollY, [0, 300], [1, 0.8]), { stiffness: 300, damping: 30 });
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setShowStickyCTA(latest > 400);
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-20 bg-gradient-to-br from-primary via-primary/95 to-navy-deep">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle 800px at 20% 50%, rgba(245, 166, 35, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle 800px at 80% 50%, rgba(245, 166, 35, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle 800px at 20% 50%, rgba(245, 166, 35, 0.08) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
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
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute inset-0"
        />

        Animated Grid
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 0 L 40 0 M 0 40 L 40 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating Orbs with mouse interaction */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex justify-start mt-8 sm:mt-6 lg:mt-6">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-accent/20 backdrop-blur-md border border-accent/40 hover:border-accent/60 transition-all duration-300 group">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="group-hover:text-accent/80 transition-colors"
                >
                  <Sparkles className="w-5 h-5 text-accent" />
                </motion.div>
                <span className="text-primary-foreground/90 font-medium text-sm">
                  AI-Powered Solutions
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-primary-foreground">
                AI Solutions That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-yellow-300">
                  Double Your Efficiency
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-primary-foreground/75 max-w-xl leading-relaxed"
            >
              Enterprise AI development that delivers 3x ROI in 6 months. Trusted by 50+ companies for automation, analytics, and intelligent digital transformation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full sm:w-auto"
              >
                <motion.div
                  className="absolute inset-0 bg-accent rounded-lg opacity-0 blur-lg"
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
                <Button variant="hero" size="xl" asChild className="group relative w-full sm:w-auto">
                  <a href="https://cal.id/enquire.thinkmoreai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 w-full">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 1.5 }}
                    >
                      <Zap className="w-4 h-4" />
                    </motion.div>
                    Book a Discovery Call
                    <motion.div
                      className="overflow-hidden"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </a>
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                className="relative w-full sm:w-auto"
              >
                <Button variant="heroOutline" size="xl" asChild className="group w-full sm:w-auto">
                  <a href="/portfolio" className="inline-flex items-center justify-center gap-2 w-full">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <TrendingUp className="w-4 h-4" />
                    </motion.div>
                    View Our Work
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-center justify-center pt-8"
            >
              <div className="flex flex-wrap items-center justify-center gap-4 mb-4 sm:justify-start">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-white">SOC 2 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-sm font-medium text-white">98% Success Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-white">40% Faster Delivery</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-sm text-white/80 text-center sm:text-left max-w-md">
                  Trusted by 50+ companies • 3x average ROI • 6-month implementation
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right – AI Robot Operator with enhanced animations */}
          <motion.div
            variants={itemVariants}
            style={{ y, opacity, scale }}
            className="hidden lg:flex relative h-[650px] w-full justify-end items-center overflow-visible"
          >
            {/* Deep background dissolver (kills rectangle edges) */}
            <div
              className="absolute right-[-360px] top-1/2 -translate-y-1/2
              w-[760px] h-[520px]
              bg-[radial-gradient(ellipse_at_center,rgba(10,18,35,0.85)_35%,rgba(10,18,35,0.6)_55%,rgba(10,18,35,0)_80%)]
              pointer-events-none"
            />

            {/* Gold ambient glow */}
            <div
              className="absolute right-[-320px] top-1/2 -translate-y-1/2
              w-[560px] h-[420px]
              bg-[radial-gradient(circle,rgba(245,166,35,0.22),transparent_70%)]
              blur-3xl pointer-events-none"
            />

            {/* Robot Image with enhanced animations */}
            <motion.img
              src="/robot-img.webp"
              alt="AI operator working on intelligent systems"
              className="
                relative z-10
                w-[750px]
                max-w-none
                object-contain
                drop-shadow-[0_60px_120px_rgba(0,0,0,0.65)]
              "
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse 65% 55% at center 45%, rgba(0,0,0,1) 15%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0) 90%)",
                maskImage:
                  "radial-gradient(ellipse 65% 55% at center 45%, rgba(0,0,0,1) 15%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0) 90%)",
                transform: "translateX(-300px)",
              }}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{
                opacity: 1,
                y: 10,
                scale: 1,
                rotate: [0, 1, -1, 0]
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 }
              }}
            />

            {/* Enhanced floating particles with varied animations */}
            {[...Array(12)].map((_, i) => {
              const size = Math.random() * 3 + 1;
              const duration = Math.random() * 4 + 2;
              const delay = Math.random() * 2;

              return (
                <motion.span
                  key={i}
                  className="absolute rounded-full bg-accent"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    right: `${50 + Math.random() * 200}px`,
                    top: `${100 + Math.random() * 400}px`,
                  }}
                  animate={{
                    opacity: [0, 1, 0.8, 0],
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay,
                  }}
                />
              );
            })}

            {/* Interactive glow effect */}
            <motion.div
              className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-96 h-96"
              style={{
                background: `radial-gradient(circle, rgba(245,166,35,0.3) 0%, transparent 70%)`,
                filter: 'blur(40px)',
                transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
          />
          </motion.div>
        </motion.div>
      </div>

      {/* Sticky CTA Button */}
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
                  href="https://cal.id/enquire.thinkmoreai"
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
    </section>
  );
};

export default Hero;