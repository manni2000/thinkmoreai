import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Mail } from "lucide-react";
import TeamPortrait from "@/components/TeamPortrait";

interface TeamMember {
  name: string;
  role: string;
  /** Real photo path (in /public); leave empty for the illustrated portrait. */
  avatar: string;
  avatarSize?: "normal" | "large" | "xlarge";
  bio: string;
  social: {
    linkedin?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Charan Kumar",
    role: "CEO & Founder",
    avatar: "/images/portfolio/Charan.webp",
    avatarSize: "large",
    bio: "Data analysis, SEO, marketing strategy, and business growth execution.",
    social: {
      linkedin: "https://www.linkedin.com/in/bcharankumar/",
      email: "bonkacharan@gmail.com",
    },
  },
  {
    name: "Manish Kumar",
    role: "CTO & Founder",
    avatar: "/images/portfolio/manish.png",
    avatarSize: "xlarge",
    bio: "Full-stack architecture, scalable systems, and AI product engineering.",
    social: {
      linkedin: "https://www.linkedin.com/in/manish-kr-mandal/",
      email: "manishmandal9734@gmail.com",
    },
  },
  {
    name: "Achyut Kumar Chaudhary",
    role: "CMO",
    avatar: "/images/portfolio/Achyut%20Kumar.webp",
     avatarSize: "large",
    bio: "Strategic marketing, market positioning, and client growth advisory.",
    social: {
      linkedin: "https://www.linkedin.com/in/achyuta-kumar-choudhury-323887234",
      email: "achyutchoudhury26@gmail.com",
    },
  },
  {
    name: "Aniket Kr Mandal",
    role: "Project Manager",
    avatar: "/images/portfolio/aniket.avif",
    bio: "Delivery planning, stakeholder coordination, and execution discipline.",
    social: {
      email: "aniketmandal0101@gmail.com",
    },
  },
];

const TeamAvatar = ({
  name,
  avatar,
  variant,
  avatarSize = "normal",
}: {
  name: string;
  avatar?: string;
  variant: number;
  avatarSize?: "normal" | "large" | "xlarge";
}) => {
  const [imgFailed, setImgFailed] = useState(false);
  const portraitSize =
    avatarSize === "xlarge"
      ? "h-[110%] px-0"
      : avatarSize === "large"
        ? "h-[98%] px-2 sm:px-3"
        : "h-[92%] px-4 sm:px-5";
  const portraitPlacement = avatarSize === "xlarge" ? "top-0" : "bottom-0";

  // Flat illustrated portrait used when there is no real photo.
  if (!avatar || imgFailed) {
    return (
      <div
        className="relative h-full w-full overflow-hidden bg-[#fbfaf7]"
        aria-label={name}
        role="img"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_26%,rgba(255,191,69,0.16),transparent_42%)]" />
        <TeamPortrait
          seed={name}
          variant={variant}
          className={`absolute inset-x-0 w-full transition-transform duration-500 group-hover:scale-[1.04] ${portraitPlacement} ${portraitSize}`}
        />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#fbfaf7]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_26%,rgba(255,191,69,0.14),transparent_44%)]" />
      <img
        src={avatar}
        alt={name}
        loading="lazy"
        onError={() => setImgFailed(true)}
        className={`absolute inset-x-0 w-full object-contain transition-transform duration-700 group-hover:scale-105 ${portraitPlacement} ${portraitSize}`}
      />
    </div>
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
              <div className="relative aspect-[4/3] overflow-hidden border-b border-border/70 bg-[#fbfaf7]">
                <TeamAvatar
                  name={member.name}
                  avatar={member.avatar}
                  variant={index}
                  avatarSize={member.avatarSize}
                />
                {/* top accent line that animates in on hover */}
                <div className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-accent to-amber-soft transition-transform duration-500 group-hover:scale-x-100" />
              </div>

              <div className="flex flex-1 flex-col p-3 sm:p-4">
                <div className="mb-3">
                  <span className="inline-flex items-center border border-[#9a6a00]/35 bg-[#fff7dc] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#111827] sm:text-[11px]">
                    {member.role}
                  </span>
                  <h3 className="mt-2 font-heading text-base font-bold leading-tight text-foreground sm:text-lg">
                    {member.name}
                  </h3>
                </div>
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
