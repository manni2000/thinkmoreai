import { motion, useInView } from "framer-motion";
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
    answer:
      "ThinkMoreAI helps startups, founders, and businesses build AI-powered automation, digital marketing systems, custom software, analytics, chatbots, and growth workflows.",
  },
  {
    question: "Who should work with ThinkMoreAI?",
    answer:
      "We are a strong fit for startups, small businesses, and growing teams that need practical AI adoption, better operations, stronger digital presence, or a production-ready product partner.",
  },
  {
    question: "What AI services do you provide?",
    answer:
      "We provide AI business automation, AI digital marketing, custom software development, AI chatbot development, workflow design, and implementation consulting tailored to business goals.",
  },
  {
    question: "Do you work with non-technical founders?",
    answer:
      "Yes. We handle the technical complexity and explain tradeoffs in plain business language so founders can make confident decisions.",
  },
  {
    question: "How is ThinkMoreAI different from other agencies?",
    answer:
      "We focus on practical implementation and measurable results. Strategy, product thinking, automation, analytics, and execution are handled together instead of as disconnected tasks.",
  },
  {
    question: "Is data secure and confidential?",
    answer:
      "Yes. We follow industry-standard security practices, keep project information confidential, and can sign NDAs when required.",
  },
  {
    question: "What is your payment structure?",
    answer:
      "We offer milestone-based payments, retainers, and fixed-price scopes depending on the project. The exact structure is discussed during discovery.",
  },
  {
    question: "Do you offer maintenance packages?",
    answer:
      "Yes. Maintenance can include updates, monitoring, security patches, performance improvements, and feature enhancements.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding surface-grid bg-[#f5f7fb]">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="section-eyebrow">FAQ</span>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Questions clients ask before we build.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Clear answers for scope, process, security, and working style.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto max-w-4xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border border-border bg-white px-5 shadow-sm transition-all duration-300 data-[state=open]:border-accent/40"
              >
                <AccordionTrigger className="text-left font-heading text-base font-semibold text-foreground hover:text-accent hover:no-underline sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-muted-foreground sm:text-base">
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
