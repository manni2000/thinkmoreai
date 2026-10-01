import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Cpu, Database, Globe, Layers, ShieldCheck, Zap } from "lucide-react";
import PageSeo from "@/components/PageSeo";
import { StudioArchitecture, StudioCTA } from "@/components/StudioExperience";
import Contact from "@/components/Contact";

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const capabilityPillars = [
  {
    num: "01",
    icon: Cpu,
    title: "AI, Machine Learning & Agentic Systems",
    summary:
      "Enterprise foundation model orchestration, deterministic RAG pipelines, fine-tuned domain models, and autonomous multi-agent task execution.",
    focusAreas: [
      "Deterministic foundation model orchestration",
      "High-dimensional vector retrieval & hybrid search",
      "Autonomous multi-agent workflows & tool calling",
    ],
  },
  {
    num: "02",
    icon: Globe,
    title: "Modern Frontend & Mobile Applications",
    summary:
      "Fluid, 60fps responsive interfaces across web, iOS, and Android. Built with strict type safety, tactile micro-animations, and accessible component architectures.",
    focusAreas: [
      "High-performance responsive web applications",
      "Cross-platform native iOS & Android applications",
      "Design systems with micro-animations & accessibility",
    ],
  },
  {
    num: "03",
    icon: Layers,
    title: "Distributed Backend & Real-Time APIs",
    summary:
      "High-throughput asynchronous microservices, event streams, RPC protocols, and zero-downtime API gateways engineered for high concurrency.",
    focusAreas: [
      "High-concurrency microservice architectures",
      "Asynchronous event queues & background workers",
      "Low-latency GraphQL, gRPC & WebSocket protocols",
    ],
  },
  {
    num: "04",
    icon: Database,
    title: "Databases, Vector Stores & Memory Layer",
    summary:
      "ACID relational stores, ultra-low latency memory caches, high-dimensional vector search, and analytical warehouses configured for sub-millisecond retrieval.",
    focusAreas: [
      "ACID relational schema design & automated migrations",
      "Sub-millisecond in-memory caching & session stores",
      "Semantic vector indexing & similarity retrieval",
    ],
  },
  {
    num: "05",
    icon: Zap,
    title: "Cloud Infrastructure, DevOps & Edge",
    summary:
      "Automated CI/CD pipelines, container orchestration, edge caching, and multi-region cloud topology built for 99.99% uptime and zero maintenance burden.",
    focusAreas: [
      "Declarative infrastructure-as-code automation",
      "Containerized microservices & auto-scaling clusters",
      "Global edge content delivery & multi-zone failover",
    ],
  },
  {
    num: "06",
    icon: ShieldCheck,
    title: "Security, Telemetry & Enterprise Governance",
    summary:
      "Comprehensive observability, distributed tracing, automated vulnerability scanning, end-to-end data encryption, and SOC2 / GDPR compliance controls.",
    focusAreas: [
      "Distributed telemetry, log aggregation & APM tracing",
      "Zero-trust authentication, JWT & secrets management",
      "Automated security scanning & compliance audit trails",
    ],
  },
];

