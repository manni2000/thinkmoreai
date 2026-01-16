import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScroll } from "framer-motion";

const botResponses: Record<string, string> = {
  "about": "ThinkmoreAI is an AI-driven technology and professional services company focused on building scalable, high-impact digital solutions. We help startups, SMEs, and enterprises turn ideas into production-ready products through intelligent automation, advanced analytics, and modern engineering. Our team brings experience from global MNCs and fast-scaling startups, with a strong emphasis on execution quality, clarity, and long-term partnerships.",

  "services": "We provide end-to-end digital services, including:\n\n💻 Website & Mobile App Development\n🤖 AI Chatbots & Automation\n📊 Data Analytics & SEO Optimization\n📣 Social Media Management & Video Editing\n🔧 Custom AI & Digital Solutions",

  "contact": "You can get in touch with us through the following channels:\n\n📧 Email: info@thinkmoreai.com\n📍 Office: Kestopur, Kolkata, West Bengal, India\n\n💬 You can also reach out via the contact form on our website, and our team will respond promptly.",

  "pricing": "Our pricing is flexible and project-based, determined by scope, complexity, and timelines. We follow a transparent pricing model with no hidden costs. Schedule a free consultation to receive a customized quote tailored to your specific requirements.",

  "plans": "We offer flexible pricing plans tailored to your needs:\n\n🚀 **Startup Plan**\nPerfect for new businesses and MVPs\n• Basic web development\n• Essential features\n• 2-4 week delivery\n• Budget-friendly pricing\n\n💼 **Business Plan**\nIdeal for growing companies\n• Advanced web/mobile apps\n• Custom integrations\n• 2-3 month delivery\n• Scalable solutions\n\n🏢 **Enterprise Plan**\nFor large-scale projects\n• Full-stack development\n• AI/ML integration\n• 4-6 month delivery\n• Premium support\n\n💡 **Custom Plan**\nTailored solutions for unique requirements\n• Personalized consultation\n• Flexible timelines\n• Custom features\n\nContact us for a detailed quote based on your specific project requirements!",

  "technologies": "We work with modern, production-grade technologies across the stack:\n\n⚛️ React, Next.js, Vue, Angular\n🔧 Node.js, Python, Django\n📱 React Native, Flutter\n🤖 TensorFlow, PyTorch, OpenAI\n☁️ AWS, GCP, Vercel",

  "team": "Meet Our Leadership Team \n\n👨‍💼 Charan Kumar  \nFounder & CEO  \n\n👨‍💻 Manish Kumar  \nCTO & Founder  \n\nOur team combines technical expertise with business acumen to deliver exceptional results for our clients.",

  "experience": "Our team brings extensive experience from global MNCs and fast-scaling startups. We have worked on diverse projects ranging from enterprise applications to AI-powered solutions, helping businesses across various industries achieve their digital transformation goals.",

  "process": "Our development process follows industry best practices:\n\n1. Discovery & Requirement Analysis\n2. Design & Prototyping\n3. Development & Testing\n4. Deployment & Launch\n5. Maintenance & Support\n\nWe ensure transparency and collaboration throughout the project lifecycle.",

  "portfolio": "We have successfully delivered projects for startups, SMEs, and enterprises across various domains including e-commerce, healthcare, education, finance, and more. Our portfolio showcases our expertise in creating scalable and user-friendly digital solutions.",

  "support": "We offer comprehensive post-launch support including:\n\n🔧 Bug fixes and troubleshooting\n📈 Performance optimization\n🔄 Regular updates and maintenance\n📞 24/7 technical support for critical issues\n\nOur support team ensures your application runs smoothly at all times.",

  "timeline": "Project timelines vary based on complexity and scope:\n\n• Simple websites: 2-4 weeks\n• Complex web applications: 2-3 months\n• Mobile apps: 3-4 months\n• Enterprise solutions: 4-6 months\n\nWe provide detailed timelines during the consultation phase.",

  "industries": "We serve clients across multiple industries:\n\n🏥 Healthcare & MedTech\n🏦 Banking & Finance\n🛒 E-commerce & Retail\n🎓 Education & EdTech\n🏭 Manufacturing & Industrial\n📱 Media & Entertainment\n🚗 Automotive\n🏥 Real Estate",

  "default": "Hello! I'm ThinkmoreAI's virtual assistant. I can help you with information about our company, services, pricing plans, technologies, team, pricing, contact details, development process, portfolio, support services, project timelines, and industries we serve. Feel free to ask any question!"
};


interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFloatingButtons, setShowFloatingButtons] = useState(false);
  const { scrollY } = useScroll();
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: botResponses.default, isBot: true }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      scrollToBottom();
    }, 300); 
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

    if (lowerQuery.includes("team") || lowerQuery.includes("founder") || lowerQuery.includes("ceo") || lowerQuery.includes("cto") || lowerQuery.includes("employee") || 
        (lowerQuery.includes("who") && (lowerQuery.includes("ceo") || lowerQuery.includes("founder") || lowerQuery.includes("cto") || lowerQuery.includes("runs") || lowerQuery.includes("leads") || lowerQuery.includes("manages")))) {
      return botResponses.team;
    }

    if (lowerQuery.includes("experience") || lowerQuery.includes("expertise") || lowerQuery.includes("background") || lowerQuery.includes("history")) {
      return botResponses.experience;
    }

    if (lowerQuery.includes("process") || lowerQuery.includes("methodology") || lowerQuery.includes("workflow") || lowerQuery.includes("approach")) {
      return botResponses.process;
    }

    if (lowerQuery.includes("portfolio") || lowerQuery.includes("project") || lowerQuery.includes("work") || lowerQuery.includes("client") || lowerQuery.includes("case study")) {
      return botResponses.portfolio;
    }
    
    if (lowerQuery.includes("support") || lowerQuery.includes("maintenance") || lowerQuery.includes("assist")) {
      return botResponses.support;
    }
    
    if (lowerQuery.includes("timeline") || lowerQuery.includes("duration") || lowerQuery.includes("delivery") || lowerQuery.includes("deadline")) {
      return botResponses.timeline;
    }

    if (lowerQuery.includes("industry") || lowerQuery.includes("sector") || lowerQuery.includes("domain") || lowerQuery.includes("vertical")) {
      return botResponses.industries;
    }
    
    if (lowerQuery.includes("service") || lowerQuery.includes("offer") || lowerQuery.includes("provide") || 
        (lowerQuery.includes("what") && lowerQuery.includes("do"))) {
      return botResponses.services;
    }

    if (lowerQuery.includes("plan") || lowerQuery.includes("package") || lowerQuery.includes("subscription") || 
        (lowerQuery.includes("pricing") && (lowerQuery.includes("plan") || lowerQuery.includes("package") || lowerQuery.includes("tier")))) {
      return botResponses.plans;
    }
    
    if (lowerQuery.includes("pricing") || lowerQuery.includes("price") || lowerQuery.includes("cost") || lowerQuery.includes("rate") || lowerQuery.includes("charge") || lowerQuery.includes("affordable")) {
      return botResponses.pricing;
    }
    
    if (lowerQuery.includes("tech") || lowerQuery.includes("stack") || lowerQuery.includes("tool") || lowerQuery.includes("technology") || lowerQuery.includes("framework") || lowerQuery.includes("language")) {
      return botResponses.technologies;
    }
    
    if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("reach") || lowerQuery.includes("address") || lowerQuery.includes("location") || 
        (lowerQuery.includes("how") && lowerQuery.includes("contact"))) {
      return botResponses.contact;
    }
    
    if (lowerQuery.includes("about") || lowerQuery.includes("company") || lowerQuery.includes("who") || lowerQuery.includes("thinkmoreai")) {
      return botResponses.about;
    }
    
    if (lowerQuery.includes("hello") || lowerQuery.includes("hi") || lowerQuery.includes("hey") || lowerQuery.includes("greetings")) {
      return botResponses.default;
    }
    
    return "I'd be happy to help! You can ask me about our company, services, pricing plans, technologies, team, pricing, contact details, development process, portfolio, support services, project timelines, or industries we serve. What would you like to know?";
  };

  const handleSend = (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      isBot: false,
    };

    const botMessage: Message = {
      id: messages.length + 2,
      text: getResponse(messageText),
      isBot: true,
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* WhatsApp Button */}
      <AnimatePresence>
        {showFloatingButtons && (
          <motion.a
            href="https://wa.me/919608826629?text=Hi%20there!%20I'm%20interested%20in%20your%20services%20and%20would%20like%20to%20know%20more"
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-24 right-5 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center ${isOpen ? 'hidden' : ''}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0.4)", "0 0 0 20px rgba(34, 197, 94, 0)", "0 0 0 0 rgba(34, 197, 94, 0)"]
            }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ 
              duration: 0.3,
              boxShadow: { duration: 1, repeat: Infinity }
            }}
          >
            <img src="/images/portfolio/whatsapp.png" alt="WhatsApp" className="w-14 h-14" style={{ filter: 'brightness(1.2)' }} />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <AnimatePresence>
        {showFloatingButtons && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className={`fixed bottom-8 right-6 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-2xl flex items-center justify-center ${isOpen ? 'hidden' : ''}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              boxShadow: ["0 0 0 0 rgba(245, 166, 35, 0.4)", "0 0 0 20px rgba(245, 166, 35, 0)", "0 0 0 0 rgba(245, 166, 35, 0)"]
            }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ 
              duration: 0.3,
              boxShadow: { duration: 1, repeat: Infinity }
            }}
          >
            <img src="/images/portfolio/chats.webp" alt="Chat" className="w-10 h-10"/>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 w-full h-full bg-card md:fixed md:bottom-4 md:right-4 md:inset-auto md:w-[calc(100vw-2rem)] md:max-w-[450px] md:h-[calc(100vh-2rem)] md:max-h-[600px] md:rounded-2xl md:shadow-2xl md:border md:border-border/50 md:flex md:flex-col"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary-foreground">ThinkmoreAI Assistant</h3>
                  <p className="text-xs text-primary-foreground/70">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm whitespace-pre-line ${
                      message.isBot
                        ? 'bg-secondary text-secondary-foreground rounded-tl-none'
                        : 'bg-accent text-accent-foreground rounded-tr-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your question..."
                  className="flex-1 bg-secondary rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                <Button
                  onClick={() => handleSend()}
                  size="icon"
                  className="rounded-xl bg-accent hover:bg-accent/90"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <Button 
                variant="accent" 
                asChild 
                className="w-full text-sm"
              >
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
