import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Send, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";
import { Button } from "@/components/ui/button";

const botResponses: Record<string, string> = {
  about:
    "ThinkMoreAI is an AI-driven technology and professional services company. We help startups, SMEs, and enterprise teams turn ideas into scalable products, automation, analytics, and growth systems.",

  services:
    "Our services include:\n\n- Website and mobile app development\n- AI chatbots and workflow automation\n- Data analytics and SEO optimization\n- Social media management and video editing\n- AI consulting and implementation roadmaps",

  contact:
    "You can reach us at manishmandal9734@gmail.com or book a discovery call from the website. Share your goals and we will help map the next best step.",

  pricing:
    "Pricing depends on scope, complexity, timeline, and support needs. We use transparent project estimates, milestone-based plans, and retainers when ongoing work makes sense.",

  plans:
    "We shape plans around the project stage:\n\nStartup: MVPs, landing pages, and foundational automation.\nBusiness: advanced apps, integrations, analytics, and growth systems.\nEnterprise: larger builds, AI workflows, governance, and premium support.\nCustom: tailored scope for unique requirements.",

  technologies:
    "We work with modern production stacks including React, Next.js, Node.js, Python, Django, React Native, Flutter, TensorFlow, PyTorch, OpenAI, AWS, GCP, and Vercel.",

  team:
    "ThinkMoreAI is led by Charan Kumar, CEO and Founder, and Manish Kumar, CTO and Founder. The wider team combines strategy, engineering, marketing, analytics, and project delivery expertise.",

  experience:
    "Our team brings experience from global MNCs and fast-scaling startup environments, with work across enterprise applications, AI systems, analytics, and digital growth.",

  process:
    "Our process is simple: discovery, estimate, design, build, launch, and support. You get clear milestones, regular demos, and practical communication throughout.",

  portfolio:
    "Our portfolio includes e-commerce, fintech, food delivery, SaaS, video production, and research projects. You can view featured work in the Portfolio section.",

  support:
    "Post-launch support can include bug fixes, performance optimization, security updates, monitoring, new features, and ongoing technical assistance.",

  timeline:
    "Timelines vary by scope. Simple websites can take 2-4 weeks, complex web apps 2-3 months, mobile apps 3-4 months, and enterprise systems 4-6 months or more.",

  industries:
    "We serve healthcare, finance, e-commerce, education, manufacturing, media, real estate, professional services, and other growth-focused businesses.",

  default:
    "Hi, I am ThinkMoreAI's assistant. Ask me about services, pricing, process, portfolio, timelines, technologies, team, or how to get started.",
};

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const quickPrompts = ["Services", "Pricing", "Process"];

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFloatingButtons, setShowFloatingButtons] = useState(false);
  const { scrollY } = useScroll();
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: botResponses.default, isBot: true },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 120);
    return () => clearTimeout(timeoutId);
  }, [messages]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setShowFloatingButtons(latest > 200);
    });
    return unsubscribe;
  }, [scrollY]);

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
        {showFloatingButtons && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.24 }}
            className="fixed bottom-6 right-5 z-50 flex flex-col gap-3"
          >
            <a
              href="https://wa.me/919608826629?text=Hi%20there!%20I'm%20interested%20in%20your%20services%20and%20would%20like%20to%20know%20more"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center border border-emerald-400/25 bg-emerald-500 text-white shadow-[0_18px_40px_-22px_rgba(16,185,129,0.9)] transition-transform duration-300 hover:-translate-y-1"
              aria-label="Contact ThinkMoreAI on WhatsApp"
            >
              <FaWhatsapp className="h-7 w-7" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="flex h-14 w-14 items-center justify-center border border-accent/30 bg-primary text-accent shadow-[0_18px_45px_-20px_rgba(245,166,35,0.9)] transition-transform duration-300 hover:-translate-y-1"
              aria-label="Open ThinkMoreAI assistant"
            >
              <RiRobot2Fill className="h-6 w-6" />
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
            className="fixed inset-0 z-50 flex h-full w-full flex-col bg-background md:inset-auto md:bottom-5 md:right-5 md:h-[min(640px,calc(100vh-2rem))] md:w-[430px] md:border md:border-border md:shadow-2xl"
          >
            <div className="flex items-center justify-between bg-primary p-4 text-primary-foreground">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-accent/30 bg-accent/10 text-accent">
                  <RiRobot2Fill className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold">ThinkMoreAI Assistant</h3>
                  <p className="text-xs text-primary-foreground/[0.62]">Fast answers for project planning</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 items-center justify-center border border-white/10 text-primary-foreground/[0.7] transition-colors hover:text-primary-foreground"
                aria-label="Close assistant"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto p-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[84%] whitespace-pre-line border px-4 py-3 text-sm leading-6 ${
                      message.isBot
                        ? "border-border bg-white text-foreground"
                        : "border-accent bg-accent text-accent-foreground"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-border bg-white p-4">
              <div className="mb-3 flex flex-wrap gap-2">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => handleSend(prompt)}
                    className="border border-border bg-background px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
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
                  className="min-w-0 flex-1 border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
                />
                <Button onClick={() => handleSend()} size="icon" className="shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="accent" asChild className="mt-3 w-full">
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
