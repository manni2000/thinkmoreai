import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Calculator, PenTool, Code2, HeadphonesIcon } from "lucide-react";

const steps = [
	{
		number: "01",
		icon: Phone,
		title: "Discovery Call",
		description: "Understand your goals, scope, and challenges.",
	},
	{
		number: "02",
		icon: Calculator,
		title: "Get a Ballpark",
		description: "Clear cost & timeline estimate. No surprises.",
	},
	{
		number: "03",
		icon: PenTool,
		title: "Design & Roadmap",
		description: "UX, architecture, milestones defined.",
	},
	{
		number: "04",
		icon: Code2,
		title: "Build & Grow",
		description: "Agile development with continuous updates.",
	},
	{
		number: "05",
		icon: HeadphonesIcon,
		title: "Post-Launch Support",
		description: "Monitoring, scaling, and long-term support.",
	},
];

const Process = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="process"
			className="section-padding bg-primary text-primary-foreground overflow-hidden"
		>
			<div className="container-custom">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center max-w-3xl mx-auto mb-16"
				>
					<span className="text-accent font-semibold text-sm uppercase tracking-wider">
						Our Process
					</span>
					<h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
						From Idea to{" "}
						<span className="text-accent">Reality</span>
					</h2>
					<p className="text-lg text-primary-foreground/70">
						A streamlined, transparent process designed for success.
					</p>
				</motion.div>

				{/* Process Steps */}
				<div className="relative">
					{/* Connection Line */}
					<div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary-foreground/10 -translate-y-1/2" />

					<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
						{steps.map((step, index) => (
							<motion.div
								key={step.number}
								initial={{ opacity: 0, y: 40 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6, delay: index * 0.15 }}
								className="relative text-center"
							>
								{/* Step Card */}
								<div className="relative z-10 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-all duration-300 group h-full flex flex-col justify-between">
									{/* Number Badge */}
									<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold text-sm flex items-center justify-center shadow-lg">
										{step.number}
									</div>

									<div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4 mt-2 group-hover:bg-accent/30 transition-colors">
										<step.icon className="w-8 h-8 text-accent" />
									</div>

									<h3 className="font-heading font-semibold text-lg mb-2">
										{step.title}
									</h3>
									<p className="text-primary-foreground/60 text-sm">
										{step.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process;
