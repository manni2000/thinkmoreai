import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  BadgeIndianRupee,
  Handshake,
  Mail,
  MessageCircle,
  Percent,
  Rocket,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const REFERRAL_EMAIL = "manishmandal9734@gmail.com";
const WHATSAPP_NUMBER = "919608826629";
const WHATSAPP_DISPLAY = "+919608826629";

const whatsappMessage = encodeURIComponent(
  "Hi ThinkMoreAI! I have a project I'd like to refer and earn 10% commission. Here are the details:"
);
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
const mailtoLink = `mailto:${REFERRAL_EMAIL}?subject=${encodeURIComponent(
  "I want to refer a project & earn 10% commission"
)}&body=${encodeURIComponent(
  "Hi ThinkMoreAI,\n\nI'd like to refer a project and earn 10% commission.\n\nProject details:\nClient / Company:\nEstimated project value:\nWhat they need:\nMy contact number:\n\nThanks!"
)}`;

const steps = [
  {
    icon: Rocket,
    title: "You bring a project",
    description:
      "Have a project from your own idea, your client, or a friend? Anything worth building — websites, apps, AI, automation.",
  },
  {
    icon: Handshake,
    title: "We build & deliver",
    description:
      "Our senior team takes over scope, design, engineering, and delivery. You don't need any technical skills.",
  },
  {
    icon: Wallet,
    title: "You get paid 10%",
    description:
      "The moment the client's first payout lands, 10% of the project value goes straight into your hand.",
  },
];

const perks = [
  {
    icon: Percent,
    title: "Flat 10% commission",
    description: "On every project you refer — no caps, no hidden cuts.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Paid on first payout",
    description: "Your share is released as soon as the client's first payment arrives.",
  },
  {
    icon: Users,
    title: "Anyone can join",
    description: "Students, freelancers, agency owners, working pros — everyone is welcome.",
  },
  {
    icon: ShieldCheck,
    title: "Zero risk to you",
    description: "No investment, no delivery pressure. We handle 100% of the work.",
  },
];

const examples = [
  { project: "₹50,000", earn: "₹5,000" },
  { project: "₹1,00,000", earn: "₹10,000", highlight: true },
  { project: "₹5,00,000", earn: "₹50,000" },
];

const EarnWithUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="earn"
      className="section-padding dark-surface-grid relative overflow-hidden bg-primary text-primary-foreground"
    >
      <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(255,191,69,0.14),transparent_42%,rgba(86,242,228,0.10))]" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="section-eyebrow border-white/[0.15] bg-white/[0.08] text-amber-soft">
            <Wallet className="h-4 w-4" />
            Earn with ThinkMoreAI
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Refer a project.{" "}
            <span className="text-amber-soft">Earn massive money.</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-primary-foreground/[0.68]">
            Anyone can earn with us. Bring us a project — yours, your client's, or a
            friend's — and pocket a{" "}
            <span className="font-semibold text-white">flat 10% commission</span>.
            Refer a ₹1 lakh project and{" "}
            <span className="font-semibold text-amber-soft">₹10,000 lands in your hand</span>{" "}
            from the client's very first payout. No skills. No investment. No risk.
          </p>
        </motion.div>

        {/* Earnings example card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto mb-14 max-w-4xl border border-amber-soft/25 bg-white/[0.055] p-6 backdrop-blur-xl sm:p-8"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-soft">
              Your payout, made simple
            </p>
            <p className="font-heading text-lg text-white sm:text-xl">
              Sign a{" "}
              <span className="text-amber-soft">₹1,00,000</span> project ={" "}
              <span className="text-amber-soft">₹10,000</span> directly in your hand
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {examples.map((row) => (
              <div
                key={row.project}
                className={`relative flex flex-col items-center border p-6 text-center ${
                  row.highlight
                    ? "border-amber-soft/60 bg-amber-soft/[0.12]"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                {row.highlight && (
                  <span className="absolute -top-3 border border-amber-soft/50 bg-amber-soft px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                    Most popular
                  </span>
                )}
                <p className="text-xs font-medium uppercase tracking-widest text-primary-foreground/[0.55]">
                  Project value
                </p>
                <p className="mt-1 font-heading text-2xl font-bold text-white">
                  {row.project}
                </p>
                <ArrowRight className="my-3 h-5 w-5 rotate-90 text-amber-soft" />
                <p className="text-xs font-medium uppercase tracking-widest text-primary-foreground/[0.55]">
                  You earn (10%)
                </p>
                <p className="mt-1 font-heading text-3xl font-extrabold text-amber-soft">
                  {row.earn}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* How it works */}
        <div className="mb-14 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
              className="relative border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center border border-accent/30 bg-accent/10 text-accent">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="font-heading text-4xl font-extrabold text-white/[0.14]">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-primary-foreground/[0.62]">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Perks */}
        <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.06 }}
              className="border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
            >
              <perk.icon className="h-6 w-6 text-amber-soft" />
              <h4 className="mt-4 font-heading text-base font-semibold text-white">
                {perk.title}
              </h4>
              <p className="mt-2 text-sm leading-6 text-primary-foreground/[0.6]">
                {perk.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="border border-amber-soft/25 bg-[linear-gradient(120deg,rgba(255,191,69,0.14),rgba(86,242,228,0.08))] p-8 text-center backdrop-blur-xl sm:p-10"
        >
          <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Got a project? Let's turn it into cash.
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-primary-foreground/[0.7]">
            Share the project details with us on WhatsApp or email. We'll confirm the
            scope, close the deal, and your 10% is on its way with the first payout.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="xl" asChild className="group w-full sm:w-auto">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <MessageCircle className="h-5 w-5" />
                Refer on WhatsApp
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="group w-full sm:w-auto">
              <a href={mailtoLink} className="inline-flex items-center gap-3">
                <Mail className="h-5 w-5" />
                Refer by Email
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-x-8 gap-y-3 text-sm text-primary-foreground/[0.7] sm:flex-row">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-amber-soft"
            >
              <MessageCircle className="h-4 w-4 text-amber-soft" />
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
            <a
              href={`mailto:${REFERRAL_EMAIL}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-amber-soft"
            >
              <Mail className="h-4 w-4 text-amber-soft" />
              {REFERRAL_EMAIL}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EarnWithUs;