const technicalGuarantees = [
  {
    title: "100% Client IP Ownership",
    desc: "Every repository, Docker image, migration script, and design file belongs completely to you. No proprietary runtime locks or hidden licenses.",
  },
  {
    title: "Deterministic AI Systems",
    desc: "We enforce strict JSON schema outputs, confidence thresholds, fallback cascades, and verified citations to eliminate unprompted hallucinations.",
  },
  {
    title: "Production-Grade Velocity",
    desc: "Standardized CI/CD preview environments for every pull request, automated testing suites, and continuous delivery with bi-weekly sprint milestones.",
  },
  {
    title: "Sub-Second Latency & Scale",
    desc: "Optimized database indices, Redis caching layers, edge CDN delivery, and efficient bundle splitting to ensure blistering load times worldwide.",
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageSeo page="capabilities" />

      {/* Hero Section */}
      <section className="studio-page-hero">
        <div className="studio-container">
          <motion.div {...reveal}>
            <span className="studio-kicker">CAPABILITIES / SYSTEMS & ARCHITECTURE</span>
            <h1>
              Engineering depth.<br />
              <span>Built as connected systems.</span>
            </h1>
            <p>
              We design and construct digital products as cohesive, resilient systems. From responsive user surfaces and high-concurrency backends to autonomous intelligence and hardened multi-cloud deployments — built with engineering discipline and zero proprietary lock-in.
            </p>
            <div style={{ display: "flex", gap: "16px", marginTop: "32px", flexWrap: "wrap" }}>
              <Link to="/contact" className="studio-button studio-button--light">
                Discuss your system <ArrowUpRight size={17} />
              </Link>
              <Link to="/portfolio" className="studio-button studio-button--ghost">
                View delivered work
              </Link>
            </div>
            <div className="studio-page-hero__line" />
          </motion.div>
        </div>
      </section>

      {/* Interactive 4-Layer Architecture Map (Clean 3-column layout without overloaded tags) */}
      <StudioArchitecture showLink={false} />

      {/* 6-Category Systems Capability Matrix */}
      <section className="studio-section" style={{ background: "var(--studio-ink)", color: "#eff3ea", borderTop: "1px solid var(--studio-line)" }}>
        <div className="studio-container">
          <motion.div {...reveal} className="studio-section-heading">
            <div>
              <span className="studio-kicker">SYSTEM CAPABILITIES</span>
              <h2>Comprehensive scope.<br /><span>Proven engineering.</span></h2>
            </div>
            <p>
              We align architecture strictly with your business requirements, scalability goals, and compliance criteria.
            </p>
          </motion.div>

          <div className="capabilities-matrix">
            {capabilityPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div {...reveal} key={pillar.num} className="capabilities-card">
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span className="capabilities-card__num">{pillar.num} / SPECTRUM</span>
                      <Icon size={18} style={{ color: "var(--studio-accent)", opacity: 0.85 }} />
                    </div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.summary}</p>
                  </div>
                  <div className="capabilities-card__list">
                    {pillar.focusAreas.map((area) => (
                      <span key={area} className="capabilities-card__item">
                        {area}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Standards & Guarantees */}
      <section className="studio-section" style={{ background: "var(--studio-paper)", color: "#16231b" }}>
        <div className="studio-container">
          <motion.div {...reveal} className="studio-section-heading studio-section-heading--light">
            <div>
              <span className="studio-kicker studio-kicker--dark">ENGINEERING PRINCIPLES</span>
              <h2>Built for longevity.<br /><span>Engineered for trust.</span></h2>
            </div>
            <p>
              Great software isn't just about what you write today — it is about how cleanly your team can maintain, scale, and extend it tomorrow.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginTop: "40px" }}>
            {technicalGuarantees.map((item, idx) => (
              <motion.div
                {...reveal}
                key={item.title}
                style={{
                  border: "1px solid #c0ccc0",
                  padding: "30px 24px",
                  background: "#f4f6f1",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                    <CheckCircle2 size={18} style={{ color: "#3e6c46" }} />
                    <span style={{ font: "500 10px ui-monospace, monospace", letterSpacing: "0.12em", color: "#506f56" }}>
                      STANDARD 0{idx + 1}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "20px", fontWeight: "600", letterSpacing: "-0.04em", color: "#14211a" }}>
                    {item.title}
                  </h3>
                  <p style={{ marginTop: "12px", fontSize: "14px", lineHeight: "1.7", color: "#54665b" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "60px", paddingTop: "30px", borderTop: "1px solid #c0ccc0", flexWrap: "wrap", gap: "20px" }}>
            <span style={{ font: "500 12px ui-monospace, monospace", color: "#617666" }}>
              LOOKING FOR SPECIFIC SERVICE PACKAGES?
            </span>
            <div style={{ display: "flex", gap: "24px" }}>
              <Link to="/services" className="studio-text-link studio-text-link--dark">
                Explore services <ArrowUpRight size={17} />
              </Link>
              <Link to="/process" className="studio-text-link studio-text-link--dark">
                How we deliver <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Call to Action & Contact Form */}
      <StudioCTA />
      <Contact />
    </>
  );
}
