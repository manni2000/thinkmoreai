import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Trophy, Users, Layers, HeadphonesIcon } from "lucide-react";

const reasons = [
	{
		icon: Trophy,
		title: "Proven Track Record",
		description: "50+ successful projects delivered with measurable business impact",
	},
	{
		icon: Users,
		title: "Expert Team",
		description: "Professionals from global MNCs and high-growth startups",
	},
	{
		icon: Layers,
		title: "Comprehensive Services",
		description: "End-to-end solutions from tech development to compliance",
	},
	{
		icon: HeadphonesIcon,
		title: "24/7 Support",
		description: "Round-the-clock assistance and long-term partnerships",
	},
];

const WhyChooseUs = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section className="section-padding bg-primary relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
			</div>

			<div className="container-custom relative z-10">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center max-w-3xl mx-auto mb-16"
				>
					<span className="text-accent font-semibold text-sm uppercase tracking-wider">
						Why Us
					</span>
					<h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mt-4 mb-6">
						Why Choose{" "}
						<span className="text-accent">ThinkmoreAI?</span>
					</h2>
					<p className="text-lg text-primary-foreground/70">
						We don't just deliver projects — we build partnerships that drive growth.
					</p>
				</motion.div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{reasons.map((reason, index) => (
						<motion.div
							key={reason.title}
							initial={{ opacity: 0, y: 30, scale: 0.95 }}
							animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{
								y: -8,
								transition: { duration: 0.3 },
							}}
							className="relative group"
						>
							<div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 h-full hover:bg-primary-foreground/10 transition-all duration-300">
								{/* Check Icon */}
								<div className="absolute -top-3 -right-3">
									<motion.div
										initial={{ scale: 0 }}
										animate={isInView ? { scale: 1 } : {}}
										transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
										className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-lg"
									>
										<CheckCircle2 className="w-5 h-5 text-accent-foreground" />
									</motion.div>
								</div>

								<div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors duration-300">
									<reason.icon className="w-7 h-7 text-accent" />
								</div>
								<h3 className="font-heading font-semibold text-lg text-primary-foreground mb-2">
									{reason.title}
								</h3>
								<p className="text-primary-foreground/60 text-sm leading-relaxed">
									{reason.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
