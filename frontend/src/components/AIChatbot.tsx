import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const botResponses: Record<string, string> = {
  "about": "ThinkmoreAI is an AI-driven technology and professional services company focused on building scalable, high-impact digital solutions. We help startups, SMEs, and enterprises turn ideas into production-ready products through intelligent automation, advanced analytics, and modern engineering. Our team brings experience from global MNCs and fast-scaling startups, with a strong emphasis on execution quality, clarity, and long-term partnerships.",

  "services": "We provide end-to-end digital and professional services, including:\n\n💻 Website & Mobile App Development\n🤖 AI Chatbots & Automation\n📊 Data Analytics & Research Reports\n📣 Social Media Management & Videoediting\n\nAdditionally, we offer Chartered Accountant (CA) services:\n🧾 ITR Filing, GST & Tax Planning\n🏢 Company Incorporation & ROC Services\n📄 Compliance, Notices & Assessments",

  "contact": "You can get in touch with us through the following channels:\n\n📧 Email: info@thinkmoreai.com\n📍 Office: Kestopur, Kolkata, West Bengal, India\n\n💬 You can also reach out via the contact form on our website, and our team will respond promptly.",

  "pricing": "Our pricing is flexible and project-based, determined by scope, complexity, and timelines. We follow a transparent pricing model with no hidden costs. Schedule a free consultation to receive a customized quote tailored to your specific requirements.",

  "technologies": "We work with modern, production-grade technologies across the stack:\n\n⚛️ React, Next.js, Vue, Angular\n🔧 Node.js, Python, Django\n📱 React Native, Flutter\n🤖 TensorFlow, PyTorch, OpenAI\n☁️ AWS, GCP, Vercel",

  "team": "Meet Our Leadership Team\n\n👨‍💼 Manish Kumar  \nCo-Founder & CTO  \n\n👨‍💼 Charan Kumar  \nCo-Founder & CEO  \n\nOur team combines technical expertise with business acumen to deliver exceptional results for our clients.",

  "default": "Hello! I’m ThinkmoreAI’s virtual assistant. I can help you with information about:\n\n• Our company and expertise\n• Services we provide\n• Technologies we work with\n• Contact details\n• Pricing and consultation\n\nJust type your question to get started!",
};

const quickQuestions = [
  "About ThinkmoreAI",
  "Our Services", 
  "Technologies",
  "Our Team",
  "Contact Info",
  "Pricing",
];

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const getResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes("about") || lowerQuery.includes("company") || lowerQuery.includes("who")) {
      return botResponses.about;
    }
    if (lowerQuery.includes("service") || lowerQuery.includes("offer") || lowerQuery.includes("do")) {
      return botResponses.services;
    }
    if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("reach")) {
      return botResponses.contact;
    }
    if (lowerQuery.includes("pricing") || lowerQuery.includes("price") || lowerQuery.includes("cost") || lowerQuery.includes("rate")) {
      return botResponses.pricing;
    }
    if (lowerQuery.includes("tech") || lowerQuery.includes("stack") || lowerQuery.includes("tool")) {
      return botResponses.technologies;
    }
    if (lowerQuery.includes("team") || lowerQuery.includes("who")) {
      return botResponses.team;
    }
    return "I'd be happy to help! Could you ask about our services, technologies, pricing, or how to contact us? Or click one of the quick options below.";
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
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-6 z-50 w-16 h-16 rounded-full bg-accent text-accent-foreground shadow-2xl flex items-center justify-center ${isOpen ? 'hidden' : ''}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          boxShadow: ["0 0 0 0 rgba(245, 166, 35, 0.4)", "0 0 0 20px rgba(245, 166, 35, 0)", "0 0 0 0 rgba(245, 166, 35, 0)"]
        }}
        transition={{ 
          boxShadow: { duration: 2, repeat: Infinity }
        }}
      >
        <MessageCircle className="w-7 h-7" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-8 right-6 z-50 w-[360px] h-[500px] bg-card rounded-2xl shadow-2xl border border-border/50 flex flex-col overflow-hidden"
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

            {/* Quick Questions */}
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="text-xs px-3 py-1.5 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
                >
                  {q}
                </button>
              ))}
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
