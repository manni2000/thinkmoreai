import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const techCategories = [
	{
		category: "Frontend",
		techs: [
			"React.js",
			"Next.js",
			"Vue.js",
			"Angular",
			"TypeScript",
			"Tailwind CSS",
			"Redux / Zustand",
		],
	},
	{
		category: "Backend",
		techs: [
			"Node.js",
			"Express.js",
			"NestJS",
			"Django",
			"FastAPI",
			"Python",
			"REST & GraphQL APIs",
		],
	},
	{
		category: "Mobile",
		techs: [
			"React Native",
			"Flutter",
			"Expo",
			"Ionic",
			"Swift (iOS)",
			"Kotlin (Android)",
		],
	},
	{
		category: "AI / ML",
		techs: [
			"TensorFlow",
			"PyTorch",
			"Scikit-learn",
			"XGBoost",
			"Keras",
			"ONNX",
			"MLflow",
			"Computer Vision",
			"NLP",
		],
	},
	{
		category: "LLMs",
		techs: [
			"OpenAI (GPT-4)",
			"Google Gemini",
			"Hugging Face",
			"LangChain",
			"RAG",
			"Prompt Engineering",
		],
	},
	{
		category: "DevOps & Infrastructure",
		techs: [
			"Docker",
			"Kubernetes",
			"Terraform",
			"AWS CDK",
			"CI/CD",
			"NGINX",
			"Linux",
		],
	},
	{
		category: "Cloud & Monitoring",
		techs: [
			"AWS",
			"Google Cloud (GCP)",
			"Vercel",
			"Netlify",
			"Prometheus",
			"Grafana",
		],
	},
	{
		category: "Security & Reliability",
		techs: [
			"IAM",
			"Secrets Management",
			"SSL/TLS",
			"Load Balancing",
			"Auto Scaling",
		],
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08,
			delayChildren: 0.2,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5 },
	},
};

const Technologies = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section className="pt-2 pb-20 md:pt-4 md:pb-28 lg:pt-6 lg:pb-32 bg-gradient-to-b from-indigo-50 via-blue-50 to-cyan-50 overflow-hidden">
			<div className="container-custom">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 40 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center max-w-3xl mx-auto mb-20"
				>
					<motion.span
						className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest mb-4"
						whileHover={{ scale: 1.05 }}
					>
						Tech Stack
					</motion.span>
					<h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
						Technologies We{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
							Master
						</span>
					</h2>
					<p className="text-lg text-slate-600">
						We leverage cutting-edge technologies to build robust, scalable
						solutions
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
				>
					{techCategories.map((category, catIndex) => (
						<motion.div
							key={category.category}
							variants={cardVariants}
							whileHover={{ y: -6 }}
							className="group bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
						>
							{/* Category Label */}
							<div className="mb-4">
								<span className="text-xs uppercase tracking-widest font-semibold text-slate-500">
									Technology
								</span>
							</div>

							{/* Category Title */}
							<h3 className="font-heading font-bold text-lg text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
								{category.category}
							</h3>

							{/* Divider */}
							<div className="border-t border-slate-100 mb-5" />

							{/* Tech Items */}
							<div className="space-y-2.5">
								{category.techs.map((tech, idx) => (
									<motion.div
										key={idx}
										initial={{ opacity: 0, x: -10 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ delay: idx * 0.05 }}
										className="flex items-center gap-3"
									>
										<span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex-shrink-0" />
										<span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
											{tech}
										</span>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Technologies;