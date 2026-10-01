import { useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, services } from "@/lib/studioContent";

const reveal = { initial: false, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .18 }, transition: { duration: .65, ease: [0.22, 1, 0.36, 1] as const } };

type PlaneKind = "output" | "model" | "logic" | "input";
const planes: { kind: PlaneKind; label: string; depth: number; spread: number }[] = [
  { kind: "output", label: "04 / DELIVERY", depth: -95, spread: -68 },
  { kind: "model", label: "03 / INTELLIGENCE", depth: -25, spread: -18 },
  { kind: "logic", label: "02 / ARCHITECTURE", depth: 40, spread: 54 },
  { kind: "input", label: "01 / INTERFACE", depth: 105, spread: 110 },
];

const activePlaneDepth: Record<number, Partial<Record<PlaneKind, number>>> = [
  { model: 175 },
  { input: 75 },
  { logic: 135 },
  { output: 275 },
];

function ProcessorPlane({ kind, label, depth, spread, progress, active }: { kind: PlaneKind; label: string; depth: number; spread: number; progress?: MotionValue<number>; active?: number }) {
  const still = useMotionValue(0);
  const z = useTransform(progress ?? still, [0, 1], [depth, depth + spread]);
  const selectedDepth = depth + (active === undefined ? 0 : activePlaneDepth[active]?.[kind] ?? 0);
  return <motion.div className={`processor-plane processor-plane--${kind}`} style={progress ? { z } : undefined} initial={false} animate={progress ? undefined : { z: selectedDepth }} transition={{ duration: .78, ease: [0.22, 1, 0.36, 1] }}>
    <span className="processor-plane__label">{label}</span>
    <span className="processor-plane__grid" />
    <span className="processor-plane__track processor-plane__track--one" />
    <span className="processor-plane__track processor-plane__track--two" />
    <span className="processor-plane__track processor-plane__track--three" />
    <span className="processor-plane__track processor-plane__track--four" />
    <span className="processor-plane__port processor-plane__port--a" />
    <span className="processor-plane__port processor-plane__port--b" />
    <span className="processor-plane__port processor-plane__port--c" />
    <span className="processor-plane__port processor-plane__port--d" />
    <span className="processor-plane__module"><i /><b>{kind === "model" ? "AI" : kind === "logic" ? "SYS" : kind === "input" ? "UX" : "OPS"}</b><i /></span>
  </motion.div>;
}

export function CoreDiagram({ small = false, progress, active }: { small?: boolean; progress?: MotionValue<number>; active?: number }) {
  return <div className={`core-diagram processor-system ${small ? "core-diagram--small" : ""}`} aria-hidden="true">
    <div className="processor-system__volume">{planes.map(plane=><ProcessorPlane key={plane.kind} {...plane} progress={progress} active={active}/>)}</div>
    <span className="core-caption core-caption--one">INPUT / STRUCTURE</span>
    <span className="core-caption core-caption--two">PROCESS / INTELLIGENCE</span>
    <span className="core-caption core-caption--three">OUTPUT / PRODUCT</span>
  </div>;
}

export function StudioHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const systemScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.22]);
  const systemY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 130]);
  const typeY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -100]);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(pointerY, { stiffness: 90, damping: 24 });
  const rotateY = useSpring(pointerX, { stiffness: 90, damping: 24 });
  return <section ref={ref} className="studio-hero" id="top" onPointerMove={event => {
    if (reduce || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - .5) * 7);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - .5) * -5);
  }} onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}>
    <div className="studio-hero__grid" aria-hidden="true" />
    <motion.div className="studio-hero__system" style={{ scale: systemScale, y: systemY, rotateX, rotateY }}><CoreDiagram progress={scrollYProgress}/></motion.div>
    <div className="studio-container studio-hero__inside">
      <div className="studio-hero__top"><span className="studio-kicker"><span className="signal-dot" />Independent AI & product studio</span><span className="studio-coordinate">INDIA / WORKING WORLDWIDE</span></div>
      <motion.div className="studio-hero__headline" style={{ y: typeY }}>
        <span className="studio-index">ENGINEERED FOR WHAT'S NEXT <span>001 / 004</span></span>
        <h1><span>WE BUILD</span><span className="studio-hero__outline">INTELLIGENT</span><span>DIGITAL <em>SYSTEMS.</em></span></h1>
      </motion.div>
      <div className="studio-hero__bottom">
        <div className="studio-hero__intro"><p>ThinkMoreAI designs and engineers production AI products, scalable SaaS platforms, intelligent automation, and high-performance digital systems that drive measurable commercial growth.</p><div className="studio-hero__actions"><Link to="/contact" className="studio-button studio-button--light">Start a project <ArrowUpRight size={17}/></Link><Link to="/portfolio" className="studio-text-link">Explore our work <ArrowRight size={17}/></Link></div></div>
        <a href="#services" className="studio-hero__scroll" aria-label="Scroll to capabilities"><span>SCROLL TO EXPLORE</span><ArrowDown size={16}/></a>
      </div>
    </div>
    <div className="studio-hero__rail" aria-hidden="true">AI PRODUCTS <span /> SAAS <span /> AUTOMATION <span /> ENGINEERING</div>
  </section>;
}

