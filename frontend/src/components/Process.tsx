import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calculator, Code2, HeadphonesIcon, PenTool, Phone } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Discovery",
    description: "We clarify goals, constraints, stakeholders, and measurable success criteria.",
  },
  {
    number: "02",
    icon: Calculator,
    title: "Estimate",
    description: "You get a realistic scope, timeline, cost range, and implementation path.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Design",
    description: "We define UX, architecture, data flow, integrations, and launch milestones.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Build",
    description: "Agile delivery with weekly demos, quality checks, and transparent progress.",
  },
  {
    number: "05",
    icon: HeadphonesIcon,
    title: "Scale",
    description: "Post-launch monitoring, improvements, documentation, and long-term support.",
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding dark-surface-grid relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,191,69,0.08)_0%,transparent_38%,rgba(86,242,228,0.08)_100%)]" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="section-eyebrow border-white/[0.15] bg-white/[0.08] text-amber-soft">
            Process
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            A delivery rhythm that keeps momentum visible.
          </h2>
          <p className="mt-5 text-lg leading-8 text-primary-foreground/[0.68]">
            Every project is structured around decisions, demos, and measurable outcomes,
            so progress never disappears into a black box.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-white/[0.12] lg:block" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="relative border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center border border-accent/35 bg-accent/10 text-accent">
                  <step.icon className="h-7 w-7" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-white/[0.42]">
                  {step.number}
                </p>
                <h3 className="mt-2 font-heading text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-primary-foreground/[0.62]">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
