import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  CiLinkedin, 
  CiTwitter, 
  CiMail, 
  CiGlobe 
} from "react-icons/ci";

const teamMembers = [
  {
    name: "Charan Kumar",
    role: "CEO & Founder",
    company: "ThinkMoreAI",
    avatar: "/charan-avatar.jpg",
    bio: "Industry expert in Data Analysis, SEO & Marketing strategies",
    social: {
      linkedin: "https://www.linkedin.com/in/bcharankumar/",
      email: "info@thinkmoreai.com"
    }
  },
  {
    name: "Manish Kumar",
    role: "CTO & Founder",
    company: "ThinkMoreAI",
    avatar: "/manish-avatar.jpg",
    bio: "Full-stack architect specializing in scalable AI solutions",
    social: {
      linkedin: "https://www.linkedin.com/in/manish-kr-mandal/",
      email: "info@thinkmoreai.com"
    }
  },
  {
    name: "Satyam Lohiya",
    role: "Advisor Board Member",
    company: "ThinkMoreAI",
    avatar: "/satyam-avatar.jpg",
    bio: "Strategic advisor with deep industry expertise",
    social: {
      linkedin: "https://www.linkedin.com/in/satyam-lohiya/",
      email: "info@thinkmoreai.com"
    }
  },
  {
    name: "Aniket Kr Mandal",
    role: "Advisor Board Member",
    company: "ThinkMoreAI",
    avatar: "/aniket-avatar.jpg",
    bio: "Growth strategist and business development expert",
    social: {
      email: "info@thinkmoreai.com"
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 } as const,
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  } as const,
};

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
            A dedicated team from global MNCs and high-growth startups combining
            strategy, engineering, design, and compliance expertise to deliver
            measurable results.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-primary-foreground/5 backdrop-blur-sm 
                border border-primary-foreground/10 rounded-2xl p-6 
                text-center hover:bg-primary-foreground/10 
                transition-all duration-500 hover:shadow-2xl 
                hover:shadow-accent/20 overflow-hidden">
                
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Avatar */}
                <div className="relative w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden 
                  border-3 border-accent/30 group-hover:border-accent/60 
                  transition-all duration-500 group-hover:scale-105">
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
                          bg-accent/20 text-accent font-bold text-2xl">
                            ${member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>`;
                      }
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-accent transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-accent font-semibold text-sm mb-1">
                    {member.role}
                  </p>
                  <p className="text-primary-foreground/70 text-sm mb-3">
                    {member.company}
                  </p>
                  
                  {/* Bio */}
                  <p className="text-primary-foreground/60 text-xs leading-relaxed mb-4 line-clamp-2">
                    {member.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-2">
                    {member.social.linkedin && (
                      <motion.a
                        href={member.social.linkedin}
                        className="w-8 h-8 rounded-full bg-primary-foreground/10 
                          border border-primary-foreground/20 flex items-center 
                          justify-center text-primary-foreground/60 
                          hover:bg-accent hover:text-white hover:border-accent 
                          transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <CiLinkedin className="w-4 h-4" />
                      </motion.a>
                    )}
                
                    {member.social.email && (
                      <motion.a
                        href={`mailto:${member.social.email}`}
                        className="w-8 h-8 rounded-full bg-primary-foreground/10 
                          border border-primary-foreground/20 flex items-center 
                          justify-center text-primary-foreground/60 
                          hover:bg-accent hover:text-white hover:border-accent 
                          transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`${member.name} Email`}
                      >
                        <CiMail className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
