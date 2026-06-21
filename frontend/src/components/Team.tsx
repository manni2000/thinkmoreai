import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Charan Kumar",
    role: "CEO & Founder",
    avatar: "/charan-avatar.jpg",
    bio: "Data analysis, SEO, marketing strategy, and business growth execution.",
    social: {
      linkedin: "https://www.linkedin.com/in/bcharankumar/",
      email: "info@thinkmoreai.com",
    },
  },
  {
    name: "Manish Kumar",
    role: "CTO & Founder",
    avatar: "/manish-avatar.jpg",
    bio: "Full-stack architecture, scalable systems, and AI product engineering.",
    social: {
      linkedin: "https://www.linkedin.com/in/manish-kr-mandal/",
      email: "info@thinkmoreai.com",
    },
  },
  {
    name: "Achyut Kumar Chaudhary",
    role: "CMO",
    avatar: "/Achyut-Kumar-Chaudhary.jpg",
    bio: "Strategic marketing, market positioning, and client growth advisory.",
    social: {
      linkedin: "https://www.linkedin.com/in/achyuta-kumar-choudhury-323887234",
      email: "achyutchoudhury26@gmail.com",
    },
  },
  {
    name: "Aniket Kr Mandal",
    role: "Project Manager",
    avatar: "/aniket-avatar.jpg",
    bio: "Delivery planning, stakeholder coordination, and execution discipline.",
    social: {
      email: "info@thinkmoreai.com",
    },
  },
];

// Deterministic palette per member so each card's fallback avatar is distinct but cohesive.
const fallbackThemes = [
  { panel: "from-[#0b1b3f] to-[#13294d]", badge: "from-[#1e3a8a] to-[#3b82f6]" },
  { panel: "from-[#072a27] to-[#0c3b36]", badge: "from-[#0f766e] to-[#14b8a6]" },
  { panel: "from-[#241245] to-[#34195f]", badge: "from-[#7c3aed] to-[#a855f7]" },
  { panel: "from-[#3a1f05] to-[#4d2c08]", badge: "from-[#b45309] to-[#f59e0b]" },
];

const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

const TeamAvatar = ({
  name,
  avatar,
  theme,
}: {
  name: string;
  avatar: string;
  theme: { panel: string; badge: string };
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  if (imgFailed) {
    return (
      <div
        className={`relative flex h-full w-full items-center justify-center bg-gradient-to-br ${theme.panel}`}
        aria-label={name}
        role="img"
      >
        {/* subtle radial sheen so the panel reads as intentional design, not a placeholder */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.14),transparent_60%)]" />
        <div
          className={`relative mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${theme.badge} ring-2 ring-white/25 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:scale-105 sm:mb-12 sm:h-24 sm:w-24`}
        >
          <span className="font-heading text-xl font-bold tracking-wide text-white sm:text-3xl">
            {getInitials(name)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={avatar}
      alt={name}
      loading="lazy"
      onError={() => setImgFailed(true)}
      className="h-full w-full object-cover grayscale-[0.18] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
    />
  );
};

const Team = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden bg-[#f5f7fb]">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="section-eyebrow">Team</span>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Strategy, engineering, and growth under one roof.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            A compact leadership team focused on practical delivery, clear communication,
            and measurable client outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 26 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="premium-card group flex flex-col overflow-hidden bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(11,27,63,0.5)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-primary sm:aspect-square">
                <TeamAvatar
                  name={member.name}
                  avatar={member.avatar}
                  theme={fallbackThemes[index % fallbackThemes.length]}
                />
                {/* top accent line that animates in on hover */}
                <div className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-accent to-amber-soft transition-transform duration-500 group-hover:scale-x-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.92] via-primary/[0.2] to-transparent" />

                <div className="absolute inset-x-2.5 bottom-2.5 z-10 flex flex-col items-center text-center sm:inset-x-3.5 sm:bottom-3.5">
                  <span className="inline-flex items-center gap-1.5 border border-accent/30 bg-accent/[0.14] px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-amber-soft backdrop-blur-sm sm:px-2 sm:text-[10px] sm:tracking-[0.14em]">
                    {member.role}
                  </span>
                  <h3 className="mt-1.5 font-heading text-sm font-bold leading-tight text-white sm:mt-2 sm:text-base lg:text-lg">
                    {member.name}
                  </h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-3 sm:p-4">
                <p className="text-[11px] leading-5 text-muted-foreground sm:text-[13px] sm:leading-6 sm:min-h-[60px]">
                  {member.bio}
                </p>
                <div className="mt-3 flex gap-2 border-t border-border/70 pt-3 sm:mt-4 sm:pt-3.5">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      aria-label={`${member.name} Email`}
                      className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
