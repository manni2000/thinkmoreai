import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const Hero = () => {
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

        {/* Animated Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating Orbs */}
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
            <motion.div variants={itemVariants} className="inline-flex mt-6">
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
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-yellow-300">
                  Intelligent
                </span>{" "}
                Digital Solutions That Scale
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-primary-foreground/75 max-w-xl leading-relaxed"
            >
              AI-driven development, automation, analytics, and compliance — delivered with precision and execution excellence. Transform your ideas into scalable, profitable products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="hero" size="xl" asChild className="group">
                  <a href="/contact" className="inline-flex items-center gap-3">
                    Get a Free Consultation
                    <motion.div
                      className="overflow-hidden"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="/#portfolio">View Our Work</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right – AI Robot Operator (Perfect Blend) */}
          <motion.div
            variants={itemVariants}
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

            {/* Robot Image */}
            <motion.img
              src="/robot-img.png"
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
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ duration: 1.3, ease: "easeOut" }}
            />

            {/* Floating gold particles */}
            {[...Array(7)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-accent"
                style={{
                  right: `${80 + i * 40}px`,
                  top: `${160 + (i % 4) * 60}px`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [-14, 14, -14],
                }}
                transition={{
                  duration: 3.5 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;