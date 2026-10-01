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
      "ThinkMoreAI is an independent AI product and digital engineering studio. We design, architect, and deploy intelligent AI systems, custom SaaS platforms, workflow automation, and performance analytics for ambitious founders and enterprises.",
  },
  {
    question: "Who is the ideal client for ThinkMoreAI?",
    answer:
      "We partner with seed-to-growth startups, established businesses, and forward-thinking enterprises that need to turn complex challenges into production-ready software, automate mission-critical operations, or deploy applied AI with measurable ROI.",
  },
  {
    question: "What specific AI and engineering capabilities do you deliver?",
    answer:
      "Our capabilities span autonomous AI agents, retrieval-augmented generation (RAG) knowledge systems, end-to-end web and mobile applications (React, Next.js, Node.js, Python), enterprise API integrations, and predictive data intelligence platforms.",
  },
  {
    question: "Do you work with non-technical founders and executives?",
    answer:
      "Yes. We act as your fractional product and technical leadership. We translate commercial objectives into clear architectural roadmaps, handle end-to-end engineering, and provide transparent, jargon-free communication at every milestone.",
  },
  {
    question: "How is ThinkMoreAI different from traditional agencies?",
    answer:
      "Traditional agencies sell billable hours on disconnected tickets. We operate as dedicated product co-builders—uniting commercial strategy, user experience design, modern AI engineering, and scalable cloud infrastructure with full accountability for delivery.",
  },
  {
    question: "How do you protect client data, privacy, and intellectual property?",
    answer:
      "Clients retain 100% intellectual property ownership of all custom code, models, and architectures created. We enforce strict NDAs, build on SOC 2 and GDPR-compliant cloud infrastructure, and utilize enterprise-tier AI APIs with zero data training retention.",
  },
  {
    question: "What are your engagement models and payment structures?",
    answer:
      "We offer milestone-based fixed scopes for well-defined builds, agile sprint blocks for rapid prototyping, and monthly dedicated engineering retainers for ongoing product evolution. All terms are scoped transparently during technical discovery.",
  },
  {
    question: "What level of support and maintenance is provided post-launch?",
    answer:
      "Every production deployment includes dedicated warranty coverage. Beyond launch, we offer SLA-backed maintenance packages covering real-time infrastructure monitoring, performance optimization, model tuning, security patches, and continuous feature expansion.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="studio-faq warm-section section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="section-eyebrow">FAQ</span>
          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-[#10151d] sm:text-4xl lg:text-5xl">
            Questions clients ask before we build.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#5c6571]">
            Clear answers for scope, process, security, and working style.
          </p>
        </motion.div>

        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto max-w-4xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border border-[#10151d]/15 bg-white/55 px-5 transition-all duration-300 data-[state=open]:border-[#16697a]/50"
              >
                <AccordionTrigger className="text-left font-heading text-base font-semibold text-[#10151d] hover:text-[#16697a] hover:no-underline sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-[#5c6571] sm:text-base">
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
