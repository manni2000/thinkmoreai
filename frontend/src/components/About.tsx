import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Users, Globe, Handshake, Target } from "lucide-react";

const trustSignals = [
	{
		icon: Users,
		title: "Expert Team",
		description: "Team from MNCs & fast-growing startups",
	},
	{
		icon: Globe,
		title: "Global Delivery",
		description: "Experience serving clients worldwide",
	},
	{
		icon: Handshake,
		title: "Long-term Partners",
		description: "Focus on lasting partnerships",
	},
	{
		icon: CheckCircle2,
		title: "Proven Delivery",
		description:
			"On-time, production-ready solutions with measurable business impact",
	},
];

const About = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="about"
			className="section-padding bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden"
		>
			{/* Background Accent */}
			<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />

			<div className="container-custom relative z-10">
				<div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Left Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6 }}
					>
						<span className="text-accent font-semibold text-sm uppercase tracking-wider">
							About Us
						</span>
						<h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
							AI-First Solutions for{" "}
							<span className="gradient-text">Modern Businesses</span>
						</h2>
						<p className="text-lg text-muted-foreground leading-relaxed mb-8">
							ThinkmoreAI is an AI-first company delivering high-impact digital
							products,automation, analytics, and professional services. From startups to
							enterprise, we transform ideas into scalable solutions with speed, clarity, and
							execution excellence.
						</p>

						{/* Features List */}
						<div className="space-y-4">
							{[
								"End-to-end product development",
								"AI & automation expertise",
								"Compliance & professional services",
								"Agile delivery methodology",
							].map((feature, index) => (
								<motion.div
									key={feature}
									initial={{ opacity: 0, x: -20 }}
									animate={isInView ? { opacity: 1, x: 0 } : {}}
									transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
									className="flex items-center gap-3"
								>
									<CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
									<span className="text-foreground">{feature}</span>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Right - Trust Signals Cards */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="grid gap-6"
					>
						{trustSignals.map((signal, index) => (
							<motion.div
								key={signal.title}
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
								className={`rounded-2xl p-6 hover-lift border transition-all duration-300 ${
									index === 0
										? "bg-blue-50 border-blue-200 hover:border-blue-300 hover:shadow-lg"
										: index === 1
										? "bg-emerald-50 border-emerald-200 hover:border-emerald-300 hover:shadow-lg"
										: index === 2
										? "bg-amber-50 border-amber-200 hover:border-amber-300 hover:shadow-lg"
										: "bg-purple-50 border-purple-200 hover:border-purple-300 hover:shadow-lg"
								}`}
							>
								<div className="flex items-start gap-5">
									<div
										className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
											index === 0
												? "bg-blue-100"
												: index === 1
												? "bg-emerald-100"
												: index === 2
												? "bg-amber-100"
												: "bg-purple-100"
										}`}
									>
										<signal.icon
											className={`w-7 h-7 ${
												index === 0
													? "text-blue-600"
													: index === 1
													? "text-emerald-600"
													: index === 2
													? "text-amber-600"
													: "text-purple-600"
											}`}
										/>
									</div>
									<div>
										<h3 className="font-heading font-semibold text-lg text-foreground mb-1">
											{signal.title}
										</h3>
										<p className="text-muted-foreground">
											{signal.description}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
