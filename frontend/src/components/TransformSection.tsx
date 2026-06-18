import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const TransformSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground">
      <div className="dark-surface-grid absolute inset-0 opacity-45" />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,191,69,0.13),transparent_38%,rgba(86,242,228,0.11))]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid items-center gap-8 lg:grid-cols-[1fr_auto]"
        >
          <div className="flex max-w-3xl flex-col items-center text-center lg:items-start lg:text-left">
            <span className="section-eyebrow border-white/[0.15] bg-white/[0.08] text-amber-soft">
              Next step
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Ready to turn an AI idea into a commercial system?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-primary-foreground/[0.68] sm:text-lg">
              Book a discovery session and get a practical roadmap for scope, delivery,
              technology, and measurable return.
            </p>
          </div>

          <Button variant="hero" size="xl" asChild className="group justify-self-center lg:justify-self-end">
            <a
              href="https://cal.id/enquire.thinkmoreai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
            >
              <Sparkles className="h-5 w-5" />
              Book Your Free Demo
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformSection;
