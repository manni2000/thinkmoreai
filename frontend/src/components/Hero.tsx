import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cpu,
  LineChart,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroScene3D from "@/components/HeroScene3D";

const proofPoints = [
  { value: "50+", label: "projects delivered" },
  { value: "3x", label: "average ROI target" },
  { value: "40%", label: "faster delivery" },
];

const capabilityCards = [
  {
    icon: Bot,
    label: "AI Automation",
    value: "Chatbots, workflows, and internal copilots",
  },
  {
    icon: LineChart,
    label: "Growth Systems",
    value: "Analytics, SEO, content, and conversion loops",
  },
  {
    icon: Cpu,
    label: "Product Engineering",
    value: "Web, mobile, cloud, and scalable integrations",
  },
];

const Hero = () => {
  return (
    <section className="relative isolate min-h-[88svh] overflow-hidden bg-[#05070d] pt-24 pb-12 text-white lg:pt-32 lg:pb-16">
      <HeroScene3D />

      <div className="dark-surface-grid absolute inset-0 z-[1] opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(5,7,13,0.97)_0%,rgba(5,7,13,0.82)_42%,rgba(5,7,13,0.36)_78%,rgba(5,7,13,0.72)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-background to-transparent" />

      <div className="container-custom relative z-10 grid min-h-[calc(88svh-9rem)] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="section-eyebrow border-white/[0.15] bg-white/[0.08] text-amber-soft">
            <Sparkles className="h-4 w-4" />
            AI execution studio
          </div>

          <h1 className="mt-7 font-heading text-5xl font-extrabold leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl">
            ThinkMoreAI
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.74] sm:text-xl">
            We design, build, and scale AI-powered products, automation, analytics,
            and growth systems for teams that need measurable business outcomes,
            not generic software.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="xl" asChild className="group">
              <a
                href="https://cal.id/enquire.thinkmoreai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3"
              >
                <Zap className="h-5 w-5" />
                Book a Discovery Call
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>

            <Button variant="heroOutline" size="xl" asChild className="group">
              <Link to="/portfolio" className="inline-flex items-center justify-center gap-3">
                View Work
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="mt-9 grid max-w-2xl grid-cols-3 border-y border-white/[0.12]">
            {proofPoints.map((point) => (
              <div key={point.label} className="py-5 pr-4">
                <div className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  {point.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-white/[0.48]">
                  {point.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/[0.64]">
            {["Production-grade builds", "Clear delivery milestones", "Long-term support"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-soft" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative hidden justify-self-end lg:block lg:w-full lg:max-w-[500px]"
        >
          <div className="border border-white/[0.12] bg-white/[0.055] p-5 shadow-[0_28px_90px_-55px_rgba(255,191,69,0.95)] backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/[0.44]">
                  Delivery cockpit
                </p>
                <p className="mt-1 font-heading text-lg font-semibold text-white">
                  AI readiness sprint
                </p>
              </div>
              <div className="inline-flex items-center gap-2 border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                <span className="h-1.5 w-1.5 bg-emerald-300" />
                Live
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {capabilityCards.map((item, index) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[2.75rem_1fr_auto] items-center gap-4 border border-white/10 bg-black/[0.18] p-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center border border-white/[0.12] bg-white/[0.08] text-amber-soft">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-white">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-white/[0.52]">{item.value}</p>
                  </div>
                  <span className="text-xs font-semibold text-white/[0.38]">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="border border-white/10 bg-white/[0.045] p-4">
                <ShieldCheck className="h-5 w-5 text-cyan-200" />
                <p className="mt-3 text-2xl font-bold text-white">NDA</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/[0.42]">
                  ready
                </p>
              </div>
              <div className="border border-white/10 bg-white/[0.045] p-4">
                <LineChart className="h-5 w-5 text-amber-soft" />
                <p className="mt-3 text-2xl font-bold text-white">KPIs</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/[0.42]">
                  mapped
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