export function StudioIntro() {
  return <section className="studio-intro studio-section"><div className="studio-container studio-intro__layout"><motion.div {...reveal}><span className="studio-kicker studio-kicker--dark">THE WAY WE WORK</span><h2>Complex technology.<br/><span>Clear outcomes.</span></h2></motion.div><motion.div {...reveal} className="studio-intro__body"><p>Good software is more than a collection of features. It connects a genuine need, a considered experience, and an architecture that can keep evolving.</p><p>We bring product thinking, design, AI engineering, and full stack delivery together from the first conversation.</p><Link to="/about" className="studio-text-link studio-text-link--dark">Our approach <ArrowUpRight size={17}/></Link></motion.div></div></section>;
}

function CapabilityGraphic({ active }: { active: number }) {
  return <div className={`capability-graphic capability-graphic--${services[active].motif}`} aria-hidden="true">
    <div className="capability-graphic__top"><span>SYSTEM / 0{active+1}</span><span>CAPABILITY MODEL</span></div>
    <div className="capability-graphic__canvas"><CoreDiagram small active={active} /><div className="capability-graphic__label capability-graphic__label--one">INPUT<br/><strong>{active===0?"Knowledge":active===1?"Product need":active===2?"Trigger":"Signals"}</strong></div><div className="capability-graphic__label capability-graphic__label--two">PROCESS<br/><strong>{active===0?"Reason":active===1?"Architect":active===2?"Connect":"Interpret"}</strong></div><div className="capability-graphic__label capability-graphic__label--three">OUTPUT<br/><strong>{active===0?"Action":active===1?"Experience":active===2?"Workflow":"Decision"}</strong></div></div>
    <div className="capability-graphic__bottom"><span>INPUT → DESIGN → DELIVERY</span><span>THINKMOREAI / SYSTEMS</span></div>
  </div>;
}

