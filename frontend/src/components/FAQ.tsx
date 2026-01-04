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
    question: "How long does a project take?",
    answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Absolutely! We offer comprehensive post-launch support including monitoring, bug fixes, updates, and scaling assistance. We believe in building long-term partnerships with our clients.",
  },
  {
    question: "Can services be customized?",
    answer: "Definitely. Every business is unique, and we tailor our solutions to meet your specific requirements. During the discovery phase, we work closely with you to understand and address your exact needs.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we have experience serving clients globally including USA, UK, UAE, and other countries. We're equipped to handle different time zones and international compliance requirements.",
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
