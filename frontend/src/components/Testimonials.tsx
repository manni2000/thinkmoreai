import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "CEO, TechStart India",
    country: "🇮🇳 India",
    rating: 5,
    text: "ThinkmoreAI transformed our entire digital presence. Their team's execution was flawless, and they delivered ahead of schedule.",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Founder, HealthFlow",
    country: "🇺🇸 USA",
    rating: 5,
    text: "Working with ThinkmoreAI was a game-changer. Their AI solutions helped us automate 70% of our customer support.",
  },
  {
    id: 3,
    name: "Ahmed Al-Rashid",
    role: "Director, Gulf Ventures",
    country: "🇦🇪 UAE",
    rating: 5,
    text: "Professional, reliable, and incredibly skilled. They understood our requirements perfectly and delivered exceptional results.",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Marketing Director, Digital Growth",
    country: "Europe (UK)",
    rating: 5,
    text: "Their SEO optimization services transformed our online presence. We went from page 3 to #1 in Google rankings within 3 months. Organic traffic increased by 200%!",
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
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Trusted by Clients{" "}
            <span className="gradient-text">Worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover-lift relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="font-heading font-bold text-accent">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  <p className="text-xs mt-0.5">{testimonial.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
