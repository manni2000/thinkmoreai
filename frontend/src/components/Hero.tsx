import { Component, lazy, Suspense, useEffect, useState, type ErrorInfo, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Pause, Play } from "lucide-react";
import { Link } from "react-router-dom";

const HeroScene3D = lazy(() => import("@/components/HeroScene3D"));

class SceneErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error: Error, info: ErrorInfo) { console.warn("ThinkCore 3D unavailable", error, info); }
  render() { return this.state.failed ? null : this.props.children; }
}

const ThinkCorePoster = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden="true">
    <div className="absolute h-[64%] w-[64%] rounded-full bg-cyan-300/10 blur-[70px]" />
    <div className="relative aspect-square w-[72%] max-w-[470px] [transform-style:preserve-3d]">
      <div className="absolute inset-[16%] rotate-[12deg] rounded-[28%] border-[7px] border-white/16 shadow-[inset_0_0_30px_rgba(255,255,255,.08),0_0_35px_rgba(119,229,255,.09)]" />
      <div className="absolute inset-[18%] -rotate-[43deg] rounded-[28%] border-[7px] border-cyan-200/30 shadow-[inset_0_0_24px_rgba(119,229,255,.12)]" />
      <div className="absolute inset-[20%] rotate-[67deg] rounded-[28%] border-[6px] border-violet-300/25" />
      <div className="absolute left-1/2 top-1/2 h-[28%] w-[28%] -translate-x-1/2 -translate-y-1/2 rounded-[38%] border border-white/25 bg-[radial-gradient(circle_at_35%_30%,#d9fbff_0%,#77e5ff_10%,#9690ff_42%,#111720_78%)] shadow-[0_0_55px_rgba(119,229,255,.48)]" />
    </div>
  </div>
);

const Hero = () => {
  const [canRenderScene, setCanRenderScene] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const capable = window.matchMedia("(min-width: 768px)").matches && (navigator.hardwareConcurrency ?? 4) >= 4;
    setMotionPaused(reduced);
    setCanRenderScene(capable);
  }, []);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#080b10] pt-[76px] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_77%_42%,rgba(119,229,255,.12),transparent_28%),radial-gradient(circle_at_92%_18%,rgba(150,144,255,.09),transparent_24%)]" />
      <div className="surface-grid absolute inset-0 opacity-55 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

      <div className="container-custom relative z-10 grid min-h-[calc(100svh-76px)] items-center gap-5 py-12 md:grid-cols-[1.05fr_.95fr] md:gap-0 md:py-16 lg:py-20">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, ease: [0.22,1,0.36,1] }} className="relative z-10 max-w-[800px]">
          <div className="section-eyebrow">Intelligence, engineered</div>
          <h1 className="mt-7 max-w-[780px] font-heading text-[clamp(2.5rem,7.15vw,7rem)] font-medium leading-[.92] tracking-[-.075em] text-white">
            <span className="block">AI that works.</span>
            <span className="block">Software that</span>
            <span className="block">moves <span className="gradient-text">business</span></span>
            <span className="gradient-text block">forward.</span>
          </h1>
          <p className="mt-7 max-w-[610px] text-base leading-7 text-white/62 sm:text-lg sm:leading-8">
            We design and build AI-powered products, intelligent automation, applications, and growth systems around your business goals.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="group inline-flex min-h-14 items-center justify-center gap-3 bg-accent px-7 text-sm font-semibold text-accent-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-white">
              Start a project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/portfolio" className="group inline-flex min-h-14 items-center justify-center gap-3 border border-white/18 bg-white/[.035] px-7 text-sm font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/[.08]">
              Explore our work <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-5">
            {["AI products", "Web & mobile", "Automation", "Analytics & growth"].map((item, index) => (
              <span key={item} className="font-mono text-[10px] uppercase tracking-[.17em] text-white/42"><span className="mr-2 text-accent/70">0{index + 1}</span>{item}</span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .12 }} className="relative -mx-5 h-[420px] min-w-0 md:mx-0 md:h-[min(70vw,720px)] md:min-h-[570px]">
          <ThinkCorePoster />
          {canRenderScene && (
            <SceneErrorBoundary>
              <Suspense fallback={null}><HeroScene3D paused={motionPaused} /></Suspense>
            </SceneErrorBoundary>
          )}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[4%] top-[30%] flex items-center gap-2 md:left-[1%]"><span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_#77e5ff]" /><span className="tech-label text-white/60">AI</span></div>
            <div className="absolute right-[3%] top-[43%] flex items-center gap-2"><span className="tech-label text-white/60">Automation</span><span className="h-1.5 w-1.5 rounded-full bg-violet-300" /></div>
            <div className="absolute bottom-[18%] left-[22%] flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/70" /><span className="tech-label text-white/60">Products</span></div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
