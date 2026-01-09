import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
	CiDesktop, 
	CiServer, 
	CiMobile1, 
	CiMicrochip, 
	CiChat1, 
	CiSettings, 
	CiCloud, 
	CiLock 
} from "react-icons/ci";

const techCategories = [
	{
		category: "Frontend",
		icon: CiDesktop,
		color: "from-blue-500 to-cyan-500",
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
		icon: CiServer,
		color: "from-green-500 to-emerald-500",
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
		icon: CiMobile1,
		color: "from-purple-500 to-pink-500",
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
		icon: CiMicrochip,
		color: "from-orange-500 to-red-500",
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
		icon: CiChat1,
		color: "from-indigo-500 to-purple-500",
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
		icon: CiSettings,
		color: "from-gray-600 to-slate-600",
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
		icon: CiCloud,
		color: "from-sky-500 to-blue-500",
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
		icon: CiLock,
		color: "from-red-500 to-orange-500",
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
						className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest mb-4"
						whileHover={{ scale: 1.05 }}
					>
						Tech Stack
					</motion.span>
					<h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
						Technologies We{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
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
					{techCategories.map((category, catIndex) => {
						const Icon = category.icon;
						return (
							<motion.div
								key={category.category}
								variants={cardVariants}
								whileHover={{ y: -8, scale: 1.02 }}
								className="group bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden"
							>
								{/* Background gradient overlay */}
								<div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
								
								{/* Icon and Header */}
								<div className="relative z-10 mb-6 text-center sm:text-left">
									<div className="flex justify-center sm:justify-start">
										<div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
											<Icon className="w-6 h-6 text-white" />
										</div>
									</div>
									<div className="mb-2">
										<span className="text-xs uppercase tracking-widest font-semibold text-slate-500">
											Category
										</span>
									</div>
									<h3 className="font-heading font-bold text-xl text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
										{category.category}
									</h3>
									<div className={`h-0.5 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center sm:origin-left mx-auto sm:mx-0`} />
								</div>

								{/* Tech Items */}
								<div className="relative z-10 space-y-3 text-center sm:text-left">
									{category.techs.map((tech, idx) => (
										<motion.div
											key={idx}
											initial={{ opacity: 0, x: -10 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{ delay: idx * 0.05 }}
											whileHover={{ x: 4 }}
											className="flex items-center justify-center sm:justify-start gap-3 group/item"
										>
											<div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color} flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200`} />
											<span className="text-sm text-slate-700 group-hover/item:text-slate-900 group-hover/item:font-medium transition-all duration-200">
												{tech}
											</span>
										</motion.div>
									))}
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default Technologies;