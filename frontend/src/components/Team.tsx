import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const teamMembers = [
  {
    name: "Charan Kumar",
    role: "CEO & founder",
    company: "ThinkMoreAI",
    avatar: "/charan-avatar.jpg",
  },
  {
    name: "Manish Kumar",
    role: "CTO & founder",
    company: "ThinkMoreAI",
    avatar: "/manish-avatar.jpg",
  },
  {
    name: "Satyam Lohiya",
    role: "Advisor Board Member",
    company: "ThinkMoreAI",
    avatar: "/satyam-avatar.jpg",
  },
  {
    name: "Aniket Kr Mandal",
    role: "Advisor Board Member",
    company: "ThinkMoreAI",
    avatar: "/aniket-avatar.jpg",
    colClass: "lg:col-start-2",
  },
  {
    name: "Prince Choudhary",
    role: "Advisor Board Member",
    company: "ThinkMoreAI",
    avatar: "/prince-avatar.jpg",
    colClass: "lg:col-start-3",
  },
];

const Team = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-primary-foreground">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider mb-6">
            Our Team
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Battle-Tested <span className="text-accent">Experts</span>
          </h2>

          <p className="text-xl text-primary-foreground/70 mb-10 leading-relaxed">
            A dedicated team from global MNCs and high-growth startups — combining
            strategy, engineering, design, and compliance expertise to deliver
            measurable results.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`bg-primary-foreground/5 backdrop-blur-sm 
                border border-primary-foreground/10 rounded-2xl p-6 
                text-center hover:bg-primary-foreground/10 
                transition-all duration-300 ${member.colClass || ""}`}
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-2 border-accent/30">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center 
                        bg-accent/20 text-accent font-bold text-xl">
                          ${member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>`;
                    }
                  }}
                />
              </div>

              <h3 className="font-heading font-semibold text-lg mb-1">
                {member.name}
              </h3>
              <p className="text-accent font-medium text-sm mb-1">
                {member.role}
              </p>
              <p className="text-primary-foreground/60 text-sm">
                {member.company}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
