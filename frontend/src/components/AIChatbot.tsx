import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";
import { Button } from "@/components/ui/button";

const botResponses: Record<string, string> = {
  about:
    "ThinkMoreAI is an independent AI product and digital engineering studio. We partner with ambitious founders, scaling businesses, and enterprises to engineer intelligent digital products, scalable SaaS architectures, and automated operational systems with measurable commercial impact.",

  services:
    "Our core capabilities include:\n\n- AI Products & Autonomous Assistants\n- Full-Stack Web, SaaS & Mobile Platforms\n- Enterprise Workflow Automation & System Integrations\n- Data Intelligence, Performance Analytics & Conversion Systems\n- Fractional AI & Technical Leadership",

  contact:
    "You can reach our leadership directly at info@thinkmoreai.com or schedule a discovery call through the website. Share your project goals and we will respond with practical architectural guidance within one business day.",

  pricing:
    "Engagements are structured transparently through fixed-scope milestone delivery, rapid sprint blocks, or dedicated monthly engineering retainers. Every project begins with a technical discovery phase to establish clear milestones, architecture, and commercial outcomes.",

  plans:
    "We shape engagement models around your operational stage:\n\nStartup Sprint: Production MVPs, architecture foundations, and core automation.\nGrowth & Scale: Advanced applications, deep integrations, custom AI models, and analytics.\nEnterprise: High-availability architectures, custom AI pipelines, data governance, and SLA-backed support.\nCustom: Scoped to your exact technical and commercial requirements.",

  technologies:
    "Our engineering stack includes React, Next.js, TypeScript, Node.js, Python, FastAPI, Django, Flutter, PyTorch, TensorFlow, OpenAI, Gemini, AWS, GCP, Docker, and CI/CD automation pipelines.",

  team:
    "ThinkMoreAI is founder-led by Charan Kumar (CEO & Founder, Commercial Strategy & Product Growth) and Manish Kumar (CTO & Founder, Systems Architecture & Applied AI), supported by a specialized team of software engineers, AI researchers, and product designers.",

  experience:
    "Our leadership pairs commercial acumen with deep engineering capability. We ensure that technical decisions are guided by business velocity, scalability, and measurable ROI. Learn more about our founders on the About page.",

  process:
    "We follow a disciplined 4-stage delivery framework: Discover, Architect, Design & Build, and Launch & Improve. We deploy working software in agile two-week sprint intervals with transparent review environments.",

  portfolio:
    "Our portfolio showcases live concept prototypes, full-stack applications, and technical demonstrations across commerce, fintech, food logistics, enterprise SaaS, and data intelligence. You can inspect each live preview on our Portfolio page.",

  support:
    "Every production release includes warranty coverage. Post-launch, we offer SLA-backed maintenance packages for real-time infrastructure monitoring, performance optimization, model tuning, and ongoing feature expansion.",

  timeline:
    "Focused prototypes and AI workflows typically deploy in 2 to 4 weeks. End-to-end SaaS platforms or comprehensive application builds generally span 6 to 12 weeks through structured bi-weekly release milestones.",

  industries:
    "Rather than rigid industry templates, we build around operational complexity and workflow requirements. We frequently work with B2B SaaS, e-commerce, fintech, logistics, professional services, and high-growth technology ventures.",

  default:
    "Hi, I am ThinkMoreAI's assistant. Ask me about our engineering services, pricing models, delivery process, portfolio prototypes, technology stack, leadership, or how to start your project.",
};

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const quickPrompts = ["Services", "Pricing", "Process"];

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [footerClearance, setFooterClearance] = useState(16);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: botResponses.default, isBot: true },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const focusFrame = requestAnimationFrame(() => closeButtonRef.current?.focus());
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 120);
    return () => clearTimeout(timeoutId);
  }, [messages]);

  useEffect(() => {
    let frame = 0;
    const updatePosition = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const legalLinks = document.querySelector(".studio-footer__bottom");
        if (!legalLinks) return;
        const spaceAboveLinks = window.innerHeight - legalLinks.getBoundingClientRect().top + 14;
        setFooterClearance(Math.max(16, Math.min(spaceAboveLinks, window.innerHeight - 120)));
      });
    };
    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  const getResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    if (
      lowerQuery.includes("team") ||
      lowerQuery.includes("founder") ||
      lowerQuery.includes("ceo") ||
      lowerQuery.includes("cto")
    ) {
      return botResponses.team;
    }

    if (
      lowerQuery.includes("experience") ||
      lowerQuery.includes("expertise") ||
      lowerQuery.includes("background")
    ) {
      return botResponses.experience;
    }

    if (
      lowerQuery.includes("process") ||
      lowerQuery.includes("methodology") ||
      lowerQuery.includes("workflow") ||
      lowerQuery.includes("approach")
    ) {
      return botResponses.process;
    }

    if (
      lowerQuery.includes("portfolio") ||
      lowerQuery.includes("project") ||
      lowerQuery.includes("work") ||
      lowerQuery.includes("case study")
    ) {
      return botResponses.portfolio;
    }

    if (lowerQuery.includes("support") || lowerQuery.includes("maintenance")) {
      return botResponses.support;
    }

    if (
      lowerQuery.includes("timeline") ||
      lowerQuery.includes("duration") ||
      lowerQuery.includes("delivery") ||
      lowerQuery.includes("deadline")
    ) {
      return botResponses.timeline;
    }

    if (
      lowerQuery.includes("industry") ||
      lowerQuery.includes("sector") ||
      lowerQuery.includes("domain")
    ) {
      return botResponses.industries;
    }

    if (
      lowerQuery.includes("service") ||
      lowerQuery.includes("offer") ||
      lowerQuery.includes("provide") ||
      (lowerQuery.includes("what") && lowerQuery.includes("do"))
    ) {
      return botResponses.services;
    }

    if (
      lowerQuery.includes("plan") ||
      lowerQuery.includes("package") ||
      lowerQuery.includes("subscription")
    ) {
      return botResponses.plans;
    }

    if (
      lowerQuery.includes("pricing") ||
      lowerQuery.includes("price") ||
      lowerQuery.includes("cost") ||
      lowerQuery.includes("rate") ||
      lowerQuery.includes("charge")
    ) {
      return botResponses.pricing;
    }

    if (
      lowerQuery.includes("tech") ||
      lowerQuery.includes("stack") ||
      lowerQuery.includes("tool") ||
      lowerQuery.includes("technology") ||
      lowerQuery.includes("framework")
    ) {
      return botResponses.technologies;
    }

    if (
      lowerQuery.includes("contact") ||
      lowerQuery.includes("email") ||
      lowerQuery.includes("reach") ||
      lowerQuery.includes("location")
    ) {
      return botResponses.contact;
    }

    if (
      lowerQuery.includes("about") ||
      lowerQuery.includes("company") ||
      lowerQuery.includes("who") ||
      lowerQuery.includes("thinkmoreai")
    ) {
      return botResponses.about;
    }

    if (
      lowerQuery.includes("hello") ||
      lowerQuery.includes("hi") ||
      lowerQuery.includes("hey")
    ) {
      return botResponses.default;
    }

    return "I can help with services, pricing, plans, technologies, team, process, portfolio, support, timelines, industries, and contact details. What would you like to know?";
  };

  const handleSend = (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    setMessages((currentMessages) => [
      ...currentMessages,
      { id: currentMessages.length + 1, text: messageText, isBot: false },
      { id: currentMessages.length + 2, text: getResponse(messageText), isBot: true },
    ]);
    setInput("");
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.24 }}
            style={{ bottom: footerClearance }}
            className="fixed right-4 z-40 flex items-center gap-1 border border-white/15 bg-[#0d1717]/95 p-1 shadow-xl backdrop-blur-md transition-[bottom] duration-200 ease-out motion-reduce:transition-none"
          >
            <a
              href="https://wa.me/919608826629?text=Hi%20there!%20I'm%20interested%20in%20your%20services%20and%20would%20like%20to%20know%20more"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center text-[#bce986] transition-colors hover:bg-white/10"
              aria-label="Contact ThinkMoreAI on WhatsApp"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="flex h-9 items-center gap-2 border-l border-white/15 px-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/10"
              aria-label="Open ThinkMoreAI assistant"
            >
              <RiRobot2Fill className="h-4 w-4 text-[#bce986]" /><span>Ask us</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="fixed bottom-0 right-0 z-50 flex h-[min(72dvh,520px)] w-full flex-col border border-border bg-[#0c1516] shadow-2xl sm:bottom-4 sm:right-4 sm:h-[min(520px,calc(100dvh-2rem))] sm:w-[min(360px,calc(100vw-2rem))]"
            role="dialog"
            aria-label="ThinkMoreAI assistant"
          >
            <div className="flex items-center justify-between bg-primary px-3 py-2.5 text-primary-foreground">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center border border-accent/30 bg-accent/10 text-accent">
                  <RiRobot2Fill className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold">ThinkMoreAI Assistant</h3>
                  <p className="text-[10px] text-primary-foreground/[0.62]">Fast answers for project planning</p>
                </div>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center border border-white/10 text-primary-foreground/[0.7] transition-colors hover:text-primary-foreground"
                aria-label="Close assistant"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[88%] whitespace-pre-line border px-3 py-2.5 text-[13px] leading-5 ${
                      message.isBot
                        ? "border-white/10 bg-white/[0.06] text-white"
                        : "border-accent bg-accent text-accent-foreground"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-border bg-[#0c1118] p-3">
              <div className="mb-2 flex flex-wrap gap-1.5">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => handleSend(prompt)}
                    className="border border-border bg-background px-2 py-1 text-[11px] font-semibold text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your question..."
                  className="min-w-0 flex-1 border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
                />
                <Button onClick={() => handleSend()} size="icon" className="shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="accent" asChild className="mt-2 h-9 w-full text-xs">
                <a href="https://cal.id/enquire.thinkmoreai" target="_blank" rel="noopener noreferrer">
                  Book a Discovery Call
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
