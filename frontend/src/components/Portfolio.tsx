import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, FileText, Globe, Smartphone, Video } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Maison Commerce",
    category: "Website",
    icon: Globe,
    description: "A polished e-commerce storefront built for premium product discovery and conversion.",
    tags: ["React", "Commerce UX", "Performance"],
    url: "https://maison.thinkmoreai.com/",
    image: "/images/portfolio/ecommerce.webp",
  },
  {
    id: 2,
    title: "NexaPay FinTech",
    category: "Mobile App",
    icon: Smartphone,
    description: "A secure payment experience with modern onboarding and transaction-first flows.",
    tags: ["Flutter", "Node.js", "Secure APIs"],
    url: "https://nexapay.thinkmoreai.com/",
    image: "/images/portfolio/mobile.webp",
  },
  {
    id: 3,
    title: "YumRush Delivery",
    category: "Website",
    icon: Globe,
    description: "Restaurant ordering and delivery platform with real-time order visibility.",
    tags: ["Vue", "Python", "AWS"],
    url: "https://yumrush.thinkmoreai.com/",
    image: "/images/portfolio/food.webp",
  },
  {
    id: 4,
    title: "Brand Video Production",
    category: "Video Editing",
    icon: Video,
    description: "High-retention video edits and motion graphics for social and brand campaigns.",
    tags: ["Motion", "4K", "Brand Story"],
    url: "https://drive.google.com/file/d/134pW1Ai3qzkDdVnT4DAKf_73s0gaW_E8/view?usp=drivesdk",
    image: "/images/portfolio/video.webp",
  },
  {
    id: 5,
    title: "Market Research Report",
    category: "Research",
    icon: FileText,
    description: "Investor-ready market research with data analysis and concise executive storytelling.",
    tags: ["Research", "Charts", "Insights"],
    url: "https://drive.google.com/file/d/18U6DK0hfOQD0A4KXeyvBAtGWB_2S7lLS/view?usp=sharing",
    image: "/images/portfolio/Research-report.webp",
  },
  {
    id: 6,
    title: "Enterprise SaaS",
    category: "Website",
    icon: Globe,
    description: "SaaS marketing experience with analytics-forward messaging and clean product framing.",
    tags: ["React", "SaaS", "Analytics"],
    url: "https://enterprise.thinkmoreai.com/",
    image: "/images/portfolio/saas.webp",
  },
];

const categories = ["All", "Website", "Mobile App", "Video Editing", "Research"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden bg-background">
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Digital work with product polish and business intent.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            A focused sample of websites, apps, content, and analysis systems delivered
            across growth, product, and operational workflows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-white text-muted-foreground hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <motion.a
              key={item.id}
              layout
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="premium-card group block overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-primary">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.88] via-primary/[0.12] to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                  <div>
                    <span className="border border-white/[0.15] bg-white/[0.12] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                      {item.category}
                    </span>
                    <h3 className="mt-3 font-heading text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-white/20 bg-white/[0.12] text-white transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border bg-secondary/70 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
