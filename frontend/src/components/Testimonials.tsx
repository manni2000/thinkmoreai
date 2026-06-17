import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "CEO, TechStart India",
    region: "India",
    text: "ThinkMoreAI transformed our digital presence with sharp execution and clear communication. The team delivered ahead of schedule.",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Founder, HealthFlow",
    region: "USA",
    text: "Their AI automation helped us remove repetitive support work and improve response quality without losing the human touch.",
  },
  {
    id: 3,
    name: "Ahmed Al-Rashid",
    role: "Director, Gulf Ventures",
    region: "UAE",
    text: "Professional, reliable, and technically strong. They understood our requirements and translated them into a clean product experience.",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Marketing Director, Digital Growth",
    region: "UK",
    text: "The SEO and analytics work gave us a clearer growth engine. We saw stronger search visibility and much better reporting discipline.",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="section-eyebrow">Client proof</span>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Trusted by teams building beyond the obvious.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Clients choose us when they need strategy and execution to move together.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="premium-card relative p-6"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-accent/[0.18]" />
              <div className="mb-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, itemIndex) => (
                  <Star key={itemIndex} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-sm leading-7 text-muted-foreground">
                "{testimonial.text}"
              </p>

              <div className="mt-7 border-t border-border pt-5">
                <p className="font-heading text-sm font-bold text-foreground">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{testimonial.role}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {testimonial.region}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
