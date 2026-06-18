import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Globe2, Handshake, Layers3, Target, Users } from "lucide-react";

const trustSignals = [
  {
    icon: Users,
    title: "Senior execution team",
    description: "Operators from MNCs and high-growth startup environments.",
  },
  {
    icon: Globe2,
    title: "Global delivery",
    description: "Remote-first collaboration for clients across regions and time zones.",
  },
  {
    icon: Handshake,
    title: "Partnership mindset",
    description: "Clear communication, roadmap ownership, and post-launch support.",
  },
  {
    icon: Layers3,
    title: "Full-stack capability",
    description: "Strategy, product, AI, automation, growth, and compliance support.",
  },
];

const operatingPoints = [
  "Business problem mapped before technology decisions",
  "AI workflows designed around measurable operational lift",
  "Production-ready engineering with security and maintainability",
  "Roadmaps, demos, and milestones communicated in plain language",
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding surface-grid relative overflow-hidden bg-background">
      <div className="container-custom relative z-10">
        <div ref={ref} className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left"
          >
            <span className="section-eyebrow">About us</span>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Practical AI execution for teams that need products, not presentations.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              ThinkMoreAI combines strategy, automation, analytics, product engineering,
              and growth services into one delivery partner. We help startups, SMEs,
              and enterprise teams turn ideas into scalable systems with clarity and speed.
            </p>

            <div className="mt-8 grid w-full gap-3 text-left">
              {operatingPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.1 + index * 0.06 }}
                  className="flex items-start gap-3 border-l-2 border-accent/70 bg-white/70 px-4 py-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm font-medium leading-6 text-foreground/[0.82]">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="premium-card bg-primary p-6 text-primary-foreground sm:col-span-2">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <Target className="h-8 w-8 text-accent" />
                  <h3 className="mt-5 font-heading text-2xl font-bold">
                    Built around measurable outcomes
                  </h3>
                </div>
                <p className="max-w-sm text-sm leading-6 text-primary-foreground/[0.66]">
                  Every engagement starts with the operational, revenue, or delivery metric
                  the system must improve.
                </p>
              </div>
            </div>

            {trustSignals.map((signal, index) => (
              <motion.div
                key={signal.title}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.18 + index * 0.06 }}
                className="premium-card p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center border border-accent/25 bg-accent/10 text-accent">
                  <signal.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                  {signal.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {signal.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