export function StudioCapabilities() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="studio-capabilities studio-section">
      <div className="studio-container">
        <motion.div {...reveal} className="studio-section-heading">
          <div>
            <span className="studio-kicker">01 / WHAT WE BUILD</span>
            <h2>One studio.<br/><span>Connected capabilities.</span></h2>
          </div>
          <p>Choose the problem first. We assemble the right product, engineering, and intelligence capabilities around it.</p>
        </motion.div>

        <div className="studio-capabilities__layout">
          {/* Left: capability list — each item has an inline mobile drawer */}
          <div className="studio-capabilities__list" aria-label="Capabilities">
            {services.map((service, index) => {
              const isActive = active === index;
              return (
                <div key={service.slug} className="studio-capability-row">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    className={`studio-capability ${isActive ? "is-active" : ""}`}
                    aria-pressed={isActive}
                    aria-expanded={isActive}
                  >
                    <span className="studio-capability__number">{service.number}</span>
                    <span className="studio-capability__content">
                      <strong>{service.title}</strong>
                      <span>{service.short}</span>
                    </span>
                    <ArrowUpRight size={19} />
                  </button>

                  {/* Mobile-only inline drawer */}
                  {isActive && (
                    <motion.div
                      key={`drawer-${index}`}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="studio-capabilities__mobile-drawer"
                    >
                      <CapabilityGraphic active={index} />
                      <div className="studio-capabilities__detail">
                        <p>{service.description}</p>
                        <div className="studio-capabilities__tags">
                          {service.deliverables.map(item => <span key={item}>{item}</span>)}
                        </div>
                        <Link to={`/services/${service.slug}`} className="studio-text-link">
                          Explore this service <ArrowUpRight size={16} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right panel: desktop only */}
          <div className="studio-capabilities__feature studio-capabilities__feature--desktop">
            <CapabilityGraphic active={active} />
            <div className="studio-capabilities__detail">
              <p>{services[active].description}</p>
              <div className="studio-capabilities__tags">
                {services[active].deliverables.map(item => <span key={item}>{item}</span>)}
              </div>
              <Link to={`/services/${services[active].slug}`} className="studio-text-link">
                Explore this service <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


const categories = [
  { id: "all", label: "All Systems (6)" },
  { id: "commerce", label: "Web & Commerce (2)" },
  { id: "mobile", label: "Mobile & SaaS (2)" },
  { id: "media", label: "Data & Media (2)" },
] as const;

function getCategoryGroup(slug: string) {
  if (slug === "maison-commerce" || slug === "yumrush-delivery") return "commerce";
  if (slug === "nexapay-fintech" || slug === "enterprise-saas") return "mobile";
  return "media";
}

type StudioProject = (typeof projects)[number];

function ProjectVisual({ project, index }: { project: Omit<StudioProject, "url"> & { url?: string }; index?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);

  const cleanDomain = project.url
    ? project.url.replace("https://", "").replace("http://", "").replace(/\/$/, "")
    : `${project.slug}.thinkmoreai.com`;

  return (
    <motion.div
      ref={ref}
      className="studio-project__stage"
      style={reduce ? undefined : { scale, y }}
    >
      <div className={`studio-project__card-frame studio-project__card-frame--${project.theme}`}>
        <div className="studio-project__glow" aria-hidden="true" />

        <div className="studio-project__browser-header">
          <div className="studio-project__browser-dots" aria-hidden="true">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
          </div>
          <div className="studio-project__browser-url">
            <span style={{ fontSize: "10px", opacity: 0.7 }}>🔒</span>
            <span>{cleanDomain.length > 28 ? cleanDomain.substring(0, 28) + "…" : cleanDomain}</span>
          </div>
          <div className="studio-project__browser-status">
            <span className="signal-dot" />
            <span>{project.label.toUpperCase()}</span>
          </div>
        </div>

        <Link
          to={`/portfolio/${project.slug}`}
          className="studio-project__viewport"
          aria-label={`Explore ${project.title} case study`}
        >
          <div className="studio-project__image-container">
            <img
              src={project.image}
              alt={`${project.title} interface preview`}
              loading="lazy"
              className="studio-project__img"
            />
            <div className="studio-project__image-shine" aria-hidden="true" />
          </div>

          <div className="studio-project__hover-pill">
            <span>Explore Case Study</span>
            <ArrowUpRight size={15} />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

export function StudioWork({ all = false }: { all?: boolean }) {
  const [filter, setFilter] = useState<string>("all");

  const displayed = all
    ? filter === "all"
      ? projects
      : projects.filter((p) => getCategoryGroup(p.slug) === filter)
    : projects.slice(0, 3);

  return (
    <section id="work" className={`studio-work studio-section ${all ? "studio-work--all" : "studio-work--selected"}`}>
      <div className="studio-container">
        <motion.div {...reveal} className="studio-section-heading">
          <div>
            <span className="studio-kicker">
              <span className="signal-dot" /> 02 / SELECTED WORK
            </span>
            <h2>
              Ideas made tangible.<br />
              <span>Engineered for commercial impact.</span>
            </h2>
          </div>
          <p>
            Explore our live concept prototypes, application architectures, and client systems. Each build showcases production-grade interface fidelity, high concurrency, and measurable commercial value.
          </p>
        </motion.div>

        {all && (
          <div className="studio-work__filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`studio-filter-btn ${filter === cat.id ? "is-active" : ""}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        <div className="studio-work__list">
          {displayed.map((project, index) => (
            <motion.article
              {...reveal}
              key={project.slug}
              data-project={project.slug}
              className={`studio-project studio-project--${project.theme}`}
            >
              <ProjectVisual project={project} index={index} />
              <div className="studio-project__body">
                <div className="studio-project__top-bar">
                  <span className="studio-project__category-badge">
                    0{index + 1} / {project.category.toUpperCase()}
                  </span>
                  <span className="studio-project__badge-tag">
                    {project.label}
                  </span>
                </div>

                <h3 className="studio-project__title">
                  <Link to={`/portfolio/${project.slug}`}>{project.title}</Link>
                </h3>

                <p className="studio-project__challenge">
                  "{project.challenge}"
                </p>

                <p className="studio-project__built">
                  {project.built}
                </p>

                <div className="studio-project__features">
                  {project.features.map((feat) => (
                    <span key={feat} className="studio-project__feature-tag">
                      {feat}
                    </span>
                  ))}
                  {project.technology.map((tech) => (
                    <span key={tech} className="studio-project__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="studio-project__actions">
                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="studio-button studio-button--light"
                  >
                    Explore case study <ArrowRight size={15} />
                  </Link>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="studio-button studio-button--ghost"
                    >
                      Live preview <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {!all && (
          <div className="studio-work__bottom-cta">
            <Link to="/portfolio" className="studio-work__more">
              <span>View all client systems & case studies</span>
              <ArrowUpRight size={20} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

const architecture = [
  {
    no: "01",
    title: "Interface",
    text: "The places people interact with the system — responsive web, native mobile, and ambient surfaces designed for speed, clarity, and tactile precision.",
  },
  {
    no: "02",
    title: "Application",
    text: "Distributed business logic, authentication, robust APIs, asynchronous queues, and microservice workflows built for high concurrency.",
  },
  {
    no: "03",
    title: "Intelligence",
    text: "Deterministic foundation models, retrieval-augmented generation (RAG), vector embeddings, and autonomous task reasoning where they create true leverage.",
  },
  {
    no: "04",
    title: "Delivery",
    text: "Hardened multi-cloud deployment, container orchestration, automated CI/CD pipelines, enterprise security, and continuous observability.",
  },
];

export function StudioArchitecture({ showLink = true }: { showLink?: boolean }) {
  return (
    <section id="capabilities" className="studio-architecture studio-section">
      <div className="studio-container">
        <motion.div {...reveal} className="studio-section-heading">
          <div>
            <span className="studio-kicker">03 / ENGINEERING DEPTH</span>
            <h2>Built as a system.<br /><span>Not a stack of features.</span></h2>
          </div>
          <p>We connect interface, application logic, intelligence, and delivery. The architecture follows the product requirement.</p>
        </motion.div>
        <div className="studio-architecture__map">
          <div className="studio-architecture__spine" aria-hidden="true" />
          {architecture.map((layer) => (
            <motion.div {...reveal} key={layer.no} className="studio-architecture__layer">
              <span className="studio-architecture__number">{layer.no} / LAYER</span>
              <span className="studio-architecture__node" aria-hidden="true" />
              <div className="studio-architecture__body">
                <h3>{layer.title}</h3>
                <p>{layer.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {showLink && (
          <div style={{ marginTop: "40px", display: "flex", justifyContent: "flex-end" }}>
            <Link to="/capabilities" className="studio-text-link">
              Explore complete capabilities & standards <ArrowUpRight size={17} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

const stages = [
  ["01", "Discover", "Understand the goal, users, constraints, and existing systems."],
  ["02", "Architect", "Shape the product journey and technical foundation."],
  ["03", "Design & build", "Turn the plan into working interfaces, services, and integrations."],
  ["04", "Launch & improve", "Test, deploy, observe, and refine the product."],
];
export function StudioProcess() {
  return <section id="process" className="studio-process studio-section"><div className="studio-container"><motion.div {...reveal}><span className="studio-kicker studio-kicker--dark">04 / FROM IDEA TO PRODUCT</span><h2>Clear thinking.<br/><span>Working software.</span></h2></motion.div><div className="studio-process__path">{stages.map(([no,title,text])=><motion.div {...reveal} key={no} className="studio-process__step"><span>{no}</span><h3>{title}</h3><p>{text}</p></motion.div>)}</div><Link to="/process" className="studio-text-link studio-text-link--dark">See how we work <ArrowUpRight size={17}/></Link></div></section>;
}

export function StudioPrinciples() {
  return <section className="studio-principles studio-section"><div className="studio-container studio-principles__layout"><motion.div {...reveal}><span className="studio-kicker">WHY THINKMOREAI</span><h2>Ownership from idea<br/>to iteration.</h2><p>One connected team can hold the product story and the technical decisions together.</p></motion.div><div>{[["01","Product before tools","We start with the task people need to complete, then choose the interface and technology."],["02","AI with a purpose","We use intelligence where it improves a workflow, not as an extra screen or a headline."],["03","Built to evolve","Readable interfaces and maintainable systems make the next release easier to shape."],["04","Clear delivery","Discovery, design, implementation, and launch stay visible throughout the project."]].map(([no,title,text])=><div className="studio-principle" key={no}><span>{no}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>;
}

export function StudioCTA() {
  return <section className="studio-cta"><div className="studio-container studio-cta__inside"><span className="studio-kicker"><span className="signal-dot"/>NEXT / YOUR PROJECT</span><h2>HAVE AN IDEA<br/><em>WORTH BUILDING?</em></h2><div><p>Whether you are scoping an AI product or scaling software infrastructure, let us turn your vision into dependable execution.</p><Link to="/contact" className="studio-button studio-button--light">Start your project <ArrowUpRight size={18}/></Link></div><span className="studio-cta__mark" aria-hidden="true">T<span>·</span>MAI</span></div></section>;
}
