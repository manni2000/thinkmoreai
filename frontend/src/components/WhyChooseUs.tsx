import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HeadphonesIcon, Layers, ShieldCheck, Trophy, Users } from "lucide-react";

const reasons = [
  {
    icon: Trophy,
    title: "Outcome-led delivery",
    description: "Projects are shaped around business metrics, not just feature lists.",
  },
  {
    icon: Users,
    title: "Experienced operators",
    description: "Strategy, engineering, content, and growth expertise in one team.",
  },
  {
    icon: Layers,
    title: "End-to-end ownership",
    description: "From roadmap and design through build, launch, and iteration.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support after launch",
    description: "Monitoring, maintenance, and practical help as the system scales.",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding dark-surface-grid relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,191,69,0.09),transparent_40%,rgba(86,242,228,0.08))]" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12 grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end"
        >
          <div>
            <span className="section-eyebrow border-white/[0.15] bg-white/[0.08] text-amber-soft">
              Why ThinkMoreAI
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Built for founders and teams who need momentum.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-primary-foreground/[0.68]">
            We keep the work practical: clear scope, visible progress, senior thinking,
            and systems that are maintainable after launch.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-accent/30 bg-accent/10 text-accent">
                <reason.icon className="h-6 w-6" />
              </div>
              <div className="mt-6 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-amber-soft" />
                <h3 className="font-heading text-lg font-semibold text-white">
                  {reason.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-primary-foreground/[0.62]">
                {reason.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
