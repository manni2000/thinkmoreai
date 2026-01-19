import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does ThinkMoreAI do?",
    answer: "ThinkMoreAI is an AI-powered business growth company that helps startups, entrepreneurs, and small businesses scale using AI automation, AI-driven digital marketing, and custom software solutions.",
  },
  {
    question: "Who should work with ThinkMoreAI?",
    answer: "ThinkMoreAI is ideal for startups, founders, and small to mid-sized businesses looking to improve efficiency, automate operations, generate more leads, and grow faster using AI technology.",
  },
  {
    question: "What AI services does ThinkMoreAI provide?",
    answer: "ThinkMoreAI provides AI business automation, AI digital marketing, custom software development, AI chatbot development, and growth consulting tailored to business needs.",
  },
  {
    question: "Does ThinkMoreAI work with small businesses and startups?",
    answer: "Yes. ThinkMoreAI specializes in helping startups and small businesses adopt AI solutions that are affordable, scalable, and aligned with long-term growth goals.",
  },
  {
    question: "How is ThinkMoreAI different from other AI agencies?",
    answer: "ThinkMoreAI focuses on practical AI implementation, not just tools. The company combines strategy, automation, and execution to deliver measurable business growth instead of generic AI solutions.",
  },
  {
    question: "Does ThinkMoreAI provide custom AI solutions?",
    answer: "Yes. ThinkMoreAI builds custom AI-powered systems, chatbots, and workflows based on specific business requirements rather than one-size-fits-all solutions.",
  },
  {
    question: "Is ThinkMoreAI suitable for non-technical founders?",
    answer: "Absolutely. ThinkMoreAI works closely with non-technical founders and business owners, handling the technical complexity while clearly explaining solutions in simple, business-focused terms.",
  },
  {
    question: "Where is ThinkMoreAI based, and does it serve globally?",
    answer: "ThinkMoreAI is based in India and serves clients globally, offering AI-driven solutions for businesses across different industries and regions.",
  },
  {
    question: "How can businesses get started with ThinkMoreAI?",
    answer: "Businesses can get started by booking a discovery call through the ThinkMoreAI website to discuss goals, challenges, and suitable AI solutions.",
  },
  {
    question: "Is data secure and confidential?",
    answer: "Security is our top priority. We follow industry-standard security practices, sign NDAs when required, and ensure all data is handled with utmost confidentiality and protection.",
  },
  {
    question: "What is your payment structure?",
    answer: "We offer flexible payment options including milestone-based payments, monthly retainers, and fixed-price contracts. The exact structure depends on the project scope and is discussed during the initial consultation.",
  },
  {
    question: "Do you offer maintenance packages?",
    answer: "Yes, we offer comprehensive maintenance packages including regular updates, security patches, performance monitoring, and feature enhancements. Packages are customizable based on your needs.",
  },
  {
    question: "What makes ThinkmoreAI different from other agencies?",
    answer: "We combine technical excellence with business understanding. Our AI-first approach, proven delivery track record, team from global MNCs, and focus on long-term partnerships set us apart.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-indigo-50 via-indigo-50 to-indigo-100">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl border-none px-6 data-[state=open]:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-accent hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
