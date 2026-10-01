import { services } from "@/lib/studioContent";

type ServiceSlug = (typeof services)[number]["slug"];

type ServiceDetail = {
  line: string;
  insight: string;
  stackIntro: string;
  stack: readonly { layer: string; purpose: string; tools: readonly string[] }[];
  stages: readonly { title: string; description: string }[];
};

export const serviceDetails: Record<ServiceSlug, ServiceDetail> = {
  "ai-products": {
    line: "From scattered knowledge to useful intelligence.",
    insight: "The best AI experience knows what to retrieve, what to say, and when a person should take over.",
    stackIntro: "We choose models and application tools around the information, permissions, and experience the product needs.",
    stack: [
      { layer: "PRODUCT INTERFACE", purpose: "A usable place to ask, review, and act.", tools: ["React", "Next.js", "TypeScript", "Vue"] },
      { layer: "INTELLIGENCE", purpose: "Model and retrieval options for the task.", tools: ["OpenAI", "Gemini", "RAG", "PyTorch", "TensorFlow"] },
      { layer: "APPLICATION", purpose: "Context, access rules, and dependable APIs.", tools: ["Python", "FastAPI", "Django", "Node.js", "REST / GraphQL", "Docker"] },
    ],
    stages: [
      { title: "Map the question", description: "Identify the tasks, users, source material, and decisions the product must support." },
      { title: "Shape the context", description: "Plan retrieval, permissions, response behavior, and human review where needed." },
      { title: "Build the experience", description: "Connect the interface, application logic, and model layer into a usable workflow." },
      { title: "Test the edges", description: "Evaluate uncertain answers, failure paths, and real use before expanding scope." },
    ],
  },
  "web-mobile": {
    line: "A coherent product, from first screen to application layer.",
    insight: "People should understand the experience quickly. Teams should be able to extend the system safely.",
    stackIntro: "Interface, application, and delivery choices follow the user journey and the needs of the first release.",
    stack: [
      { layer: "WEB EXPERIENCE", purpose: "Responsive product and commerce interfaces.", tools: ["React", "Next.js", "Vue", "TypeScript", "Data visualization"] },
      { layer: "MOBILE EXPERIENCE", purpose: "Native-feeling product journeys.", tools: ["Flutter", "React Native"] },
      { layer: "APPLICATION & DELIVERY", purpose: "APIs, deployment, and iteration.", tools: ["Node.js", "Express", "Python", "Django", "REST / GraphQL", "Vercel", "AWS", "Docker", "CI / CD"] },
    ],
    stages: [
      { title: "Define the journey", description: "Choose the core user paths and the first useful release." },
      { title: "Design the system", description: "Create interface patterns, states, and responsive behavior that fit together." },
      { title: "Engineer the product", description: "Build screens, application logic, APIs, and integration points." },
      { title: "Release and refine", description: "Test with real flows, launch carefully, and improve the next iteration." },
    ],
  },
  automation: {
    line: "Work moves further when systems move together.",
    insight: "A reliable automation makes the next owner, action, and exception visible.",
    stackIntro: "We build around the APIs, events, and operational constraints of the tools already in use.",
    stack: [
      { layer: "WORKFLOW LOGIC", purpose: "Triggers, rules, and error handling.", tools: ["Node.js", "Python", "Django", "TypeScript"] },
      { layer: "INTEGRATIONS", purpose: "Reliable exchange between systems.", tools: ["Express", "FastAPI", "REST / GraphQL", "Webhooks"] },
      { layer: "OPERATIONS", purpose: "Deployment and maintainable delivery.", tools: ["AWS", "GCP", "Vercel", "Docker", "CI / CD"] },
    ],
    stages: [
      { title: "Trace the work", description: "Follow the current trigger, handoffs, delays, and exception paths." },
      { title: "Design the route", description: "Define rules, checkpoints, ownership, and what should happen when a step fails." },
      { title: "Connect the tools", description: "Implement event handling, APIs, webhooks, and the necessary safeguards." },
      { title: "Observe and improve", description: "Make status visible, test recovery, and refine the workflow with use." },
    ],
  },
  "data-growth": {
    line: "Turn signals into decisions a team can use.",
    insight: "A dashboard is useful when it answers a real question and makes the next action clearer.",
    stackIntro: "The analysis, interface, and reporting stack depends on the sources and decisions that matter to the team.",
    stack: [
      { layer: "ANALYSIS", purpose: "Explore, organize, and interpret source data.", tools: ["Python", "Data visualization", "REST / GraphQL", "FastAPI"] },
      { layer: "DECISION INTERFACE", purpose: "Readable dashboards and reporting views.", tools: ["React", "Next.js", "Vue", "TypeScript"] },
      { layer: "DELIVERY & DISCOVERY", purpose: "Publish, measure, and improve.", tools: ["GCP", "AWS", "Vercel", "Technical SEO", "Reporting", "Docker", "CI / CD"] },
    ],
    stages: [
      { title: "Start with a decision", description: "Identify the question, audience, and action the work should support." },
      { title: "Find the signal", description: "Review available sources, definitions, gaps, and useful measures." },
      { title: "Make it legible", description: "Design views, reporting, and content structure around clear interpretation." },
      { title: "Use and iterate", description: "Review what the team learns and improve the next decision cycle." },
    ],
  },
};
