import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
	{ name: "About", href: "/about" },
	{ name: "Services", href: "/services" },
	{ name: "Portfolio", href: "/portfolio" },
	{ name: "Technologies", href: "/technologies" },
    { name: "Team", href: "/team"},
	{ name: "Contact", href: "/contact" },
];

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const sidebarRef = useRef<HTMLDivElement>(null);
	const location = useLocation();
	const isHomePage = location.pathname === "/";

	const handleClickOutside = (event: MouseEvent) => {
		if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
			setIsMobileMenuOpen(false);
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const shouldShowDarkHeader = !isHomePage || isScrolled;

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				isHomePage && !isScrolled
					? "bg-gradient-to-r from-primary to-primary/95 backdrop-blur-xl"
					: "bg-card/95 backdrop-blur-xl shadow-lg border-b border-border/50"
			}`}
		>
			<div className="container-custom">
				<nav className="flex items-center justify-between h-20">
					{/* Logo */}
					<motion.a
						href="/"
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="flex items-center gap-2"
					>
						<img
							src="/thinkmoreai-logo.png"
							alt="ThinkMoreAI Logo"
							className="h-20 w-auto"
						/>
						<span className={`font-heading font-bold text-2xl transition-colors duration-300 ${
							isHomePage && !isScrolled
								? "text-accent"
								: "text-foreground"
						}`}>
							ThinkMoreAI
						</span>
					</motion.a>

					{/* Desktop Navigation */}
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="hidden lg:flex items-center gap-8"
					>
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className={`font-medium transition-colors duration-300 relative group ${
									isHomePage && !isScrolled
										? "text-primary-foreground/80 hover:text-primary-foreground"
										: "text-muted-foreground hover:text-foreground"
								}`}
							>
								{link.name}
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-accent" />
							</a>
						))}
					</motion.div>

					{/* CTA Button */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="hidden lg:block"
					>
						<Button variant="accent" size="default" asChild>
							<a href="/contact">Get a Free Consultation</a>
						</Button>
					</motion.div>

					{/* Mobile Menu Button */}
					<button
						className={`lg:hidden p-2 transition-colors ${
							isHomePage && !isScrolled ? "text-primary-foreground" : "text-foreground"
						}`}
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</nav>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						ref={sidebarRef}
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="lg:hidden bg-card/95 backdrop-blur-xl border-b border-border"
					>
						<div className="container-custom py-6 flex flex-col gap-4">
							{navLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									onClick={() => setIsMobileMenuOpen(false)}
									className={`font-medium py-2 transition-colors ${
										"text-foreground hover:text-accent"
									}`}
								>
									{link.name}
								</a>
							))}
							<Button variant="accent" size="lg" className="mt-4" asChild>
								<a href="/contact">Get a Free Consultation</a>
							</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
