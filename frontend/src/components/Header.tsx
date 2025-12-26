import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
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
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const sidebarRef = useRef<HTMLDivElement>(null);
	const location = useLocation();
	const isHomePage = location.pathname === "/";

	const handleClickOutside = (event: MouseEvent) => {
		if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
			setIsMobileMenuOpen(false);
			setActiveDropdown(null);
		}
	};

	const handleDropdownToggle = (dropdown: string) => {
		setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
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
						className="flex items-center gap-2 group"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<motion.img
							src="/thinkmoreai-logo.png"
							alt="ThinkMoreAI Logo"
							className="h-20 w-auto transition-transform duration-300 group-hover:rotate-3"
							whileHover={{ rotate: [0, 5, -5, 0] }}
							transition={{ duration: 0.5 }}
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
							<motion.div
								key={link.name}
								className="relative group"
								whileHover={{ y: -2 }}
								transition={{ type: "spring", stiffness: 300, damping: 17 }}
							>
								<a
									href={link.href}
									className={`font-medium transition-colors duration-300 relative flex items-center gap-1 ${
										isHomePage && !isScrolled
											? "text-primary-foreground/80 hover:text-primary-foreground"
											: "text-muted-foreground hover:text-foreground"
									}`}
								>
									{link.name}
									<motion.div
										className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"
										initial={false}
										animate={{ width: location.pathname === link.href ? "100%" : "0%" }}
									/>
								</a>
								{location.pathname === link.href && (
									<motion.div
										layoutId="activeTab"
										className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"
										initial={false}
										transition={{ type: "spring", stiffness: 500, damping: 30 }}
									/>
								)}
							</motion.div>
						))}
					</motion.div>

					{/* CTA Button */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="hidden lg:block"
					>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 400, damping: 17 }}
						>
							<Button variant="accent" size="default" asChild className="group shadow-lg shadow-accent/25">
								<a href="/contact" className="flex items-center gap-2">
									Get a Free Consultation
									<motion.div
										className="overflow-hidden"
										whileHover={{ x: 3 }}
										transition={{ type: "spring", stiffness: 300, damping: 15 }}
									>
										<ArrowRight className="w-4 h-4" />
									</motion.div>
								</a>
							</Button>
						</motion.div>
					</motion.div>

					{/* Mobile Menu Button */}
					<motion.button
						className={`lg:hidden p-2 transition-colors ${
							isHomePage && !isScrolled ? "text-primary-foreground" : "text-foreground"
						}`}
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
					>
						<AnimatePresence mode="wait">
							{isMobileMenuOpen ? (
								<motion.div
									key="close"
									initial={{ rotate: -90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: 90, opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									<X size={24} />
								</motion.div>
							) : (
								<motion.div
									key="menu"
									initial={{ rotate: 90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: -90, opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									<Menu size={24} />
								</motion.div>
							)}
						</AnimatePresence>
					</motion.button>
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
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="lg:hidden bg-card/95 backdrop-blur-xl border-b border-border shadow-lg"
					>
						<div className="container-custom py-6">
							<motion.div 
								className="flex flex-col gap-2"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: 0.1 }}
							>
								{navLinks.map((link, index) => (
									<motion.div
										key={link.name}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
									>
										<motion.a
											href={link.href}
											onClick={() => {
												setIsMobileMenuOpen(false);
												setActiveDropdown(null);
											}}
											className={`font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-between ${
												location.pathname === link.href
													? "bg-accent/20 text-accent"
													: "text-foreground hover:bg-accent/10 hover:text-accent"
											}`}
											whileHover={{ x: 5 }}
											whileTap={{ scale: 0.95 }}
										>
											<span>{link.name}</span>
											{location.pathname === link.href && (
												<motion.div
													initial={{ scale: 0 }}
													animate={{ scale: 1 }}
													transition={{ type: "spring", stiffness: 500, damping: 30 }}
												>
													<ChevronDown className="w-4 h-4" />
												</motion.div>
											)}
										</motion.a>
									</motion.div>
								))}
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: 0.3 }}
								className="mt-6"
							>
								<motion.div
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									transition={{ type: "spring", stiffness: 400, damping: 17 }}
								>
									<Button variant="accent" size="lg" className="w-full shadow-lg shadow-accent/25" asChild>
										<a href="/contact" className="flex items-center justify-center gap-2">
											Get a Free Consultation
											<ArrowRight className="w-4 h-4" />
										</a>
									</Button>
								</motion.div>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
