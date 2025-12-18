import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Globe, Smartphone, Video, FileText } from "lucide-react";

const portfolioItems = [
	{
		id: 1,
		title: "Enterprise SaaS Platform",
		category: "Website",
		icon: Globe,
		description: "Modern business platform with advanced analytics dashboard",
		tags: ["React", "Node.js", "PostgreSQL"],
		gradient: "from-blue-500 to-cyan-500",
	},
	{
		id: 2,
		title: "E-Commerce Mobile App",
		category: "Mobile App",
		icon: Smartphone,
		description: "Feature-rich shopping application with seamless UX",
		tags: ["React Native", "Firebase", "Stripe"],
		gradient: "from-purple-500 to-pink-500",
	},
	{
		id: 3,
		title: "HealthTech Dashboard",
		category: "Website",
		icon: Globe,
		description: "Patient management and analytics system",
		tags: ["Vue.js", "Python", "AWS"],
		gradient: "from-green-500 to-emerald-500",
	},
	{
		id: 4,
		title: "Corporate Brand Video",
		category: "Videography",
		icon: Video,
		description: "Engaging brand story for tech startup launch",
		tags: ["Motion Graphics", "4K Production"],
		gradient: "from-red-500 to-rose-500",
	},
	{
		id: 5,
		title: "Investment Research Report",
		category: "Research",
		icon: FileText,
		description: "Comprehensive market analysis for venture capital",
		tags: ["Data Analysis", "Visualization"],
		gradient: "from-yellow-500 to-orange-500",
	},
	{
		id: 6,
		title: "FinTech Mobile App",
		category: "Mobile App",
		icon: Smartphone,
		description: "Secure payment and banking application",
		tags: ["Flutter", "Node.js", "MongoDB"],
		gradient: "from-indigo-500 to-purple-500",
	},
];

const categories = ["All", "Website", "Mobile App", "Videography", "Research"];

const Portfolio = () => {
	const [activeCategory, setActiveCategory] = useState("All");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const filteredItems =
		activeCategory === "All"
			? portfolioItems
			: portfolioItems.filter((item) => item.category === activeCategory);

	return (
		<section id="portfolio" className="pt-2 pb-20 md:pt-4 md:pb-28 lg:pt-6 lg:pb-32 bg-gradient-to-b from-gray-50 to-gray-50 relative overflow-hidden">
			{/* Background Animation */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					animate={{ y: [0, 20, 0] }}
					transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
					className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
				/>
			</div>

			<div className="container-custom relative z-10">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 40 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center max-w-3xl mx-auto mb-16"
				>
					<motion.span
						className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider mb-4"
						whileHover={{ scale: 1.05 }}
					>
						Portfolio
					</motion.span>
					<h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
						Featured{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
							Projects
						</span>
					</h2>
					<p className="text-lg text-muted-foreground">
						Showcasing our expertise across diverse domains and technologies
					</p>
				</motion.div>

				{/* Filter Tabs */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="flex flex-wrap justify-center gap-3 mb-16"
				>
					{categories.map((category) => (
						<motion.button
							key={category}
							onClick={() => setActiveCategory(category)}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
								activeCategory === category
									? "bg-gradient-to-r from-accent to-orange-400 text-accent-foreground shadow-lg shadow-accent/50"
									: "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-accent/50"
							}`}
						>
							{category}
						</motion.button>
					))}
				</motion.div>

				{/* Portfolio Grid */}
				<motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredItems.map((item, index) => (
						<motion.div
							key={item.id}
							layout
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.4, delay: index * 0.05 }}
							whileHover={{ y: -8 }}
							className="group relative h-full"
						>
							{/* Glow Effect */}
							<motion.div
								className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-2xl rounded-2xl transition-opacity duration-300"
								style={{
									backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
								}}
							/>

							<div className="relative h-full bg-card border border-border/50 rounded-2xl overflow-hidden group-hover:border-accent/50 transition-all duration-300 flex flex-col">
								{/* Image Placeholder with Gradient */}
								<motion.div
									className={`aspect-video bg-gradient-to-br ${item.gradient} relative overflow-hidden`}
									whileHover={{ scale: 1.05 }}
								>
									<div className="absolute inset-0 flex items-center justify-center">
										<item.icon className="w-16 h-16 text-white/30" />
									</div>

									{/* Hover Overlay */}
									<motion.div
										initial={{ opacity: 0 }}
										whileHover={{ opacity: 1 }}
										transition={{ duration: 0.2 }}
										className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
									>
										<motion.div
											whileHover={{ scale: 1.1 }}
											className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center"
										>
											<ExternalLink className="w-7 h-7 text-white" />
										</motion.div>
									</motion.div>
								</motion.div>

								{/* Content */}
								<div className="p-6 flex flex-col flex-grow">
									<motion.span
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.1 }}
										className="text-accent text-sm font-semibold"
									>
										{item.category}
									</motion.span>
									<h3 className="font-heading font-bold text-lg text-foreground mt-2 mb-2">
										{item.title}
									</h3>
									<p className="text-muted-foreground text-sm mb-4 flex-grow">
										{item.description}
									</p>
									<div className="flex flex-wrap gap-2">
										{item.tags.map((tag) => (
											<motion.span
												key={tag}
												initial={{ opacity: 0, scale: 0.8 }}
												whileInView={{ opacity: 1, scale: 1 }}
												className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-lg"
											>
												{tag}
											</motion.span>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Portfolio;
