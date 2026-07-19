import { StrictMode, useCallback, useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import { Link, Route, Routes, StaticRouter, useLocation, useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AlertTriangle, ArrowLeft, ArrowRight, ArrowUp, Award, BookOpen, Building2, Calendar, CheckCircle2, CheckSquare, ChevronDown, ChevronLeft, ChevronRight, ClipboardCheck, Clock, Droplet, Euro, FileText, Filter, Frame, Hammer, HardHat, Heart, HelpCircle, Home, Layers, LayoutGrid, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, Minus, PaintBucket, PaintRoller, Phone, Plus, Quote, RefreshCw, Ruler, Send, Shield, ShieldCheck, Sparkles, Star, ThumbsUp, User, Users, Wrench, X, Zap } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/logo/Logo weiß transparent.png
var Logo_weiß_transparent_default = "/assets/Logo%20wei%C3%9F%20transparent-BbkPfDIm.png";
//#endregion
//#region src/components/Navbar.jsx
var navLinks = [
	{
		name: "Startseite",
		path: "/"
	},
	{
		name: "Leistungen",
		path: "/leistungen",
		subLinks: [
			{
				name: "Maurer- & Betonbau",
				path: "/leistungen/maurer-betonbau",
				icon: Hammer
			},
			{
				name: "Sanierung & Instandsetzung",
				path: "/leistungen/sanierung",
				icon: Building2
			},
			{
				name: "Innenausbau & Trockenbau",
				path: "/leistungen/innenausbau",
				icon: Wrench
			},
			{
				name: "Fassaden- & Putzarbeiten",
				path: "/leistungen/fassade",
				icon: PaintBucket
			}
		]
	},
	{
		name: "Referenzen",
		path: "/referenzen"
	},
	{
		name: "Über uns",
		path: "/ueber-uns"
	},
	{
		name: "Ratgeber",
		path: "/ratgeber"
	},
	{
		name: "Kontakt",
		path: "/kontakt"
	}
];
function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
	const location = useLocation();
	const closeMenus = () => {
		setIsOpen(false);
		setMobileServicesOpen(false);
	};
	const toggleMenu = () => {
		if (isOpen) setMobileServicesOpen(false);
		setIsOpen(!isOpen);
	};
	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	useEffect(() => {
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = isOpen ? "hidden" : previousOverflow;
		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [isOpen]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("nav", {
		className: `fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? "glass-nav shadow-2xl shadow-black/20 py-4" : "bg-transparent py-6"}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					onClick: closeMenus,
					className: "flex items-center relative z-[80] group max-w-full",
					children: /* @__PURE__ */ jsx("div", {
						className: `relative flex items-center transition-all duration-500 ${scrolled ? "h-8 w-24 sm:w-28 md:h-10 md:w-36" : "h-8 w-24 sm:h-10 sm:w-32 md:h-14 md:w-48 lg:h-16 lg:w-56"}`,
						children: /* @__PURE__ */ jsx("img", {
							src: Logo_weiß_transparent_default,
							alt: "Bauunternehmen König",
							className: "absolute inset-0 w-full h-full object-contain -ml-[4%] sm:-ml-[10%] md:-ml-[15%] lg:-ml-[20%] scale-[1.08] sm:scale-[1.2] md:scale-[1.3] lg:scale-[1.35] origin-center drop-shadow-2xl group-hover:scale-[1.11] sm:group-hover:scale-[1.23] md:group-hover:scale-[1.33] lg:group-hover:scale-[1.38] transition-all duration-500",
							fetchPriority: "high",
							decoding: "async"
						})
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "hidden lg:flex items-center gap-8",
					children: [navLinks.map((link) => /* @__PURE__ */ jsxs("div", {
						className: "relative group/nav-item",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1 group",
							children: [/* @__PURE__ */ jsxs(Link, {
								to: link.path,
								onClick: closeMenus,
								className: `text-sm font-medium tracking-wide transition-all duration-300 hover:text-gold relative ${location.pathname === link.path || location.pathname.startsWith(link.path + "/") ? "text-gold" : "text-white/80"}`,
								children: [link.name, /* @__PURE__ */ jsx("span", { className: `absolute -bottom-1.5 left-0 h-0.5 bg-gold transition-all duration-300 rounded-full ${location.pathname === link.path || location.pathname.startsWith(link.path + "/") ? "w-full" : "w-0 group-hover:w-full"}` })]
							}), link.subLinks && /* @__PURE__ */ jsx(ChevronDown, {
								size: 14,
								className: "text-white/40 group-hover:text-gold transition-colors duration-300 group-hover:rotate-180"
							})]
						}), link.subLinks && /* @__PURE__ */ jsx("div", {
							className: "absolute top-full left-0 pt-4 opacity-0 invisible translate-y-2 group-hover/nav-item:opacity-100 group-hover/nav-item:visible group-hover/nav-item:translate-y-0 transition-all duration-300",
							children: /* @__PURE__ */ jsx("div", {
								className: "w-64 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-2",
								children: link.subLinks.map((sub) => {
									const SubIcon = sub.icon;
									return /* @__PURE__ */ jsxs(Link, {
										to: sub.path,
										onClick: closeMenus,
										className: "flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 text-white/70 hover:text-gold transition-all duration-300 group/sub",
										children: [/* @__PURE__ */ jsx("div", {
											className: "w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/sub:bg-gold/20 transition-colors",
											children: /* @__PURE__ */ jsx(SubIcon, {
												size: 16,
												className: "group-hover/sub:text-gold"
											})
										}), /* @__PURE__ */ jsx("span", {
											className: "text-sm font-medium",
											children: sub.name
										})]
									}, sub.path);
								})
							})
						})]
					}, link.path)), /* @__PURE__ */ jsxs(Link, {
						to: "/kontakt",
						onClick: closeMenus,
						className: "btn-primary !px-5 !py-2.5 text-sm ml-2 font-heading",
						children: [/* @__PURE__ */ jsx(Phone, { size: 16 }), "Kostenlose Beratung sichern"]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "lg:hidden flex items-center gap-3 relative z-[120]",
					children: [/* @__PURE__ */ jsxs(Link, {
						to: "/kontakt",
						onClick: closeMenus,
						className: "btn-primary !px-3 !py-2 !text-[10px] sm:!text-xs uppercase tracking-widest font-bold flex items-center gap-1.5 shadow-[0_4px_15px_rgba(212,175,55,0.2)]",
						children: [
							/* @__PURE__ */ jsx(Phone, { size: 14 }),
							/* @__PURE__ */ jsx("span", {
								className: "hidden xs:inline",
								children: "Beratung sichern"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "xs:hidden",
								children: "Anfragen"
							})
						]
					}), /* @__PURE__ */ jsx("button", {
						onClick: toggleMenu,
						className: "text-white p-1 hover:text-gold transition-colors flex items-center justify-center",
						"aria-label": isOpen ? "Menü schließen" : "Menü öffnen",
						children: isOpen ? /* @__PURE__ */ jsx(X, { size: 28 }) : /* @__PURE__ */ jsx(Menu, { size: 28 })
					})]
				})
			]
		})
	}), /* @__PURE__ */ jsxs("div", {
		className: `lg:hidden fixed inset-0 z-[110] bg-black/95 backdrop-blur-2xl transition-all duration-700 overflow-y-auto ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
		children: [/* @__PURE__ */ jsx("button", {
			onClick: closeMenus,
			className: "absolute top-5 right-4 z-[120] rounded-full border border-white/10 bg-white/5 p-2 text-white hover:text-gold transition-colors",
			"aria-label": "Menü schließen",
			children: /* @__PURE__ */ jsx(X, { size: 28 })
		}), /* @__PURE__ */ jsxs("div", {
			className: "w-full max-w-sm mx-auto min-h-full flex flex-col items-center justify-center gap-5 px-6 py-24",
			children: [navLinks.map((link, i) => /* @__PURE__ */ jsx("div", {
				className: "w-full text-center",
				children: link.subLinks ? /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-center gap-3 w-full",
						children: [/* @__PURE__ */ jsx(Link, {
							to: link.path,
							onClick: closeMenus,
							className: `text-2xl sm:text-3xl font-heading font-semibold tracking-tight transition-all duration-500 ${location.pathname.startsWith(link.path) ? "text-gold" : "text-white/70"}`,
							children: link.name
						}), /* @__PURE__ */ jsx("button", {
							onClick: (e) => {
								e.preventDefault();
								setMobileServicesOpen(!mobileServicesOpen);
							},
							className: `p-2 rounded-full bg-white/5 text-gold transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`,
							children: /* @__PURE__ */ jsx(ChevronDown, { size: 24 })
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: `overflow-hidden transition-all duration-500 w-full flex flex-col items-center gap-2 ${mobileServicesOpen ? "max-h-[400px] mt-4 opacity-100" : "max-h-0 opacity-0"}`,
						children: link.subLinks.map((sub) => {
							const SubIcon = sub.icon;
							return /* @__PURE__ */ jsxs(Link, {
								to: sub.path,
								onClick: closeMenus,
								className: "flex items-center justify-center gap-3 text-base sm:text-lg text-white/50 hover:text-gold text-center whitespace-normal",
								children: [/* @__PURE__ */ jsx(SubIcon, { size: 18 }), sub.name]
							}, sub.path);
						})
					})]
				}) : /* @__PURE__ */ jsx(Link, {
					to: link.path,
					onClick: closeMenus,
					className: `text-2xl sm:text-3xl font-heading font-semibold tracking-tight transition-all duration-500 hover:scale-105 ${location.pathname === link.path ? "text-gold" : "text-white/70 hover:text-white"}`,
					style: {
						transitionDelay: isOpen ? `${i * 100}ms` : "0ms",
						transform: isOpen ? "translateY(0)" : "translateY(20px)",
						opacity: isOpen ? 1 : 0
					},
					children: link.name
				})
			}, link.path)), /* @__PURE__ */ jsxs(Link, {
				to: "/kontakt",
				onClick: closeMenus,
				className: "btn-primary mt-4 text-base sm:text-lg !py-3 !px-5 sm:!py-4 sm:!px-8 w-full",
				style: {
					transitionDelay: isOpen ? `${navLinks.length * 100}ms` : "0ms",
					transform: isOpen ? "translateY(0)" : "translateY(20px)",
					opacity: isOpen ? 1 : 0
				},
				children: [/* @__PURE__ */ jsx(Phone, { size: 20 }), "Kostenlose Beratung sichern"]
			})]
		})]
	})] });
}
//#endregion
//#region src/data/contactDetails.js
var contactDetails = {
	businessName: "Bauunternehmen König",
	ownerName: "Tim König",
	phoneDisplay: "0179 684 98 63",
	phoneHref: "tel:+491796849863",
	phoneIntl: "+49 179 684 98 63",
	whatsappHref: "https://wa.me/491796849863",
	email: "maurermeister.koenig@web.de",
	emailHref: "mailto:maurermeister.koenig@web.de",
	addressLine1: "August-Bebel-Siedlung 45",
	addressLine2: "04288 Leipzig",
	addressSingleLine: "August-Bebel-Siedlung 45, 04288 Leipzig",
	city: "Leipzig",
	region: "Sachsen",
	openingHoursDisplay: "Mo-Fr: 07:00 - 18:00",
	tradeRegistrationLabel: "Handwerkskammer (HWK) Leipzig",
	tradeRegistrationId: "52 491 380 759"
};
//#endregion
//#region src/components/Footer.jsx
function Footer() {
	const scrollToTop = () => window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
	return /* @__PURE__ */ jsxs("footer", {
		className: "bg-gray-900 text-white relative",
		children: [/* @__PURE__ */ jsx("div", { className: "h-1 gold-gradient w-full" }), /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-2 lg:col-span-1",
						children: [/* @__PURE__ */ jsx("div", {
							className: "relative h-8 w-40 sm:h-10 sm:w-48 mb-6 sm:mb-8",
							children: /* @__PURE__ */ jsx("img", {
								src: Logo_weiß_transparent_default,
								alt: "Bauunternehmen König",
								className: "absolute top-0 left-0 w-full h-full object-contain object-left scale-[1.18] sm:scale-[1.28] origin-left",
								loading: "lazy",
								decoding: "async"
							})
						}), /* @__PURE__ */ jsx("p", {
							className: "text-gray-400 text-sm leading-relaxed",
							children: "Ihr Maurer- und Betonbauermeister in Leipzig. Qualität, Zuverlässigkeit und faire Preise — darauf bauen wir."
						})]
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "text-gold font-semibold text-sm uppercase tracking-wider mb-6",
						children: "Leistungen"
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-3",
						children: [
							{
								name: "Maurer- & Betonbau",
								path: "/leistungen/maurer-betonbau"
							},
							{
								name: "Sanierung & Modernisierung",
								path: "/leistungen/sanierung"
							},
							{
								name: "Innenausbau & Trockenbau",
								path: "/leistungen/innenausbau"
							},
							{
								name: "Fassaden- & Putzarbeiten",
								path: "/leistungen/fassade"
							},
							{
								name: "Maurer in Markkleeberg",
								path: "/standorte/markkleeberg"
							},
							{
								name: "Maurer in Taucha",
								path: "/standorte/taucha"
							},
							{
								name: "Maurer in Schkeuditz",
								path: "/standorte/schkeuditz"
							}
						].map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: item.path,
							className: "text-gray-400 hover:text-gold transition-colors duration-300 text-sm",
							children: item.name
						}) }, item.path))
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "text-gold font-semibold text-sm uppercase tracking-wider mb-6",
						children: "Navigation"
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-3",
						children: [
							{
								name: "Startseite",
								path: "/"
							},
							{
								name: "Referenzen",
								path: "/referenzen"
							},
							{
								name: "Über uns",
								path: "/ueber-uns"
							},
							{
								name: "Kontakt",
								path: "/kontakt"
							},
							{
								name: "Impressum",
								path: "/impressum"
							},
							{
								name: "Datenschutz",
								path: "/datenschutz"
							}
						].map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: item.path,
							className: "text-gray-400 hover:text-gold transition-colors duration-300 text-sm",
							children: item.name
						}) }, item.path))
					})] }),
					/* @__PURE__ */ jsxs("address", {
						className: "not-italic",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "text-gold font-semibold text-sm uppercase tracking-wider mb-6",
							children: "Kontakt"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
									href: contactDetails.phoneHref,
									className: "flex items-center gap-3 text-gray-400 hover:text-gold transition-colors duration-300 text-sm break-words",
									children: [/* @__PURE__ */ jsx(Phone, {
										size: 16,
										className: "text-gold flex-shrink-0"
									}), contactDetails.phoneDisplay]
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
									href: contactDetails.emailHref,
									className: "flex items-center gap-3 text-gray-400 hover:text-gold transition-colors duration-300 text-sm break-all",
									children: [/* @__PURE__ */ jsx(Mail, {
										size: 16,
										className: "text-gold flex-shrink-0"
									}), contactDetails.email]
								}) }),
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-3 text-gray-400 text-sm",
									children: [/* @__PURE__ */ jsx(MapPin, {
										size: 16,
										className: "text-gold flex-shrink-0 mt-0.5"
									}), /* @__PURE__ */ jsxs("span", { children: [
										contactDetails.addressLine1,
										/* @__PURE__ */ jsx("br", {}),
										contactDetails.addressLine2
									] })]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-center gap-3 text-gray-400 text-sm",
									children: [/* @__PURE__ */ jsx(Clock, {
										size: 16,
										className: "text-gold flex-shrink-0"
									}), contactDetails.openingHoursDisplay]
								})
							]
						})]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left",
				children: [/* @__PURE__ */ jsxs("p", {
					className: "text-gray-500 text-xs",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Bauunternehmen König. Alle Rechte vorbehalten."
					]
				}), /* @__PURE__ */ jsxs("button", {
					onClick: scrollToTop,
					className: "flex items-center gap-2 text-gray-500 hover:text-gold transition-colors duration-300 text-xs cursor-pointer",
					"aria-label": "Nach oben scrollen",
					children: ["Nach oben", /* @__PURE__ */ jsx(ArrowUp, { size: 14 })]
				})]
			})]
		})]
	});
}
//#endregion
//#region src/components/FloatingActions.jsx
function FloatingActions() {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("a", {
		href: contactDetails.whatsappHref,
		target: "_blank",
		rel: "noopener noreferrer",
		className: "fixed bottom-8 right-6 sm:bottom-8 sm:right-8 z-[9999] group flex flex-col items-center gap-2",
		"aria-label": "WhatsApp Kontakt",
		children: [/* @__PURE__ */ jsx("span", {
			className: "bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-xl border border-white/10 uppercase tracking-wider hidden sm:block",
			children: "Was kann ich für Sie tun?"
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative group",
			children: [
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25 group-hover:opacity-0 transition-opacity" }),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#25D366] rounded-full animate-pulse opacity-40 group-hover:opacity-0 transition-opacity" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-110 active:scale-95 border-b-2 border-green-700",
					children: [/* @__PURE__ */ jsx(MessageCircle, {
						size: 28,
						className: "sm:hidden"
					}), /* @__PURE__ */ jsx(MessageCircle, {
						size: 32,
						className: "hidden sm:block"
					})]
				})
			]
		})]
	}) });
}
//#endregion
//#region src/hooks/useReveal.js
function useReveal(threshold = .05) {
	const ref = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
				observer.unobserve(entry.target);
			}
		}, {
			threshold,
			rootMargin: "0px 0px 250px 0px"
		});
		const el = ref.current;
		if (el) observer.observe(el);
		return () => {
			if (el) observer.unobserve(el);
		};
	}, [threshold]);
	return [ref, isVisible];
}
//#endregion
//#region src/components/UI.jsx
function RevealSection({ children, className = "", delay = 0 }) {
	const [ref, isVisible] = useReveal(.05);
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: `transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${isVisible ? "opacity-100 translate-y-0 blur-none" : "opacity-0 translate-y-12 blur-sm"} ${className}`,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function SectionHeading({ eyebrow, title, description, light = false, center = true }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `${center ? "text-center" : ""} max-w-2xl ${center ? "mx-auto" : ""} mb-10 md:mb-16 lg:mb-20`,
		children: [
			eyebrow && /* @__PURE__ */ jsx("span", {
				className: "inline-block text-gold font-semibold text-xs md:text-sm uppercase tracking-[0.25em] mb-4 md:mb-6",
				children: eyebrow
			}),
			/* @__PURE__ */ jsx("h2", {
				className: `font-heading text-3xl md:text-5xl lg:text-6xl font-800 tracking-tight leading-[1.1] mb-5 md:mb-6 ${light ? "text-white" : "text-gray-900"}`,
				children: title
			}),
			description && /* @__PURE__ */ jsx("p", {
				className: `text-base sm:text-lg md:text-xl leading-relaxed font-light ${light ? "text-gray-300" : "text-gray-600"}`,
				children: description
			})
		]
	});
}
function ServiceCard({ icon: Icon, title, description, link, image, index = 0 }) {
	const [ref, isVisible] = useReveal(.05);
	return /* @__PURE__ */ jsxs("div", {
		ref,
		className: `group relative bg-white rounded-3xl overflow-hidden glass-card card-hover transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0 blur-none" : "opacity-0 translate-y-12 blur-sm"}`,
		style: { transitionDelay: `${index * 150}ms` },
		children: [image && /* @__PURE__ */ jsxs("div", {
			className: "h-64 overflow-hidden relative",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" }), /* @__PURE__ */ jsx("img", {
				src: image,
				alt: title,
				className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out",
				loading: "lazy",
				decoding: "async"
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "p-6 md:p-10 relative bg-white",
			children: [
				Icon && /* @__PURE__ */ jsx("div", {
					className: "absolute -top-8 right-6 md:-top-10 md:right-8 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500 z-20",
					children: /* @__PURE__ */ jsx(Icon, {
						size: 28,
						className: "text-gold flex-shrink-0 md:w-8 md:h-8"
					})
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "font-heading text-xl sm:text-2xl font-bold mb-4 text-gray-900 group-hover:text-gold transition-colors duration-300 pr-12 md:pr-16",
					children: title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-gray-500 text-sm sm:text-base leading-relaxed mb-6 md:mb-8",
					children: description
				}),
				link && /* @__PURE__ */ jsxs(Link, {
					to: link,
					className: "inline-flex items-center gap-2 text-black font-semibold text-sm uppercase tracking-wide group/link",
					children: ["Details ansehen", /* @__PURE__ */ jsx("span", {
						className: "w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover/link:bg-gold group-hover/link:text-white transition-colors duration-300",
						children: /* @__PURE__ */ jsxs("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							width: "16",
							height: "16",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: [/* @__PURE__ */ jsx("path", { d: "M5 12h14" }), /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })]
						})
					})]
				})
			]
		})]
	});
}
function ProcessStep({ number, title, description, index = 0 }) {
	const [ref, isVisible] = useReveal(.05);
	return /* @__PURE__ */ jsxs("div", {
		ref,
		className: `relative p-6 md:p-8 rounded-3xl overflow-hidden transition-all duration-700 ease-out glass-card-dark border border-white/5 hover:border-gold/30 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0 blur-none" : "opacity-0 translate-y-12 blur-sm"}`,
		style: { transitionDelay: `${index * 150}ms` },
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "text-4xl md:text-5xl font-heading font-900 text-white/5 mb-6 absolute top-4 right-5 md:right-6 pointer-events-none select-none",
				children: number
			}),
			/* @__PURE__ */ jsx("div", {
				className: "w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center mb-6 text-black text-xl font-bold shadow-lg shadow-gold/20",
				children: number
			}),
			/* @__PURE__ */ jsx("h3", {
				className: "text-xl font-heading font-bold mb-3 text-white",
				children: title
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-gray-300 text-sm leading-relaxed",
				children: description
			})
		]
	});
}
//#endregion
//#region src/components/SEO.jsx
var SITE_URL = "https://www.bauunternehmen-koenig.com";
var DEFAULT_IMAGE = `${SITE_URL}/images/og-hero.jpg`;
function SEO({ title, description, path = "/", image = DEFAULT_IMAGE, keywords, type = "website", noindex = false, jsonLd = null, article = null }) {
	const canonical = `${SITE_URL}${path}`;
	const fullTitle = title.includes("König") ? title : `${title} | Bauunternehmen König Leipzig`;
	return /* @__PURE__ */ jsxs(Helmet, { children: [
		/* @__PURE__ */ jsx("title", { children: fullTitle }),
		/* @__PURE__ */ jsx("meta", {
			name: "description",
			content: description
		}),
		keywords && /* @__PURE__ */ jsx("meta", {
			name: "keywords",
			content: keywords
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "robots",
			content: noindex ? "noindex, nofollow" : "index, follow"
		}),
		/* @__PURE__ */ jsx("link", {
			rel: "canonical",
			href: canonical
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:title",
			content: fullTitle
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:description",
			content: description
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:type",
			content: type
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:url",
			content: canonical
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:image",
			content: image
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:locale",
			content: "de_DE"
		}),
		/* @__PURE__ */ jsx("meta", {
			property: "og:site_name",
			content: "Bauunternehmen König"
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:card",
			content: "summary_large_image"
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:title",
			content: fullTitle
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:description",
			content: description
		}),
		/* @__PURE__ */ jsx("meta", {
			name: "twitter:image",
			content: image
		}),
		article && /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("meta", {
				property: "article:author",
				content: article.author
			}),
			article.publishedTime && /* @__PURE__ */ jsx("meta", {
				property: "article:published_time",
				content: article.publishedTime
			}),
			article.modifiedTime && /* @__PURE__ */ jsx("meta", {
				property: "article:modified_time",
				content: article.modifiedTime
			}),
			article.section && /* @__PURE__ */ jsx("meta", {
				property: "article:section",
				content: article.section
			})
		] }),
		jsonLd && /* @__PURE__ */ jsx("script", {
			type: "application/ld+json",
			children: JSON.stringify(jsonLd)
		})
	] });
}
//#endregion
//#region src/pages/Home.jsx
var services$1 = [
	{
		icon: Hammer,
		title: "Maurer- & Betonbau",
		description: "Präzise Maurer- und Betonarbeiten nach DIN-Normen. Vom Fundament bis zur Mauerkrone — meisterliche Qualität.",
		link: "/leistungen/maurer-betonbau",
		image: "/images/service-card-maurer-betonbau-ai.webp"
	},
	{
		icon: Building2,
		title: "Sanierung & Instandsetzung",
		description: "Komplettsanierung, Altbaumodernisierung und Instandsetzung von Bestandsimmobilien — fachgerecht und termintreu aus einer Hand.",
		link: "/leistungen/sanierung",
		image: "/images/service-card-sanierung-ai.webp"
	},
	{
		icon: Wrench,
		title: "Innenausbau & Trockenbau",
		description: "Professioneller Innenausbau: Trockenbau, Spachtelarbeiten und moderne Raumgestaltung für Ihr Zuhause.",
		link: "/leistungen/innenausbau",
		image: "/images/service-card-innenausbau-trockenbau-ai.webp"
	},
	{
		icon: PaintBucket,
		title: "Fassaden- & Putzarbeiten",
		description: "Neue Fassaden, fachgerechte Putzarbeiten und Wärmedämmung. Wir geben Ihrem Gebäude ein neues Gesicht.",
		link: "/leistungen/fassade",
		image: "/images/service-card-fassade-putz-ai.webp"
	}
];
var process = [
	{
		number: "01",
		title: "Anfrage",
		description: /* @__PURE__ */ jsxs(Fragment, { children: [
			"Schildern Sie uns Ihr Vorhaben — bequem telefonisch unter ",
			/* @__PURE__ */ jsx("span", {
				className: "whitespace-normal sm:whitespace-nowrap",
				children: contactDetails.phoneDisplay
			}),
			" oder über unser Online-Formular."
		] })
	},
	{
		number: "02",
		title: "Vor-Ort-Termin",
		description: "Wir besichtigen Ihr Projekt kostenlos und persönlich. So erhalten Sie eine ehrliche, individuelle Beratung."
	},
	{
		number: "03",
		title: "Festpreis-Angebot",
		description: "Sie erhalten innerhalb von 48 Stunden ein verbindliches Angebot — schriftlich, transparent und ohne versteckte Kosten."
	},
	{
		number: "04",
		title: "Meisterhafte Ausführung",
		description: "Pünktliche Fertigstellung, täglich aufgeräumte Baustelle und Qualität nach DIN-Normen — das ist unser Versprechen."
	}
];
var faqs = [
	{
		question: "In welchem Umkreis von Leipzig bieten Sie Ihre Bauleistungen an?",
		answer: "Als regionales Premium-Bauunternehmen konzentrieren wir uns auf Leipzig und das umliegende Umland in einem Radius von ca. 50 Kilometern. Diese regionale Nähe garantiert Ihnen kurze Wege, schnelle Reaktionszeiten und eine enge, persönliche Betreuung Ihres Bauvorhabens direkt vor Ort."
	},
	{
		question: "Bieten Sie alle Bauleistungen aus einer Hand als Generalunternehmer an?",
		answer: "Ja. Wir sind Ihr fester Ansprechpartner für Maurer- und Betonbauarbeiten, Sanierung, Innenausbau und Fassadenarbeiten — alles aus einer Hand. Benötigen Sie darüber hinaus weitere Gewerke, greifen wir auf unser bewährtes Netzwerk qualifizierter Partnerfirmen zurück und koordinieren den Ablauf für Sie. Keine Kommunikationsverluste, keine Schnittstellenprobleme."
	},
	{
		question: "Wie läuft die erste Beratung beim Bauunternehmen König ab?",
		answer: "Nach Ihrer unverbindlichen Anfrage vereinbaren wir einen Vor-Ort-Termin an Ihrem Objekt oder Grundstück in Leipzig. Wir analysieren die Gegebenheiten, besprechen Ihre architektonischen Visionen und prüfen die Machbarkeit. Darauf basierend erhalten Sie ein transparentes, detailliertes Angebot ohne versteckte Kosten."
	},
	{
		question: "Realisieren Sie Projekte für Privatkunden oder gewerbliche Auftraggeber?",
		answer: "Unsere Expertise umfasst beide Bereiche. Für Privatkunden führen wir Sanierungen, Umbauten, Innenausbauten und Fassadenarbeiten an Wohnhäusern und Eigentumswohnungen durch. Gewerbliche Auftraggeber unterstützen wir bei der Instandsetzung und Modernisierung von Büros, Praxen und Gewerbeimmobilien. Höchste Qualität ist dabei in jedem Projekt unser Standard."
	},
	{
		question: "Welche Sicherheiten und Garantien geben Sie auf Ihre Leistungen?",
		answer: "Wir arbeiten streng nach den anerkannten Regeln der Technik (VOB/BGB) und gewähren Ihnen umfassende Gewährleistungen auf alle ausgeführten Arbeiten. Durch die ausschließliche Verwendung zertifizierter Premium-Baustoffe und den Einsatz eigener, exzellent ausgebildeter Facharbeiter sichern wir ein Höchstmaß an Langlebigkeit und Wertbeständigkeit."
	}
];
var googleReviews$1 = [
	{
		author: "Leonie W.",
		text: "Sehr zuverlässiges Bauunternehmen! Die Renovierung von Schlafzimmer und Wohnzimmer wurde sauber und mit einer super Qualität ausgeführt. Wir sind rundum zufrieden und empfehlen das Team gerne weiter.",
		rating: 5,
		time: "vor 3 Monaten"
	},
	{
		author: "Tobias S.",
		text: "Wir hatten im Zuge unserer Umbaumaßnahmen an der Fassade und im Innenausbau unseres Einfamilienhauses das Vergnügen mit Tim zusammenarbeiten. Er ist ein absoluter Profi und hat uns mit seiner Expertise einen super Überblick verschafft.",
		rating: 5,
		time: "vor 11 Monaten"
	},
	{
		author: "fit&fair Gesundheitszentrum",
		text: "Wir sind absolut begeistert von der Arbeit dieses Bauunternehmens! Die Arbeit wurde professionell, termingerecht und mit viel Liebe zum Detail umgesetzt. Dabei wurde immer Freundlichkeit an den Tag gelegt.",
		rating: 5,
		time: "vor einem Jahr"
	},
	{
		author: "Colin J.",
		text: "Ich bin super zufrieden mit der Arbeit von Herr König! Er war sehr kompetent im Erstgespräch und hat mich klasse beraten! Die Arbeiten wurden pünktlich, sauber und auf den Punkt genau erledigt.",
		rating: 5,
		time: "vor einem Jahr"
	},
	{
		author: "Niklas N.",
		text: "Von der Kundenberatung über die Planung und Gestaltung bis zur tatsächlichen Umsetzung unseres Projektes, super professionelle und saubere Arbeit. Kann das Bauunternehmen König zu 100% weiterempfehlen!",
		rating: 5,
		time: "vor einem Jahr"
	},
	{
		author: "Markus L.",
		text: "Ich habe nun schon zwei Aufträge bei Herrn König ausführen lassen. Nach einer super Beratung wurden die Arbeiten immer pünktlich und professionell umgesetzt.",
		rating: 5,
		time: "vor 2 Jahren"
	},
	{
		author: "Johann U.",
		text: "Exzellente Planung und Umsetzung! Keine Mängel und äußerst zuverlässig, werde mich definitiv bei meinem nächsten Anliegen wieder hier melden!",
		rating: 5,
		time: "vor einem Jahr"
	},
	{
		author: "Cathleen W.",
		text: "Sehr gute Arbeit, tolles Ergebnis. Absolut empfehlenswert.",
		rating: 5,
		time: "vor 3 Monaten"
	}
];
function Home$1() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SEO, {
			title: "Bauunternehmen König | Maurermeister & Betonbauer in Leipzig",
			description: "Bauunternehmen König – Ihr Maurer- und Betonbauermeister in Leipzig. ✓ Mauerwerk ✓ Sanierung ✓ Innenausbau ✓ Fassadenarbeiten. Festpreisgarantie & kostenlose Erstberatung. Jetzt Angebot anfragen!",
			keywords: "Bauunternehmen Leipzig, Maurermeister Leipzig, Betonbauer Leipzig, Sanierung Leipzig, Innenausbau Leipzig, Fassade Leipzig, Handwerker Leipzig, Tim König, Maurer Leipzig, Umbau Leipzig",
			path: "/",
			jsonLd: {
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs.map((faq) => ({
					"@type": "Question",
					name: faq.question,
					acceptedAnswer: {
						"@type": "Answer",
						text: faq.answer
					}
				}))
			}
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "relative min-h-screen flex items-center overflow-hidden",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: "/images/hero.webp",
						alt: "Bauunternehmen König — Baustelle in Leipzig",
						className: "w-full h-full object-cover animate-[scaleInSimple_30s_infinite_alternate]",
						fetchPriority: "high",
						decoding: "async"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/95 via-black/40 to-black/10" }),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/5" })
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 md:pt-48 pb-16 sm:pb-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ jsx(RevealSection, {
							delay: 100,
							children: /* @__PURE__ */ jsxs("div", {
								className: "inline-flex flex-wrap items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8 md:mb-10 shadow-2xl",
								children: [/* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-gold border border-gold-light animate-pulse" }), /* @__PURE__ */ jsx("span", {
									className: "text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase",
									children: "Meisterbetrieb in Leipzig"
								})]
							})
						}),
						/* @__PURE__ */ jsxs(RevealSection, {
							delay: 200,
							children: [/* @__PURE__ */ jsxs("h1", {
								className: "font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] font-900 text-white leading-[0.95] tracking-tightest mb-5 md:mb-6 max-w-[12ch] sm:max-w-none",
								children: [
									"Bauen in",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "gold-text-gradient",
										children: "Leipzig."
									})
								]
							}), /* @__PURE__ */ jsx("p", {
								className: "font-heading text-base sm:text-xl md:text-3xl text-gold/80 font-semibold tracking-wide mb-8 md:mb-10 uppercase",
								children: "Handwerk aus Meisterhand."
							})]
						}),
						/* @__PURE__ */ jsx(RevealSection, {
							delay: 300,
							children: /* @__PURE__ */ jsxs("p", {
								className: "text-base sm:text-lg md:text-2xl text-gray-200/90 mb-10 md:mb-12 max-w-[300px] sm:max-w-3xl leading-relaxed font-light",
								children: [
									"Tim\xA0König — Maurer- und Betonbauermeister aus\xA0Leipzig.",
									/* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
									"Ihr Partner für Mauerwerk, Sanierung, Fassade und\xA0Innenausbau.",
									/* @__PURE__ */ jsx("br", {}),
									"Kostenlose Erstberatung",
									/* @__PURE__ */ jsx("br", {}),
									"& Festpreisgarantie."
								]
							})
						}),
						/* @__PURE__ */ jsx(RevealSection, {
							delay: 400,
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col sm:flex-row gap-4 sm:gap-5",
								children: [/* @__PURE__ */ jsxs(Link, {
									to: "/kontakt",
									className: "btn-primary text-base w-full sm:w-auto",
									children: [/* @__PURE__ */ jsx(Mail, { size: 18 }), "Kostenlose Beratung sichern"]
								}), /* @__PURE__ */ jsxs(Link, {
									to: "/leistungen",
									className: "btn-secondary text-base group w-full sm:w-auto",
									children: ["Unsere Leistungen", /* @__PURE__ */ jsx(ArrowRight, {
										size: 18,
										className: "transition-transform group-hover:translate-x-1"
									})]
								})]
							})
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "relative -mt-8 sm:-mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20",
			children: /* @__PURE__ */ jsx(RevealSection, { children: /* @__PURE__ */ jsx("div", {
				className: "bg-white rounded-3xl overflow-hidden p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 border border-gold/40 shadow-[0_8px_40px_rgba(0,0,0,0.18),0_0_0_1px_rgba(180,144,60,0.15)]",
				children: [
					{
						icon: ShieldCheck,
						text: "Meisterbetrieb",
						sub: "HWK Leipzig"
					},
					{
						icon: Clock,
						text: "Termintreue",
						sub: "Pünktlich garantiert"
					},
					{
						icon: Sparkles,
						text: "Saubere Arbeit",
						sub: "Täglich aufgeräumt"
					},
					{
						icon: CheckCircle2,
						text: "Festpreisgarantie",
						sub: "Keine Überraschungen"
					}
				].map((item) => /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-4 min-w-0",
					children: [/* @__PURE__ */ jsx("div", {
						className: "w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 flex-shrink-0",
						children: /* @__PURE__ */ jsx(item.icon, {
							size: 22,
							className: "text-gold"
						})
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
						className: "text-base font-semibold text-gray-900 block",
						children: item.text
					}), /* @__PURE__ */ jsx("span", {
						className: "text-xs text-gray-400",
						children: item.sub
					})] })]
				}, item.text))
			}) })
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-padding bg-gray-50 rounded-t-[2rem] sm:rounded-t-[3rem] -mt-24 sm:-mt-32 pt-32 sm:pt-40",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto",
				children: [
					/* @__PURE__ */ jsx(RevealSection, { children: /* @__PURE__ */ jsx(SectionHeading, {
						eyebrow: "Expertise",
						title: "Kompetenz in jedem Gewerk",
						description: "Von der Grundsteinlegung bis zur fertigen Fassade — wir bieten Ihnen das volle Leistungsspektrum rund um Ihr Bauprojekt."
					}) }),
					/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10",
						children: services$1.map((service, i) => /* @__PURE__ */ jsx(ServiceCard, {
							...service,
							index: i
						}, service.title))
					}),
					/* @__PURE__ */ jsx(RevealSection, {
						delay: 400,
						children: /* @__PURE__ */ jsx("div", {
							className: "text-center mt-12 md:mt-16",
							children: /* @__PURE__ */ jsxs(Link, {
								to: "/leistungen",
								className: "btn-primary gap-3 shadow-[0_0_20px_rgba(212,175,55,0.3)]",
								children: ["Alle Leistungen ansehen", /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section-padding bg-charcoal overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center",
				children: /* @__PURE__ */ jsxs(RevealSection, { children: [
					/* @__PURE__ */ jsx("span", {
						className: "inline-block px-3 py-1 bg-gold/10 border border-gold/20 text-gold font-medium rounded-full text-xs uppercase tracking-widest mb-4",
						children: "Kundenstimmen"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "font-heading text-3xl sm:text-4xl md:text-5xl font-800 tracking-tight text-white mb-4",
						children: ["Das sagen unsere ", /* @__PURE__ */ jsx("span", {
							className: "gold-text-gradient",
							children: "Bauherren"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-center gap-2 mb-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-white font-bold text-2xl mt-1",
							children: "5.0"
						}), /* @__PURE__ */ jsx("div", {
							className: "flex gap-1",
							children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, {
								size: 24,
								className: "fill-gold text-gold"
							}, i))
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-gray-400 text-sm",
						children: "Basierend auf echten Google-Bewertungen"
					}),
					/* @__PURE__ */ jsx("a", {
						href: "https://share.google/6pEhXFu8zL4QNewda",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-2 mt-4 text-gold text-sm font-semibold hover:underline",
						children: "Alle Bewertungen auf Google ansehen →"
					})
				] })
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative overflow-hidden group",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" }),
					/* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" }),
					/* @__PURE__ */ jsx("div", {
						className: "animate-marquee hover:pause whitespace-nowrap py-3 md:py-4",
						children: [...googleReviews$1, ...googleReviews$1].map((review, i) => /* @__PURE__ */ jsx("div", {
							className: "inline-block mx-4 whitespace-normal align-top",
							children: /* @__PURE__ */ jsxs("div", {
								className: "w-[280px] xs:w-[320px] md:w-[400px] h-full bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden p-6 md:p-8 hover:border-gold/30 transition-colors duration-300",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between mb-6",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx("div", {
											className: "w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-lg font-heading flex-shrink-0",
											children: review.author.charAt(0)
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
											className: "text-white font-bold font-heading",
											children: review.author
										}), /* @__PURE__ */ jsx("span", {
											className: "text-gray-500 text-xs",
											children: review.time
										})] })]
									}), /* @__PURE__ */ jsx("div", {
										className: "flex gap-0.5",
										children: [...Array(review.rating)].map((_, idx) => /* @__PURE__ */ jsx(Star, {
											size: 14,
											className: "fill-gold text-gold"
										}, idx))
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "relative",
									children: [/* @__PURE__ */ jsx(Quote, {
										size: 32,
										className: "absolute -top-4 -left-2 text-gold/10 -z-10"
									}), /* @__PURE__ */ jsxs("p", {
										className: "text-gray-400 text-sm leading-relaxed relative z-10",
										children: [
											"\"",
											review.text,
											"\""
										]
									})]
								})]
							})
						}, i))
					})
				]
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section-padding bg-white relative overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] -z-10 transform translate-x-1/2 -translate-y-1/2" }), /* @__PURE__ */ jsx("div", {
				className: "max-w-7xl mx-auto",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center",
					children: [/* @__PURE__ */ jsx("div", {
						className: "lg:col-span-5",
						children: /* @__PURE__ */ jsxs(RevealSection, { children: [
							/* @__PURE__ */ jsx("span", {
								className: "inline-block text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4",
								children: "Warum König?"
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "font-heading text-3xl sm:text-4xl md:text-5xl font-800 tracking-tight leading-tight mb-6 text-gray-900",
								children: [
									"Schluss mit",
									/* @__PURE__ */ jsx("br", {}),
									"Baustellen-Chaos."
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-lg text-gray-500 leading-relaxed mb-8",
								children: "Unzuverlässige Handwerker, unübersichtliche Kosten und endlose Wartezeiten? Das muss nicht sein. Bei Bauunternehmen König garantieren wir einen reibungslosen Ablauf."
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "space-y-4 mb-8",
								children: [
									"Fester Ansprechpartner für alle Gewerke",
									"Transparente Kostenvoranschläge ohne Überraschungen",
									"Täglich aufgeräumte Baustellen",
									"Kostenlose & unverbindliche Erstberatung",
									"Starkes Netzwerk mit qualifizierten Partnerfirmen"
								].map((text, i) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-center gap-3 text-gray-700 font-medium font-heading",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0",
										children: /* @__PURE__ */ jsx(CheckCircle2, {
											size: 14,
											className: "text-gold"
										})
									}), text]
								}, i))
							})
						] })
					}), /* @__PURE__ */ jsx("div", {
						className: "lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6",
						children: [
							{
								icon: Clock,
								title: "Termintreue",
								desc: "Wir halten, was wir versprechen. Pünktlich fertig."
							},
							{
								icon: Sparkles,
								title: "Saubere Arbeit",
								desc: "Eine saubere Baustelle ist für uns selbstverständlich."
							},
							{
								icon: ShieldCheck,
								title: "Transparenz",
								desc: "Festpreis-Angebot schützt Sie vor bösen Überraschungen."
							},
							{
								icon: CheckCircle2,
								title: "Qualität",
								desc: "Meisterliche Ausführung nach geltenden DIN-Normen."
							}
						].map((item, i) => /* @__PURE__ */ jsx(RevealSection, {
							delay: i * 150,
							children: /* @__PURE__ */ jsxs("div", {
								className: "p-6 md:p-8 rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:border-gold/20 transition-all duration-500 hover:-translate-y-1",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "w-12 h-12 rounded-2xl bg-gray-50 text-gold flex items-center justify-center mb-6",
										children: /* @__PURE__ */ jsx(item.icon, { size: 24 })
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "text-xl font-heading font-bold mb-3 text-gray-900",
										children: item.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-500 text-sm leading-relaxed",
										children: item.desc
									})
								]
							})
						}, item.title))
					})]
				})
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section-padding bg-charcoal rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 mb-20 relative overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/images/hero.webp')] opacity-[0.03] object-cover mix-blend-overlay" }), /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto relative z-10",
				children: [/* @__PURE__ */ jsx(RevealSection, { children: /* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Ablauf",
					title: "Der Weg zum Ziel",
					description: "In 4 einfachen Schritten zu Ihrem Bauprojekt — transparent, planbar und absolut zuverlässig.",
					light: true
				}) }), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12",
					children: process.map((step, i) => /* @__PURE__ */ jsx(ProcessStep, {
						...step,
						index: i
					}, step.number))
				})]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-padding bg-white relative overflow-hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto",
				children: [/* @__PURE__ */ jsx(RevealSection, { children: /* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Unser Einsatzgebiet",
					title: "Wir bauen in ganz Leipzig",
					description: "Als lokaler Meisterbetrieb kennen wir Leipzig wie unsere Westentasche — und sind in allen Stadtteilen für Sie da."
				}) }), /* @__PURE__ */ jsxs(RevealSection, {
					delay: 200,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap gap-3 justify-center mt-8",
						children: [[
							"Gohlis",
							"Südvorstadt",
							"Lindenau",
							"Plagwitz",
							"Connewitz",
							"Schleußig",
							"Reudnitz",
							"Mölkau",
							"Möckern",
							"Leutzsch",
							"Grünau",
							"Paunsdorf"
						].map((ort) => /* @__PURE__ */ jsx("span", {
							className: "px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-sm font-medium text-gray-700 hover:border-gold/40 hover:bg-gold/5 transition-all duration-300",
							children: ort
						}, ort)), [
							{
								name: "Markkleeberg",
								slug: "markkleeberg"
							},
							{
								name: "Taucha",
								slug: "taucha"
							},
							{
								name: "Schkeuditz",
								slug: "schkeuditz"
							}
						].map((ort) => /* @__PURE__ */ jsxs(Link, {
							to: `/standorte/${ort.slug}`,
							className: "px-4 py-2 bg-gold/5 border border-gold/30 rounded-full text-sm font-semibold text-charcoal hover:bg-gold/15 hover:border-gold/60 transition-all duration-300",
							children: [ort.name, " →"]
						}, ort.slug))]
					}), /* @__PURE__ */ jsxs("p", {
						className: "text-center text-sm text-gray-400 mt-6",
						children: [
							"Nicht dabei? ",
							/* @__PURE__ */ jsx(Link, {
								to: "/kontakt",
								className: "text-gold hover:underline font-medium",
								children: "Einfach anfragen"
							}),
							" — wir fahren auch in die Umgebung."
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section-padding bg-white relative overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -z-10 transform -translate-x-1/2 -translate-y-1/2" }), /* @__PURE__ */ jsx("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center",
					children: [/* @__PURE__ */ jsx(RevealSection, {
						delay: 200,
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative rounded-[2.5rem] overflow-hidden shadow-2xl",
							children: [
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" }),
								/* @__PURE__ */ jsx("img", {
									src: "/images/tim-portrait.webp",
									alt: "Tim König auf der Baustelle",
									className: "w-full h-[380px] sm:h-[500px] object-cover grayscale brightness-75",
									loading: "lazy",
									decoding: "async"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-20",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-white text-2xl sm:text-3xl font-heading font-bold mb-1",
										children: "Tim König"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-gold font-medium",
										children: "Maurer- und Betonbauermeister"
									})]
								})
							]
						})
					}), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(RevealSection, { children: [/* @__PURE__ */ jsx(SectionHeading, {
						eyebrow: "Ihr Meister vor Ort",
						title: "Das Gesicht hinter der Qualität",
						center: false
					}), /* @__PURE__ */ jsxs("div", {
						className: "prose prose-lg text-gray-600 mb-8 mt-2",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "leading-relaxed font-light text-lg md:text-xl italic text-gray-800 border-l-4 border-gold pl-4 md:pl-6 mb-8",
								children: "\"Mein Name steht für die Qualität auf Ihrer Baustelle. Keine anonymen Subunternehmer, keine versteckten Kosten — bei uns arbeitet der Chef noch selbst mit und bürgt für meisterhafte Ausführung.\""
							}),
							/* @__PURE__ */ jsx("p", {
								className: "leading-relaxed mb-6",
								children: "Mit dem Meisterbrief der Handwerkskammer Leipzig in der Tasche und jahrelanger Erfahrung auf Groß- und Kleinbaustellen habe ich das Bauunternehmen König gegründet, um das Handwerk wieder dorthin zu bringen, wo es hingehört: Verlässlichkeit, Pünktlichkeit und echte Wertarbeit."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mt-10",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gray-50 rounded-full border border-gray-200 shadow-sm flex-shrink-0",
									children: /* @__PURE__ */ jsx(ShieldCheck, {
										size: 28,
										className: "text-gold"
									})
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
									className: "font-bold text-gray-900 font-heading text-lg",
									children: "Zertifizierte Qualität"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm text-gray-500",
									children: "Staatlich geprüfter Meisterbetrieb (HWK)"
								})] })]
							})
						]
					})] }) })]
				})
			})]
		}),
		/* @__PURE__ */ jsx(FaqSection, {}),
		/* @__PURE__ */ jsx("section", {
			className: "relative pt-24 pb-32 overflow-hidden bg-gray-50 border-t border-gray-100",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-6xl mx-auto px-4",
				children: /* @__PURE__ */ jsx(RevealSection, { children: /* @__PURE__ */ jsxs("div", {
					className: "bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-2 gold-gradient" }), /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mt-6 sm:mt-8",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("h2", {
								className: "font-heading text-3xl sm:text-4xl md:text-5xl font-800 tracking-tight text-gray-900 mb-6 leading-tight",
								children: ["Bereit für etwas ", /* @__PURE__ */ jsx("span", {
									className: "gold-text-gradient",
									children: "Großes?"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-gray-500 text-lg mb-8 font-light leading-relaxed",
								children: "Der nächste Schritt ist ganz einfach. Buchen Sie jetzt Ihr Erstgespräch und erhalten Sie Klarheit für Ihr Bauvorhaben."
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "space-y-4 mb-10",
								children: [
									"Rückruf innerhalb von 24 Stunden",
									"Kostenloser Vor-Ort-Termin auf der Baustelle",
									"Verbindliches Festpreisangebot ohne versteckte Kosten"
								].map((text, i) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-center gap-4 text-gray-700 font-medium font-heading",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 text-gold font-bold text-sm border border-gold/20",
										children: i + 1
									}), text]
								}, i))
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex flex-col sm:flex-row gap-4",
								children: /* @__PURE__ */ jsxs(Link, {
									to: "/kontakt",
									className: "btn-primary text-base !px-5 !py-3 sm:!px-8 sm:!py-5 w-full sm:w-auto flex-1 shadow-[0_4px_20px_rgba(212,175,55,0.4)]",
									children: [/* @__PURE__ */ jsx(Mail, { size: 18 }), "Kostenlose Beratung anfragen"]
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm font-medium text-amber-700 bg-amber-50 p-3 sm:p-4 rounded-xl border border-amber-100",
								children: [/* @__PURE__ */ jsx(Clock, {
									size: 16,
									className: "flex-shrink-0"
								}), /* @__PURE__ */ jsxs("p", { children: [
									"Aufgrund hoher Nachfrage können wir aktuell nur noch ",
									/* @__PURE__ */ jsx("span", {
										className: "font-bold underline decoration-amber-300",
										children: "wenige Bauprojekte"
									}),
									" annehmen."
								] })]
							})
						] }), /* @__PURE__ */ jsxs("div", {
							className: "hidden lg:block relative text-center",
							children: [
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gold/5 rounded-full blur-[60px] transform scale-150 -z-10" }),
								/* @__PURE__ */ jsx("img", {
									src: "/images/logo-cta.webp",
									alt: "Bauunternehmen König",
									className: "w-full max-w-[400px] h-auto mx-auto object-contain drop-shadow-xl",
									loading: "lazy",
									decoding: "async"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute -top-12 -right-4 bg-white px-5 py-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce",
									style: { animationDuration: "4s" },
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0",
										children: /* @__PURE__ */ jsx(CheckCircle2, { size: 20 })
									}), /* @__PURE__ */ jsxs("div", {
										className: "text-left font-heading",
										children: [/* @__PURE__ */ jsx("span", {
											className: "block text-xs text-gray-400 font-medium uppercase tracking-wider",
											children: "Meisterbetrieb"
										}), /* @__PURE__ */ jsx("span", {
											className: "block text-sm font-bold text-gray-900",
											children: "Termintreue garantiert"
										})]
									})]
								})
							]
						})]
					})]
				}) })
			})
		})
	] });
}
function FaqSection() {
	const [openIndex, setOpenIndex] = useState(null);
	return /* @__PURE__ */ jsx("section", {
		className: "section-padding bg-gray-50",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-3xl mx-auto",
			children: [/* @__PURE__ */ jsx(RevealSection, { children: /* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "FAQ",
				title: "Häufig gestellte Fragen",
				description: "Antworten auf die wichtigsten Fragen rund um Ihr Bauprojekt in Leipzig."
			}) }), /* @__PURE__ */ jsx("div", {
				className: "space-y-3 mt-8",
				children: faqs.map((faq, i) => /* @__PURE__ */ jsx(RevealSection, {
					delay: i * 80,
					children: /* @__PURE__ */ jsxs("div", {
						className: "bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm",
						children: [/* @__PURE__ */ jsxs("button", {
							onClick: () => setOpenIndex(openIndex === i ? null : i),
							className: "w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer group",
							"aria-expanded": openIndex === i,
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-semibold text-gray-900 pr-4 group-hover:text-gold transition-colors duration-200",
								children: faq.question
							}), /* @__PURE__ */ jsx(ChevronDown, {
								size: 20,
								className: `text-gold flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`
							})]
						}), openIndex === i && /* @__PURE__ */ jsx("div", {
							className: "px-6 pb-6",
							children: /* @__PURE__ */ jsx("p", {
								className: "text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4",
								children: faq.answer
							})
						})]
					})
				}, i))
			})]
		})
	});
}
//#endregion
//#region src/pages/Leistungen.jsx
var services = [
	{
		icon: Hammer,
		title: "Maurer- & Betonbauarbeiten",
		description: "Präzise Maurer- und Betonarbeiten nach DIN-Normen. Fundamente, Mauern, Betondecken und mehr — alles aus Meisterhand.",
		link: "/leistungen/maurer-betonbau",
		image: "/images/service-card-maurer-betonbau-ai.webp"
	},
	{
		icon: Building2,
		title: "Sanierung & Instandsetzung",
		description: "Komplettsanierung, Altbaumodernisierung und Instandsetzung von Bestandsimmobilien. Fachgerecht und termintreu aus einer Hand.",
		link: "/leistungen/sanierung",
		image: "/images/service-card-sanierung-ai.webp"
	},
	{
		icon: Wrench,
		title: "Innenausbau & Trockenbau",
		description: "Trockenbau, Spachtelarbeiten in Q2–Q4, Trockenestrich und moderne Raumgestaltung für Wohn- und Gewerberäume.",
		link: "/leistungen/innenausbau",
		image: "/images/service-card-innenausbau-trockenbau-ai.webp"
	},
	{
		icon: PaintBucket,
		title: "Fassaden- & Putzarbeiten",
		description: "Professionelle Fassadengestaltung, Außenputz, Wärmedämmverbundsysteme und Renovierung bestehender Fassaden.",
		link: "/leistungen/fassade",
		image: "/images/service-card-fassade-putz-ai.webp"
	}
];
function Leistungen() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SEO, {
			title: "Leistungen – Bauunternehmen König Leipzig",
			description: "Unser Leistungsspektrum aus Leipzig: Maurer- & Betonbau, Sanierung, Innenausbau & Trockenbau, Fassaden- & Putzarbeiten. Meisterqualität nach DIN mit Festpreisgarantie.",
			keywords: "Bauleistungen Leipzig, Maurerarbeiten Leipzig, Sanierung Leipzig, Innenausbau Leipzig, Fassadenarbeiten Leipzig, Trockenbau Leipzig, WDVS Leipzig",
			path: "/leistungen",
			jsonLd: {
				"@context": "https://schema.org",
				"@type": "ItemList",
				itemListElement: services.map((s, i) => ({
					"@type": "ListItem",
					position: i + 1,
					url: `https://www.bauunternehmen-koenig.com${s.link}`,
					name: s.title
				}))
			}
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "relative pt-40 sm:pt-48 md:pt-52 pb-16 sm:pb-20 bg-charcoal overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 opacity-20",
					children: /* @__PURE__ */ jsx("img", {
						src: "/images/hero.webp",
						alt: "",
						className: "w-full h-full object-cover",
						fetchPriority: "high",
						decoding: "async"
					})
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4 block",
							children: "Unser Leistungsspektrum"
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-900 text-white mb-6",
							children: [
								"Kompetenz in",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "gold-text-gradient",
									children: "jedem Gewerk"
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10",
							children: "Von der Grundsteinlegung bis zur fertigen Fassade — Bauunternehmen König ist Ihr Partner für alle Bauleistungen in Leipzig."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col sm:flex-row items-center justify-center gap-5",
							children: [/* @__PURE__ */ jsxs(Link, {
								to: "/kontakt",
								className: "btn-primary text-base w-full sm:w-auto",
								children: [/* @__PURE__ */ jsx(Mail, { size: 18 }), "Kostenlose Beratung sichern"]
							}), /* @__PURE__ */ jsxs(Link, {
								to: "/referenzen",
								className: "btn-secondary text-base group w-full sm:w-auto",
								children: ["Unsere Referenzen ansehen", /* @__PURE__ */ jsx(ArrowRight, {
									size: 18,
									className: "transition-transform group-hover:translate-x-1"
								})]
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-padding bg-gray-50",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-7xl mx-auto",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",
					children: services.map((service, i) => /* @__PURE__ */ jsx(ServiceCard, {
						...service,
						index: i
					}, service.title))
				})
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-padding bg-charcoal text-center",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-3xl mx-auto px-4",
				children: /* @__PURE__ */ jsxs(RevealSection, { children: [/* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Projekt geplant?",
					title: "Wir beraten Sie gerne",
					description: "Egal ob Sanierung, Instandsetzung oder Innenausbau — sprechen Sie uns an. Die Erstberatung ist kostenlos.",
					light: true
				}), /* @__PURE__ */ jsx("div", {
					className: "flex flex-col sm:flex-row gap-4 justify-center",
					children: /* @__PURE__ */ jsxs(Link, {
						to: "/kontakt",
						className: "btn-primary",
						children: [/* @__PURE__ */ jsx(Mail, { size: 18 }), "Kostenlose Beratung sichern"]
					})
				})] })
			})
		})
	] });
}
//#endregion
//#region src/utils/imageFallbacks.js
function resolvePublicImage(src, fallback = "/images/hero.webp") {
	return src || fallback;
}
//#endregion
//#region src/pages/LeistungDetail.jsx
var iconMap = {
	Wrench,
	Ruler,
	ShieldCheck,
	PaintRoller,
	Frame,
	CheckSquare,
	HardHat,
	Home,
	FileText,
	Clock,
	ThumbsUp,
	Zap,
	Droplet,
	LayoutGrid,
	CheckCircle2,
	MapPin,
	Leaf,
	Sparkles
};
var serviceData = {
	"maurer-betonbau": {
		beforeAfter: {
			beforeSrc: "/images/arbeiten/klinkertreppe-vorher.webp",
			afterSrc: "/images/arbeiten/klinkertreppe-nachher.webp",
			beforeAlt: "Verwitterte Klinkertreppe vor dem Neuaufmauern",
			afterAlt: "Neu aufgemauerte Klinkertreppe mit sauberem Fugenbild",
			caption: "Klinkertreppe neu aufgemauert – vorher & nachher",
			aspectRatio: "3/4"
		},
		metaTitle: "Maurer & Betonbauer Leipzig – Fundament & Mauerwerk vom Meister",
		metaDescription: "Maurer- & Betonbauarbeiten in Leipzig vom Meisterbetrieb: Fundamente, tragendes Mauerwerk, Betondecken, Keller & Abdichtung. DIN-gerecht und mit Festpreisgarantie.",
		keywords: "Maurer Leipzig, Betonbauer Leipzig, Fundament Leipzig, Mauerwerk Leipzig, Betonarbeiten Leipzig, Bodenplatte, Maurerarbeiten Sachsen",
		title: "Präziser Maurer- & Betonbau für Ihr Fundament in Leipzig",
		eyebrow: "Kernkompetenz Maurermeister",
		subtitle: "Massive Bauweise, meisterhafte Ausführung und höchste Standfestigkeit für private und gewerbliche Bauprojekte.",
		showHeroCTAs: true,
		trustSignals: [
			{
				text: "Meisterbetrieb",
				sub: "HWK Leipzig",
				icon: "ShieldCheck"
			},
			{
				text: "Regional in Leipzig",
				sub: "& Umgebung",
				icon: "MapPin"
			},
			{
				text: "Meisterqualität",
				sub: "Nach DIN-Norm",
				icon: "CheckSquare"
			},
			{
				text: "Festpreisgarantie",
				sub: "Ohne Überraschungen",
				icon: "CheckCircle2"
			}
		],
		heroImage: "/images/hero-maurer-stock.webp",
		intro: "Als staatlich geprüfter Maurer- und Betonbauermeister (HWK Leipzig) ist Tim König Ihr Spezialist für präzise und DIN-gerechte Maurer- und Betonarbeiten in Leipzig und Umgebung. Ob Fundamente, tragendes Mauerwerk oder Betondecken — jede Arbeit wird mit höchster Sorgfalt, den richtigen Materialien und dem nötigen Fachwissen ausgeführt. Wir bauen auf Qualität, die Jahrzehnte hält.",
		details: [
			{
				title: "Fundamente & Bodenplatten",
				desc: "Zuverlässige und DIN-gerechte Basis für Ihr Bauwerk – ob für Garage, Anbau oder Einfamilienhaus.",
				icon: "LayoutGrid"
			},
			{
				title: "Tragendes Mauerwerk",
				desc: "Ziegel, Kalksandstein oder Porenbeton: Fachgerechte Errichtung von statisch belastbaren Wänden.",
				icon: "Home"
			},
			{
				title: "Mauerwerkssanierung",
				desc: "Reparaturarbeiten, Risssanierung und Instandsetzung von altem Mauerwerk.",
				icon: "HardHat"
			},
			{
				title: "Ringbalken & Stürze",
				desc: "Sichere Lastabtragung für Fenster-, Türöffnungen und massive Dachkonstruktionen.",
				icon: "Ruler"
			},
			{
				title: "Keller & Abdichtung",
				desc: "Schutz vor drückender Feuchtigkeit durch professionelle Perimeterdämmung und Bitumenabdichtung.",
				icon: "Droplet"
			},
			{
				title: "Schornsteinbau",
				desc: "Formschöner und funktionaler Neubau oder Sanierung unter Einhaltung aktueller Brandschutzvorgaben.",
				icon: "Wrench"
			}
		],
		prozess: [
			{
				title: "Begehung",
				desc: "Besprechung vor Ort und Analyse der Statik- und Baugrundlagen.",
				icon: "CheckSquare"
			},
			{
				title: "Angebot",
				desc: "Detailliertes Angebot mit verlässlicher und transparenter Kostenkalkulation.",
				icon: "FileText"
			},
			{
				title: "Ausführung",
				desc: "Pünktliche Konstruktion durch unseren zertifizierten Meisterbetrieb.",
				icon: "HardHat"
			},
			{
				title: "Abnahme",
				desc: "Gemeinsame Durchsicht der erbrachten Leistungen und Übergabe.",
				icon: "ShieldCheck"
			}
		],
		faq: [
			{
				q: "Welche Arten von Mauerwerk und Betonarbeiten führen Sie aus?",
				a: "Unser Leistungsspektrum deckt den gesamten massiven Rohbau ab. Vom klassischen Ziegel- und Kalksandsteinmauerwerk über hochdämmendes Porenbetonmauerwerk bis hin zu komplexen Stahlbetonarbeiten (Fundamente, Decken, Stützen) realisieren wir jede statische Herausforderung."
			},
			{
				q: "Wie stellen Sie die absolute Tragfähigkeit und Statik des Rohbaus sicher?",
				a: "Jeder Rohbau wird von uns in engster Abstimmung mit Architekten und Prüfstatikern ausgeführt. Wir verwenden ausschließlich zertifizierten Bewehrungsstahl und Beton der geforderten Güteklassen. Jeder Bauabschnitt wird penibel dokumentiert, um maximale strukturelle Integrität zu gewährleisten."
			},
			{
				q: "Erstellen Sie auch Bodenplatten für Fertighäuser?",
				a: "Ja. Eine hochpräzise Bodenplatte ist das Fundament jedes Fertighauses. Wir fertigen Streifenfundamente und Thermobodenplatten absolut maßhaltig und exakt nach den strengen Toleranzvorgaben Ihres Fertighausherstellers."
			},
			{
				q: "Bieten Sie auch Sichtbeton für höchste architektonische Ansprüche an?",
				a: "Sichtbeton verlangt absolute Meisterklasse. Durch den Einsatz spezieller Schalungssysteme, exakt abgestimmter Betonrezepturen und präziser Verdichtungstechniken erzielen wir makellose, porenarme Oberflächen (Güteklasse SB2 bis SB4), die als puristische Designelemente wirken."
			},
			{
				q: "Wie wird die Trocknungsphase des Rohbaus in den Zeitplan integriert?",
				a: "Die Aushärtungs- und Trocknungszeiten von Beton und Mauerwerk sind entscheidend für die Vermeidung von Bauschäden. Wir planen diese Phasen realistisch von Beginn an ein. Um Bauzeiten bei entsprechender Witterung zu verkürzen, setzen wir modernste technische Bauwerkstrocknung schonend und effizient ein."
			}
		],
		vorteile: [
			"Meisterbetrieb mit Expertise",
			"DIN-gerechte Umsetzung",
			"Hochwertige Baustoffe",
			"Millimeterpräzise Arbeit",
			"Transparente Kalkulation"
		],
		workExamples: [{
			title: "Abdichtungsmaßnahmen am Sockel",
			description: "Vom freigelegten Sockelbereich bis zur geschützten Oberfläche: sauber vorbereitet, fachgerecht abgedichtet und dauerhaft gegen Feuchtigkeit gesichert.",
			images: [
				{
					src: "/images/arbeiten/sockel-abdichtung-bestand.webp",
					alt: "Sockelbereich vor den Abdichtungsmaßnahmen",
					label: "Bestand"
				},
				{
					src: "/images/arbeiten/sockel-abdichtung-aufgraben.webp",
					alt: "Freigelegter Sockelbereich während der Abdichtung",
					label: "Freilegen"
				},
				{
					src: "/images/arbeiten/sockel-abdichtung-fertig.webp",
					alt: "Fertig abgedichteter Sockelbereich",
					label: "Fertigstellung"
				}
			]
		}],
		qualityTitle: "Massiv, solide & dauerhaft gebaut",
		lokalerHinweis: "Wir führen Maurer- und Betonarbeiten in ganz Leipzig durch — von Gohlis bis Connewitz, von Plagwitz bis Reudnitz."
	},
	"sanierung": {
		beforeAfter: {
			beforeSrc: "/images/arbeiten/terrassenbelag-vorher.webp",
			afterSrc: "/images/arbeiten/terrassenbelag-nachher.webp",
			beforeAlt: "Abgenutzter Terrassenbelag vor der Erneuerung",
			afterAlt: "Neu verlegter Terrassenbelag nach der Sanierung",
			caption: "Erneuerung eines Terrassenbelags – vorher & nachher",
			aspectRatio: "3/4"
		},
		metaTitle: "Sanierung Leipzig – Altbau, Energetisch & Komplett aus einer Hand",
		metaDescription: "Sanierung & Modernisierung in Leipzig: Altbausanierung, energetische Sanierung, Grundrissoptimierung & Feuchtigkeitssanierung. Meisterbetrieb mit Gewerke-Koordination.",
		keywords: "Sanierung Leipzig, Altbausanierung Leipzig, Modernisierung Leipzig, energetische Sanierung Leipzig, Komplettsanierung Leipzig, Denkmalsanierung",
		title: "Ganzheitliche Sanierung & Modernisierung in Leipzig",
		eyebrow: "Erhalt & Wertsteigerung im Bestand",
		subtitle: "Werte erhalten, Wohnkomfort steigern: Wir sanieren Ihre Bestandsimmobilie fachgerecht und termintreu aus einer Hand.",
		showHeroCTAs: true,
		trustSignals: [
			{
				text: "Meisterbetrieb",
				sub: "HWK Leipzig",
				icon: "ShieldCheck"
			},
			{
				text: "Regional in Leipzig",
				sub: "& Umgebung",
				icon: "MapPin"
			},
			{
				text: "Alles aus einer Hand",
				sub: "Gewerke-Koordination",
				icon: "LayoutGrid"
			},
			{
				text: "Termintreue",
				sub: "Pünktlich garantiert",
				icon: "Clock"
			}
		],
		heroImage: "/images/hero-sanierung-stock.webp",
		intro: "Ob Sie eine Bestandsimmobilie in Leipzig modernisieren oder eine denkmalgerechte Sanierung planen — wir stehen Ihnen mit Fachwissen zur Seite. Vom kontrollierten Rückbau bis zur Instandsetzung koordinieren wir alle Gewerke. Wir sanieren Altbauten und Mehrfamilienhäuser mit dem nötigen Respekt vor der Bausubstanz und dem Blick für Langlebigkeit.",
		details: [
			{
				title: "Altbausanierung",
				desc: "Umfassende Modernisierung von Gründerzeithäusern und historischen Gebäuden unter Berücksichtigung der Substanz.",
				icon: "Home"
			},
			{
				title: "Grundrissoptimierung",
				desc: "Wanddurchbrüche inkl. Stahlträger-Einbau für moderne, offene Raumkonzepte (Statik-konform).",
				icon: "Ruler"
			},
			{
				title: "Energetische Sanierung",
				desc: "Dämmung und Optimierung der Gebäudehülle zur Senkung der Heizkosten und Wertsteigerung.",
				icon: "Zap"
			},
			{
				title: "Feuchte-/Schimmelsanierung",
				desc: "Ursachenbekämpfung, Trockenlegung und fachgerechter Neuaufbau bei Feuchtigkeitsschäden.",
				icon: "Droplet"
			},
			{
				title: "Renovierung",
				desc: "Dient der ästhetischen Verbesserung wie z.B. Streichen, Tapezieren oder Bodenbeläge erneuern.",
				icon: "CheckSquare"
			},
			{
				title: "Fassadenrenovierung",
				desc: "Neuer Putz und Anstrich zur optischen und funktionellen Auffrischung des Gebäudeäußeren.",
				icon: "PaintRoller"
			}
		],
		prozess: [
			{
				title: "Bestandsanalyse",
				desc: "Gemeinsame Begehung und Ermittlung des genauen Sanierungsbedarfs.",
				icon: "CheckSquare"
			},
			{
				title: "Planung",
				desc: "Erstellung eines detaillierten Sanierungskonzepts und Zeitplans.",
				icon: "FileText"
			},
			{
				title: "Bauphase",
				desc: "Fachgerechter Rückbau und Neuaufbau aus einer Hand.",
				icon: "HardHat"
			},
			{
				title: "Schlüsselübergabe",
				desc: "Besenreine Übergabe der modernisierten Räumlichkeiten.",
				icon: "Clock"
			}
		],
		faq: [
			{
				q: "Haben Sie Erfahrung mit der Sanierung denkmalgeschützter Altbauten in Leipzig?",
				a: "Absolut. Der historische Leipziger Gebäudebestand erfordert besonderes Feingefühl. Wir haben tiefe Expertise in der behutsamen Altbausanierung, stimmen uns eng mit den Denkmalschutzbehörden ab und bewahren die historische Substanz, während wir das Gebäude technisch auf den neuesten Stand bringen."
			},
			{
				q: "Was umfasst eine ganzheitliche energetische Modernisierung durch Ihr Unternehmen?",
				a: "Wir betrachten Ihr Gebäude als energetisches Gesamtsystem. Das umfasst hochwirksame Fassaden-, Dach- und Kellerdeckendämmungen sowie modernste Fenstertechnik. Unser Ziel ist es, Ihre Energiekosten massiv zu senken und die Voraussetzungen für staatliche Förderungen (z. B. KfW, BAFA) zu erfüllen."
			},
			{
				q: "Wie schützen Sie uns vor Lärm und Schmutz, wenn wir im Haus wohnen bleiben?",
				a: "Wir wissen, dass Sanierungen im bewohnten Bestand sensibel sind. Wir nutzen professionelle Staubschutzwände, Luftreiniger und garantieren eine besenreine Baustelle am Ende jedes Tages. Lärmintensive Abbrucharbeiten takten wir in enger zeitlicher Absprache mit Ihnen."
			},
			{
				q: "Lohnt sich eine Kernsanierung im Vergleich zu einem Abriss und Neubau?",
				a: "In begehrten Lagen Leipzigs ist eine Kernsanierung wirtschaftlich oft hochattraktiv. Der massive Grundkörper und der Charme der Immobilie bleiben erhalten. Wir analysieren die Bausubstanz im Vorfeld detailliert und beraten Sie transparent zum zu erwartenden Wertzuwachs und den Investitionskosten."
			},
			{
				q: "Sanieren Sie auch gravierende Feuchtigkeits- und Schimmelschäden?",
				a: "Ja. Bevor wir optisch modernisieren, muss die Bausubstanz gesund sein. Mit Horizontal- und Vertikalsperren (Injektionsverfahren), diffusionsoffenen Sanierputzsystemen und fachgerechter Schimmelbeseitigung legen wir Ihr Mauerwerk nachhaltig trocken."
			}
		],
		vorteile: [
			"Gewerkeübergreifend",
			"Respekt vor Bausubstanz",
			"Staubarmes Arbeiten",
			"Fester Ansprechpartner",
			"Termintreue Übergabe"
		],
		workExamples: [{
			title: "Erneuerung eines Terrassenbelags",
			description: "Abgenutzter Terrassenbelag wurde zurückgebaut und mit sauberem neuen Belag wieder hergestellt.",
			images: [{
				src: "/images/arbeiten/terrassenbelag-vorher.webp",
				alt: "Terrassenbelag vor der Erneuerung",
				label: "Vorher"
			}, {
				src: "/images/arbeiten/terrassenbelag-nachher.webp",
				alt: "Neu verlegter Terrassenbelag nach der Sanierung",
				label: "Nachher"
			}]
		}],
		qualityTitle: "Substanz erhalten, Zukunft sichern",
		lokalerHinweis: "Sanierungen in Leipzig-Südvorstadt, Schleußig, Gohlis und weiteren Altbau-Zentren sind unser Spezialgebiet."
	},
	"innenausbau": {
		beforeAfter: {
			beforeSrc: "/images/arbeiten/trockenbau-treppe-rohbau.webp",
			afterSrc: "/images/arbeiten/trockenbau-treppe-nachher-2.webp",
			beforeAlt: "Treppenhaus im Rohzustand während der Trockenbauarbeiten",
			afterAlt: "Fertig ausgebautes Treppenhaus mit hellen Oberflächen",
			caption: "Trockenbauarbeiten während einer Haussanierung – vorher & nachher",
			aspectRatio: "3/4"
		},
		metaTitle: "Innenausbau & Trockenbau Leipzig – Q2 bis Q4 Spachtelarbeiten",
		metaDescription: "Professioneller Innenausbau & Trockenbau in Leipzig: Trennwände, abgehängte Decken, Dachgeschossausbau, Spachtelarbeiten Q2–Q4 und Trockenestrich vom Meisterbetrieb.",
		keywords: "Innenausbau Leipzig, Trockenbau Leipzig, Spachtelarbeiten Leipzig, Q4 Spachtelung, Dachgeschossausbau Leipzig, Trockenestrich, Gipskarton Leipzig",
		title: "Moderner Innenausbau & Trockenbau in Leipzig",
		eyebrow: "Moderne Raumgestaltung",
		subtitle: "Flexible Raumkonzepte, perfekte Q4-Oberflächen und ganzheitliche Lösungen für Ihre Innenräume.",
		showHeroCTAs: true,
		trustSignals: [
			{
				text: "Meisterbetrieb",
				sub: "HWK Leipzig",
				icon: "ShieldCheck"
			},
			{
				text: "Regional in Leipzig",
				sub: "& Umgebung",
				icon: "MapPin"
			},
			{
				text: "Q4-Oberflächen",
				sub: "Perfektes Finish",
				icon: "PaintRoller"
			},
			{
				text: "Saubere Arbeit",
				sub: "Täglich aufgeräumt",
				icon: "Sparkles"
			}
		],
		heroImage: "/images/hero-innenausbau-stock.webp",
		intro: "Der professionelle Innenausbau verwandelt Rohbauten in Wohnträume. Bauunternehmen König realisiert in Leipzig hochwertigen Trockenbau, perfekte Spachtelarbeiten (Q2 bis Q4) und durchdachte Raumgestaltung. Schnelle Bauzeit, keine zusätzliche Baufeuchte und hervorragende Dämmeigenschaften — das sind die Vorteile unseres modernen Trockenbaus.",
		details: [
			{
				title: "Wände & Trennsysteme",
				desc: "Flexible und stabile Trockenbauwände für eine individuelle Neugestaltung des Grundrisses.",
				icon: "LayoutGrid"
			},
			{
				title: "Spachtelarbeiten (Q2-Q4)",
				desc: "Von tapetenfertig (Q2) bis zur makellos glatten Oberfläche (Q4) für direkte Anstriche oder Edelfinisches.",
				icon: "PaintRoller"
			},
			{
				title: "Abgehängte Decken",
				desc: "Integration von indirekter Beleuchtung (Lichtvouten), Spots und Verbesserung der Raumakustik.",
				icon: "Zap"
			},
			{
				title: "Dachgeschossausbau",
				desc: "Kompletter Ausbau inkl. Wärmedämmung und Dampfsperre zur Schaffung neuen Wohnraums.",
				icon: "Home"
			},
			{
				title: "Trockenstrich / Böden",
				desc: "Vorbereitung für den finalen Bodenbelag ohne lange Trocknungszeiten (im Vergleich zu Nassestrich).",
				icon: "Ruler"
			},
			{
				title: "Brand- & Schallschutz",
				desc: "Fachgerechter Einbau von Spezialsystemen nach neuesten Normen zur Geräuschminimierung.",
				icon: "ShieldCheck"
			}
		],
		prozess: [
			{
				title: "Aufmaß",
				desc: "Lasergenaues Aufmaß der Räume und Besprechung Ihrer Wohnideen.",
				icon: "Ruler"
			},
			{
				title: "Konstruktion",
				desc: "Richten des Metall- oder Holzständerwerks inkl. Dämmungseinbau.",
				icon: "Wrench"
			},
			{
				title: "Beplankung",
				desc: "Beidseitiges Verschließen mit Gipskarton oder Gipsfaserplatten.",
				icon: "Frame"
			},
			{
				title: "Finish",
				desc: "Verspachteln und Schleifen auf die gewünschte Qualitätsstufe.",
				icon: "PaintRoller"
			}
		],
		faq: [
			{
				q: "Welche gestalterischen Möglichkeiten bietet der moderne Trockenbau?",
				a: "Der Trockenbau ist maximal flexibel. Wir realisieren für Sie neue Raumaufteilungen, abgehängte Decken mit indirekten Lichtkonzepten, Vorsatzschalen zur Kabelintegration sowie formschöne, geschwungene Designelemente. Es ist die effizienteste Methode für einen hochwertigen Innenausbau."
			},
			{
				q: "Erfüllen Ihre Trockenbaulösungen die strengen gesetzlichen Brandschutzvorschriften?",
				a: "Brandschutz duldet keine Kompromisse, besonders bei Gewerbeobjekten oder Mehrfamilienhäusern. Wir verbauen rechtssicher zertifizierte Brandschutzsysteme (F30 bis F120) namhafter Hersteller und dokumentieren die fachgerechte Ausführung vorschriftsgemäß."
			},
			{
				q: "Kann man durch Trockenbau den Schallschutz zwischen Räumen verbessern?",
				a: "Definitiv. Durch entkoppelte Ständerwerke, doppelte Beplankung und den Einsatz von speziellen Akustikplatten sowie hochwertiger Mineralwolldämmung reduzieren wir Tritt- und Luftschall massiv. Das sorgt für absolute Ruhe im privaten Wohnbereich oder konzentriertes Arbeiten in Büros."
			},
			{
				q: "Ist Trockenbau auch für Bäder und andere Feuchträume geeignet?",
				a: "Selbstverständlich. In Feuchträumen verwenden wir speziell imprägnierte Gipskartonplatten oder hochbelastbare, zementgebundene Bauplatten. Diese sind schimmel- und feuchtigkeitsresistent und bilden den perfekten, formstabilen Untergrund für großformatige Premium-Fliesen."
			},
			{
				q: "Bereiten Sie die Wände auch direkt für den Maler vor?",
				a: "Ja, wir bieten Oberflächenqualität auf höchstem Niveau. Unsere Experten spachteln Fugen und Flächen absolut plan (bis zu Qualitätsstufe Q4). Damit sind Wände und Decken perfekt vorbereitet für edle Tapeten, feine Pandomo-Spachteltechniken oder Streiflicht-anfällige Farbanstriche."
			}
		],
		vorteile: [
			"Glatte Q4-Oberflächen",
			"Keine Trocknungszeit",
			"Hoher Schallschutz",
			"Indirekte Beleuchtung",
			"Brandschutz geprüft"
		],
		workExamples: [{
			title: "Kompletter Aufbau einer Salzgrotte",
			description: "Ein besonderer Innenausbau mit vorbereiteten Flächen, Salzstein-Elementen, Beleuchtung und atmosphärischem Finish.",
			images: [
				{
					src: "/images/arbeiten/salzgrotte-rohraum.webp",
					alt: "Rohraum vor dem Aufbau der Salzgrotte",
					label: "Rohraum"
				},
				{
					src: "/images/arbeiten/salzgrotte-salzsteine.webp",
					alt: "Salzsteine während des Aufbaus der Salzgrotte",
					label: "Aufbau"
				},
				{
					src: "/images/arbeiten/salzgrotte-licht.webp",
					alt: "Beleuchtete Wandfläche in der Salzgrotte",
					label: "Lichtkonzept"
				},
				{
					src: "/images/arbeiten/salzgrotte-eingang.webp",
					alt: "Eingangsbereich der fertiggestellten Salzgrotte",
					label: "Eingang"
				},
				{
					src: "/images/arbeiten/salzgrotte-wand.webp",
					alt: "Strukturierte Salzsteinwand in der Salzgrotte",
					label: "Wandgestaltung"
				},
				{
					src: "/images/arbeiten/salzgrotte-fertig.webp",
					alt: "Fertiggestellte Salzgrotte mit warmer Beleuchtung",
					label: "Fertig"
				}
			]
		}, {
			title: "Treppenhaus im Zuge einer Haussanierung",
			description: "Vom offenen Rohzustand über den Trockenbau bis zu sauberen Wand- und Deckenflächen mit fertiger Treppe.",
			images: [
				{
					src: "/images/arbeiten/trockenbau-treppe-vorher.webp",
					alt: "Treppenhaus vor dem Ausbau",
					label: "Vorbereitung"
				},
				{
					src: "/images/arbeiten/trockenbau-treppe-rohbau.webp",
					alt: "Treppenhaus während des Rohbaus",
					label: "Rohbau"
				},
				{
					src: "/images/arbeiten/trockenbau-treppe-nachher-1.webp",
					alt: "Ausgebautes Treppenhaus nach den Trockenbauarbeiten",
					label: "Ausbau"
				},
				{
					src: "/images/arbeiten/trockenbau-treppe-nachher-2.webp",
					alt: "Fertig ausgebautes Treppenhaus mit hellen Oberflächen",
					label: "Fertig"
				},
				{
					src: "/images/arbeiten/trockenbau-treppe-nachher-3.webp",
					alt: "Fertiggestellter Treppenbereich nach der Sanierung",
					label: "Fertig"
				}
			]
		}],
		qualityTitle: "Raum für neue Möglichkeiten",
		lokalerHinweis: "Vom Dachausbau in Connewitz bis zur Praxiseinrichtung im Zentrum — wir schaffen neue Räume in Leipzig."
	},
	"fassade": {
		beforeAfter: {
			beforeSrc: "/images/arbeiten/fassade-horizontalabdichtung-bestand-1.webp",
			afterSrc: "/images/arbeiten/fassade-horizontalabdichtung-fertig.webp",
			beforeAlt: "Freigelegter Sockelbereich einer Fassade vor der Sanierung",
			afterAlt: "Fassade nach Sockelinstandsetzung und Abdichtungsarbeiten",
			caption: "Fassadensanierung nach Horizontalabdichtung – vorher & nachher",
			aspectRatio: "4/3"
		},
		metaTitle: "Fassade & Putzarbeiten Leipzig – WDVS & Fassadensanierung",
		metaDescription: "Fassaden- & Putzarbeiten in Leipzig: Wärmedämmverbundsysteme (WDVS), Fassadensanierung, Außenputz, Struktur- & Edelputze. GEG-konform vom Meisterbetrieb.",
		keywords: "Fassade Leipzig, Fassadensanierung Leipzig, WDVS Leipzig, Wärmedämmung Leipzig, Putzarbeiten Leipzig, Außenputz Leipzig, Fassadendämmung",
		title: "Professionelle Fassadengestaltung & Sanierung in Leipzig",
		eyebrow: "Außengestaltung & Schutz",
		subtitle: "Energieeffiziente Wärmedämmung und langlebiger Witterungsschutz für den Werterhalt Ihrer Immobilie.",
		showHeroCTAs: true,
		trustSignals: [
			{
				text: "Meisterbetrieb",
				sub: "Zertifizierte Qualität",
				icon: "ShieldCheck"
			},
			{
				text: "Regional in Leipzig",
				sub: "& Umgebung",
				icon: "MapPin"
			},
			{
				text: "Nach DIN-Norm",
				sub: "Aktuelle Verarbeitung",
				icon: "CheckSquare"
			},
			{
				text: "Energieeffizient",
				sub: "GEG-konform",
				icon: "Leaf"
			}
		],
		heroImage: "/images/hero-fassade-stock.webp",
		intro: "Die Fassade ist die Visitenkarte Ihres Gebäudes — und elementar für Energieeffizienz und Werterhalt. Als Fachbetrieb sind wir spezialisiert auf professionelle Putzarbeiten, Altbausanierung und Wärmedämmverbundsysteme (WDVS) in Leipzig. Wir verleihen Ihrem Haus ein makelloses, dauerhaftes Gesicht, das Wind und Wetter trotzt.",
		details: [
			{
				title: "Wärmedämmung (WDVS)",
				desc: "Erhebliche Heizkosteneinsparung durch fachgerecht angebrachte Dämmsysteme nach GEG-Standards.",
				icon: "Zap"
			},
			{
				title: "Außen- & Mineralputz",
				desc: "Atmungsaktive Putzsysteme (Silikat, Kalk) zur Regulierung der Feuchtigkeit und Schutz des Mauerwerks.",
				icon: "PaintRoller"
			},
			{
				title: "Riss- & Fassadensanierung",
				desc: "Abklopfen von losem Putz, Einlegen von Armierungsgewebe und nachhaltige Rissbeseitigung.",
				icon: "Wrench"
			},
			{
				title: "Struktur- & Edelputze",
				desc: "Individuelle Oberflächengestaltung von rustikaler Kratzstruktur bis hin zum modernen Glattputz.",
				icon: "LayoutGrid"
			},
			{
				title: "Sockelabdichtung",
				desc: "Spezifischer Spritzwasser- und Feuchteschutz im erdberührten Fassadenbereich.",
				icon: "Droplet"
			},
			{
				title: "Innenputz-Systeme",
				desc: "Grundierung und professionelles Verputzen von Innenräumen für ein optimales Raumklima.",
				icon: "Home"
			}
		],
		prozess: [
			{
				title: "Untergrundprüfung",
				desc: "Prüfung der Fassade auf Tragfähigkeit und Feuchtigkeit.",
				icon: "CheckSquare"
			},
			{
				title: "Vorbereitung",
				desc: "Gerüststellung, Abkleben von Fenstern und Anbringen der Grundierung.",
				icon: "Wrench"
			},
			{
				title: "Aufbau",
				desc: "Dämmung kleben, Verdübeln und Einbetten von Armierungsgewebe.",
				icon: "LayoutGrid"
			},
			{
				title: "Oberputz",
				desc: "Auftragen des finalen Edelputzes und farbliche Gestaltung.",
				icon: "PaintRoller"
			}
		],
		faq: [
			{
				q: "Woran erkenne ich, dass meine Fassade dringend saniert werden sollte?",
				a: "Warnsignale sind feine Haarrisse im Putz, abplatzende Farbe, Algenbefall, feuchte Innenwände oder schlichtweg sehr hohe Heizkosten. Wir begutachten Ihre Fassade in Leipzig kostenfrei und empfehlen Ihnen die technisch und wirtschaftlich sinnvollste Maßnahme."
			},
			{
				q: "Welche Art der Fassadendämmung (WDVS) empfehlen Sie?",
				a: "Wir verbauen hochmoderne Wärmedämmverbundsysteme (WDVS), wahlweise auf Basis von EPS, Neopor oder unbrennbarer Mineralwolle. Wir analysieren Ihr bestehendes Mauerwerk exakt und empfehlen herstellerunabhängig das physikalisch beste System für maximales Raumklima und Energieeinsparung."
			},
			{
				q: "Wie verhindern Sie, dass sich Algen oder Pilze auf der neuen Fassade bilden?",
				a: "Dicke Dämmschichten können das Begrünen der Fassade begünstigen, wenn falsch gearbeitet wird. Wir verhindern dies durch dickschichtige, hochwertige Putzsysteme (z. B. Mineral- oder Silikonharzputze), exzellente Trocknungseigenschaften und diffusionsfähige Schlussanstriche."
			},
			{
				q: "Restaurieren Sie auch Stuckfassaden an historischen Gebäuden in Leipzig?",
				a: "Die Gründerzeithäuser prägen das Leipziger Stadtbild. Unsere erfahrenen Handwerker arbeiten Stuckelemente, Gesimse und Ornamentik mit größtem Respekt vor dem Original behutsam auf und integrieren alte Handwerkskunst perfekt in moderne Wetterschutzkonzepte."
			},
			{
				q: "Welche Farben setzen Sie für einen langlebigen Fassadenanstrich ein?",
				a: "Wir machen keine Abstriche bei der Materialqualität. Es kommen ausschließlich Premium-Fassadenfarben auf Silikonharz- oder Silikatbasis zum Einsatz. Diese garantieren höchste Farbtonbeständigkeit, sind extrem schmutzabweisend (\"Lotuseffekt\") und schützen Ihr Gebäude jahrzehntelang vor Schlagregen."
			}
		],
		vorteile: [
			"Geringere Heizkosten",
			"Optimaler Witterungsschutz",
			"Keine Algenbildung",
			"Wertsteigerung",
			"Inklusive Gerüstkoordination"
		],
		workExamples: [{
			title: "Sockel- und Fassadeninstandsetzung",
			description: "Nach der Horizontalabdichtung wurde der betroffene Sockelbereich freigelegt, instandgesetzt und wieder sauber aufgebaut.",
			images: [
				{
					src: "/images/arbeiten/fassade-horizontalabdichtung-bestand-1.webp",
					alt: "Beschädigter Fassadensockel vor der Instandsetzung",
					label: "Bestand"
				},
				{
					src: "/images/arbeiten/fassade-horizontalabdichtung-bestand-2.webp",
					alt: "Freigelegter Sockelbereich am Gebäude",
					label: "Freilegen"
				},
				{
					src: "/images/arbeiten/fassade-horizontalabdichtung-aufbau-1.webp",
					alt: "Neu aufgebauter Sockelbereich während der Sanierung",
					label: "Aufbau"
				},
				{
					src: "/images/arbeiten/fassade-horizontalabdichtung-aufbau-2.webp",
					alt: "Fassadensockel während der Abdichtungsarbeiten",
					label: "Abdichtung"
				},
				{
					src: "/images/arbeiten/fassade-horizontalabdichtung-fertig.webp",
					alt: "Fertig instandgesetzter Fassadensockel",
					label: "Fertigstellung"
				}
			]
		}, {
			title: "Sanierung einer Klinkerfassade",
			description: "Mehrgeschossige Klinkerfassade mit Gerüststellung und schrittweiser Bearbeitung der Fassadenflächen.",
			images: [
				{
					src: "/images/arbeiten/klinkerfassade-sanierung-1.webp",
					alt: "Klinkerfassade mit Gerüst zu Beginn der Sanierung",
					label: "Start"
				},
				{
					src: "/images/arbeiten/klinkerfassade-sanierung-2.webp",
					alt: "Klinkerfassade während der Sanierungsarbeiten",
					label: "Bearbeitung"
				},
				{
					src: "/images/arbeiten/klinkerfassade-sanierung-3.webp",
					alt: "Klinkerfassade im fortgeschrittenen Sanierungszustand",
					label: "Fortschritt"
				}
			]
		}],
		qualityTitle: "Schön von außen, stark für Jahrzehnte",
		lokalerHinweis: "Hochwertige Fassaden für Einfamilienhäuser und Villen in Leutzsch, Markkleeberg und ganz Leipzig."
	}
};
function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt, caption, aspectRatio = "16/9" }) {
	const containerRef = useRef(null);
	const clipperRef = useRef(null);
	const dividerRef = useRef(null);
	const isDragging = useRef(false);
	const updatePos = useCallback((clientX) => {
		if (!containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		const pct = Math.max(2, Math.min(98, (clientX - rect.left) / rect.width * 100));
		if (clipperRef.current) clipperRef.current.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
		if (dividerRef.current) dividerRef.current.style.left = `${pct}%`;
	}, []);
	const handlePointerDown = useCallback((e) => {
		isDragging.current = true;
		e.currentTarget.setPointerCapture(e.pointerId);
		updatePos(e.clientX);
	}, [updatePos]);
	const handlePointerMove = useCallback((e) => {
		if (!isDragging.current) return;
		updatePos(e.clientX);
	}, [updatePos]);
	const handlePointerUp = useCallback(() => {
		isDragging.current = false;
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ jsxs("div", {
			ref: containerRef,
			className: "relative overflow-hidden rounded-2xl select-none shadow-xl cursor-col-resize",
			style: {
				aspectRatio,
				touchAction: "none"
			},
			onPointerDown: handlePointerDown,
			onPointerMove: handlePointerMove,
			onPointerUp: handlePointerUp,
			onPointerCancel: handlePointerUp,
			onDragStart: (e) => e.preventDefault(),
			children: [
				/* @__PURE__ */ jsx("img", {
					src: afterSrc,
					alt: afterAlt,
					draggable: false,
					className: "absolute inset-0 w-full h-full object-cover pointer-events-none",
					loading: "lazy",
					decoding: "async"
				}),
				/* @__PURE__ */ jsx("div", {
					ref: clipperRef,
					className: "absolute inset-0 pointer-events-none",
					style: {
						clipPath: "inset(0 50% 0 0)",
						willChange: "clip-path"
					},
					children: /* @__PURE__ */ jsx("img", {
						src: beforeSrc,
						alt: beforeAlt,
						draggable: false,
						className: "absolute inset-0 w-full h-full object-cover pointer-events-none",
						loading: "lazy",
						decoding: "async"
					})
				}),
				/* @__PURE__ */ jsx("div", {
					ref: dividerRef,
					className: "absolute top-0 bottom-0 w-px bg-white/80 pointer-events-none",
					style: {
						left: "50%",
						willChange: "left"
					},
					children: /* @__PURE__ */ jsxs("div", {
						className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center gap-0.5 ring-2 ring-white/50",
						children: [/* @__PURE__ */ jsx(ChevronLeft, {
							size: 13,
							className: "text-gray-700"
						}), /* @__PURE__ */ jsx(ChevronRight, {
							size: 13,
							className: "text-gray-700"
						})]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg pointer-events-none",
					children: "Vorher"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute bottom-4 right-4 bg-gold/90 backdrop-blur-sm text-black text-xs font-bold px-3 py-1.5 rounded-lg pointer-events-none",
					children: "Nachher"
				})
			]
		}), caption && /* @__PURE__ */ jsx("p", {
			className: "text-center text-sm text-gray-400 font-medium",
			children: caption
		})]
	});
}
function WorkImageGrid({ images, projectTitle }) {
	return /* @__PURE__ */ jsx("div", {
		className: "-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 md:gap-5 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden",
		children: images.map((image, index) => {
			return /* @__PURE__ */ jsx("figure", {
				className: "relative aspect-[4/3] min-w-[82%] snap-start overflow-hidden rounded-2xl bg-gray-100 shadow-sm group sm:min-w-[48%] lg:min-w-0",
				children: /* @__PURE__ */ jsx("img", {
					src: `${image.src}?v=docx-gallery-20260506`,
					alt: image.alt,
					className: "w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]",
					loading: "lazy",
					decoding: "async"
				})
			}, `${projectTitle}-${image.src}-${index}`);
		})
	});
}
function WorkExamples({ examples }) {
	if (!examples || examples.length === 0) return null;
	return /* @__PURE__ */ jsx("section", {
		className: "section-padding bg-white border-t border-gray-100",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto",
			children: [/* @__PURE__ */ jsx(RevealSection, { children: /* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "Ausgeführt",
				title: "Arbeiten aus der Praxis",
				description: "Echte Projektbilder, passend zur jeweiligen Leistung ausgewählt."
			}) }), /* @__PURE__ */ jsx("div", {
				className: "space-y-14 md:space-y-20 mt-12",
				children: examples.map((example, index) => /* @__PURE__ */ jsx(RevealSection, {
					delay: index * 100,
					children: /* @__PURE__ */ jsxs("article", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-start",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-4",
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "text-gold font-bold text-xs uppercase tracking-[0.18em] mb-4 block",
									children: ["Projekt ", String(index + 1).padStart(2, "0")]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-2xl md:text-3xl font-900 text-charcoal mb-4 leading-tight",
									children: example.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-gray-600 leading-relaxed",
									children: example.description
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "lg:col-span-8",
							children: /* @__PURE__ */ jsx(WorkImageGrid, {
								images: example.images,
								projectTitle: example.title
							})
						})]
					})
				}, example.title))
			})]
		})
	});
}
function FAQAccordion({ faq }) {
	const [openIndex, setOpenIndex] = useState(null);
	return /* @__PURE__ */ jsx("div", {
		className: "space-y-4",
		children: faq.map((item, i) => /* @__PURE__ */ jsxs("div", {
			className: `bg-white rounded-xl border transition-colors duration-300 ${openIndex === i ? "border-gold shadow-md" : "border-gray-200 hover:border-gray-300"}`,
			children: [/* @__PURE__ */ jsxs("button", {
				onClick: () => setOpenIndex(openIndex === i ? null : i),
				className: "w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none",
				children: [/* @__PURE__ */ jsx("span", {
					className: "font-semibold text-gray-900 pr-8",
					children: item.q
				}), /* @__PURE__ */ jsx("div", {
					className: `flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 ${openIndex === i ? "bg-gold rotate-180" : "bg-gray-100"}`,
					children: openIndex === i ? /* @__PURE__ */ jsx(Minus, {
						size: 16,
						className: "text-black"
					}) : /* @__PURE__ */ jsx(Plus, {
						size: 16,
						className: "text-gray-600"
					})
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: `overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`,
				children: /* @__PURE__ */ jsx("div", {
					className: "p-6 pt-0 text-gray-600 leading-relaxed",
					children: item.a
				})
			})]
		}, i))
	});
}
function LeistungDetail() {
	const { slug } = useParams();
	const data = serviceData[slug];
	if (!data) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: "Seite nicht gefunden",
		description: "Die angeforderte Leistungsseite existiert nicht.",
		path: `/leistungen/${slug || ""}`,
		noindex: true
	}), /* @__PURE__ */ jsx("div", {
		className: "min-h-screen flex items-center justify-center bg-gray-50 pt-52",
		children: /* @__PURE__ */ jsxs("div", {
			className: "text-center px-4",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-2xl sm:text-4xl font-bold mb-4 text-charcoal",
					children: "Dienstleistung nicht gefunden"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-gray-500 mb-8",
					children: "Die angeforderte Seite existiert nicht oder wurde verschoben."
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/leistungen",
					className: "btn-primary",
					children: "Alle Leistungen ansehen"
				})
			]
		})
	})] });
	const pagePath = `/leistungen/${slug}`;
	const siteUrl = "https://www.bauunternehmen-koenig.com";
	const heroImageSrc = resolvePublicImage(data.heroImage);
	const beforeAfter = data.beforeAfter ? {
		...data.beforeAfter,
		beforeSrc: resolvePublicImage(data.beforeAfter.beforeSrc),
		afterSrc: resolvePublicImage(data.beforeAfter.afterSrc)
	} : null;
	const workExamples = data.workExamples?.map((example) => ({
		...example,
		images: example.images.map((image) => ({
			...image,
			src: resolvePublicImage(image.src)
		}))
	}));
	const beforeAfterMaxWidth = beforeAfter?.aspectRatio === "3/4" ? "560px" : "820px";
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Service",
				name: data.title,
				description: data.metaDescription || data.subtitle,
				provider: {
					"@type": "HomeAndConstructionBusiness",
					name: "Bauunternehmen König",
					url: siteUrl,
					telephone: contactDetails.phoneIntl,
					address: {
						"@type": "PostalAddress",
						streetAddress: contactDetails.addressLine1,
						postalCode: "04288",
						addressLocality: "Leipzig",
						addressRegion: "Sachsen",
						addressCountry: "DE"
					}
				},
				areaServed: {
					"@type": "City",
					name: "Leipzig"
				},
				image: `${siteUrl}${heroImageSrc}`,
				url: `${siteUrl}${pagePath}`
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Startseite",
						item: siteUrl
					},
					{
						"@type": "ListItem",
						position: 2,
						name: "Leistungen",
						item: `${siteUrl}/leistungen`
					},
					{
						"@type": "ListItem",
						position: 3,
						name: data.title,
						item: `${siteUrl}${pagePath}`
					}
				]
			},
			...data.faq && data.faq.length ? [{
				"@type": "FAQPage",
				mainEntity: data.faq.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			}] : []
		]
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SEO, {
			title: data.metaTitle || data.title,
			description: data.metaDescription || data.subtitle,
			keywords: data.keywords,
			path: pagePath,
			image: `${siteUrl}${heroImageSrc}`,
			jsonLd
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "relative pt-40 sm:pt-48 md:pt-52 pb-16 sm:pb-20 bg-charcoal overflow-hidden min-h-[50vh] flex items-center",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 opacity-[0.25]",
					children: /* @__PURE__ */ jsx("img", {
						src: heroImageSrc,
						alt: data.title,
						className: "w-full h-full object-cover grayscale brightness-50",
						fetchPriority: "high",
						decoding: "async"
					})
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/90 to-charcoal" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full",
					children: [/* @__PURE__ */ jsxs(Link, {
						to: "/leistungen",
						className: "inline-flex items-center gap-2 text-gray-400 hover:text-gold transition-colors mb-8 text-sm group",
						children: [/* @__PURE__ */ jsx(ArrowLeft, {
							size: 16,
							className: "group-hover:-translate-x-1 transition-transform"
						}), "Zurück zur Übersicht"]
					}), /* @__PURE__ */ jsxs("div", {
						className: "max-w-4xl",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "inline-block px-3 py-1 bg-gold/10 border border-gold/20 text-gold font-medium rounded-full text-xs uppercase tracking-widest mb-6 border-solid",
								children: data.eyebrow
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-900 text-white leading-[1.1] mb-5 max-w-[15ch] sm:max-w-none",
								children: data.title
							}),
							data.subtitle && /* @__PURE__ */ jsx("h2", {
								className: "text-base sm:text-lg md:text-2xl font-light text-gray-300 leading-relaxed mt-5 md:mt-6 max-w-[280px] sm:max-w-3xl",
								children: data.subtitle
							}),
							data.showHeroCTAs && /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10",
								children: [/* @__PURE__ */ jsx(Link, {
									to: "/kontakt",
									className: "inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-gold text-black font-bold rounded-xl hover:bg-white hover:text-black transition-all shadow-lg text-base sm:text-lg text-center",
									children: "Kostenlose Vor-Ort-Beratung anfragen"
								}), /* @__PURE__ */ jsx(Link, {
									to: "/referenzen",
									className: "inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-transparent border border-gray-500 text-white font-medium rounded-xl hover:bg-white/10 transition-all text-base sm:text-lg text-center",
									children: "Unsere Referenzen ansehen"
								})]
							})
						]
					})]
				})
			]
		}),
		data.trustSignals && /* @__PURE__ */ jsx("section", {
			className: "relative -mt-8 sm:-mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20",
			children: /* @__PURE__ */ jsx(RevealSection, {
				delay: 300,
				children: /* @__PURE__ */ jsx("div", {
					className: "bg-white rounded-3xl overflow-hidden p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 border border-gold/40 shadow-[0_8px_40px_rgba(0,0,0,0.18),0_0_0_1px_rgba(180,144,60,0.15)]",
					children: data.trustSignals.map((signal, i) => {
						const Icon = iconMap[signal.icon];
						return /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-4 min-w-0",
							children: [/* @__PURE__ */ jsx("div", {
								className: "w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 flex-shrink-0",
								children: Icon && /* @__PURE__ */ jsx(Icon, {
									size: 22,
									className: "text-gold"
								})
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								className: "text-base font-semibold text-gray-900 block",
								children: signal.text
							}), signal.sub && /* @__PURE__ */ jsx("span", {
								className: "text-xs text-gray-400",
								children: signal.sub
							})] })]
						}, i);
					})
				})
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-padding bg-white relative",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center",
				children: [/* @__PURE__ */ jsx(RevealSection, { children: /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(SectionHeading, {
						eyebrow: "Meisterqualität",
						title: data.qualityTitle || "Präzision in jeder Phase",
						center: false
					}),
					/* @__PURE__ */ jsx("div", {
						className: "prose prose-lg text-gray-600 mb-8",
						children: /* @__PURE__ */ jsx("p", {
							className: "leading-relaxed",
							children: data.intro
						})
					}),
					data.lokalerHinweis && /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col sm:flex-row items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 mb-8",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center",
							children: /* @__PURE__ */ jsx(Home, {
								size: 20,
								className: "text-gold"
							})
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
							className: "font-semibold text-charcoal mb-1",
							children: "Ihr Partner vor Ort"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm text-gray-600",
							children: data.lokalerHinweis
						})] })]
					}),
					/* @__PURE__ */ jsxs(Link, {
						to: "/kontakt",
						className: "btn-primary inline-flex",
						children: [/* @__PURE__ */ jsx(Mail, { size: 18 }), "Kostenlose Beratung sichern"]
					})
				] }) }), /* @__PURE__ */ jsx(RevealSection, {
					delay: 200,
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative rounded-3xl overflow-hidden shadow-2xl group",
						children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gold/10 group-hover:bg-gold/0 transition-colors z-10 duration-500" }), /* @__PURE__ */ jsx("img", {
							src: heroImageSrc,
							alt: data.title,
							className: "w-full h-[320px] sm:h-[400px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700",
							loading: "lazy",
							decoding: "async"
						})]
					})
				})]
			})
		}),
		beforeAfter && /* @__PURE__ */ jsx("section", {
			className: "section-padding bg-gray-50 border-t border-gray-100",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-5xl mx-auto",
				children: [/* @__PURE__ */ jsx(RevealSection, { children: /* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Transformation",
					title: "Vorher & Nachher",
					description: "Sehen Sie selbst, was professionelles Handwerk aus Ihrem Objekt machen kann."
				}) }), /* @__PURE__ */ jsx(RevealSection, {
					delay: 200,
					children: /* @__PURE__ */ jsx("div", {
						className: "mx-auto",
						style: { maxWidth: beforeAfterMaxWidth },
						children: /* @__PURE__ */ jsx(BeforeAfterSlider, { ...beforeAfter })
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx(WorkExamples, { examples: workExamples }),
		/* @__PURE__ */ jsx("section", {
			className: "section-padding bg-white border-t border-gray-100",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto",
				children: [/* @__PURE__ */ jsx(RevealSection, { children: /* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Leistungsspektrum",
					title: "Unsere Expertise im Detail",
					description: "Transparenz und Fachwissen. Diese Bau- und Sanierungsleistungen führen wir professionell für Sie durch."
				}) }), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-12",
					children: data.details.map((item, i) => {
						const IconComponent = iconMap[item.icon] || CheckCircle2;
						return /* @__PURE__ */ jsx(RevealSection, {
							delay: i * 100,
							children: /* @__PURE__ */ jsxs("div", {
								className: "h-full bg-white p-6 md:p-8 rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-gold/30 transition-all duration-300 group",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:border-gold transition-colors",
										children: /* @__PURE__ */ jsx(IconComponent, {
											size: 24,
											className: "text-gold group-hover:text-black transition-colors"
										})
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "text-xl font-bold text-gray-900 mb-3",
										children: item.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-600 leading-relaxed",
										children: item.desc
									})
								]
							})
						}, item.title);
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-padding bg-white border-y border-gray-100",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto",
				children: [/* @__PURE__ */ jsx(RevealSection, { children: /* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Zusammenarbeit",
					title: "Unser Prozess",
					description: "Klar definiert, transparent und termintreu. So läuft die Umsetzung Ihres Projekts ab."
				}) }), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 mt-12 md:mt-16 lg:mt-24",
					children: data.prozess.map((step, i) => {
						const IconComp = iconMap[step.icon] || CheckCircle2;
						return /* @__PURE__ */ jsx(RevealSection, {
							delay: i * 100,
							children: /* @__PURE__ */ jsxs("div", {
								className: "relative text-center group h-full",
								children: [
									i !== data.prozess.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gray-100 -z-10 group-hover:bg-gold/30 transition-colors" }),
									/* @__PURE__ */ jsxs("div", {
										className: "relative inline-flex items-center justify-center w-20 h-20 bg-white border-4 border-gray-50 rounded-full text-2xl font-bold text-black mb-6 shadow-sm group-hover:border-gold group-hover:scale-110 transition-all duration-300",
										children: [/* @__PURE__ */ jsx(IconComp, {
											size: 32,
											strokeWidth: 1.5,
											className: "text-gold"
										}), /* @__PURE__ */ jsxs("div", {
											className: "absolute -top-2 -right-2 w-8 h-8 rounded-full bg-charcoal text-white flex items-center justify-center text-xs font-bold ring-4 ring-white shadow-sm",
											children: ["0", i + 1]
										})]
									}),
									/* @__PURE__ */ jsx("h4", {
										className: "text-xl font-bold text-gray-900 mb-3",
										children: step.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-500 text-sm max-w-xs mx-auto leading-relaxed",
										children: step.desc
									})
								]
							})
						}, step.title);
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-padding bg-gray-50",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg:col-span-7 flex flex-col justify-center",
					children: /* @__PURE__ */ jsxs(RevealSection, { children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-3xl font-bold text-charcoal mb-2",
							children: "Häufige Fragen"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-gray-600 mb-8 text-lg",
							children: [
								"Was unsere Kunden rund um das Thema ",
								data.title,
								" oft wissen möchten."
							]
						}),
						/* @__PURE__ */ jsx(FAQAccordion, { faq: data.faq })
					] })
				}), /* @__PURE__ */ jsx("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ jsx(RevealSection, {
						delay: 200,
						children: /* @__PURE__ */ jsxs("div", {
							className: "bg-charcoal rounded-3xl p-6 md:p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "absolute -bottom-10 -right-10 p-8 opacity-5",
									children: /* @__PURE__ */ jsx(ShieldCheck, { size: 250 })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-2xl font-bold mb-8 relative z-10 text-gold",
									children: "Warum mit uns bauen?"
								}),
								/* @__PURE__ */ jsx("ul", {
									className: "space-y-6 relative z-10",
									children: data.vorteile.map((v, i) => /* @__PURE__ */ jsxs("li", {
										className: "flex items-center gap-4",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30",
											children: /* @__PURE__ */ jsx(CheckCircle2, {
												size: 16,
												className: "text-gold"
											})
										}), /* @__PURE__ */ jsx("span", {
											className: "font-semibold text-gray-100 text-base sm:text-lg",
											children: v
										})]
									}, i))
								}),
								/* @__PURE__ */ jsx("hr", { className: "border-gray-700/50 my-10 relative z-10" }),
								/* @__PURE__ */ jsxs("div", {
									className: "relative z-10",
									children: [
										/* @__PURE__ */ jsx("p", {
											className: "text-sm text-gray-400 mb-4 font-medium uppercase tracking-wider",
											children: "Lassen Sie uns Ihr Vorhaben besprechen:"
										}),
										/* @__PURE__ */ jsxs("a", {
											href: contactDetails.phoneHref,
											className: "inline-flex flex-wrap items-center gap-3 text-gold hover:text-white transition-colors font-bold text-xl sm:text-2xl group mb-8 break-words",
											children: [/* @__PURE__ */ jsx("div", {
												className: "w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/30 transition-colors",
												children: /* @__PURE__ */ jsx(Phone, { size: 20 })
											}), contactDetails.phoneDisplay]
										}),
										/* @__PURE__ */ jsxs(Link, {
											to: "/kontakt",
											className: "btn-primary w-full flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(212,175,55,0.2)]",
											children: [/* @__PURE__ */ jsx(Mail, { size: 18 }), "Kostenlose Beratung sichern"]
										})
									]
								})
							]
						})
					})
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "relative py-24 overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 gold-gradient opacity-95" }), /* @__PURE__ */ jsx("div", {
				className: "relative z-10 max-w-3xl mx-auto px-4 text-center",
				children: /* @__PURE__ */ jsxs(RevealSection, { children: [
					/* @__PURE__ */ jsx("span", {
						className: "font-bold uppercase tracking-[0.2em] text-black/60 text-sm mb-4 block",
						children: "Festpreis oder Regie"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-3xl sm:text-4xl md:text-5xl font-900 text-black mb-6 tracking-tight",
						children: "Bereit für den Baustart?"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-black/80 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed",
						children: "Kontaktieren Sie uns für eine kostenlose Objektbegehung vor Ort. Wir kalkulieren transparent und fair."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-col sm:flex-row items-center justify-center gap-4",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/kontakt",
							className: "inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-black text-white font-semibold rounded-xl hover:bg-charcoal transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-charcoal/20 text-base sm:text-lg text-center",
							children: [/* @__PURE__ */ jsx(Mail, {
								size: 20,
								className: "mr-2"
							}), "Kostenlose Beratung sichern"]
						})
					})
				] })
			})]
		})
	] });
}
//#endregion
//#region src/pages/Referenzen.jsx
var projects = [
	{
		title: "Klinkertreppe neu aufmauern",
		location: "Leipzig & Umgebung",
		type: "Maurer",
		img: "/images/arbeiten/klinkertreppe-nachher.webp",
		desc: "Abgenutzte Außentreppe zurückgebaut und als saubere Klinkertreppe neu aufgemauert.",
		images: [{
			src: "/images/arbeiten/klinkertreppe-nachher.webp",
			alt: "Neu aufgemauerte Klinkertreppe",
			label: "Nachher"
		}, {
			src: "/images/arbeiten/klinkertreppe-vorher.webp",
			alt: "Klinkertreppe vor dem Neuaufmauern",
			label: "Vorher"
		}]
	},
	{
		title: "Abdichtungsmaßnahmen am Sockel",
		location: "Leipzig & Umgebung",
		type: "Maurer",
		img: "/images/arbeiten/sockel-abdichtung-fertig.webp",
		desc: "Sockelbereich freigelegt, vorbereitet und dauerhaft gegen Feuchtigkeit geschützt.",
		images: [
			{
				src: "/images/arbeiten/sockel-abdichtung-fertig.webp",
				alt: "Fertig abgedichteter Sockelbereich",
				label: "Fertig"
			},
			{
				src: "/images/arbeiten/sockel-abdichtung-bestand.webp",
				alt: "Sockelbereich vor den Abdichtungsmaßnahmen",
				label: "Bestand"
			},
			{
				src: "/images/arbeiten/sockel-abdichtung-aufgraben.webp",
				alt: "Freigelegter Sockelbereich während der Abdichtung",
				label: "Freilegen"
			}
		]
	},
	{
		title: "Kompletter Aufbau einer Salzgrotte",
		location: "Leipzig & Umgebung",
		type: "Innenausbau",
		img: "/images/arbeiten/salzgrotte-fertig.webp",
		desc: "Innenausbau mit vorbereiteten Wandflächen, Salzstein-Elementen und stimmungsvoller Beleuchtung.",
		images: [
			{
				src: "/images/arbeiten/salzgrotte-fertig.webp",
				alt: "Fertiggestellte Salzgrotte mit warmer Beleuchtung",
				label: "Fertig"
			},
			{
				src: "/images/arbeiten/salzgrotte-rohraum.webp",
				alt: "Rohraum vor dem Aufbau der Salzgrotte",
				label: "Rohraum"
			},
			{
				src: "/images/arbeiten/salzgrotte-salzsteine.webp",
				alt: "Salzsteine während des Aufbaus der Salzgrotte",
				label: "Aufbau"
			},
			{
				src: "/images/arbeiten/salzgrotte-licht.webp",
				alt: "Beleuchtete Wandfläche in der Salzgrotte",
				label: "Licht"
			},
			{
				src: "/images/arbeiten/salzgrotte-eingang.webp",
				alt: "Eingangsbereich der fertiggestellten Salzgrotte",
				label: "Eingang"
			},
			{
				src: "/images/arbeiten/salzgrotte-wand.webp",
				alt: "Strukturierte Salzsteinwand in der Salzgrotte",
				label: "Wand"
			}
		]
	},
	{
		title: "Trockenbau während einer Haussanierung",
		location: "Leipzig & Umgebung",
		type: "Innenausbau",
		img: "/images/arbeiten/trockenbau-treppe-nachher-2.webp",
		desc: "Treppenhaus vom Rohzustand bis zu hellen, sauberen Wand- und Deckenflächen ausgebaut.",
		images: [
			{
				src: "/images/arbeiten/trockenbau-treppe-nachher-2.webp",
				alt: "Fertig ausgebautes Treppenhaus mit hellen Oberflächen",
				label: "Fertig"
			},
			{
				src: "/images/arbeiten/trockenbau-treppe-vorher.webp",
				alt: "Treppenhaus vor dem Ausbau",
				label: "Start"
			},
			{
				src: "/images/arbeiten/trockenbau-treppe-rohbau.webp",
				alt: "Treppenhaus während des Rohbaus",
				label: "Rohbau"
			},
			{
				src: "/images/arbeiten/trockenbau-treppe-nachher-1.webp",
				alt: "Ausgebautes Treppenhaus nach den Trockenbauarbeiten",
				label: "Ausbau"
			},
			{
				src: "/images/arbeiten/trockenbau-treppe-nachher-3.webp",
				alt: "Fertiggestellter Treppenbereich nach der Sanierung",
				label: "Fertig"
			}
		]
	},
	{
		title: "Erneuerung eines Terrassenbelags",
		location: "Leipzig & Umgebung",
		type: "Sanierung",
		img: "/images/arbeiten/terrassenbelag-nachher.webp",
		desc: "Abgenutzten Belag erneuert und die Terrasse wieder sauber, belastbar und gepflegt hergestellt.",
		images: [{
			src: "/images/arbeiten/terrassenbelag-nachher.webp",
			alt: "Neu verlegter Terrassenbelag",
			label: "Nachher"
		}, {
			src: "/images/arbeiten/terrassenbelag-vorher.webp",
			alt: "Terrassenbelag vor der Erneuerung",
			label: "Vorher"
		}]
	},
	{
		title: "Fassadensanierung nach Horizontalabdichtung",
		location: "Leipzig & Umgebung",
		type: "Fassade",
		img: "/images/arbeiten/fassade-horizontalabdichtung-fertig.webp",
		desc: "Sockelbereich freigelegt, instandgesetzt und nach der Abdichtung wieder sauber aufgebaut.",
		images: [
			{
				src: "/images/arbeiten/fassade-horizontalabdichtung-fertig.webp",
				alt: "Fertig instandgesetzter Fassadensockel",
				label: "Fertig"
			},
			{
				src: "/images/arbeiten/fassade-horizontalabdichtung-bestand-1.webp",
				alt: "Beschädigter Fassadensockel vor der Instandsetzung",
				label: "Bestand"
			},
			{
				src: "/images/arbeiten/fassade-horizontalabdichtung-bestand-2.webp",
				alt: "Freigelegter Sockelbereich am Gebäude",
				label: "Freilegen"
			},
			{
				src: "/images/arbeiten/fassade-horizontalabdichtung-aufbau-1.webp",
				alt: "Neu aufgebauter Sockelbereich während der Sanierung",
				label: "Aufbau"
			},
			{
				src: "/images/arbeiten/fassade-horizontalabdichtung-aufbau-2.webp",
				alt: "Fassadensockel während der Abdichtungsarbeiten",
				label: "Abdichtung"
			}
		]
	},
	{
		title: "Sanierung einer Klinkerfassade",
		location: "Leipzig & Umgebung",
		type: "Fassade",
		img: "/images/arbeiten/klinkerfassade-sanierung-3.webp",
		desc: "Mehrgeschossige Klinkerfassade mit Gerüststellung und schrittweiser Bearbeitung der Fassadenflächen.",
		images: [
			{
				src: "/images/arbeiten/klinkerfassade-sanierung-3.webp",
				alt: "Klinkerfassade im fortgeschrittenen Sanierungszustand",
				label: "Fortschritt"
			},
			{
				src: "/images/arbeiten/klinkerfassade-sanierung-1.webp",
				alt: "Klinkerfassade mit Gerüst zu Beginn der Sanierung",
				label: "Start"
			},
			{
				src: "/images/arbeiten/klinkerfassade-sanierung-2.webp",
				alt: "Klinkerfassade während der Sanierungsarbeiten",
				label: "Bearbeitung"
			}
		]
	}
];
var filterOptions$1 = [
	"Alle",
	"Sanierung",
	"Fassade",
	"Innenausbau",
	"Maurer"
];
var googleReviews = [
	{
		author: "Leonie W.",
		text: "Sehr zuverlässiges Bauunternehmen! Die Renovierung von Schlafzimmer und Wohnzimmer wurde sauber und mit einer super Qualität ausgeführt. Wir sind rundum zufrieden und empfehlen das Team gerne weiter.",
		rating: 5,
		time: "vor 3 Monaten"
	},
	{
		author: "Tobias S.",
		text: "Wir hatten im Zuge unserer Umbaumaßnahmen an der Fassade und im Innenausbau unseres Einfamilienhauses das Vergnügen mit Tim zusammenarbeiten. Er ist ein absoluter Profi und hat uns mit seiner Expertise einen super Überblick verschafft.",
		rating: 5,
		time: "vor 11 Monaten"
	},
	{
		author: "fit&fair Gesundheitszentrum",
		text: "Wir sind absolut begeistert von der Arbeit dieses Bauunternehmens! Die Arbeit wurde professionell, termingerecht und mit viel Liebe zum Detail umgesetzt. Dabei wurde immer Freundlichkeit an den Tag gelegt.",
		rating: 5,
		time: "vor einem Jahr"
	},
	{
		author: "Colin J.",
		text: "Ich bin super zufrieden mit der Arbeit von Herr König! Er war sehr kompetent im Erstgespräch und hat mich klasse beraten! Die Arbeiten wurden pünktlich, sauber und auf den Punkt genau erledigt.",
		rating: 5,
		time: "vor einem Jahr"
	},
	{
		author: "Niklas N.",
		text: "Von der Kundenberatung über die Planung und Gestaltung bis zur tatsächlichen Umsetzung unseres Projektes, super professionelle und saubere Arbeit. Kann das Bauunternehmen König zu 100% weiterempfehlen!",
		rating: 5,
		time: "vor einem Jahr"
	},
	{
		author: "Markus L.",
		text: "Ich habe nun schon zwei Aufträge bei Herrn König ausführen lassen. Nach einer super Beratung wurden die Arbeiten immer pünktlich und professionell umgesetzt.",
		rating: 5,
		time: "vor 2 Jahren"
	},
	{
		author: "Johann U.",
		text: "Exzellente Planung und Umsetzung! Keine Mängel und äußerst zuverlässig, werde mich definitiv bei meinem nächsten Anliegen wieder hier melden!",
		rating: 5,
		time: "vor einem Jahr"
	},
	{
		author: "Cathleen W.",
		text: "Sehr gute Arbeit, tolles Ergebnis. Absolut empfehlenswert.",
		rating: 5,
		time: "vor 3 Monaten"
	}
];
function ProjectCard({ project }) {
	const finishedIndex = project.images.findIndex((image) => image.src === project.img);
	const [activeIndex, setActiveIndex] = useState(finishedIndex >= 0 ? finishedIndex : 0);
	const activeImage = project.images[activeIndex];
	const activeImageSrc = resolvePublicImage(activeImage.src);
	const hasMultipleImages = project.images.length > 1;
	const showPrevious = () => {
		setActiveIndex((current) => current === 0 ? project.images.length - 1 : current - 1);
	};
	const showNext = () => {
		setActiveIndex((current) => (current + 1) % project.images.length);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "group flex h-full min-h-[520px] flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm card-hover",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative h-64 flex-shrink-0 overflow-hidden bg-gray-100",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: activeImageSrc,
					alt: activeImage.alt,
					className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
					loading: "lazy",
					decoding: "async"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute top-4 left-4",
					children: /* @__PURE__ */ jsx("span", {
						className: "rounded-full bg-gold px-3 py-1 text-xs font-semibold text-black",
						children: project.type
					})
				}),
				hasMultipleImages && /* @__PURE__ */ jsxs(Fragment, { children: [
					/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: showPrevious,
						className: "absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg transition-colors hover:bg-gold focus:outline-none focus:ring-2 focus:ring-gold",
						"aria-label": `Vorheriges Bild von ${project.title}`,
						children: /* @__PURE__ */ jsx(ChevronLeft, { size: 20 })
					}),
					/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: showNext,
						className: "absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg transition-colors hover:bg-gold focus:outline-none focus:ring-2 focus:ring-gold",
						"aria-label": `Nächstes Bild von ${project.title}`,
						children: /* @__PURE__ */ jsx(ChevronRight, { size: 20 })
					}),
					/* @__PURE__ */ jsx("div", {
						className: "absolute right-4 bottom-4 flex gap-1.5",
						children: project.images.map((image, index) => /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setActiveIndex(index),
							className: `h-1.5 rounded-full shadow-sm transition-all ${activeIndex === index ? "w-5 bg-gold" : "w-1.5 bg-white/80"}`,
							"aria-label": `Bild ${index + 1} von ${project.title} anzeigen`
						}, image.src))
					})
				] })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-1 flex-col p-6",
			children: [
				/* @__PURE__ */ jsx("h3", {
					className: "mb-2 min-h-[3.25rem] text-lg font-bold leading-snug transition-colors duration-300 group-hover:text-gold",
					children: project.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mb-5 flex-1 text-sm leading-relaxed text-gray-500",
					children: project.desc
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-auto flex items-center gap-1.5 text-xs text-gray-400",
					children: [/* @__PURE__ */ jsx(MapPin, {
						size: 14,
						className: "text-gold"
					}), project.location]
				})
			]
		})]
	});
}
function Referenzen() {
	const [activeFilter, setActiveFilter] = useState("Alle");
	const filtered = activeFilter === "Alle" ? projects : projects.filter((p) => p.type === activeFilter);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SEO, {
			title: "Referenzen Leipzig – Bauprojekte & Kundenbewertungen | Bauunternehmen König",
			description: "Abgeschlossene Bauprojekte in Leipzig: Altbausanierung, Fassade & Innenausbau in Gohlis, Connewitz, Plagwitz. 5,0-Sterne-Bewertungen echter Kunden aus Leipzig.",
			keywords: "Bauunternehmen Leipzig Referenzen, Sanierung Referenzen Leipzig, Fassade Projekte Leipzig, Kundenbewertungen Bauunternehmen, Bauprojekte Leipzig",
			path: "/referenzen",
			jsonLd: {
				"@context": "https://schema.org",
				"@graph": [{
					"@type": "ItemList",
					name: "Referenzprojekte Bauunternehmen König Leipzig",
					itemListElement: projects.map((p, i) => ({
						"@type": "ListItem",
						position: i + 1,
						item: {
							"@type": "CreativeWork",
							name: p.title,
							description: p.desc,
							locationCreated: {
								"@type": "Place",
								name: p.location
							},
							image: `https://www.bauunternehmen-koenig.com${resolvePublicImage(p.img)}`
						}
					}))
				}, {
					"@type": "LocalBusiness",
					"@id": "https://www.bauunternehmen-koenig.com/#business",
					name: "Bauunternehmen König",
					aggregateRating: {
						"@type": "AggregateRating",
						ratingValue: "5.0",
						reviewCount: googleReviews.length,
						bestRating: "5",
						worstRating: "1"
					},
					review: googleReviews.map((r) => ({
						"@type": "Review",
						author: {
							"@type": "Person",
							name: r.author
						},
						reviewRating: {
							"@type": "Rating",
							ratingValue: r.rating,
							bestRating: "5"
						},
						reviewBody: r.text
					}))
				}]
			}
		}),
		/* @__PURE__ */ jsx("section", {
			className: "relative pt-40 sm:pt-48 md:pt-52 pb-16 sm:pb-20 bg-charcoal overflow-hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4 block",
						children: "Abgeschlossene Projekte"
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-900 text-white mb-6",
						children: [
							"Referenzen &",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "gold-text-gradient",
								children: "Bautagebuch Leipzig"
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-base sm:text-lg text-gray-400 max-w-2xl mx-auto",
						children: "Überzeugen Sie sich selbst: Ausgewählte Projekte aus Leipzig und Umgebung — von der Altbausanierung in Gohlis bis zum Fassadenprojekt in Connewitz."
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-padding bg-gray-50",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto",
				children: [
					/* @__PURE__ */ jsx(RevealSection, { children: /* @__PURE__ */ jsx("div", {
						className: "max-w-3xl mx-auto text-center mb-12",
						children: /* @__PURE__ */ jsxs("p", {
							className: "text-gray-500 leading-relaxed",
							children: [
								"Bauunternehmen König hat in Leipzig und Umgebung bereits über 100 Projekte erfolgreich abgeschlossen — von der kleinen Mauerwerkssanierung bis zur Komplettsanierung von Mehrfamilienhäusern. Hier finden Sie eine Auswahl ausgewählter Referenzprojekte. Jedes Projekt wurde von ",
								/* @__PURE__ */ jsx("strong", {
									className: "text-gray-700",
									children: "Maurer- und Betonbauermeister Tim König"
								}),
								" persönlich begleitet und in Meisterqualität ausgeführt."
							]
						})
					}) }),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-center justify-center gap-3 mb-12",
						children: [/* @__PURE__ */ jsx(Filter, {
							size: 18,
							className: "text-gray-400"
						}), filterOptions$1.map((option) => /* @__PURE__ */ jsx("button", {
							onClick: () => setActiveFilter(option),
							className: `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${activeFilter === option ? "bg-gold text-black shadow-md" : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"}`,
							children: option
						}, option))]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
						children: filtered.map((project, i) => /* @__PURE__ */ jsx(RevealSection, {
							delay: i * 100,
							className: "h-full",
							children: /* @__PURE__ */ jsx(ProjectCard, { project })
						}, project.title))
					})
				]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "section-padding bg-charcoal overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center",
				children: /* @__PURE__ */ jsxs(RevealSection, { children: [
					/* @__PURE__ */ jsx("span", {
						className: "inline-block px-3 py-1 bg-gold/10 border border-gold/20 text-gold font-medium rounded-full text-xs uppercase tracking-widest mb-4",
						children: "Kundenstimmen"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "font-heading text-3xl sm:text-4xl md:text-5xl font-800 tracking-tight text-white mb-4",
						children: ["Das sagen unsere ", /* @__PURE__ */ jsx("span", {
							className: "gold-text-gradient",
							children: "Bauherren"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-center gap-2 mb-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-white font-bold text-2xl mt-1",
							children: "5.0"
						}), /* @__PURE__ */ jsx("div", {
							className: "flex gap-1",
							children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, {
								size: 24,
								className: "fill-gold text-gold"
							}, i))
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-gray-400 text-sm",
						children: "Basierend auf echten Kundenbewertungen"
					})
				] })
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative overflow-hidden group",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" }),
					/* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" }),
					/* @__PURE__ */ jsx("div", {
						className: "animate-marquee hover:pause whitespace-nowrap py-3 md:py-4",
						children: [...googleReviews, ...googleReviews].map((review, i) => /* @__PURE__ */ jsx("div", {
							className: "inline-block mx-4 whitespace-normal align-top",
							children: /* @__PURE__ */ jsxs("div", {
								className: "w-[280px] xs:w-[320px] md:w-[400px] h-full bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden p-6 md:p-8 hover:border-gold/30 transition-colors duration-300",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between mb-6",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx("div", {
											className: "w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-lg font-heading flex-shrink-0",
											children: review.author.charAt(0)
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
											className: "text-white font-bold font-heading",
											children: review.author
										}), /* @__PURE__ */ jsx("span", {
											className: "text-gray-500 text-xs",
											children: review.time
										})] })]
									}), /* @__PURE__ */ jsx("div", {
										className: "flex gap-0.5",
										children: [...Array(review.rating)].map((_, idx) => /* @__PURE__ */ jsx(Star, {
											size: 14,
											className: "fill-gold text-gold"
										}, idx))
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "relative",
									children: [/* @__PURE__ */ jsx(Quote, {
										size: 32,
										className: "absolute -top-4 -left-2 text-gold/10 -z-10"
									}), /* @__PURE__ */ jsxs("p", {
										className: "text-gray-400 text-sm leading-relaxed relative z-10",
										children: [
											"\"",
											review.text,
											"\""
										]
									})]
								})]
							})
						}, i))
					})
				]
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "relative py-24 overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 gold-gradient opacity-95" }), /* @__PURE__ */ jsx("div", {
				className: "relative z-10 max-w-3xl mx-auto px-4 text-center",
				children: /* @__PURE__ */ jsxs(RevealSection, { children: [
					/* @__PURE__ */ jsx("span", {
						className: "font-bold uppercase tracking-[0.2em] text-black/60 text-sm mb-4 block",
						children: "Festpreis oder Regie"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-3xl sm:text-4xl md:text-5xl font-900 text-black mb-6 tracking-tight",
						children: "Bereit für den Baustart?"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-black/80 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed",
						children: "Kontaktieren Sie uns für eine kostenlose Objektbegehung vor Ort. Wir kalkulieren transparent und fair."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-col sm:flex-row items-center justify-center gap-4",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/kontakt",
							className: "inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-black text-white font-semibold rounded-xl hover:bg-charcoal transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-charcoal/20 text-base sm:text-lg text-center",
							children: [/* @__PURE__ */ jsx(Mail, {
								size: 20,
								className: "mr-2"
							}), "Kostenlose Beratung sichern"]
						})
					})
				] })
			})]
		})
	] });
}
//#endregion
//#region src/pages/UeberUns.jsx
var values = [
	{
		icon: Shield,
		title: "Qualität nach DIN",
		desc: "Jede Arbeit wird nach den aktuellen DIN-Normen und Höchststandards ausgeführt — keine Abkürzungen."
	},
	{
		icon: Heart,
		title: "Leidenschaft",
		desc: "Das Handwerk ist unsere Berufung. Diese Leidenschaft spiegelt sich in jedem Stein und jeder Naht wider."
	},
	{
		icon: Users,
		title: "Kundennähe",
		desc: "Ein fester Ansprechpartner für Ihr gesamtes Projekt — ehrlich, unkompliziert und auf Augenhöhe."
	},
	{
		icon: Award,
		title: "Meisterkompetenz",
		desc: "Als geprüfter Meisterbetrieb (HWK Leipzig) garantieren wir Ihnen höchste handwerkliche Qualifikation."
	}
];
function UeberUns() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SEO, {
			title: "Über uns – Tim König, Maurermeister aus Leipzig",
			description: "Lernen Sie Tim König kennen — Maurer- und Betonbauermeister (HWK Leipzig) und Gründer des Bauunternehmens König. Handwerkliche Präzision, Zuverlässigkeit und Leidenschaft für Qualität.",
			keywords: "Tim König Leipzig, Maurermeister Leipzig, Bauunternehmen König Inhaber, Meisterbetrieb Leipzig, HWK Leipzig Maurer",
			path: "/ueber-uns",
			jsonLd: {
				"@context": "https://schema.org",
				"@type": "Person",
				name: "Tim König",
				jobTitle: "Maurer- und Betonbauermeister",
				worksFor: {
					"@type": "HomeAndConstructionBusiness",
					name: "Bauunternehmen König",
					url: "https://www.bauunternehmen-koenig.com"
				},
				image: "https://www.bauunternehmen-koenig.com/images/tim-portrait.png",
				url: "https://www.bauunternehmen-koenig.com/ueber-uns",
				address: {
					"@type": "PostalAddress",
					addressLocality: "Leipzig",
					addressRegion: "Sachsen",
					addressCountry: "DE"
				}
			}
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "relative pt-40 sm:pt-48 md:pt-52 pb-16 sm:pb-20 bg-charcoal overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 opacity-20",
					children: /* @__PURE__ */ jsx("img", {
						src: "/images/tim-portrait.webp",
						alt: "",
						className: "w-full h-full object-cover opacity-10",
						fetchPriority: "high",
						decoding: "async"
					})
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4 block",
						children: "Über uns"
					}), /* @__PURE__ */ jsxs("h1", {
						className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-900 text-white mb-6 leading-tight max-w-[12ch] mx-auto sm:max-w-none",
						children: [
							"Die Person hinter",
							/* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "gold-text-gradient",
								children: "der Marke"
							})
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-padding bg-white",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center",
				children: [/* @__PURE__ */ jsx(RevealSection, { children: /* @__PURE__ */ jsx("div", {
					className: "rounded-2xl overflow-hidden shadow-2xl",
					children: /* @__PURE__ */ jsx("img", {
						src: "/images/tim-portrait.webp",
						alt: "Tim König — Maurer- und Betonbauermeister",
						className: "w-full h-[360px] sm:h-[500px] object-cover",
						loading: "lazy",
						decoding: "async"
					})
				}) }), /* @__PURE__ */ jsx(RevealSection, {
					delay: 200,
					children: /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4 block",
							children: "Maurer- und Betonbauermeister Leipzig"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "text-2xl sm:text-3xl md:text-4xl font-800 mb-6 leading-tight max-w-[18ch] sm:max-w-none",
							children: [
								"Bauen, Sanieren und",
								/* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
								" Gestalten mit Leidenschaft"
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-4 text-gray-500 leading-relaxed",
							children: [
								/* @__PURE__ */ jsxs("p", { children: [
									"Herzlich willkommen! Mein Name ist ",
									/* @__PURE__ */ jsx("strong", {
										className: "text-gray-700",
										children: "Tim König"
									}),
									". Als",
									" ",
									/* @__PURE__ */ jsx("strong", {
										className: "text-gray-700",
										children: "Maurer- und Betonbauermeister"
									}),
									" sowie angehender",
									" ",
									/* @__PURE__ */ jsx("strong", {
										className: "text-gray-700",
										children: "Geprüfter Betriebswirt (HwO)"
									}),
									" stehe ich für handwerkliche Präzision, Zuverlässigkeit und fundiertes Fachwissen. Seit nunmehr ",
									/* @__PURE__ */ jsx("strong", {
										className: "text-gray-700",
										children: "drei Jahren"
									}),
									" führe ich mit großem Stolz mein eigenes Bauunternehmen, um die Visionen und Wohnträume meiner Kunden Wirklichkeit werden zu lassen."
								] }),
								/* @__PURE__ */ jsxs("p", { children: [
									"Mit einem starken Netzwerk und in enger Zusammenarbeit mit hochqualifizierten Partnerfirmen haben wir uns auf ",
									/* @__PURE__ */ jsx("strong", {
										className: "text-gray-700",
										children: "umfassende Sanierung"
									}),
									" sowie ",
									/* @__PURE__ */ jsx("strong", {
										className: "text-gray-700",
										children: "professionelle Fassadenarbeiten"
									}),
									" spezialisiert — für optimalen Schutz, verbesserte Energieeffizienz und eine ansprechende Optik Ihres Zuhauses. Alles aus einer Hand."
								] }),
								/* @__PURE__ */ jsxs("p", { children: [
									"Unser Credo: ",
									/* @__PURE__ */ jsx("strong", {
										className: "text-gray-700",
										children: "Kein Projekt ist uns zu klein"
									}),
									", und jedes Vorhaben verdient unsere allterhöchste Aufmerksamkeit. Eine gute Partnerschaft beginnt mit einer ehrlichen Beratung — deshalb sind Erstberatung und Angebot für Sie immer ",
									/* @__PURE__ */ jsx("strong", {
										className: "text-gray-700",
										children: "kostenlos und unverbindlich"
									}),
									"."
								] })
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap gap-6",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "text-center",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-3xl font-900 gold-text-gradient",
										children: "3+"
									}), /* @__PURE__ */ jsx("div", {
										className: "text-sm text-gray-400 mt-1",
										children: "Jahre Betrieb"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "text-center",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-3xl font-900 gold-text-gradient",
										children: "Leipzig"
									}), /* @__PURE__ */ jsx("div", {
										className: "text-sm text-gray-400 mt-1",
										children: "Standort"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "text-center",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-3xl font-900 gold-text-gradient",
										children: "100%"
									}), /* @__PURE__ */ jsx("div", {
										className: "text-sm text-gray-400 mt-1",
										children: "Meisterqualität"
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 p-5 bg-gold/5 border border-gold/20 rounded-2xl space-y-1",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-gray-700 font-semibold",
									children: "🏆 Bauunternehmen König — Einzelunternehmen"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs text-gray-500",
									children: contactDetails.addressSingleLine
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "text-xs text-gray-500",
									children: [
										contactDetails.tradeRegistrationLabel,
										" · IdNr.: ",
										contactDetails.tradeRegistrationId
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs text-gray-400 mt-1",
									children: "Geprüfte Qualifikation · Ausbildungsberechtigung · Haftpflichtversichert"
								})
							]
						})
					] })
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-padding bg-gray-50",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto",
				children: [/* @__PURE__ */ jsx(RevealSection, { children: /* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Unsere Werte",
					title: "Worauf wir bauen",
					description: "Diese Grundsätze leiten uns bei jedem Projekt — vom ersten Gespräch bis zur Schlüsselübergabe."
				}) }), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8",
					children: values.map((v, i) => /* @__PURE__ */ jsx(RevealSection, {
						delay: i * 100,
						className: "h-full",
						children: /* @__PURE__ */ jsxs("div", {
							className: "text-center p-8 bg-white rounded-2xl border border-gray-100 card-hover h-full flex flex-col",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-5",
									children: /* @__PURE__ */ jsx(v.icon, {
										size: 24,
										className: "text-black"
									})
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-lg font-bold mb-3",
									children: v.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-gray-500 text-sm leading-relaxed",
									children: v.desc
								})
							]
						})
					}, v.title))
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "relative py-24 overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 gold-gradient opacity-95" }), /* @__PURE__ */ jsx("div", {
				className: "relative z-10 max-w-3xl mx-auto px-4 text-center",
				children: /* @__PURE__ */ jsxs(RevealSection, { children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-2xl sm:text-3xl md:text-4xl font-800 text-black mb-6",
						children: "Lernen Sie uns kennen"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-black/70 text-lg mb-8",
						children: "Vereinbaren Sie einen unverbindlichen Kennenlern-Termin. Wir freuen uns auf Ihr Projekt."
					}),
					/* @__PURE__ */ jsxs(Link, {
						to: "/kontakt",
						className: "btn-primary flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-black text-white font-semibold rounded-xl hover:bg-charcoal transition-all duration-300 hover:-translate-y-1 mx-auto",
						children: [/* @__PURE__ */ jsx(Mail, { size: 20 }), "Kostenlose Beratung sichern"]
					})
				] })
			})]
		})
	] });
}
//#endregion
//#region src/components/MapSafe.jsx
function MapSafe() {
	const [isLoaded, setIsLoaded] = useState(false);
	const handleLoadMap = () => {
		setIsLoaded(true);
	};
	if (isLoaded) return /* @__PURE__ */ jsx("iframe", {
		title: "Bauunternehmen König — Standort Leipzig",
		src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35438797045!2d12.237358326037966!3d51.34010055893394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6f818200f2c73%3A0x93fb48b39b4a4f7!2sLeipzig!5e0!3m2!1sde!2sde!4v1680000000000!5m2!1sde!2sde",
		width: "100%",
		height: "100%",
		style: { border: 0 },
		allowFullScreen: true,
		loading: "lazy",
		referrerPolicy: "no-referrer-when-downgrade",
		className: "absolute inset-0"
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "absolute inset-0 flex items-center justify-center overflow-hidden bg-gray-100 group",
		children: [/* @__PURE__ */ jsx("img", {
			src: "/images/map-placeholder.webp",
			alt: "Map Placeholder",
			className: "absolute inset-0 w-full h-full object-cover blur-[2px] opacity-60 group-hover:scale-105 transition-transform duration-700"
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 max-w-lg w-full mx-4 glass-card p-8 rounded-3xl text-center border-white/40 shadow-2xl",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gold/20",
					children: /* @__PURE__ */ jsx(Lock, {
						size: 32,
						className: "text-black"
					})
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "text-xl font-bold text-black mb-3",
					children: "Google Maps aktivieren?"
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "text-gray-600 text-sm mb-8 leading-relaxed",
					children: [
						"Um Ihre Privatsphäre zu schützen, haben wir das Laden von Google Maps unterbunden. Beim Aktivieren der Karte werden Ihre IP-Adresse und weitere Daten an Google übertragen. Weitere Informationen finden Sie in unserer ",
						/* @__PURE__ */ jsx("a", {
							href: "/datenschutz",
							className: "text-gold font-medium hover:underline",
							children: "Datenschutzerklärung"
						}),
						"."
					]
				}),
				/* @__PURE__ */ jsxs("button", {
					onClick: handleLoadMap,
					className: "btn-primary w-full group/btn",
					children: [/* @__PURE__ */ jsx(MapPin, {
						size: 18,
						className: "group-hover/btn:translate-y-[-2px] transition-transform"
					}), "Karte jetzt laden"]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-4 flex items-center justify-center gap-2 text-[10px] text-gray-400 uppercase tracking-widest font-semibold",
					children: [/* @__PURE__ */ jsx(ShieldCheck, {
						size: 12,
						className: "text-green-500"
					}), "DSGVO-konforme Einbindung"]
				})
			]
		})]
	});
}
//#endregion
//#region src/pages/Kontakt.jsx
var gewerke = [
	"Maurer- & Betonbau",
	"Sanierung & Instandsetzung",
	"Innenausbau & Trockenbau",
	"Fassaden- & Putzarbeiten",
	"Sonstiges"
];
function Kontakt() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		gewerk: "",
		ortsteil: "",
		zeitraum: "",
		nachricht: ""
	});
	const [status, setStatus] = useState("idle");
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("submitting");
		try {
			if ((await fetch(`https://formsubmit.co/ajax/${contactDetails.email}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json"
				},
				body: JSON.stringify({
					Name: formData.name,
					Email: formData.email,
					Telefon: formData.phone || "Nicht angegeben",
					Gewerk: formData.gewerk,
					Ortsteil: formData.ortsteil || "Nicht angegeben",
					Zeitraum: formData.zeitraum || "Nicht angegeben",
					Nachricht: formData.nachricht,
					_replyto: formData.email,
					_subject: `Neue Projektanfrage über Website: ${formData.name}`,
					_template: "box"
				})
			})).ok) {
				setStatus("success");
				setFormData({
					name: "",
					email: "",
					phone: "",
					gewerk: "",
					ortsteil: "",
					zeitraum: "",
					nachricht: ""
				});
				setTimeout(() => setStatus("idle"), 5e3);
			} else setStatus("error");
		} catch (error) {
			console.error(error);
			setStatus("error");
		}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SEO, {
			title: "Kontakt – Kostenlose Beratung & Angebot | Bauunternehmen König Leipzig",
			description: "Kontaktieren Sie Bauunternehmen König in Leipzig: Telefon 0179 684 98 63, E-Mail oder Formular. Kostenlose Erstberatung & Festpreisangebot innerhalb von 48 Stunden.",
			keywords: "Bauunternehmen Kontakt Leipzig, Maurer Leipzig anfragen, Bauunternehmen König Telefon, kostenlose Bauberatung Leipzig",
			path: "/kontakt",
			jsonLd: {
				"@context": "https://schema.org",
				"@type": "ContactPage",
				name: "Kontakt – Bauunternehmen König Leipzig",
				url: "https://www.bauunternehmen-koenig.com/kontakt",
				mainEntity: {
					"@type": "HomeAndConstructionBusiness",
					name: "Bauunternehmen König",
					telephone: contactDetails.phoneIntl,
					email: contactDetails.email,
					address: {
						"@type": "PostalAddress",
						streetAddress: contactDetails.addressLine1,
						postalCode: "04288",
						addressLocality: "Leipzig",
						addressRegion: "Sachsen",
						addressCountry: "DE"
					}
				}
			}
		}),
		/* @__PURE__ */ jsx("section", {
			className: "relative pt-40 sm:pt-48 md:pt-52 pb-16 sm:pb-20 bg-charcoal overflow-hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4 block",
						children: "Kostenlose Erstberatung"
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-900 text-white mb-6 leading-tight max-w-[12ch] mx-auto sm:max-w-none",
						children: [
							"Ihr Projekt",
							/* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "gold-text-gradient",
								children: "startet hier"
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-base sm:text-lg text-gray-400 max-w-2xl mx-auto",
						children: "Bauvorhaben in Leipzig geplant? Kontaktieren Sie Maurer- und Betonbauermeister Tim König — wir erstellen Ihnen ein kostenloses Festpreisangebot. Rückmeldung garantiert innerhalb von 24–48 Stunden."
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-padding bg-gray-50",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg:col-span-3",
					children: /* @__PURE__ */ jsx(RevealSection, { children: /* @__PURE__ */ jsxs("div", {
						className: "bg-white rounded-2xl overflow-hidden p-6 sm:p-8 md:p-10 shadow-sm border border-gray-100",
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "text-2xl font-bold mb-2",
								children: "Projektanfrage"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-gray-500 text-sm mb-8",
								children: "Beschreiben Sie uns Ihr Vorhaben. Wir melden uns umgehend bei Ihnen zurück."
							}),
							/* @__PURE__ */ jsxs("form", {
								onSubmit: handleSubmit,
								className: "space-y-5",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											htmlFor: "name",
											className: "block text-sm font-medium text-gray-700 mb-1.5",
											children: "Name *"
										}), /* @__PURE__ */ jsx("input", {
											type: "text",
											id: "name",
											name: "name",
											required: true,
											value: formData.name,
											onChange: handleChange,
											className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm",
											placeholder: "Ihr vollständiger Name"
										})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											htmlFor: "email",
											className: "block text-sm font-medium text-gray-700 mb-1.5",
											children: "E-Mail *"
										}), /* @__PURE__ */ jsx("input", {
											type: "email",
											id: "email",
											name: "email",
											required: true,
											value: formData.email,
											onChange: handleChange,
											className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm",
											placeholder: "ihre@email.de"
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											htmlFor: "phone",
											className: "block text-sm font-medium text-gray-700 mb-1.5",
											children: "Telefon"
										}), /* @__PURE__ */ jsx("input", {
											type: "tel",
											id: "phone",
											name: "phone",
											value: formData.phone,
											onChange: handleChange,
											className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm",
											placeholder: "Ihre Telefonnummer"
										})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											htmlFor: "gewerk",
											className: "block text-sm font-medium text-gray-700 mb-1.5",
											children: "Gewerk *"
										}), /* @__PURE__ */ jsxs("select", {
											id: "gewerk",
											name: "gewerk",
											required: true,
											value: formData.gewerk,
											onChange: handleChange,
											className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm appearance-none bg-white cursor-pointer",
											children: [/* @__PURE__ */ jsx("option", {
												value: "",
												children: "Bitte wählen..."
											}), gewerke.map((g) => /* @__PURE__ */ jsx("option", {
												value: g,
												children: g
											}, g))]
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											htmlFor: "ortsteil",
											className: "block text-sm font-medium text-gray-700 mb-1.5",
											children: "Ortsteil in Leipzig"
										}), /* @__PURE__ */ jsx("input", {
											type: "text",
											id: "ortsteil",
											name: "ortsteil",
											value: formData.ortsteil,
											onChange: handleChange,
											className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm",
											placeholder: "z.B. Gohlis, Südvorstadt..."
										})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											htmlFor: "zeitraum",
											className: "block text-sm font-medium text-gray-700 mb-1.5",
											children: "Gewünschter Zeitraum"
										}), /* @__PURE__ */ jsx("input", {
											type: "text",
											id: "zeitraum",
											name: "zeitraum",
											value: formData.zeitraum,
											onChange: handleChange,
											className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm",
											placeholder: "z.B. Ab Mai 2026"
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										htmlFor: "nachricht",
										className: "block text-sm font-medium text-gray-700 mb-1.5",
										children: "Ihre Nachricht *"
									}), /* @__PURE__ */ jsx("textarea", {
										id: "nachricht",
										name: "nachricht",
										required: true,
										rows: 5,
										value: formData.nachricht,
										onChange: handleChange,
										className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm resize-none",
										placeholder: "Beschreiben Sie Ihr Vorhaben..."
									})] }),
									/* @__PURE__ */ jsxs("p", {
										className: "text-xs leading-relaxed text-gray-400",
										children: [
											"Mit dem Absenden erklären Sie sich einverstanden, dass wir Ihre Angaben zur Bearbeitung der Anfrage verwenden. Hinweise finden Sie in der",
											" ",
											/* @__PURE__ */ jsx(Link, {
												to: "/datenschutz",
												className: "text-gold hover:underline",
												children: "Datenschutzerklärung"
											}),
											"."
										]
									}),
									/* @__PURE__ */ jsx("button", {
										type: "submit",
										disabled: status === "submitting" || status === "success",
										className: `btn-primary w-full justify-center text-base !py-3 sm:!py-4 transition-all duration-300 ${status === "submitting" ? "opacity-70 cursor-not-allowed" : ""} ${status === "success" ? "!bg-green-600 hover:!bg-green-700 border-green-600" : ""}`,
										children: status === "submitting" ? "Wird gesendet..." : status === "success" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(CheckCircle2, { size: 18 }), "Erfolgreich gesendet"] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Send, { size: 18 }), "Anfrage absenden"] })
									}),
									status === "error" && /* @__PURE__ */ jsx("p", {
										className: "text-red-500 text-sm mt-3 text-center",
										children: "Es gab ein Problem beim Senden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail."
									})
								]
							})
						]
					}) })
				}), /* @__PURE__ */ jsx("div", {
					className: "lg:col-span-2",
					children: /* @__PURE__ */ jsx(RevealSection, {
						delay: 200,
						children: /* @__PURE__ */ jsxs("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "bg-white rounded-2xl overflow-hidden p-6 sm:p-8 shadow-sm border border-gray-100",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "font-bold text-lg mb-6",
										children: "Direkter Kontakt"
									}), /* @__PURE__ */ jsxs("div", {
										className: "space-y-5",
										children: [
											/* @__PURE__ */ jsxs("a", {
												href: contactDetails.phoneHref,
												className: "flex items-start gap-4 group cursor-pointer",
												children: [/* @__PURE__ */ jsx("div", {
													className: "w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform",
													children: /* @__PURE__ */ jsx(Phone, {
														size: 20,
														className: "text-black"
													})
												}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
													className: "text-sm text-gray-400",
													children: "Telefon"
												}), /* @__PURE__ */ jsx("div", {
													className: "font-semibold group-hover:text-gold transition-colors",
													children: contactDetails.phoneDisplay
												})] })]
											}),
											/* @__PURE__ */ jsxs("a", {
												href: contactDetails.emailHref,
												className: "flex items-start gap-4 group cursor-pointer",
												children: [/* @__PURE__ */ jsx("div", {
													className: "w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform",
													children: /* @__PURE__ */ jsx(Mail, {
														size: 20,
														className: "text-black"
													})
												}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
													className: "text-sm text-gray-400",
													children: "E-Mail"
												}), /* @__PURE__ */ jsx("div", {
													className: "font-semibold group-hover:text-gold transition-colors text-sm break-all",
													children: contactDetails.email
												})] })]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-start gap-4",
												children: [/* @__PURE__ */ jsx("div", {
													className: "w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0",
													children: /* @__PURE__ */ jsx(MapPin, {
														size: 20,
														className: "text-black"
													})
												}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
													className: "text-sm text-gray-400",
													children: "Standort"
												}), /* @__PURE__ */ jsxs("div", {
													className: "font-semibold",
													children: [
														contactDetails.city,
														", ",
														contactDetails.region
													]
												})] })]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-start gap-4",
												children: [/* @__PURE__ */ jsx("div", {
													className: "w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0",
													children: /* @__PURE__ */ jsx(Clock, {
														size: 20,
														className: "text-black"
													})
												}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
													className: "text-sm text-gray-400",
													children: "Erreichbarkeit"
												}), /* @__PURE__ */ jsx("div", {
													className: "font-semibold",
													children: contactDetails.openingHoursDisplay
												})] })]
											})
										]
									})]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: contactDetails.whatsappHref,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "block bg-charcoal rounded-2xl overflow-hidden p-6 sm:p-8 text-center hover:bg-gray-800 transition-colors cursor-pointer",
									children: [
										/* @__PURE__ */ jsx(MessageCircle, {
											size: 32,
											className: "text-green-400 mx-auto mb-4"
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "font-bold text-white text-lg mb-2",
											children: "WhatsApp"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-gray-400 text-sm",
											children: "Der kurze Dienstweg — schreiben Sie uns direkt per WhatsApp."
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "bg-gold/10 rounded-2xl overflow-hidden p-6 sm:p-8 border border-gold/20 text-center",
									children: [
										/* @__PURE__ */ jsx(CheckCircle2, {
											size: 28,
											className: "text-gold mx-auto mb-4"
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "font-bold text-lg mb-2",
											children: "Unser Versprechen"
										}),
										/* @__PURE__ */ jsxs("p", {
											className: "text-gray-500 text-sm",
											children: [
												"Wir melden uns garantiert innerhalb von ",
												/* @__PURE__ */ jsx("strong", { children: "24–48 Stunden" }),
												" bei Ihnen."
											]
										})
									]
								})
							]
						})
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "h-[400px] md:h-[500px] bg-gray-200 relative",
			children: /* @__PURE__ */ jsx(MapSafe, {})
		})
	] });
}
//#endregion
//#region src/pages/Ratgeber.jsx
var articles = [
	{
		slug: "fassadensanierung-leipzig-kosten-foerderung",
		title: "Fassaden sanieren in Leipzig: Kosten & Förderungen 2026",
		category: "Sanierung",
		readTime: "6 Min.",
		img: "/images/ratgeber/fassadensanierung-leipzig-kosten-foerderung.svg",
		excerpt: "Wann eine Komplettsanierung sinnvoll ist, welche Förderungen es gibt und woran man erkennt, dass Putz und Fassade Probleme machen."
	},
	{
		slug: "risse-fassade-mauerwerk-leipzig",
		title: "Risse in Fassade & Mauerwerk richtig sanieren",
		category: "Materialkunde",
		readTime: "5 Min.",
		img: "/images/ratgeber/risse-fassade-mauerwerk-leipzig.svg",
		excerpt: "Setzungen oder Feuchtigkeit? Ursachen für Risse in Leipziger Altbauten erkennen und wann zur Sicherheit der Profi ran muss."
	},
	{
		slug: "trockenbau-altbauwohnungen-leipzig",
		title: "Trockenbau in Altbauwohnungen Leipzig",
		category: "Innenausbau",
		readTime: "6 Min.",
		img: "/images/ratgeber/trockenbau-altbauwohnungen-leipzig.svg",
		excerpt: "Schallschutz, Brandschutz und schneller Raumgewinn: Was man bei Leipziger Plattenbauten oder Gründerzeit-Häusern beachten muss."
	},
	{
		slug: "feuchtigkeit-schimmel-sanieren-leipzig",
		title: "Feuchtigkeit & Schimmel dauerhaft beheben",
		category: "Sanierung",
		readTime: "6 Min.",
		img: "/images/ratgeber/feuchtigkeit-schimmel-sanieren-leipzig.svg",
		excerpt: "Die 7 häufigsten Ursachen, warum einfach Putz drüberstreichen rein gar nichts bringt und welche echten Sanierungsmaßnahmen wirklich helfen."
	},
	{
		slug: "sanierungskosten-leipzig-2026",
		title: "Sanierungskosten Leipzig 2026: Ein Praxischeck",
		category: "Kosten",
		readTime: "7 Min.",
		img: "/images/ratgeber/sanierungskosten-leipzig-2026.svg",
		excerpt: "Realistische Preisspannen pro m² für kleinere bis mittlere Aufträge wie Fassadenputz, Trockenbau oder nachhaltige Rissverpressung."
	},
	{
		slug: "denkmalgeschuetzte-haeuser-sanieren-leipzig",
		title: "Denkmalgeschützte Häuser sanieren",
		category: "Baugenehmigung",
		readTime: "7 Min.",
		img: "/images/ratgeber/denkmalgeschuetzte-haeuser-sanieren-leipzig.svg",
		excerpt: "Denkmalsanierung in Leipzig: Was bei Fassade, Putz und Innenwänden genehmigt wird und wie der Umbau ohne teure Überraschungen gelingt."
	},
	{
		slug: "innenwaende-modernisieren-trockenbau-massivbau",
		title: "Innenwände modernisieren ohne Baustaub-Chaos",
		category: "Innenausbau",
		readTime: "5 Min.",
		img: "/images/ratgeber/innenwaende-modernisieren-trockenbau-massivbau.svg",
		excerpt: "Zeitaufwand, Kosten und der direkte Vergleich: Wann schlanker Trockenbau in der Wohnung die weitaus bessere Alternative zum Massivbau ist."
	},
	{
		slug: "betonreparatur-spachteln-statiker-leipzig",
		title: "Betonreparatur Leipzig: Spachteln oder Statiker?",
		category: "Materialkunde",
		readTime: "5 Min.",
		img: "/images/ratgeber/betonreparatur-spachteln-statiker-leipzig.svg",
		excerpt: "Risse im Beton an alten Treppen, Balkonen und Garagen beurteilen und typische Leipziger Schadstellen nachhaltig abdichten."
	},
	{
		slug: "energieeffiziente-fassadendaemmung-leipzig",
		title: "Energieeffiziente Fassadendämmung: Was bringt sie?",
		category: "Sanierung",
		readTime: "6 Min.",
		img: "/images/ratgeber/energieeffiziente-fassadendaemmung-leipzig.svg",
		excerpt: "Fassade dämmen in Leipzig: GEG-Vorgaben, was bei Altbauten überhaupt möglich ist und wie man Putz mit intelligenter Dämmung kombiniert."
	},
	{
		slug: "die-8-teuersten-fehler-sanierung-leipzig",
		title: "Die 8 teuersten Fehler bei der Sanierung",
		category: "Tipps",
		readTime: "8 Min.",
		img: "/images/ratgeber/die-8-teuersten-fehler-sanierung-leipzig.svg",
		excerpt: "Falscher Putz, fehlende Abnahmen, Förderungen verpasst. Wir zeigen, wie Sie diese Planungsdesaster beim Hausumbau von Anfang an vermeiden."
	},
	{
		slug: "keller-abdichten-feuchtigkeit-leipzig",
		title: "Keller abdichten in Leipzig: Innen oder außen?",
		category: "Sanierung",
		readTime: "7 Min.",
		img: "/images/ratgeber/keller-abdichten-feuchtigkeit-leipzig.svg",
		excerpt: "Feuchte Kellerwände, Salzausblühungen und muffige Räume richtig einordnen: Wann Innenabdichtung reicht und wann von außen freigelegt werden muss."
	},
	{
		slug: "wanddurchbruch-tragende-wand-leipzig",
		title: "Wanddurchbruch: Kosten, Statik & Ablauf",
		category: "Maurer",
		readTime: "7 Min.",
		img: "/images/ratgeber/wanddurchbruch-tragende-wand-leipzig.svg",
		excerpt: "Eine tragende Wand öffnen ohne Risiko: Statiker, Stahlträger, Staubschutz und realistische Kosten für Durchbrüche in Leipziger Wohnungen und Häusern."
	}
];
var filterOptions = [
	"Alle",
	"Sanierung",
	"Innenausbau",
	"Kosten",
	"Baugenehmigung",
	"Materialkunde",
	"Maurer",
	"Tipps"
];
function Ratgeber() {
	const [activeFilter, setActiveFilter] = useState("Alle");
	const filtered = activeFilter === "Alle" ? articles : articles.filter((a) => a.category === activeFilter);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SEO, {
			title: "Bau-Ratgeber Leipzig – Experten-Tipps zu Sanierung, Kosten & Förderung",
			description: "Fundierter Bau-Ratgeber aus Leipzig: Fassadensanierung, Trockenbau, Kellerabdichtung, Wanddurchbruch, Schimmelbeseitigung, Kosten & Förderungen. Meisterwissen aus der Praxis.",
			keywords: "Bauratgeber Leipzig, Sanierung Tipps, Baukosten Leipzig, Fassadensanierung Tipps, Trockenbau Ratgeber, Keller abdichten Leipzig, Wanddurchbruch Leipzig",
			path: "/ratgeber",
			jsonLd: {
				"@context": "https://schema.org",
				"@type": "Blog",
				name: "Bau-Ratgeber | Bauunternehmen König",
				description: "Expertenwissen rund ums Bauen, Sanieren und Renovieren aus Leipzig.",
				url: "https://www.bauunternehmen-koenig.com/ratgeber",
				publisher: {
					"@type": "Organization",
					name: "Bauunternehmen König",
					url: "https://www.bauunternehmen-koenig.com"
				},
				blogPost: articles.map((a) => ({
					"@type": "BlogPosting",
					headline: a.title,
					url: `https://www.bauunternehmen-koenig.com/ratgeber/${a.slug}`,
					image: `https://www.bauunternehmen-koenig.com${resolvePublicImage(a.img)}`,
					author: {
						"@type": "Person",
						name: "Tim König"
					}
				}))
			}
		}),
		/* @__PURE__ */ jsx("section", {
			className: "relative pt-40 sm:pt-48 md:pt-52 pb-16 sm:pb-20 bg-charcoal overflow-hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4 block",
						children: "Expertenwissen & Tipps"
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-900 text-white mb-6",
						children: ["Der Bau-", /* @__PURE__ */ jsx("span", {
							className: "gold-text-gradient",
							children: "Ratgeber"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-base sm:text-lg text-gray-400 max-w-2xl mx-auto",
						children: "Fundiertes Wissen rund ums Bauen, Sanieren und Renovieren aus Meisterhand. Informieren Sie sich über aktuelle Baustandards, Materialien und Fördermöglichkeiten."
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-padding bg-gray-50 min-h-[60vh]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto",
				children: [
					/* @__PURE__ */ jsx(RevealSection, { children: /* @__PURE__ */ jsx("div", {
						className: "max-w-3xl mx-auto text-center mb-12",
						children: /* @__PURE__ */ jsxs("p", {
							className: "text-gray-500 leading-relaxed",
							children: [
								"Willkommen im Ratgeber des ",
								/* @__PURE__ */ jsx("strong", {
									className: "text-gray-700",
									children: "Bauunternehmen König"
								}),
								". Die Themen sind nach echten Fragen aus Leipziger Bau- und Sanierungsprojekten sortiert: Was kostet es, woran erkenne ich ein Risiko und welcher nächste Schritt ist sinnvoll?"
							]
						})
					}) }),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-center justify-center gap-3 mb-12",
						children: [/* @__PURE__ */ jsx(Filter, {
							size: 18,
							className: "text-gray-400"
						}), filterOptions.map((option) => /* @__PURE__ */ jsx("button", {
							onClick: () => setActiveFilter(option),
							className: `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${activeFilter === option ? "bg-gold text-black shadow-md" : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"}`,
							children: option
						}, option))]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
						children: filtered.map((article, i) => /* @__PURE__ */ jsx(RevealSection, {
							delay: i * 100,
							children: /* @__PURE__ */ jsx(Link, {
								to: `/ratgeber/${article.slug}`,
								className: "block group h-full",
								children: /* @__PURE__ */ jsxs("div", {
									className: "bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover h-full flex flex-col",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "h-56 overflow-hidden relative flex-shrink-0",
										children: [/* @__PURE__ */ jsx("img", {
											src: resolvePublicImage(article.img),
											alt: article.title,
											className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700",
											loading: "lazy",
											decoding: "async"
										}), /* @__PURE__ */ jsx("div", {
											className: "absolute top-4 left-4",
											children: /* @__PURE__ */ jsx("span", {
												className: "text-xs font-semibold text-black bg-gold px-3 py-1 rounded-full",
												children: article.category
											})
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "p-6 flex flex-col flex-grow",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-3",
												children: [
													/* @__PURE__ */ jsxs("span", {
														className: "flex items-center gap-1.5",
														children: [/* @__PURE__ */ jsx(Clock, {
															size: 14,
															className: "text-gold"
														}), article.readTime]
													}),
													/* @__PURE__ */ jsxs("span", {
														className: "flex items-center gap-1.5",
														children: [/* @__PURE__ */ jsx(BookOpen, {
															size: 14,
															className: "text-gold"
														}), "Meister-Tipp"]
													}),
													/* @__PURE__ */ jsxs("span", {
														className: "flex items-center gap-1.5",
														children: [/* @__PURE__ */ jsx(MapPin, {
															size: 14,
															className: "text-gold"
														}), "Leipzig-Fokus"]
													})
												]
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "font-bold text-xl mb-3 group-hover:text-gold transition-colors duration-300",
												children: article.title
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-gray-500 text-sm leading-relaxed mb-6 flex-grow",
												children: article.excerpt
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2 text-gold font-semibold text-sm group/link mt-auto",
												children: ["Artikel lesen", /* @__PURE__ */ jsx(ArrowRight, {
													size: 16,
													className: "transition-transform group-hover/link:translate-x-1"
												})]
											})
										]
									})]
								})
							})
						}, article.slug))
					})
				]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "relative py-24 overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 gold-gradient opacity-95" }), /* @__PURE__ */ jsx("div", {
				className: "relative z-10 max-w-3xl mx-auto px-4 text-center",
				children: /* @__PURE__ */ jsxs(RevealSection, { children: [
					/* @__PURE__ */ jsx("span", {
						className: "font-bold uppercase tracking-[0.2em] text-black/60 text-sm mb-4 block",
						children: "Festpreis oder Regie"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-3xl sm:text-4xl md:text-5xl font-900 text-black mb-6 tracking-tight",
						children: "Bereit für den Baustart?"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-black/80 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed",
						children: "Kontaktieren Sie uns für eine kostenlose Objektbegehung vor Ort. Wir kalkulieren transparent und fair."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-col sm:flex-row items-center justify-center gap-4",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/kontakt",
							className: "inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-black text-white font-semibold rounded-xl hover:bg-charcoal transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-charcoal/20 text-base sm:text-lg text-center",
							children: [/* @__PURE__ */ jsx(Mail, {
								size: 20,
								className: "mr-2"
							}), "Kostenlose Beratung sichern"]
						})
					})
				] })
			})]
		})
	] });
}
//#endregion
//#region src/pages/RatgeberDetail.jsx
var articlesData = {
	"fassadensanierung-leipzig-kosten-foerderung": {
		title: "Fassaden sanieren in Leipzig: Kosten & Förderungen 2026",
		metaDescription: "Fassadensanierung in Leipzig 2026: Kosten pro m², BAFA-Förderung, Schichtaufbau & Putzsysteme. Praxisleitfaden vom Leipziger Meisterbetrieb mit Fördertipps.",
		category: "Sanierung",
		readTime: "6 Min.",
		date: "10. April 2026",
		dateISO: "2026-04-10",
		updated: "10. April 2026",
		updatedISO: "2026-04-10",
		author: "Tim König",
		img: "/images/ratgeber/fassadensanierung-leipzig-kosten-foerderung.svg",
		content: `
      <h2>Wann eine Fassadensanierung unumgänglich wird</h2>
      <p>Gerade in Leipzig prägen historische Putzfassaden und Altbauten das Stadtbild. Doch woran erkennt man, dass die Fassade nicht nur verschmutzt ist, sondern eine echte Sanierung braucht?</p>
      <p>Wenn Putz abplatzt, tiefe Risse sichtbar werden oder Algen massiv in die Dämmschicht eindringen, ist oft schnelles Handeln gefragt, um die Bausubstanz zu schützen.</p>
      
      <h3>Putzarbeiten Leipzig: Wann ist eine Komplettsanierung sinnvoll?</h3>
      <p>Oft reicht ein einfacher Neuanstrich nicht mehr aus. Ist der Altputz hohl, sandet stark ab oder weist netzartige Risse auf, muss er abgeschlagen und neu aufgebaut werden.</p>
      <p>Wir setzen hierbei auf einen Schichtaufbau inklusive Gewebeeinbettung zur Rissüberbrückung. Nur so ist eine dauerhafte Witterungsbeständigkeit über Jahrzehnte garantiert.</p>
      
      <h3>Fördermittel 2026 für Leipziger Bauherren</h3>
      <p>Wer seine Fassade saniert und dabei energetisch aufwertet (Dämmung), kann massive Förderungen abrufen.</p>
      <p>Über die <strong>BEG (Bundesförderung für effiziente Gebäude)</strong> gibt es vom BAFA bis zu 20% Zuschuss auf die Maßnahmen. Wichtig: Der Antrag muss zwingend vor Baubeginn gestellt werden.</p>

      <blockquote>
        <strong>Tipp vom Meister:</strong> Speziell in Leipzigs historischen Vierteln (Leipzig-Südvorstadt, Waldstraßenviertel) greifen oft Sonderregeln bei Straßenfassaden. Nutzen Sie unsere Erfahrung bei der Auswahl denkmalgerechter Putzsysteme.
      </blockquote>
    `
	},
	"risse-fassade-mauerwerk-leipzig": {
		title: "Risse in Fassade & Mauerwerk richtig sanieren",
		metaDescription: "Risse in Fassade und Mauerwerk in Leipzig richtig beurteilen: Haarrisse, Setz- & Treppenrisse erkennen, fachgerecht sanieren & Statik bewerten. Meister-Tipps.",
		category: "Materialkunde",
		readTime: "5 Min.",
		date: "02. April 2026",
		dateISO: "2026-04-02",
		updated: "02. April 2026",
		updatedISO: "2026-04-02",
		author: "Tim König",
		img: "/images/ratgeber/risse-fassade-mauerwerk-leipzig.svg",
		content: `
      <h2>Panikmache oder echtes Problem?</h2>
      <p>Ein Riss im heimischen Mauerwerk löst bei vielen Hausbesitzern in Leipzig sofort Panik aus. Doch nicht jeder Riss bedeutet den sofortigen Einsturz.</p>
      <p>Wir erklären Ihnen, welche Risse lediglich optische Mängel sind und wann der Profi zur Sicherung der Statik sofort ran muss.</p>
      
      <h3>Haarrisse vs. Setzrisse</h3>
      <p>Oberflächliche Haarrisse (Dicke unter 0,2 mm) im Putz sind oft produktionsbedingt oder durch Witterung entstanden und statisch meist harmlos.</p>
      <p>Handelt es sich jedoch um sogenannte <strong>Setzrisse oder Treppenrisse</strong>, die den Fugen des Ziegelmauerwerks folgen, ist die Statik beeinträchtigt. Ursache ist oft Trockenheit oder Bewegung im Fundament.</p>
      
      <h3>Kann man Risse selbst reparieren?</h3>
      <p>Einen kleinen Haarriss können Sie oft selbst mit Acryl ausspritzen und überstreichen.</p>
      <p>Sind die Risse jedoch tief oder wandern auf die Innenseite durch, muss ein Fachbetrieb ran. Wir wenden hier z.B. <strong>Spiralanker-Systeme</strong> an, um das Mauerwerk kraftschlüssig wieder zu verbinden.</p>

      <blockquote>
        <strong>Tipp:</strong> Ignorieren Sie tiefe Risse an der Wetterseite niemals! Eindringender Regen in Kombination mit Frost sprengt im Winter den Putz großflächig ab (Frostabsprengung).
      </blockquote>
    `
	},
	"trockenbau-altbauwohnungen-leipzig": {
		title: "Trockenbau in Altbauwohnungen Leipzig",
		metaDescription: "Trockenbau in Leipziger Altbau- & Gründerzeitwohnungen: Schallschutz, Brandschutz & schneller Raumgewinn ohne Baufeuchte. Praxis-Tipps vom Meister aus Leipzig.",
		category: "Innenausbau",
		readTime: "6 Min.",
		date: "25. März 2026",
		dateISO: "2026-03-25",
		updated: "25. März 2026",
		updatedISO: "2026-03-25",
		author: "Tim König",
		img: "/images/ratgeber/trockenbau-altbauwohnungen-leipzig.svg",
		content: `
      <h2>Mehr Raum und Komfort durch modernen Innenausbau</h2>
      <p>Die Sanierung alter Plattenbauten in Grünau oder klassischer Gründerzeithäuser im Leipziger Zentrum stellt Planer oft vor Herausforderungen.</p>
      <p>Der Trockenbau ist hier die absolute Wunderwaffe für schnelle, saubere und flexible Raumlösungen.</p>
      
      <h3>Vorteile des Trockenbaus im Altbau</h3>
      <p>Im Gegensatz zu gemauerten Wänden bringt Trockenbau kaum Zusatzgewicht auf die alten Holz- oder Betondecken.</p>
      <p>Zudem wird keine "Baufeuchte" durch Mörtel in die Räume getragen – die neuen Wände sind nach dem Verspachteln sofort bereit für Tapete oder Farbe.</p>
      
      <h3>Worauf man unbedingt achten muss: Schall- und Brandschutz</h3>
      <p>In Altbauten ziehen wir Wände daher oft als <strong>doppelt beplankte Ständerwerke</strong> hoch und füllen den Hohlraum komplett mit schwerer Akustik-Dämmwolle.</p>
      <p>So erreichen wir Schallschutzwerte, die massive Ziegelwände locker übertreffen und für echte Ruhe in der Wohnung sorgen.</p>

      <blockquote>
        <strong>Problem-Lösung für Leipzig:</strong> Alte Decken sind oft krumm und extrem hoch (> 3,00 m). Das fachgerechte Abhängen der Decke spart nicht nur massiv Heizkosten, sondern verbirgt auch alte Elektrik unsichtbar.
      </blockquote>
    `
	},
	"feuchtigkeit-schimmel-sanieren-leipzig": {
		title: "Feuchtigkeit & Schimmel dauerhaft und fachgerecht sanieren",
		metaDescription: "Schimmel & Feuchtigkeit in Leipziger Wohnungen dauerhaft beseitigen: die 7 häufigsten Ursachen und echte Sanierungsmaßnahmen mit Sanierputz vom Meisterbetrieb.",
		category: "Sanierung",
		readTime: "6 Min.",
		date: "18. März 2026",
		dateISO: "2026-03-18",
		updated: "18. März 2026",
		updatedISO: "2026-03-18",
		author: "Tim König",
		img: "/images/ratgeber/feuchtigkeit-schimmel-sanieren-leipzig.svg",
		content: `
      <h2>Warum drüberstreichen niemals hilft</h2>
      <p>Schwarze Ränder an den Ecken oder muffiger Geruch im Schlafzimmer: Schimmel ist ein echter Endgegner in vielen Leipziger Wohnungen.</p>
      <p>Wir zeigen Ihnen, warum herkömmliche Baumarkt-Mittel oft kläglich scheitern und das Problem meist nur oberflächlich verdecken.</p>
      
      <h3>Die 7 häufigsten Ursachen für Schimmel</h3>
      <ul>
        <li>Aufsteigende Feuchte aus dem Keller (kaputte Horizontalsperre)</li>
        <li>Defekte, undichte Regenrinnen an der Fassade</li>
        <li>Kondenswasserbildung an "Kältebrücken" (z.B. unisolierten Stahlträgern)</li>
        <li>Extreme Luftfeuchtigkeit kombiniert mit dicht schließenden Fenstern ohne Lüftungskonzept</li>
        <li>Möbel direkt an kalten Außenwänden</li>
        <li>Haarrisse im Außenputz (Schlagregen dringt ein)</li>
        <li>Wasserschäden, die nie professionell getrocknet wurden</li>
      </ul>
      
      <h3>Echte Sanierungsmaßnahmen (Mauer- & Betonarbeiten)</h3>
      <p>Oberflächliches Abledern reicht nicht aus, da die Schimmelwurzeln (Myzel) oft tief im Putz sitzen.</p>
      <p>Als Profis schlagen wir den betroffenen Putz großzügig ab. Danach wird die Wand alkalisch desinfiziert und mit speziellen <strong>Sanierputzen</strong> neu aufgebaut.</p>
      <p>Diese wirken feuchtigkeitsregulierend und sind von Natur aus pilzhemmend.</p>
    `
	},
	"sanierungskosten-leipzig-2026": {
		title: "Sanierungskosten Leipzig 2026: Ein Praxischeck",
		metaDescription: "Aktuelle Sanierungskosten Leipzig 2026: realistische Preise pro m² für Fassade, WDVS, Trockenbau, Q2-Spachtelung und Rissinjektion — transparent vom Meisterbetrieb.",
		category: "Kosten",
		readTime: "7 Min.",
		date: "10. März 2026",
		dateISO: "2026-03-10",
		updated: "10. März 2026",
		updatedISO: "2026-03-10",
		author: "Tim König",
		img: "/images/ratgeber/sanierungskosten-leipzig-2026.svg",
		content: `
      <h2>Transparente Baupreise für den Großraum Leipzig</h2>
      <p>Was kostet der Handwerker heute? Bevor ein Bauunternehmen beauftragt wird, ist die Budgetfrage die wichtigste.</p>
      <p>Hier sind aktuelle und realistische Preisspannen (Stand 2026) für typische Aufträge, die wir in Leipzig realisieren.</p>
      
      <h3>Fassadenputz & Sanierung</h3>
      <p>Für eine professionelle Fassadensanierung inkl. Gerüst, Putzabschlag und neuem Edelputz sollten Sie mit etwa <strong>85 € bis 115 € pro m²</strong> kalkulieren.</p>
      <p>Muss zusätzlich gedämmt werden (WDVS), steigen die Kosten auf ca. 140 € bis 180 € pro m² – abzüglich staatlicher Förderungen.</p>
      
      <h3>Trockenbau & Innenausbau</h3>
      <p>Eine einfache Ständerwand (doppelt beplankt, inkl. Dämmung & Spachteln Q2) liegt aktuell bei ca. <strong>65 € bis 85 € pro m²</strong>.</p>
      <p>Abgehängte Decken beginnen bei etwa 55 € pro m², je nach Komplexität und Deckenhöhe.</p>
      
      <h3>Rissinjektion & Betonreparatur</h3>
      <p>Da diese Arbeiten sehr individuell sind, wird hier oft nach Aufwand gerechnet.</p>
      <p>Eine klassische Rissverpressung startet bei ca. 180 € pro laufendem Meter, inklusive Material und meisterlicher Ausführung.</p>

      <blockquote>
        <strong>Wichtig für die Planung:</strong> Diese Preise sind Richtwerte. Jedes Gebäude in Leipzig hat seine Eigenheiten. Fordern Sie unser detailliertes Festpreisangebot an!
      </blockquote>
    `
	},
	"denkmalgeschuetzte-haeuser-sanieren-leipzig": {
		title: "Denkmalgeschützte Häuser sanieren",
		metaDescription: "Denkmalsanierung in Leipzig: Was das Denkmalamt erlaubt, welche Putze & Fenster zulässig sind und wie die Denkmal-AfA bis 90 % der Kosten steuerlich rettet.",
		category: "Baugenehmigung",
		readTime: "7 Min.",
		date: "02. März 2026",
		dateISO: "2026-03-02",
		updated: "02. März 2026",
		updatedISO: "2026-03-02",
		author: "Tim König",
		img: "/images/ratgeber/denkmalgeschuetzte-haeuser-sanieren-leipzig.svg",
		content: `
      <h2>Was erlaubt ist und was extrem teuer werden kann</h2>
      <p>Leipzig besitzt eines der größten geschlossenen Gründerzeitensembles Europas.</p>
      <p>Die Denkmalsanierung ist extrem reizvoll, verlangt aber tiefgehendes Wissen über historische Baustoffe und starke Nerven bei der Genehmigung.</p>
      
      <h3>Das strenge Regiment des Denkmalamts Leipzig</h3>
      <p>Jede Veränderung am Erscheinungsbild einer denkmalgeschützten Immobilie erfordert eine Vorab-Genehmigung.</p>
      <p>Ein häufiger Fehler: Der ungenehmigte Austausch historischer Fenster gegen Kunststoffmodelle. Die Folge ist oft ein sofortiger Baustopp und die Verpflichtung zum teuren Rückbau.</p>
      
      <h3>Putz und Fassade: Originalgetreue Wiederherstellung</h3>
      <p>Alte Stuckelemente dürfen niemals mit modernen, steifen Kunstharzputzen überzogen werden.</p>
      <p>Oft schreiben die Ämter mineralische Kalkziegelputze vor, um die historische Bausubstanz atmungsaktiv und gesund zu erhalten.</p>
      
      <h3>Hohe Rendite dank Denkmalschutz-AfA</h3>
      <p>Der staatliche Bonus für diesen Mehraufwand ist enorm: Durch die Sonder-AfA können Selbstnutzer über 10 Jahre hinweg 90% der reinen Sanierungskosten steuerlich geltend machen.</p>
      <p>Wir begleiten Sie beim korrekten Nachweis der Rechnungen bei den Ämtern für eine reibungslose Erstattung.</p>
    `
	},
	"innenwaende-modernisieren-trockenbau-massivbau": {
		title: "Innenwände modernisieren ohne Baustaub-Chaos",
		metaDescription: "Trockenbau vs. Massivbau im direkten Vergleich: Welche Methode passt für Innenwände in Leipziger Wohnungen? Zeit, Kosten & Sauberkeit im Praxistest.",
		category: "Innenausbau",
		readTime: "5 Min.",
		date: "25. Februar 2026",
		dateISO: "2026-02-25",
		updated: "25. Februar 2026",
		updatedISO: "2026-02-25",
		author: "Tim König",
		img: "/images/ratgeber/innenwaende-modernisieren-trockenbau-massivbau.svg",
		content: `
      <h2>Trockenbau vs. Massivbau: Der direkte Vergleich</h2>
      <p>Sie möchten aus einem großen Zimmer zwei Kinderzimmer machen oder Räume neu aufteilen?</p>
      <p>Die entscheidende Frage ist oft: Steine kleben oder schrauben? Wir vergleichen beide Methoden für den privaten Innenausbau.</p>
      
      <h3>Der klassische Massivbau (Porenbeton / Ytong)</h3>
      <p>Eine 11er Wand aus Porenbeton ist sehr robust. Der massive Nachteil: Sie bringen extrem viel Feuchtigkeit und Bau-Müllstaub in bewohnte Räume.</p>
      <p>Zudem muss die Wand oft Wochen austrocknen, bevor sie gestrichen oder tapeziert werden kann – ein No-Go bei schnellen Sanierungen.</p>
      
      <h3>Der Sieger für bewohnte Räume: Trockenbau</h3>
      <p>Trockenbau besticht durch absolute Geschwindigkeit und Sauberkeit. Die Platten werden trocken verschraubt und gespachtelt.</p>
      <p>Innerhalb von drei Tagen ist oft eine komplette neue Raumabteilung inklusive Tür-Zarge und bezugsfertiger Oberfläche erstellt.</p>

      <blockquote>
        <strong>Unser Fazit:</strong> Solang keine enormen statischen Lasten getragen werden müssen, empfehlen wir für den schnellen Umbau in Leipziger Wohnungen ausschließlich den Trockenbau!
      </blockquote>
    `
	},
	"betonreparatur-spachteln-statiker-leipzig": {
		title: "Betonreparatur Leipzig: Spachteln oder Statiker?",
		metaDescription: "Betonreparatur in Leipzig: Karbonatisierung, Rost im Stahl & fachgerechte Sanierung von Balkonen, Treppen und Stützen mit PCC-Mörtel vom Meisterbetrieb.",
		category: "Materialkunde",
		readTime: "5 Min.",
		date: "18. Februar 2026",
		dateISO: "2026-02-18",
		updated: "18. Februar 2026",
		updatedISO: "2026-02-18",
		author: "Tim König",
		img: "/images/ratgeber/betonreparatur-spachteln-statiker-leipzig.svg",
		content: `
      <h2>Wann kleine Abplatzer zur Gefahr werden</h2>
      <p>Offenfliegender, verrosteter Stahl an alten Kellertreppen, bröckelnde Balkonkanten oder Risse im Gerüstboden.</p>
      <p>Dies sind typische Schadbilder, die wir als Maurer- und Beton-Meisterbetrieb wöchentlich fachgerecht beheben.</p>
      
      <h3>Karbonatisierung: Der Endgegner des Betons</h3>
      <p>Beton schützt den inneren Stahl vor Rost. Sinkt der pH-Wert über die Jahrzehnte ab, beginnt der Stahl tief im Inneren zu korrodieren.</p>
      <p>Da Rost sein Volumen stark vergrößert, "sprengt" er den Beton von innen einfach ab. Das ist besonders bei älteren Balkonen kritisch.</p>
      
      <h3>Einfach nur Zement draufschmieren? Besser nicht.</h3>
      <p>Wer freiliegenden Stahl nur oberflächlich zuschmiert, betreibt Flickschusterei, die in kurzer Zeit wieder abfällt.</p>
      <p>Die fachgerechte Reparatur bei uns gliedert sich in drei saubere Arbeitsschritte.</p>
      <ul>
        <li>Vollständiges Freilegen und Entrosten des Stahls</li>
        <li>Auftragen eines speziellen mineralischen Korrosionsschutzes</li>
        <li>Reprofilierung der Kontur mit kunststoffmodifiziertem Reparaturmörtel (PCC)</li>
      </ul>

      <blockquote>
        <strong>Warnsignal:</strong> Sobald tragende Stützen oder Unterzüge tiefe, durchgehende Risse aufweisen, ziehen wir zur Sicherheit immer einen Statiker hinzu!
      </blockquote>
    `
	},
	"energieeffiziente-fassadendaemmung-leipzig": {
		title: "Energieeffiziente Fassadendämmung: Was bringt sie 2026?",
		metaDescription: "Fassadendämmung in Leipzig 2026: GEG-Pflicht ab 10 %, WDVS-Aufbau, bis zu 40 % Heizkosten sparen und BEG-Förderung bis 20 %. Meisterwissen klar erklärt.",
		category: "Sanierung",
		readTime: "6 Min.",
		date: "10. Februar 2026",
		dateISO: "2026-02-10",
		updated: "10. Februar 2026",
		updatedISO: "2026-02-10",
		author: "Tim König",
		img: "/images/ratgeber/energieeffiziente-fassadendaemmung-leipzig.svg",
		content: `
      <h2>GEG-Vorgaben und smarte Kombinationen</h2>
      <p>Wer seine Fassade in Leipzig neu verputzen muss, kommt am Gebäudeenergiegesetz (GEG) heute kaum noch vorbei.</p>
      <p>Wir erklären Ihnen, ab wann gedämmt werden MUSS und welche Systeme für Leipziger Altbauten wirklich sinnvoll sind.</p>
      
      <h3>Die 10-Prozent-Regel (GEG)</h3>
      <p>Wenn Sie planen, mehr als 10 Prozent der gesamten Fassadenfläche neu zu verputzen, greift gesetzlich die Pflicht zur energetischen Dämmung nach aktuellem Standard.</p>
      <p>Dies gilt jedoch nur, wenn der Altputz wirklich abgeschlagen wird. Wer nur "streicht" oder lokale Stellen ausbessert, umgeht dies oft noch rechtssicher.</p>
      
      <h3>WDVS: Der Standard für Effizienz</h3>
      <p>Auf die Wand werden moderne Dämmplatten geklebt und gedübelt. Darauf folgt eine Armierungsschicht und der finale wetterfeste Oberputz.</p>
      <p>Dies senkt Ihre Heizkosten je nach Alt-Zustand um bis zu 40% und sorgt für ein deutlich behaglicheres Raumklima.</p>
      
      <h3>KfW-Fördermittel intelligent kombinieren</h3>
      <p>Nutzen Sie die staatliche BEG-Förderung! Wenn Sie eine energetische Dämmung aufbringen lassen, bezuschusst der Staat aktuell bis zu 20 % der förderfähigen Kosten.</p>
      <p>Dazu zählen auch Gerüst-, Putz- und Malerarbeiten, die im Zuge der Dämmung anfallen. Wir helfen Ihnen, diese Mittel sicher abzurufen.</p>
    `
	},
	"die-8-teuersten-fehler-sanierung-leipzig": {
		title: "Die 8 teuersten Fehler bei der Sanierung in Leipzig",
		metaDescription: "Die 8 teuersten Fehler bei der Sanierung in Leipzig: verpasste Förderungen, Asbest-Fallen & fehlende Leistungsverzeichnisse — wie Sie Planungsdesaster vermeiden.",
		category: "Tipps",
		readTime: "8 Min.",
		date: "02. Februar 2026",
		dateISO: "2026-02-02",
		updated: "02. Februar 2026",
		updatedISO: "2026-02-02",
		author: "Tim König",
		img: "/images/ratgeber/die-8-teuersten-fehler-sanierung-leipzig.svg",
		content: `
      <h2>Planungsdesaster von Anfang an vermeiden</h2>
      <p>Sanieren ist eine Investition – doppelt zu sanieren hingegen ist ein finanzielles Desaster.</p>
      <p>Nach unzähligen geretteten Projekten haben wir hier die fatalsten Fehler gesammelt, die uns in der täglichen Praxis begegnen.</p>
      
      <h3>Nr. 1: Förderung NACH Baubeginn beantragen</h3>
      <p>KfW und BAFA kennen kein Erbarmen: Wer den Förderantrag erst stellt, wenn das Gerüst steht, verliert unwiderruflich sämtliche (oft zehntausende Euro) Zuschüsse.</p>
      
      <h3>Nr. 2: Bausubstanz & Gifte unterschätzen</h3>
      <p>Alte Leipziger Plattenbauten sind oft asbestbelastet. Das unkontrollierte Herausreißen durch Hobby-Handwerker ist extrem strafbar und krebserregend.</p>
      <p>Lassen Sie die Substanz im Zweifel immer vorab durch einen Profi prüfen.</p>
      
      <h3>Nr. 3: Fehlende Detailplanung</h3>
      <p>Aufträge ohne detailliertes Leistungsverzeichnis enden oft in endlosen Nachforderungen. Verlangen Sie von Ihrem Handwerker exakte Einheitspreise und klare Beschreibungen.</p>

      <blockquote>
        <strong>Bauen Sie auf Sicherheit:</strong> Das Bauunternehmen König koordiniert für Sie alle Gewerke aus einer Hand. So haben Sie nur einen Ansprechpartner und volle Planungssicherheit.
      </blockquote>
    `
	},
	"keller-abdichten-feuchtigkeit-leipzig": {
		title: "Keller abdichten in Leipzig: Innen oder außen sanieren?",
		metaDescription: "Keller abdichten in Leipzig: Ursachen feuchter Kellerwände erkennen, Innenabdichtung vs. Außenabdichtung vergleichen, Kostenfaktoren und Ablauf vom Meisterbetrieb.",
		category: "Sanierung",
		readTime: "7 Min.",
		date: "06. Mai 2026",
		dateISO: "2026-05-06",
		updated: "06. Mai 2026",
		updatedISO: "2026-05-06",
		author: "Tim König",
		img: "/images/ratgeber/keller-abdichten-feuchtigkeit-leipzig.svg",
		content: `
      <h2>Erst die Ursache klären, dann abdichten</h2>
      <p>Feuchte Keller sind in Leipzig kein seltenes Bild: ältere Ziegelkeller, fehlende Horizontalsperren, dichter gewordene Fenster und punktuelle Schäden an der Außenabdichtung treffen oft aufeinander.</p>
      <p>Der wichtigste Schritt ist deshalb nicht der schnelle Sanierputz, sondern die Diagnose: Kommt Wasser seitlich durch die Wand, steigt Feuchtigkeit aus dem Mauerwerk auf oder entsteht Kondenswasser an kalten Bauteilen?</p>

      <h3>Typische Warnsignale</h3>
      <ul>
        <li>Salzausblühungen und abplatzender Putz im Sockelbereich</li>
        <li>Muffiger Geruch, obwohl regelmäßig gelüftet wird</li>
        <li>Dunkle Ränder an Außenwänden oder Boden-Wand-Anschlüssen</li>
        <li>Feuchte Stellen nach Starkregen oder Schneeschmelze</li>
      </ul>

      <h2>Innenabdichtung oder Außenabdichtung?</h2>
      <p>Eine Außenabdichtung ist bauphysikalisch oft die sauberste Lösung, weil Wasser gar nicht erst in die Wand eindringt. Sie ist aber nur sinnvoll, wenn die Außenwand erreichbar ist und der Aushub sicher ausgeführt werden kann.</p>
      <p>Eine Innenabdichtung kann eine gute Lösung sein, wenn Nachbarbebauung, enge Grundstücke oder befestigte Flächen den Aushub unwirtschaftlich machen. Wichtig ist dann ein abgestimmter Aufbau aus Untergrundvorbereitung, Dichtungsschlämme, Sanierputz und kontrollierter Trocknung.</p>

      <blockquote>
        <strong>Praxis-Tipp:</strong> Wer nur den feuchten Putz erneuert, löst meist nicht das Problem. Die Wand sieht kurzfristig gut aus, aber Salze und Feuchtigkeit drücken später wieder durch.
      </blockquote>
    `
	},
	"wanddurchbruch-tragende-wand-leipzig": {
		title: "Wanddurchbruch in Leipzig: Kosten, Statik & Ablauf",
		metaDescription: "Wanddurchbruch in Leipzig planen: tragende Wand erkennen, Statiker, Stahlträger, Staubschutz, Genehmigung und realistische Kostenfaktoren vom Maurermeister erklärt.",
		category: "Maurer",
		readTime: "7 Min.",
		date: "06. Mai 2026",
		dateISO: "2026-05-06",
		updated: "06. Mai 2026",
		updatedISO: "2026-05-06",
		author: "Tim König",
		img: "/images/ratgeber/wanddurchbruch-tragende-wand-leipzig.svg",
		content: `
      <h2>Der Durchbruch beginnt nicht mit dem Vorschlaghammer</h2>
      <p>Ein Wanddurchbruch kann Räume heller, großzügiger und moderner machen. Sobald die Wand tragend sein könnte, entscheidet aber die Statik über den Ablauf: Lasten müssen sicher abgefangen und über einen passenden Stahlträger oder Betonsturz weitergeleitet werden.</p>
      <p>Gerade in Leipziger Altbauten mit gemischtem Mauerwerk, Holzbalkendecken und früheren Umbauten lohnt sich eine saubere Prüfung vor dem ersten Schnitt.</p>

      <h3>Woran erkennt man eine tragende Wand?</h3>
      <ul>
        <li>Sie steht über mehrere Geschosse an gleicher Stelle</li>
        <li>Sie ist deutlich stärker als leichte Trennwände</li>
        <li>Deckenbalken oder Stahlträger liegen darauf auf</li>
        <li>Sie befindet sich nahe Treppenhaus, Kamin oder Gebäudemitte</li>
      </ul>

      <h2>So läuft ein sicherer Wanddurchbruch ab</h2>
      <p>Vor Ort werden Wandaufbau, Leitungen, Deckenrichtung und Lastabtragung geprüft. Danach legt der Statiker fest, welcher Träger benötigt wird und wie die Wand während der Arbeiten abgestützt wird.</p>
      <p>Erst dann folgen Staubschutz, Abstützung, kontrollierter Rückbau, Einbau des Trägers, Vermörtelung und die saubere Vorbereitung für Putz, Trockenbau oder Malerarbeiten.</p>

      <blockquote>
        <strong>Wichtig:</strong> Bei Eigentumswohnungen sollte zusätzlich geprüft werden, ob Gemeinschaftseigentum betroffen ist und ob die Zustimmung der Eigentümergemeinschaft erforderlich ist.
      </blockquote>
    `
	},
	"default": {
		title: "Expertenwissen für Ihr Bauvorhaben",
		category: "Tipps",
		readTime: "3 Min.",
		date: "01. Januar 2026",
		author: "Tim König",
		img: "/images/ratgeber/die-8-teuersten-fehler-sanierung-leipzig.svg",
		content: `
      <h2>Wissenswertes rund ums Bauen in Leipzig</h2>
      <p>Bitte wählen Sie einen spezifischen Beitrag aus unserer Experten-Übersicht aus, um geballtes Fachwissen zu Bau und Sanierung abzurufen.</p>
      <p>Wenn Sie konkrete Fragen zu einem Projekt haben, kontaktieren Sie uns gerne – wir beraten Sie unverbindlich!</p>
    `
	}
};
var topicGuides = {
	"fassadensanierung-leipzig-kosten-foerderung": {
		value: "Sehr starkes lokales Thema, weil Eigentümer vor einer Fassadensanierung fast immer Kosten, Förderfähigkeit und den richtigen Schichtaufbau verstehen wollen.",
		bestFor: "Hausbesitzer mit rissigem, hohlem oder verwittertem Außenputz",
		summary: [
			"Eine belastbare Einschätzung beginnt mit Abklopfen, Feuchtemessung und Prüfung des Altputzes.",
			"Förderung wird relevant, sobald die Fassade energetisch verbessert wird und der Antrag vor Start steht.",
			"In Leipziger Gründerzeitlagen müssen Putzstruktur, Farbe und Detailausbildung oft besonders sauber abgestimmt werden."
		],
		check: [
			{
				label: "Sofort prüfen",
				text: "Hohler Putz, tiefe Risse, Algen und feuchte Sockelzonen."
			},
			{
				label: "Nicht vergessen",
				text: "Gerüst, Fensteranschlüsse, Sockelabdichtung und Regenrinnen gehören in die Kalkulation."
			},
			{
				label: "Nächster Schritt",
				text: "Fassade abschnittsweise prüfen lassen und Förderfähigkeit vor Angebot klären."
			}
		],
		steps: [
			"Bestandsaufnahme vor Ort",
			"Putzsystem und ggf. Dämmaufbau festlegen",
			"Förderung und Denkmalfragen klären",
			"Gerüst, Untergrund, Armierung und Oberputz ausführen"
		],
		costDrivers: [
			"Gerüsthöhe und Zugänglichkeit",
			"Anteil hohler Altputzflächen",
			"Sockel- und Anschlussdetails",
			"Dämmstoff, Putzsystem und Oberflächenstruktur"
		],
		faq: [
			{
				q: "Reicht ein neuer Anstrich bei einer alten Fassade?",
				a: "Nur wenn der Putz tragfähig, trocken und rissarm ist. Hohle oder sandende Flächen müssen vorher fachgerecht saniert werden."
			},
			{
				q: "Wann lohnt sich Förderung?",
				a: "Sobald die Gebäudehülle energetisch verbessert wird. Der Antrag muss vor Beauftragung und Baustart vorbereitet werden."
			},
			{
				q: "Muss bei jedem neuen Putz gedämmt werden?",
				a: "Nicht bei jeder kleinen Reparatur. Wird eine relevante Bauteilfläche erneuert, müssen die GEG-Anforderungen geprüft werden."
			}
		],
		related: [
			"energieeffiziente-fassadendaemmung-leipzig",
			"risse-fassade-mauerwerk-leipzig",
			"sanierungskosten-leipzig-2026"
		]
	},
	"risse-fassade-mauerwerk-leipzig": {
		value: "Hoher praktischer Nutzen, weil der Artikel Besitzern hilft, harmlose Putzrisse von echten Bauschäden zu unterscheiden.",
		bestFor: "Eigentümer, die Risse an Fassade, Innenwand oder Mauerwerk entdeckt haben",
		summary: [
			"Rissbreite, Verlauf und Tiefe sagen mehr aus als die reine Länge.",
			"Treppenrisse, wiederkehrende Risse und Feuchtigkeit sind Warnsignale.",
			"Eine dauerhafte Reparatur braucht Kraftschluss, Armierung oder konstruktive Sicherung statt nur Acryl."
		],
		check: [
			{
				label: "Sofort prüfen",
				text: "Risse fotografieren, markieren und nach Regen oder Frost erneut kontrollieren."
			},
			{
				label: "Nicht vergessen",
				text: "Rissursache klären, bevor neu verputzt oder gestrichen wird."
			},
			{
				label: "Nächster Schritt",
				text: "Bei durchgehenden oder wachsenden Rissen eine fachliche Begutachtung einplanen."
			}
		],
		steps: [
			"Rissbild aufnehmen",
			"Ursache und Feuchtebelastung prüfen",
			"Sanierungsverfahren auswählen",
			"Riss schließen, armieren und Oberfläche wiederherstellen"
		],
		costDrivers: [
			"Risstiefe und Wandaufbau",
			"Zugänglichkeit der Schadstelle",
			"Notwendige Spiralanker oder Injektion",
			"Nacharbeiten an Putz und Farbe"
		],
		faq: [
			{
				q: "Sind Haarrisse gefährlich?",
				a: "Meist nicht, wenn sie oberflächlich bleiben und sich nicht verändern. Sie sollten trotzdem beobachtet werden."
			},
			{
				q: "Wann braucht man einen Statiker?",
				a: "Bei breiten, wachsenden, treppenförmigen oder durchgehenden Rissen sowie bei Rissen an tragenden Bauteilen."
			},
			{
				q: "Warum kommen Risse nach dem Streichen wieder?",
				a: "Weil Farbe keine Bewegung aufnimmt. Ohne passende Risssanierung arbeitet die Ursache weiter."
			}
		],
		related: [
			"fassadensanierung-leipzig-kosten-foerderung",
			"betonreparatur-spachteln-statiker-leipzig",
			"die-8-teuersten-fehler-sanierung-leipzig"
		]
	},
	"trockenbau-altbauwohnungen-leipzig": {
		value: "Sehr passend für Leipzig, weil viele Umbauten in Altbauwohnungen schnelle Raumänderung, Schallschutz und geringe Baufeuchte brauchen.",
		bestFor: "Wohnungseigentümer, Vermieter und Familien mit Grundrissänderungen",
		summary: [
			"Trockenbau ist ideal, wenn Umbauten in bewohnten Wohnungen sauber und schnell laufen sollen.",
			"Schall- und Brandschutz entstehen durch Systemaufbau, Dämmung und Beplankung, nicht nur durch Plattenstärke.",
			"Krumme Altbaudecken und hohe Räume müssen vor dem Zuschnitt sauber vermessen werden."
		],
		check: [
			{
				label: "Sofort prüfen",
				text: "Deckenhöhe, Bodenaufbau, Leitungen und gewünschte Türposition."
			},
			{
				label: "Nicht vergessen",
				text: "Q-Stufe der Oberfläche, Schallschutzdämmung und Anschlüsse an krumme Wände."
			},
			{
				label: "Nächster Schritt",
				text: "Grundriss skizzieren und gewünschte Nutzung pro Raum festlegen."
			}
		],
		steps: [
			"Aufmaß und Leitungsprüfung",
			"Ständerwerk und Dämmung planen",
			"Beplankung, Türen und Anschlüsse ausführen",
			"Spachtelqualität und Oberfläche herstellen"
		],
		costDrivers: [
			"Wandhöhe und Raumzuschnitt",
			"Einfach oder doppelt beplankt",
			"Schall- und Brandschutzanforderung",
			"Oberflächenqualität Q2 bis Q4"
		],
		faq: [
			{
				q: "Ist Trockenbau schlechter als eine gemauerte Wand?",
				a: "Nein. Richtig aufgebaut erreicht Trockenbau sehr gute Schallwerte und ist für viele Innenräume die bessere Lösung."
			},
			{
				q: "Kann man schwere Regale befestigen?",
				a: "Ja, wenn Verstärkungen oder passende Dübel von Anfang an eingeplant werden."
			},
			{
				q: "Wie lange dauert eine neue Trockenbauwand?",
				a: "Kleine Raumteilungen sind oft in wenigen Tagen inklusive Spachtelung umsetzbar."
			}
		],
		related: [
			"innenwaende-modernisieren-trockenbau-massivbau",
			"sanierungskosten-leipzig-2026",
			"die-8-teuersten-fehler-sanierung-leipzig"
		]
	},
	"feuchtigkeit-schimmel-sanieren-leipzig": {
		value: "Starkes Vertrauens-Thema, weil es Ängste reduziert und zeigt, dass Bauunternehmen König Ursachen statt nur Oberflächen behandelt.",
		bestFor: "Bewohner und Eigentümer mit muffigen Räumen, feuchten Ecken oder wiederkehrendem Schimmel",
		summary: [
			"Schimmel ist ein Symptom; entscheidend ist die Feuchtequelle.",
			"Sanierputz hilft nur, wenn Untergrund, Salze und Trocknung berücksichtigt werden.",
			"Lüften allein löst keine undichte Fassade, keine defekte Abdichtung und keine Wärmebrücke."
		],
		check: [
			{
				label: "Sofort prüfen",
				text: "Außenwand, Fensteranschlüsse, Sockelzone, Keller und Regenentwässerung."
			},
			{
				label: "Nicht vergessen",
				text: "Nach Wasserschäden braucht es Trocknung und Feuchtemessung, nicht nur neue Farbe."
			},
			{
				label: "Nächster Schritt",
				text: "Schadstelle dokumentieren und Ursache vor der Oberflächensanierung klären."
			}
		],
		steps: [
			"Feuchtequelle eingrenzen",
			"Befall und Putzschäden entfernen",
			"Untergrund behandeln und trocknen",
			"Geeigneten Putzaufbau und Oberfläche herstellen"
		],
		costDrivers: [
			"Größe der Schadfläche",
			"Tiefe der Putzdurchfeuchtung",
			"Notwendige Trocknung",
			"Außenabdichtung oder Anschlussreparaturen"
		],
		faq: [
			{
				q: "Kann man Schimmel einfach überstreichen?",
				a: "Nein. Das verdeckt die Oberfläche, beseitigt aber weder Feuchte noch Myzel im Putz."
			},
			{
				q: "Wann ist Sanierputz sinnvoll?",
				a: "Wenn der Untergrund vorbereitet ist und die Feuchteursache kontrolliert wird. Er ist kein Ersatz für Abdichtung."
			},
			{
				q: "Wer ist zuständig, Handwerker oder Gutachter?",
				a: "Bei unklarer Ursache kann zuerst eine fachliche Sichtprüfung helfen; bei Streitfällen ist ein unabhängiger Gutachter sinnvoll."
			}
		],
		related: [
			"keller-abdichten-feuchtigkeit-leipzig",
			"fassadensanierung-leipzig-kosten-foerderung",
			"die-8-teuersten-fehler-sanierung-leipzig"
		]
	},
	"sanierungskosten-leipzig-2026": {
		value: "Sehr hilfreich, weil transparente Kosten Orientierung geben und früh zeigen, welche Leistungen wirklich ins Budget gehören.",
		bestFor: "Bauherren, die ein realistisches Erstbudget für Leipzig brauchen",
		summary: [
			"Quadratmeterpreise sind nur ein Startpunkt; Details entscheiden über den echten Endpreis.",
			"Ein gutes Angebot trennt Material, Arbeitszeit, Nebenleistungen und Unvorhergesehenes klar.",
			"Vor-Ort-Prüfung verhindert, dass wichtige Leistungen später als Nachtrag auftauchen."
		],
		check: [
			{
				label: "Sofort prüfen",
				text: "Fläche, Zustand, Zugänglichkeit und gewünschter Qualitätsstandard."
			},
			{
				label: "Nicht vergessen",
				text: "Gerüst, Entsorgung, Schutzmaßnahmen und Nebenarbeiten gehören ins Budget."
			},
			{
				label: "Nächster Schritt",
				text: "Leistungsumfang schriftlich klären und vergleichbare Angebote einholen."
			}
		],
		steps: [
			"Projektumfang definieren",
			"Mengen aufnehmen",
			"Qualitätsstandard festlegen",
			"Festpreis oder Regie sauber vereinbaren"
		],
		costDrivers: [
			"Untergrundzustand",
			"Baustellenzugang und Schutz",
			"Materialsystem",
			"Termin- und Trocknungszeiten"
		],
		faq: [
			{
				q: "Warum unterscheiden sich Angebote so stark?",
				a: "Oft werden Nebenleistungen, Vorarbeiten oder Qualitätsstufen unterschiedlich berücksichtigt."
			},
			{
				q: "Ist ein Festpreis immer besser?",
				a: "Bei klarer Leistung ja. Bei unbekannter Substanz kann eine transparente Regiephase fairer sein."
			},
			{
				q: "Wie vermeide ich Nachträge?",
				a: "Durch genaue Bestandsaufnahme, klare Mengen und ein verständliches Leistungsverzeichnis."
			}
		],
		related: [
			"die-8-teuersten-fehler-sanierung-leipzig",
			"fassadensanierung-leipzig-kosten-foerderung",
			"wanddurchbruch-tragende-wand-leipzig"
		]
	},
	"denkmalgeschuetzte-haeuser-sanieren-leipzig": {
		value: "Gutes Leipziger Autoritätsthema, weil Denkmalschutz lokal stark geprägt ist und Eigentümer früh praktische Orientierung brauchen.",
		bestFor: "Eigentümer von Gründerzeit- und Altbauobjekten mit geschützter Substanz",
		summary: [
			"Vor sichtbaren Änderungen sollte die Abstimmung mit dem Denkmalamt erfolgen.",
			"Mineralische, diffusionsoffene Baustoffe sind bei historischer Substanz oft die bessere Wahl.",
			"Saubere Dokumentation hilft bei Genehmigung, Ausführung und steuerlichen Nachweisen."
		],
		check: [
			{
				label: "Sofort prüfen",
				text: "Denkmalstatus, Erhaltungssatzung und vorhandene historische Details."
			},
			{
				label: "Nicht vergessen",
				text: "Fenster, Stuck, Putzstruktur und Farbton können genehmigungsrelevant sein."
			},
			{
				label: "Nächster Schritt",
				text: "Vor Angebot klären, welche Bauteile wirklich verändert werden dürfen."
			}
		],
		steps: [
			"Denkmalstatus prüfen",
			"Bestand fotografisch dokumentieren",
			"Materialkonzept abstimmen",
			"Ausführung und Nachweise sauber sammeln"
		],
		costDrivers: [
			"Detailgrad der Fassade",
			"Handwerkliche Wiederherstellung",
			"Genehmigungsauflagen",
			"Spezialmaterialien und Musterflächen"
		],
		faq: [
			{
				q: "Darf ich denkmalgeschützte Fenster einfach tauschen?",
				a: "In der Regel nicht ohne Abstimmung. Häufig sind Erhalt, Reparatur oder nachgebildete Lösungen gefordert."
			},
			{
				q: "Warum sind moderne Kunstharzputze problematisch?",
				a: "Sie können historische, feuchteempfindliche Substanz einsperren und Schäden verschärfen."
			},
			{
				q: "Wann sollte das Denkmalamt eingebunden werden?",
				a: "Vor sichtbaren Änderungen und idealerweise vor finaler Angebotskalkulation."
			}
		],
		related: [
			"fassadensanierung-leipzig-kosten-foerderung",
			"bauantrag-leipzig",
			"die-8-teuersten-fehler-sanierung-leipzig"
		]
	},
	"innenwaende-modernisieren-trockenbau-massivbau": {
		value: "Sinnvoll, weil es eine konkrete Bauherrenentscheidung erklärt und typische Innenausbau-Fragen direkt beantwortet.",
		bestFor: "Wohnungen, Praxen und Büros, die Räume neu aufteilen möchten",
		summary: [
			"Trockenbau ist schnell, sauber und belastet alte Decken weniger.",
			"Massivbau kann sinnvoll sein, wenn Robustheit, Feuchtebeständigkeit oder Schallschutz anders geplant werden müssen.",
			"Die beste Lösung hängt von Nutzung, Lasten, Oberfläche und Zeitplan ab."
		],
		check: [
			{
				label: "Sofort prüfen",
				text: "Nutzung, Türposition, gewünschte Lasten und Schallschutz."
			},
			{
				label: "Nicht vergessen",
				text: "Steckdosen, Leitungen und spätere Befestigungen vorab einplanen."
			},
			{
				label: "Nächster Schritt",
				text: "Grundrissvariante mit Maßen erstellen und Wandaufbau passend wählen."
			}
		],
		steps: [
			"Nutzung klären",
			"Wandaufbau vergleichen",
			"Leitungen und Türen planen",
			"Oberfläche und Abnahmequalität festlegen"
		],
		costDrivers: [
			"Wandlänge und Höhe",
			"Türöffnungen",
			"Schallschutzdämmung",
			"Spachtelqualität und Malervorbereitung"
		],
		faq: [
			{
				q: "Ist Trockenbau für Mietwohnungen geeignet?",
				a: "Ja, wenn Rückbau, Schallschutz und Befestigungen mitgedacht werden."
			},
			{
				q: "Wann ist Massivbau besser?",
				a: "Bei sehr hoher mechanischer Belastung, bestimmten Feuchtebereichen oder wenn es konstruktiv gefordert ist."
			},
			{
				q: "Wie bleibt die Baustelle sauber?",
				a: "Durch Staubschutz, Zuschnittplanung und tägliches Aufräumen. Trockenbau bringt deutlich weniger Baufeuchte ein."
			}
		],
		related: [
			"trockenbau-altbauwohnungen-leipzig",
			"sanierungskosten-leipzig-2026",
			"wanddurchbruch-tragende-wand-leipzig"
		]
	},
	"betonreparatur-spachteln-statiker-leipzig": {
		value: "Nischig, aber wertvoll: Beton- und Treppenschäden sind konkrete Problemfälle mit hoher Beratungsnotwendigkeit.",
		bestFor: "Balkone, Treppen, Garagen, Stützen und Kellerbereiche mit Betonabplatzungen",
		summary: [
			"Freiliegender Stahl ist mehr als ein optischer Mangel.",
			"PCC-Mörtel, Korrosionsschutz und Untergrundvorbereitung müssen zusammenpassen.",
			"Tragende Bauteile sollten bei tiefen Rissen oder Verformungen statisch bewertet werden."
		],
		check: [
			{
				label: "Sofort prüfen",
				text: "Roststellen, Hohlklang, Abplatzungen und Wasserbelastung."
			},
			{
				label: "Nicht vergessen",
				text: "Ursache der Korrosion beseitigen, sonst kommt der Schaden zurück."
			},
			{
				label: "Nächster Schritt",
				text: "Schadstelle öffnen lassen und Sanierungstiefe festlegen."
			}
		],
		steps: [
			"Schadstelle freilegen",
			"Bewehrung entrosten und schützen",
			"Kontur mit Reparaturmörtel aufbauen",
			"Oberfläche schützen und Wasserführung prüfen"
		],
		costDrivers: [
			"Tiefe der Abplatzung",
			"Anteil freiliegender Bewehrung",
			"Arbeitsgerüst oder Zugang",
			"Oberflächenschutz und Abdichtung"
		],
		faq: [
			{
				q: "Kann man Beton einfach überspachteln?",
				a: "Nur bei oberflächlichen Schäden. Freiliegender Stahl braucht Entrostung und Korrosionsschutz."
			},
			{
				q: "Wann ist ein Statiker Pflicht?",
				a: "Bei tragenden Bauteilen, starken Rissen, Verformungen oder großflächiger Bewehrungskorrosion."
			},
			{
				q: "Wie lange hält eine Betonreparatur?",
				a: "Dauerhaft nur, wenn Wasserführung, Korrosionsschutz und Reparaturmörtel fachgerecht abgestimmt sind."
			}
		],
		related: [
			"risse-fassade-mauerwerk-leipzig",
			"wanddurchbruch-tragende-wand-leipzig",
			"sanierungskosten-leipzig-2026"
		]
	},
	"energieeffiziente-fassadendaemmung-leipzig": {
		value: "Starkes Beratungsthema, weil GEG, Förderung, Heizkosten und Fassadenaufbau zusammen gedacht werden müssen.",
		bestFor: "Eigentümer, die Fassade, Dämmung und Energieplanung verbinden möchten",
		summary: [
			"Eine Fassadendämmung lohnt sich besonders, wenn ohnehin Putz, Gerüst und Anschlüsse erneuert werden.",
			"GEG und Förderung sollten vor Angebot und Baubeginn geprüft werden.",
			"Bei Altbauten entscheidet der passende Systemaufbau über Dauerhaftigkeit und Optik."
		],
		check: [
			{
				label: "Sofort prüfen",
				text: "Flächenanteil, Wandaufbau, Feuchte, Sockelzone und Dachüberstände."
			},
			{
				label: "Nicht vergessen",
				text: "Fensterbänke, Laibungen, Fallrohre und Anschlüsse verändern sich durch Dämmstärke."
			},
			{
				label: "Nächster Schritt",
				text: "Energieberater und Fachbetrieb früh zusammenbringen."
			}
		],
		steps: [
			"Gebäudehülle bewerten",
			"Dämmstärke und System wählen",
			"Förderung vor Start sichern",
			"Anschlüsse, Armierung und Oberputz ausführen"
		],
		costDrivers: [
			"Dämmstoff und Stärke",
			"Anschlussdetails",
			"Gerüst und Arbeitshöhe",
			"Sockelabdichtung und Putzstruktur"
		],
		faq: [
			{
				q: "Bringt Fassadendämmung immer etwas?",
				a: "Bei ungedämmten Außenwänden meist ja, aber Wirtschaftlichkeit und Bauphysik hängen vom Gebäude ab."
			},
			{
				q: "Was bedeutet die 10-Prozent-Regel?",
				a: "Bei größeren Änderungen an einer Bauteilgruppe müssen energetische Mindestanforderungen geprüft werden."
			},
			{
				q: "Kann Förderung mit normalen Putzarbeiten kombiniert werden?",
				a: "Begleitende Arbeiten können förderfähig sein, wenn sie Teil einer geförderten energetischen Maßnahme sind."
			}
		],
		related: [
			"fassadensanierung-leipzig-kosten-foerderung",
			"sanierungskosten-leipzig-2026",
			"denkmalgeschuetzte-haeuser-sanieren-leipzig"
		]
	},
	"die-8-teuersten-fehler-sanierung-leipzig": {
		value: "Sehr gutes Beratungsthema, weil es Risiken vor dem Auftrag erklärt und Vertrauen durch ehrliche Warnungen schafft.",
		bestFor: "Bauherren vor Kauf, Umbau oder größerer Sanierung",
		summary: [
			"Die teuersten Fehler entstehen fast immer vor Baustart.",
			"Unklare Leistungsbeschreibungen führen zu Streit, Nachträgen und Verzögerungen.",
			"Förderung, Schadstoffe und Genehmigungen müssen früh geprüft werden."
		],
		check: [
			{
				label: "Sofort prüfen",
				text: "Bausubstanz, Förderfristen, Genehmigungspflichten und Schadstoffverdacht."
			},
			{
				label: "Nicht vergessen",
				text: "Ein gutes Angebot beschreibt Mengen, Materialien und Nebenleistungen verständlich."
			},
			{
				label: "Nächster Schritt",
				text: "Vor Baubeginn eine kurze Risiko- und Ablaufprüfung machen lassen."
			}
		],
		steps: [
			"Projektziel festlegen",
			"Risiken prüfen",
			"Leistungsverzeichnis sauber aufbauen",
			"Zeitplan, Schutz und Abnahme klären"
		],
		costDrivers: [
			"Unbekannte Substanz",
			"Nachträge durch unklare Leistungen",
			"Förderverlust durch zu frühen Start",
			"Stillstand durch fehlende Genehmigungen"
		],
		faq: [
			{
				q: "Was ist der häufigste Sanierungsfehler?",
				a: "Zu früh zu beauftragen, bevor Förderfähigkeit, Substanz und Leistungsumfang geklärt sind."
			},
			{
				q: "Warum sind billige Angebote riskant?",
				a: "Oft fehlen Nebenleistungen, Schutzmaßnahmen oder Qualitätsstufen, die später nachberechnet werden."
			},
			{
				q: "Wie erkenne ich ein gutes Angebot?",
				a: "Es ist verständlich, vollständig und nennt Materialien, Mengen, Vorarbeiten und klare Ausschlüsse."
			}
		],
		related: [
			"sanierungskosten-leipzig-2026",
			"feuchtigkeit-schimmel-sanieren-leipzig",
			"bauantrag-leipzig"
		]
	},
	"keller-abdichten-feuchtigkeit-leipzig": {
		value: "Sehr hohes lokales Praxisthema, weil feuchte Keller ein akutes Problem sind und fachliche Diagnose echten Nutzen liefert.",
		bestFor: "Altbaukeller, Souterrainräume und Häuser mit feuchten Sockelzonen",
		summary: [
			"Innenabdichtung und Außenabdichtung lösen unterschiedliche Situationen.",
			"Salze, Putzschäden und Feuchtequelle müssen gemeinsam betrachtet werden.",
			"Nach Starkregen auftretende Feuchte ist ein wichtiger Hinweis auf seitlichen Wassereintritt."
		],
		check: [
			{
				label: "Sofort prüfen",
				text: "Feuchtebild nach Regen, Sockel außen, Fallrohre und Boden-Wand-Anschluss."
			},
			{
				label: "Nicht vergessen",
				text: "Sanierputz ersetzt keine Abdichtung gegen drückende oder seitlich eindringende Feuchte."
			},
			{
				label: "Nächster Schritt",
				text: "Feuchtequelle eingrenzen und entscheiden, ob innen oder außen gearbeitet wird."
			}
		],
		steps: [
			"Feuchtebild aufnehmen",
			"Ursache und Salzbelastung prüfen",
			"Abdichtungsart festlegen",
			"Putzaufbau, Trocknung und Lüftung abstimmen"
		],
		costDrivers: [
			"Außen freilegbar oder nicht",
			"Tiefe und Länge der Kellerwand",
			"Drainage und Wasserführung",
			"Putzabtrag und Innenausbau"
		],
		faq: [
			{
				q: "Ist eine Außenabdichtung immer besser?",
				a: "Sie ist oft bauphysikalisch sauberer, aber nicht immer erreichbar oder wirtschaftlich. Innenabdichtung kann dann sinnvoll sein."
			},
			{
				q: "Warum blüht der Putz weiß aus?",
				a: "Feuchtigkeit transportiert Salze aus dem Mauerwerk an die Oberfläche. Beim Trocknen kristallisieren sie aus."
			},
			{
				q: "Kann ein Keller komplett trocken werden?",
				a: "Das hängt von Wandaufbau, Nutzung und Abdichtung ab. Ziel ist ein dauerhaft nutzbarer, schadensarmer Zustand."
			}
		],
		related: [
			"feuchtigkeit-schimmel-sanieren-leipzig",
			"sanierungskosten-leipzig-2026",
			"die-8-teuersten-fehler-sanierung-leipzig"
		]
	},
	"wanddurchbruch-tragende-wand-leipzig": {
		value: "Sehr handlungsnahes Maurer-Thema: Wer danach sucht, steht meist kurz vor einem konkreten Umbau.",
		bestFor: "Eigentümer, die Küche, Wohnzimmer oder Gewerbeflächen öffnen möchten",
		summary: [
			"Tragende Wände brauchen statische Prüfung, Abstützung und passenden Träger.",
			"Leitungen, Staubschutz und Entsorgung sollten vor dem Angebot geklärt werden.",
			"Bei Eigentumswohnungen können Zustimmung und Gemeinschaftseigentum relevant sein."
		],
		check: [
			{
				label: "Sofort prüfen",
				text: "Wanddicke, Deckenrichtung, Installationen und darüberliegende Geschosse."
			},
			{
				label: "Nicht vergessen",
				text: "Statiker, Stahlträger, Brandschutz und Oberflächenanschluss einplanen."
			},
			{
				label: "Nächster Schritt",
				text: "Vor-Ort-Termin mit Aufmaß und statischer Vorprüfung vereinbaren."
			}
		],
		steps: [
			"Wand und Lasten prüfen",
			"Statik und Träger festlegen",
			"Baustelle staubarm vorbereiten",
			"Abstützen, öffnen, Träger setzen und sauber schließen"
		],
		costDrivers: [
			"Tragend oder nicht tragend",
			"Trägergröße und Auflager",
			"Staubschutz und bewohnte Räume",
			"Putz-, Trockenbau- und Maleranschlüsse"
		],
		faq: [
			{
				q: "Kann man eine tragende Wand entfernen?",
				a: "Oft ja, aber nur mit statischer Berechnung, Abstützung und geeignetem Träger."
			},
			{
				q: "Was kostet ein Wanddurchbruch?",
				a: "Das hängt stark von Breite, Statik, Träger, Zugang und Nacharbeiten ab. Ein Vor-Ort-Aufmaß ist fast immer nötig."
			},
			{
				q: "Braucht man eine Genehmigung?",
				a: "Bei statischen Eingriffen, Eigentumswohnungen oder Nutzungsänderungen sollte das vorab geprüft werden."
			}
		],
		related: [
			"innenwaende-modernisieren-trockenbau-massivbau",
			"betonreparatur-spachteln-statiker-leipzig",
			"sanierungskosten-leipzig-2026"
		]
	}
};
var fallbackGuide = {
	value: "Praxisnahes Thema mit lokalem Bezug und konkretem Nutzen für Bauherren in Leipzig.",
	bestFor: "Bauherren mit konkreter Planungs- oder Sanierungsfrage",
	summary: [
		"Erst Ursache und Ziel klären, dann Material und Ausführung festlegen.",
		"Ein Vor-Ort-Termin verhindert Missverständnisse und unnötige Nachträge.",
		"Saubere Planung spart in der Ausführung meist mehr Geld als ein vorschneller Start."
	],
	check: [
		{
			label: "Sofort prüfen",
			text: "Bausubstanz, Maße, Nutzung und sichtbare Schäden."
		},
		{
			label: "Nicht vergessen",
			text: "Nebenleistungen, Trocknungszeiten und Anschlüsse mitdenken."
		},
		{
			label: "Nächster Schritt",
			text: "Projekt kurz dokumentieren und fachlich einschätzen lassen."
		}
	],
	steps: [
		"Bestand prüfen",
		"Lösung auswählen",
		"Angebot und Ablauf klären",
		"Ausführung und Abnahme sauber dokumentieren"
	],
	costDrivers: [
		"Fläche und Zugänglichkeit",
		"Untergrundzustand",
		"Materialsystem",
		"Qualitätsstandard"
	],
	faq: []
};
var articleSlugs = Object.keys(articlesData).filter((key) => key !== "default");
function RatgeberDetail() {
	const { slug } = useParams();
	const isKnown = Boolean(articlesData[slug]);
	const article = articlesData[slug] || articlesData["default"];
	const guide = topicGuides[slug] || fallbackGuide;
	const siteUrl = "https://www.bauunternehmen-koenig.com";
	const pagePath = isKnown ? `/ratgeber/${slug}` : "/ratgeber";
	const allArticles = Object.entries(articlesData).filter(([key]) => key !== "default");
	const relatedArticles = (guide.related || []).map((relatedSlug) => articlesData[relatedSlug] ? [relatedSlug, articlesData[relatedSlug]] : null).filter(Boolean);
	const fallbackRelated = allArticles.filter(([key, item]) => key !== slug && item.category === article.category).slice(0, 3);
	const visibleRelated = (relatedArticles.length ? relatedArticles : fallbackRelated).slice(0, 3);
	const faqItems = guide.faq || [];
	const articleJsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Article",
				headline: article.title,
				description: article.metaDescription || article.title,
				image: `${siteUrl}${resolvePublicImage(article.img)}`,
				author: {
					"@type": "Person",
					name: article.author,
					url: `${siteUrl}/ueber-uns`
				},
				publisher: {
					"@type": "Organization",
					name: "Bauunternehmen König",
					logo: {
						"@type": "ImageObject",
						url: `${siteUrl}/favicon.png`
					}
				},
				datePublished: article.dateISO || "2026-01-01",
				dateModified: article.updatedISO || article.dateISO || "2026-01-01",
				mainEntityOfPage: {
					"@type": "WebPage",
					"@id": `${siteUrl}${pagePath}`
				},
				inLanguage: "de-DE",
				articleSection: article.category
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Startseite",
						item: `${siteUrl}/`
					},
					{
						"@type": "ListItem",
						position: 2,
						name: "Ratgeber",
						item: `${siteUrl}/ratgeber`
					},
					{
						"@type": "ListItem",
						position: 3,
						name: article.title,
						item: `${siteUrl}${pagePath}`
					}
				]
			},
			...faqItems.length ? [{
				"@type": "FAQPage",
				mainEntity: faqItems.map((item) => ({
					"@type": "Question",
					name: item.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: item.a
					}
				}))
			}] : []
		]
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SEO, {
			title: `${article.title} | Bauunternehmen König Leipzig`,
			description: article.metaDescription || article.title,
			path: pagePath,
			image: `${siteUrl}${resolvePublicImage(article.img)}`,
			type: "article",
			noindex: !isKnown,
			article: {
				publishedTime: article.dateISO,
				modifiedTime: article.updatedISO || article.dateISO,
				author: article.author,
				section: article.category
			},
			jsonLd: articleJsonLd
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "relative pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 bg-charcoal overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 opacity-20",
					children: /* @__PURE__ */ jsx("img", {
						src: resolvePublicImage(article.img),
						alt: "",
						className: "w-full h-full object-cover",
						fetchPriority: "high",
						decoding: "async"
					})
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
					children: [
						/* @__PURE__ */ jsxs(Link, {
							to: "/ratgeber",
							className: "inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm font-medium mb-10 block",
							children: [/* @__PURE__ */ jsx(ArrowLeft, { size: 16 }), "Zurück zur Übersicht"]
						}),
						/* @__PURE__ */ jsx("span", {
							className: "inline-block px-3 py-1 bg-gold/20 text-gold font-bold text-xs uppercase tracking-widest rounded-full mb-6",
							children: article.category
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-900 text-white leading-tight mb-6 md:mb-8",
							children: article.title
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center gap-6 text-sm text-gray-400",
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(User, {
										size: 16,
										className: "text-gold"
									}), article.author]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(Calendar, {
										size: 16,
										className: "text-gold"
									}), article.date]
								}),
								article.updated && article.updated !== article.date && /* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ jsx(RefreshCw, {
											size: 16,
											className: "text-gold"
										}),
										"Aktualisiert: ",
										article.updated
									]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(Clock, {
										size: 16,
										className: "text-gold"
									}), article.readTime]
								})
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ jsx("article", {
			className: "bg-white pb-20",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ jsxs(RevealSection, { children: [
					/* @__PURE__ */ jsx("div", {
						className: "my-10 md:my-12 rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-[260px] sm:h-[340px] md:h-[460px]",
						children: /* @__PURE__ */ jsx("img", {
							src: resolvePublicImage(article.img),
							alt: article.title,
							className: "w-full h-full object-cover",
							loading: "lazy",
							decoding: "async"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-14",
						children: guide.summary.map((item, index) => /* @__PURE__ */ jsxs("div", {
							className: "bg-white border border-gray-100 rounded-xl p-4 md:p-5 min-w-0",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "text-gold font-900 text-lg font-heading block mb-2",
								children: ["0", index + 1]
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm text-gray-600 leading-relaxed break-words",
								children: item
							})]
						}, item))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 mb-12 md:mb-16",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-7 bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-7 overflow-hidden relative min-w-0",
							children: [
								/* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-px gold-gradient" }),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-3 mb-4 min-w-0",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-gray-100 flex-shrink-0",
										children: /* @__PURE__ */ jsx(MapPin, {
											size: 22,
											className: "text-gold"
										})
									}), /* @__PURE__ */ jsxs("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-[0.7rem] uppercase tracking-[0.18em] text-gold font-bold",
											children: "Leipziger Projekt-Kompass"
										}), /* @__PURE__ */ jsx("h2", {
											className: "text-xl md:text-2xl font-900 text-charcoal mt-1 break-words",
											children: "Warum dieses Thema wichtig ist"
										})]
									})]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-gray-600 leading-relaxed mb-5 break-words",
									children: guide.value
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 min-w-0",
									children: [/* @__PURE__ */ jsx(Hammer, {
										size: 20,
										className: "text-gold mt-1 flex-shrink-0"
									}), /* @__PURE__ */ jsxs("p", {
										className: "text-sm text-gray-600 leading-relaxed break-words",
										children: [
											/* @__PURE__ */ jsx("strong", {
												className: "text-charcoal",
												children: "Besonders hilfreich für:"
											}),
											" ",
											guide.bestFor
										]
									})]
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-5 bg-white border border-gray-100 rounded-2xl p-5 md:p-7 min-w-0",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 mb-5",
								children: [/* @__PURE__ */ jsx(ClipboardCheck, {
									size: 22,
									className: "text-gold"
								}), /* @__PURE__ */ jsx("h2", {
									className: "text-xl md:text-2xl font-900 text-charcoal",
									children: "Projekt-Check"
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-4",
								children: guide.check.map((item, index) => {
									return /* @__PURE__ */ jsxs("div", {
										className: "flex gap-3 min-w-0",
										children: [/* @__PURE__ */ jsx("div", {
											className: "w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100",
											children: /* @__PURE__ */ jsx([
												AlertTriangle,
												Layers,
												CheckCircle2
											][index] || CheckCircle2, {
												size: 18,
												className: "text-gold"
											})
										}), /* @__PURE__ */ jsxs("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-sm font-bold text-charcoal block",
												children: item.label
											}), /* @__PURE__ */ jsx("p", {
												className: "text-sm text-gray-500 leading-relaxed break-words",
												children: item.text
											})]
										})]
									}, item.label);
								})
							})]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "blog-content",
						dangerouslySetInnerHTML: { __html: article.content }
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 mt-14 md:mt-16",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-7 min-w-0",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 mb-5",
								children: [/* @__PURE__ */ jsx(Layers, {
									size: 22,
									className: "text-gold"
								}), /* @__PURE__ */ jsx("h2", {
									className: "text-xl md:text-2xl font-900 text-charcoal",
									children: "Ablauf aus der Praxis"
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-4",
								children: guide.steps.map((step, index) => /* @__PURE__ */ jsxs("div", {
									className: "flex gap-3 min-w-0",
									children: [/* @__PURE__ */ jsx("span", {
										className: "w-8 h-8 rounded-full gold-gradient text-black font-900 flex items-center justify-center flex-shrink-0 text-sm",
										children: index + 1
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm md:text-base text-gray-600 leading-relaxed pt-1 break-words",
										children: step
									})]
								}, step))
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "bg-white border border-gray-100 rounded-2xl p-5 md:p-7 min-w-0",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 mb-5",
								children: [/* @__PURE__ */ jsx(Euro, {
									size: 22,
									className: "text-gold"
								}), /* @__PURE__ */ jsx("h2", {
									className: "text-xl md:text-2xl font-900 text-charcoal",
									children: "Was den Preis bewegt"
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
								children: guide.costDrivers.map((driver) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-3 rounded-xl bg-gray-50 border border-gray-100 p-3 min-w-0",
									children: [/* @__PURE__ */ jsx(CheckCircle2, {
										size: 17,
										className: "text-gold mt-0.5 flex-shrink-0"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-sm text-gray-600 leading-relaxed break-words",
										children: driver
									})]
								}, driver))
							})]
						})]
					}),
					faqItems.length > 0 && /* @__PURE__ */ jsxs("div", {
						className: "mt-14 md:mt-16",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 mb-5",
							children: [/* @__PURE__ */ jsx(HelpCircle, {
								size: 24,
								className: "text-gold"
							}), /* @__PURE__ */ jsx("h2", {
								className: "text-xl md:text-2xl font-900 text-charcoal",
								children: "Häufige Fragen"
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "space-y-3",
							children: faqItems.map((item) => /* @__PURE__ */ jsxs("div", {
								className: "bg-white border border-gray-100 rounded-xl p-4 md:p-5 min-w-0",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-base md:text-lg font-bold text-charcoal mb-2 break-words",
									children: item.q
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm md:text-base text-gray-500 leading-relaxed break-words",
									children: item.a
								})]
							}, item.q))
						})]
					}),
					visibleRelated.length > 0 && /* @__PURE__ */ jsxs("div", {
						className: "mt-14 md:mt-16",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between gap-4 mb-6",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-xl md:text-2xl font-900 text-charcoal",
								children: "Passende nächste Themen"
							}), /* @__PURE__ */ jsxs(Link, {
								to: "/ratgeber",
								className: "hidden sm:inline-flex items-center gap-2 text-sm font-bold text-gold",
								children: ["Alle ansehen", /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-1 md:grid-cols-3 gap-5",
							children: visibleRelated.map(([relatedSlug, related]) => /* @__PURE__ */ jsxs(Link, {
								to: `/ratgeber/${relatedSlug}`,
								className: "group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 min-w-0",
								children: [/* @__PURE__ */ jsx("div", {
									className: "h-36 overflow-hidden",
									children: /* @__PURE__ */ jsx("img", {
										src: resolvePublicImage(related.img),
										alt: related.title,
										className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
										loading: "lazy",
										decoding: "async"
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "p-4",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-xs font-bold uppercase tracking-[0.16em] text-gold",
										children: related.category
									}), /* @__PURE__ */ jsx("h3", {
										className: "text-base font-bold text-charcoal mt-2 group-hover:text-gold transition-colors break-words",
										children: related.title
									})]
								})]
							}, relatedSlug))
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-16 bg-gray-50 rounded-2xl p-5 sm:p-7 md:p-8 border border-gray-100 relative overflow-hidden",
						children: /* @__PURE__ */ jsxs("div", {
							className: "relative z-10",
							children: [/* @__PURE__ */ jsxs("h3", {
								className: "text-xl sm:text-2xl font-800 text-gray-900 mb-6",
								children: ["Haben Sie Fragen zu Ihrem ", /* @__PURE__ */ jsx("span", {
									className: "gold-text-gradient",
									children: "Projekt?"
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col lg:flex-row gap-6 md:gap-8 items-center",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full",
									children: [
										{
											icon: ShieldCheck,
											text: "Meisterbetrieb",
											sub: "HWK Leipzig"
										},
										{
											icon: Clock,
											text: "Termintreue",
											sub: "Pünktlich garantiert"
										},
										{
											icon: Sparkles,
											text: "Saubere Arbeit",
											sub: "Täglich aufgeräumt"
										},
										{
											icon: CheckCircle2,
											text: "Festpreisgarantie",
											sub: "Keine Überraschungen"
										}
									].map((item) => /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 min-w-0",
										children: [/* @__PURE__ */ jsx("div", {
											className: "w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-gray-100 flex-shrink-0",
											children: /* @__PURE__ */ jsx(item.icon, {
												size: 20,
												className: "text-gold"
											})
										}), /* @__PURE__ */ jsxs("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-sm font-semibold text-gray-900 block break-words",
												children: item.text
											}), /* @__PURE__ */ jsx("span", {
												className: "text-xs text-gray-500 break-words",
												children: item.sub
											})]
										})]
									}, item.text))
								}), /* @__PURE__ */ jsxs("div", {
									className: "w-full lg:w-auto flex flex-col items-center justify-center gap-4 border-t lg:border-t-0 lg:border-l border-gray-200 pt-6 lg:pt-0 lg:pl-8",
									children: [/* @__PURE__ */ jsxs("p", {
										className: "text-sm text-gray-500 text-center",
										children: [
											"Beratung & Festpreis-",
											/* @__PURE__ */ jsx("br", {}),
											"Angebot in 48 Stunden."
										]
									}), /* @__PURE__ */ jsxs(Link, {
										to: "/kontakt",
										className: "btn-primary w-full",
										children: [/* @__PURE__ */ jsx(Mail, { size: 18 }), "Unverbindlich anfragen"]
									})]
								})]
							})]
						})
					})
				] })
			})
		}),
		/* @__PURE__ */ jsx("div", { className: "h-12 bg-white" })
	] });
}
//#endregion
//#region src/pages/StandortDetail.jsx
var standortData = {
	markkleeberg: {
		name: "Markkleeberg",
		metaTitle: "Maurer & Bauunternehmen Markkleeberg – Sanierung vom Meisterbetrieb",
		metaDescription: "Bauunternehmen König: Maurer-, Sanierungs- und Fassadenarbeiten in Markkleeberg. Meisterbetrieb aus dem Leipziger Süden — kurze Anfahrt, Festpreisgarantie, kostenlose Beratung.",
		keywords: "Maurer Markkleeberg, Bauunternehmen Markkleeberg, Sanierung Markkleeberg, Fassade Markkleeberg, Handwerker Markkleeberg, Trockenbau Markkleeberg",
		eyebrow: "Ihr Meisterbetrieb für Markkleeberg",
		title: "Maurer- & Bauarbeiten in Markkleeberg",
		subtitle: "Vom Leipziger Süden direkt an den Cospudener See — Meisterqualität ohne lange Anfahrtswege.",
		intro: "Markkleeberg gehört zu den gefragtesten Wohnlagen im Leipziger Umland — mit gepflegten Villenvierteln, Gründerzeithäusern und einer wachsenden Zahl an Ein- und Zweifamilienhäusern rund um Cospudener und Markkleeberger See. Genau hier sind gute Handwerker knapp. Unser Firmensitz liegt im Leipziger Südosten: Nach Markkleeberg sind es für uns nur wenige Minuten, kurzfristige Vor-Ort-Termine und eine Betreuung ohne Anfahrtspauschalen sind daher selbstverständlich.",
		absatz2: "Ob die Sanierung eines Altbaus in der Gautzscher Ortslage, eine neue Klinkerfassade, ein Wanddurchbruch im Siedlungshaus oder Trockenbau im Dachgeschoss: Als Maurer- und Betonbauermeisterbetrieb (HWK Leipzig) führen wir alle Arbeiten DIN-gerecht, termintreu und mit Festpreisgarantie aus. Viele unserer Referenzprojekte liegen im Leipziger Süden — auf Wunsch zeigen wir Ihnen gern ausgeführte Arbeiten in Ihrer Nähe.",
		highlights: [
			"Wenige Minuten Anfahrt aus dem Leipziger Südosten",
			"Erfahrung mit Altbau- und Villensubstanz",
			"Kostenlose Vor-Ort-Beratung in ganz Markkleeberg",
			"Festpreisangebot innerhalb von 48 Stunden"
		],
		faqs: [
			{
				q: "Berechnen Sie eine Anfahrtspauschale nach Markkleeberg?",
				a: "Nein. Markkleeberg liegt direkt in unserem Kerngebiet — Anfahrt und Erstberatung vor Ort sind für Sie kostenlos und unverbindlich."
			},
			{
				q: "Übernehmen Sie auch Sanierungen älterer Villen und Gründerzeithäuser?",
				a: "Ja, die Arbeit im Bestand ist eine unserer Kernkompetenzen: Mauerwerkssanierung, Risssanierung, Putz- und Fassadenarbeiten sowie Kellerabdichtung führen wir regelmäßig an historischer Bausubstanz aus."
			},
			{
				q: "Wie schnell bekomme ich einen Termin in Markkleeberg?",
				a: "In der Regel können wir eine Besichtigung innerhalb weniger Werktage anbieten. Das verbindliche Festpreisangebot erhalten Sie anschließend innerhalb von 48 Stunden."
			}
		]
	},
	taucha: {
		name: "Taucha",
		metaTitle: "Maurer & Bauunternehmen Taucha – Mauerwerk, Sanierung & Fassade",
		metaDescription: "Bauunternehmen König: Maurerarbeiten, Sanierung, Innenausbau und Fassaden in Taucha. Meisterbetrieb aus Leipzig — schnelle Termine, Festpreisgarantie, kostenlose Erstberatung.",
		keywords: "Maurer Taucha, Bauunternehmen Taucha, Sanierung Taucha, Fassade Taucha, Handwerker Taucha, Anbau Taucha, Trockenbau Taucha",
		eyebrow: "Ihr Meisterbetrieb für Taucha",
		title: "Maurer- & Bauarbeiten in Taucha",
		subtitle: "Für Eigenheime, Anbauten und Bestandssanierung im Leipziger Nordosten — meisterhaft und termintreu.",
		intro: "Taucha wächst: Neue Wohngebiete, junge Familien im Eigenheim und zugleich ein historischer Stadtkern mit sanierungsbedürftiger Bausubstanz. Für beides braucht es einen Baupartner, der sowohl Neubauqualität als auch Bestandserfahrung mitbringt. Vom Leipziger Stadtgebiet aus sind wir über die B87 in kurzer Zeit bei Ihnen — für Besichtigung, Beratung und Ausführung.",
		absatz2: "Typische Projekte, die wir in Taucha und Umgebung übernehmen: Fundamente und Bodenplatten für Garagen und Anbauten, tragendes Mauerwerk, Wanddurchbrüche mit Stahlträgereinbau, Kellerabdichtung gegen Feuchtigkeit sowie komplette Fassaden- und Putzarbeiten. Als eingetragener Meisterbetrieb der Handwerkskammer Leipzig arbeiten wir nach geltenden DIN-Normen — mit schriftlichem Festpreisangebot statt böser Überraschungen.",
		highlights: [
			"Schnell erreichbar über die B87",
			"Neubau-Nebenleistungen und Bestandssanierung aus einer Hand",
			"Wanddurchbrüche, Anbauten & Fundamente für Eigenheime",
			"Schriftliches Festpreisangebot in 48 Stunden"
		],
		faqs: [
			{
				q: "Führen Sie in Taucha auch kleinere Maurerarbeiten aus?",
				a: "Ja. Vom reparierten Giebelmauerwerk über den Garagenanbau bis zur Komplettsanierung — kein Projekt ist zu klein, um sauber und meisterhaft ausgeführt zu werden."
			},
			{
				q: "Machen Sie Wanddurchbrüche in bewohnten Häusern?",
				a: "Ja, inklusive Statikabstimmung und Stahlträgereinbau. Wir arbeiten staubarm, sichern die Baustelle täglich und halten die vereinbarten Termine ein."
			},
			{
				q: "Betreuen Sie auch Neubauvorhaben in den Tauchaer Wohngebieten?",
				a: "Wir übernehmen Rohbau- und Maurerarbeiten, Fundamente und Bodenplatten sowie die Koordination mit Ihrem Architekten oder Fertighausanbieter."
			}
		]
	},
	schkeuditz: {
		name: "Schkeuditz",
		metaTitle: "Maurer & Bauunternehmen Schkeuditz – Sanierung & Mauerwerk vom Meister",
		metaDescription: "Bauunternehmen König: Maurer-, Beton- und Sanierungsarbeiten in Schkeuditz. Meisterbetrieb aus Leipzig — kostenlose Vor-Ort-Beratung, Festpreisgarantie, DIN-gerechte Ausführung.",
		keywords: "Maurer Schkeuditz, Bauunternehmen Schkeuditz, Sanierung Schkeuditz, Fassade Schkeuditz, Handwerker Schkeuditz, Kellerabdichtung Schkeuditz",
		eyebrow: "Ihr Meisterbetrieb für Schkeuditz",
		title: "Maurer- & Bauarbeiten in Schkeuditz",
		subtitle: "Zuverlässiges Bauhandwerk für Wohnhäuser und Gewerbe im Leipziger Nordwesten.",
		intro: "Zwischen Auenlandschaft und Flughafen ist Schkeuditz ein gefragter Wohn- und Gewerbestandort — mit vielen Bestandsgebäuden aus unterschiedlichen Baujahrzehnten, die regelmäßig Sanierung, Abdichtung oder eine neue Fassade brauchen. Über die B6 und A9 sind wir aus Leipzig schnell vor Ort und betreuen Projekte in Schkeuditz, Glesien, Radefeld und den umliegenden Ortsteilen.",
		absatz2: "Unsere Schwerpunkte vor Ort: Mauerwerks- und Risssanierung, Kellerabdichtung gegen drückende Feuchtigkeit — ein häufiges Thema in Elster-Luppe-Nähe —, Putz- und Fassadenarbeiten sowie Innenausbau und Trockenbau. Auch für Gewerbeobjekte wie Büros, Hallen-Sozialräume oder Praxen sind wir der richtige Ansprechpartner. Meisterbetrieb der HWK Leipzig, Festpreisgarantie, saubere Baustelle — darauf können Sie bauen.",
		highlights: [
			"Schnelle Anbindung über B6 und A9",
			"Spezialist für Kellerabdichtung & Feuchtigkeitsschäden",
			"Privat- und Gewerbekunden",
			"Kostenlose Erstberatung vor Ort"
		],
		faqs: [
			{
				q: "Mein Keller in Schkeuditz ist feucht — können Sie helfen?",
				a: "Ja, Abdichtungsarbeiten gehören zu unseren Kernleistungen: von der Ursachenanalyse über Horizontalsperren bis zur vollständigen Perimeterabdichtung mit Aufgraben des Sockels."
			},
			{
				q: "Arbeiten Sie auch für Firmen und Hausverwaltungen in Schkeuditz?",
				a: "Ja. Wir betreuen gewerbliche Auftraggeber und Hausverwaltungen bei Instandsetzung, Sanierung und Umbauten — zuverlässig terminiert und mit transparenter Abrechnung."
			},
			{
				q: "Was kostet eine Fassadensanierung in Schkeuditz?",
				a: "Das hängt von Zustand, Fläche und gewünschtem System ab. Nach einer kostenlosen Besichtigung erhalten Sie von uns ein verbindliches Festpreisangebot — ohne versteckte Kosten."
			}
		]
	}
};
var leistungen = [
	{
		name: "Maurer- & Betonbau",
		path: "/leistungen/maurer-betonbau"
	},
	{
		name: "Sanierung & Instandsetzung",
		path: "/leistungen/sanierung"
	},
	{
		name: "Innenausbau & Trockenbau",
		path: "/leistungen/innenausbau"
	},
	{
		name: "Fassaden- & Putzarbeiten",
		path: "/leistungen/fassade"
	}
];
function StandortDetail() {
	const { slug } = useParams();
	const data = standortData[slug];
	if (!data) return /* @__PURE__ */ jsx("section", {
		className: "min-h-[60vh] bg-gray-50 pt-40 pb-20 text-center",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-3xl mx-auto px-4",
			children: [/* @__PURE__ */ jsx("h1", {
				className: "text-3xl font-900 text-charcoal mb-6",
				children: "Standort nicht gefunden"
			}), /* @__PURE__ */ jsx(Link, {
				to: "/",
				className: "btn-primary",
				children: "Zur Startseite"
			})]
		})
	});
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Service",
				name: `Maurer- und Bauarbeiten in ${data.name}`,
				provider: { "@id": "https://www.bauunternehmen-koenig.com/#business" },
				areaServed: {
					"@type": "City",
					name: data.name
				},
				serviceType: "Maurerarbeiten, Sanierung, Innenausbau, Fassadenarbeiten"
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [{
					"@type": "ListItem",
					position: 1,
					name: "Startseite",
					item: "https://www.bauunternehmen-koenig.com/"
				}, {
					"@type": "ListItem",
					position: 2,
					name: data.name,
					item: `https://www.bauunternehmen-koenig.com/standorte/${slug}`
				}]
			},
			{
				"@type": "FAQPage",
				mainEntity: data.faqs.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			}
		]
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SEO, {
			title: data.metaTitle,
			description: data.metaDescription,
			keywords: data.keywords,
			path: `/standorte/${slug}`,
			jsonLd
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "relative bg-charcoal pt-40 sm:pt-48 md:pt-52 pb-16 md:pb-24 overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/images/hero.webp')] opacity-10 bg-cover bg-center" }),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-charcoal" }),
				/* @__PURE__ */ jsx("div", {
					className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs(RevealSection, { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6",
							children: [/* @__PURE__ */ jsx(MapPin, {
								size: 14,
								className: "text-gold"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase",
								children: data.eyebrow
							})]
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "font-heading text-4xl sm:text-5xl md:text-6xl font-900 text-white leading-tight tracking-tight mb-5 max-w-4xl",
							children: data.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gold/80 text-lg md:text-2xl font-semibold max-w-3xl mb-10",
							children: data.subtitle
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap gap-4",
							children: [/* @__PURE__ */ jsx(Link, {
								to: "/kontakt",
								className: "btn-primary",
								children: "Kostenlose Beratung sichern"
							}), /* @__PURE__ */ jsxs("a", {
								href: contactDetails.phoneHref,
								className: "inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:border-gold/60 transition-colors",
								children: [
									/* @__PURE__ */ jsx(Phone, {
										size: 16,
										className: "text-gold"
									}),
									" ",
									contactDetails.phoneDisplay
								]
							})]
						})
					] })
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-padding bg-white",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start",
				children: [/* @__PURE__ */ jsxs(RevealSection, { children: [
					/* @__PURE__ */ jsx(SectionHeading, {
						eyebrow: "Vor Ort für Sie da",
						title: `Bauen & Sanieren in ${data.name}`,
						center: false
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-gray-500 leading-relaxed mb-6",
						children: data.intro
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-gray-500 leading-relaxed",
						children: data.absatz2
					})
				] }), /* @__PURE__ */ jsx(RevealSection, {
					delay: 200,
					children: /* @__PURE__ */ jsxs("div", {
						className: "bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10",
						children: [
							/* @__PURE__ */ jsxs("h3", {
								className: "font-heading text-xl font-800 text-charcoal mb-6",
								children: ["Ihre Vorteile in ", data.name]
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "space-y-4 mb-8",
								children: data.highlights.map((h) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ jsx(CheckCircle2, {
										size: 20,
										className: "text-gold flex-shrink-0 mt-0.5"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-gray-600 text-sm leading-relaxed",
										children: h
									})]
								}, h))
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "border-t border-gray-200 pt-6 space-y-3",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3 text-sm text-gray-500",
									children: [
										/* @__PURE__ */ jsx(ShieldCheck, {
											size: 18,
											className: "text-gold"
										}),
										" Meisterbetrieb — ",
										contactDetails.tradeRegistrationLabel
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3 text-sm text-gray-500",
									children: [
										/* @__PURE__ */ jsx(Clock, {
											size: 18,
											className: "text-gold"
										}),
										" ",
										contactDetails.openingHoursDisplay
									]
								})]
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-padding bg-gray-50",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ jsx(RevealSection, { children: /* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Leistungen",
					title: `Unsere Leistungen in ${data.name}`,
					description: "Alle Gewerke aus einer Hand — vom Fundament bis zur fertigen Fassade."
				}) }), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10",
					children: leistungen.map((l, i) => /* @__PURE__ */ jsx(RevealSection, {
						delay: i * 100,
						children: /* @__PURE__ */ jsxs(Link, {
							to: l.path,
							className: "group flex items-center justify-between bg-white border border-gray-100 rounded-2xl p-6 hover:border-gold/40 hover:shadow-lg transition-all duration-300",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-heading font-700 text-charcoal text-sm md:text-base",
								children: l.name
							}), /* @__PURE__ */ jsx(ArrowRight, {
								size: 18,
								className: "text-gold group-hover:translate-x-1 transition-transform"
							})]
						})
					}, l.path))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-padding bg-white",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ jsx(RevealSection, { children: /* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "FAQ",
					title: `Häufige Fragen aus ${data.name}`
				}) }), /* @__PURE__ */ jsx("div", {
					className: "space-y-6 mt-10",
					children: data.faqs.map((f, i) => /* @__PURE__ */ jsx(RevealSection, {
						delay: i * 100,
						children: /* @__PURE__ */ jsxs("div", {
							className: "bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "font-heading font-700 text-charcoal mb-3",
								children: f.q
							}), /* @__PURE__ */ jsx("p", {
								className: "text-gray-500 text-sm leading-relaxed",
								children: f.a
							})]
						})
					}, f.q))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-padding bg-charcoal rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 mb-20 relative overflow-hidden",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-4xl mx-auto px-4 text-center relative z-10",
				children: /* @__PURE__ */ jsxs(RevealSection, { children: [
					/* @__PURE__ */ jsxs("h2", {
						className: "font-heading text-3xl sm:text-4xl md:text-5xl font-800 text-white mb-6",
						children: [
							"Ihr Projekt in ",
							/* @__PURE__ */ jsx("span", {
								className: "gold-text-gradient",
								children: data.name
							}),
							"?"
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-gray-400 mb-10 max-w-2xl mx-auto",
						children: "Kostenlose Vor-Ort-Beratung, verbindliches Festpreisangebot in 48 Stunden und meisterhafte Ausführung — sprechen Sie uns an."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ jsx(Link, {
							to: "/kontakt",
							className: "btn-primary",
							children: "Kostenlose Beratung anfragen"
						}), /* @__PURE__ */ jsxs("a", {
							href: contactDetails.phoneHref,
							className: "inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:border-gold/60 transition-colors",
							children: [
								/* @__PURE__ */ jsx(Phone, {
									size: 16,
									className: "text-gold"
								}),
								" ",
								contactDetails.phoneDisplay
							]
						})]
					})
				] })
			})
		})
	] });
}
//#endregion
//#region src/pages/Legal.jsx
function Impressum() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SEO, {
			title: "Impressum | Bauunternehmen König Leipzig",
			description: "Impressum und Anbieterkennzeichnung gemäß § 5 DDG des Bauunternehmen König — Maurer- und Betonbauermeister Tim König, Leipzig.",
			path: "/impressum",
			noindex: true
		}),
		/* @__PURE__ */ jsx("section", {
			className: "pt-40 sm:pt-48 md:pt-52 pb-10 bg-charcoal overflow-hidden",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-4xl mx-auto px-4 text-center",
				children: /* @__PURE__ */ jsx("h1", {
					className: "text-3xl sm:text-4xl md:text-5xl font-900 text-white",
					children: "Impressum"
				})
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-padding bg-white",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-3xl mx-auto px-4 prose prose-sm sm:prose-base prose-gray break-words",
				children: /* @__PURE__ */ jsxs(RevealSection, { children: [
					/* @__PURE__ */ jsx("h2", { children: "Angaben gemäß § 5 DDG" }),
					/* @__PURE__ */ jsxs("p", { children: [
						contactDetails.businessName,
						/* @__PURE__ */ jsx("br", {}),
						"Inh. ",
						contactDetails.ownerName,
						/* @__PURE__ */ jsx("br", {}),
						"Maurer- und Betonbauermeister",
						/* @__PURE__ */ jsx("br", {}),
						contactDetails.addressLine1,
						/* @__PURE__ */ jsx("br", {}),
						contactDetails.addressLine2
					] }),
					/* @__PURE__ */ jsx("h2", { children: "Kontakt" }),
					/* @__PURE__ */ jsxs("p", { children: [
						"Telefon: ",
						/* @__PURE__ */ jsx("a", {
							href: contactDetails.phoneHref,
							children: contactDetails.phoneDisplay
						}),
						/* @__PURE__ */ jsx("br", {}),
						"E-Mail: ",
						/* @__PURE__ */ jsx("a", {
							href: contactDetails.emailHref,
							children: contactDetails.email
						})
					] }),
					/* @__PURE__ */ jsx("h2", { children: "Berufsbezeichnung" }),
					/* @__PURE__ */ jsxs("p", { children: [
						"Maurer- und Betonbauermeister",
						/* @__PURE__ */ jsx("br", {}),
						"Verliehen in: Deutschland",
						/* @__PURE__ */ jsx("br", {}),
						"Zuständige Handwerkskammer: HWK zu Leipzig"
					] }),
					/* @__PURE__ */ jsx("h2", { children: "Berufsrechtliche Regelungen" }),
					/* @__PURE__ */ jsxs("p", { children: [
						"Handwerksordnung (HwO), abrufbar unter",
						" ",
						/* @__PURE__ */ jsx("a", {
							href: "https://www.gesetze-im-internet.de/hwo/",
							target: "_blank",
							rel: "noopener noreferrer",
							children: "gesetze-im-internet.de/hwo"
						}),
						"."
					] }),
					/* @__PURE__ */ jsx("h2", { children: "Streitschlichtung" }),
					/* @__PURE__ */ jsx("p", { children: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen." })
				] })
			})
		})
	] });
}
function Datenschutz() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SEO, {
			title: "Datenschutzerklärung | Bauunternehmen König Leipzig",
			description: "Datenschutzerklärung des Bauunternehmen König Leipzig gemäß DSGVO — Informationen zu Hosting, Kontaktformular, Google Fonts, Google Maps und WhatsApp.",
			path: "/datenschutz",
			noindex: true
		}),
		/* @__PURE__ */ jsx("section", {
			className: "pt-40 sm:pt-48 md:pt-52 pb-10 bg-charcoal overflow-hidden",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-4xl mx-auto px-4 text-center",
				children: /* @__PURE__ */ jsx("h1", {
					className: "text-3xl sm:text-4xl md:text-5xl font-900 text-white",
					children: "Datenschutz"
				})
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section-padding bg-white",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-3xl mx-auto px-4 prose prose-sm sm:prose-base prose-gray break-words",
				children: /* @__PURE__ */ jsxs(RevealSection, { children: [
					/* @__PURE__ */ jsx("h2", { children: "1. Datenschutz auf einen Blick" }),
					/* @__PURE__ */ jsx("h3", { children: "Allgemeine Hinweise" }),
					/* @__PURE__ */ jsx("p", { children: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung." }),
					/* @__PURE__ */ jsx("h3", { children: "Datenerfassung auf dieser Website" }),
					/* @__PURE__ */ jsxs("p", { children: [
						/* @__PURE__ */ jsx("strong", { children: "Wer ist verantwortlich für die Datenerfassung auf dieser Website?" }),
						/* @__PURE__ */ jsx("br", {}),
						"Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen."
					] }),
					/* @__PURE__ */ jsxs("p", { children: [
						/* @__PURE__ */ jsx("strong", { children: "Wie erfassen wir Ihre Daten?" }),
						/* @__PURE__ */ jsx("br", {}),
						"Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.\xA0B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.\xA0B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten."
					] }),
					/* @__PURE__ */ jsxs("p", { children: [
						/* @__PURE__ */ jsx("strong", { children: "Wofür nutzen wir Ihre Daten?" }),
						/* @__PURE__ */ jsx("br", {}),
						"Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden."
					] }),
					/* @__PURE__ */ jsx("h2", { children: "2. Hosting" }),
					/* @__PURE__ */ jsx("p", { children: "Wir hosten die Inhalte unserer Website bei folgendem Anbieter:" }),
					/* @__PURE__ */ jsx("h3", { children: "Vercel" }),
					/* @__PURE__ */ jsx("p", { children: "Anbieter ist die Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA (nachfolgend Vercel). Vercel ist eine Plattform zum Hosting und zur Bereitstellung von Websites. Wenn Sie unsere Website besuchen, werden Daten auf den Servern von Vercel verarbeitet. Hierbei kann es sich auch um die Übermittlung von personenbezogenen Daten in die USA handeln." }),
					/* @__PURE__ */ jsx("p", { children: "Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar." }),
					/* @__PURE__ */ jsxs("p", { children: [
						"Details entnehmen Sie der Datenschutzerklärung von Vercel: ",
						/* @__PURE__ */ jsx("a", {
							href: "https://vercel.com/legal/privacy",
							target: "_blank",
							rel: "noopener noreferrer",
							children: "https://vercel.com/legal/privacy"
						}),
						"."
					] }),
					/* @__PURE__ */ jsx("h2", { children: "3. Allgemeine Hinweise und Pflichtinformationen" }),
					/* @__PURE__ */ jsx("h3", { children: "Datenschutz" }),
					/* @__PURE__ */ jsx("p", { children: "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung." }),
					/* @__PURE__ */ jsx("p", { children: "Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Diese Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht." }),
					/* @__PURE__ */ jsx("h3", { children: "Hinweis zur verantwortlichen Stelle" }),
					/* @__PURE__ */ jsx("p", { children: "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:" }),
					/* @__PURE__ */ jsxs("p", { children: [
						contactDetails.businessName,
						/* @__PURE__ */ jsx("br", {}),
						contactDetails.ownerName,
						/* @__PURE__ */ jsx("br", {}),
						contactDetails.addressLine1,
						/* @__PURE__ */ jsx("br", {}),
						contactDetails.addressLine2
					] }),
					/* @__PURE__ */ jsxs("p", { children: [
						"Telefon: ",
						contactDetails.phoneDisplay,
						/* @__PURE__ */ jsx("br", {}),
						"E-Mail: ",
						contactDetails.email
					] }),
					/* @__PURE__ */ jsx("p", { children: "Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.\xA0B. Namen, E-Mail-Adressen o. Ä.) entscheidet." }),
					/* @__PURE__ */ jsx("h3", { children: "Speicherdauer" }),
					/* @__PURE__ */ jsx("p", { children: "Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.\xA0B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe." }),
					/* @__PURE__ */ jsx("h3", { children: "Ihre Rechte als betroffene Person" }),
					/* @__PURE__ */ jsx("p", { children: "Sie haben jederzeit das Recht:" }),
					/* @__PURE__ */ jsxs("ul", { children: [
						/* @__PURE__ */ jsx("li", { children: "Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)." }),
						/* @__PURE__ */ jsx("li", { children: "Die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen (Art. 16 DSGVO)." }),
						/* @__PURE__ */ jsx("li", { children: "Die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen (Art. 17 DSGVO)." }),
						/* @__PURE__ */ jsx("li", { children: "Die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen (Art. 18 DSGVO)." }),
						/* @__PURE__ */ jsx("li", { children: "Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten (Art. 20 DSGVO)." }),
						/* @__PURE__ */ jsx("li", { children: "Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen (Art. 21 DSGVO)." })
					] }),
					/* @__PURE__ */ jsx("h3", { children: "Beschwerderecht bei der zuständigen Aufsichtsbehörde" }),
					/* @__PURE__ */ jsx("p", { children: "Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. In Sachsen ist dies der:" }),
					/* @__PURE__ */ jsxs("p", { children: [
						/* @__PURE__ */ jsx("strong", { children: "Sächsische Datenschutz- und Transparenzbeauftragte" }),
						/* @__PURE__ */ jsx("br", {}),
						"Devrientstraße 5, 01067 Dresden",
						/* @__PURE__ */ jsx("br", {}),
						"Website: ",
						/* @__PURE__ */ jsx("a", {
							href: "https://www.saechsptb.sachsen.de",
							target: "_blank",
							rel: "noopener noreferrer",
							children: "www.saechsptb.sachsen.de"
						})
					] }),
					/* @__PURE__ */ jsx("h2", { children: "4. Datenerfassung auf dieser Website" }),
					/* @__PURE__ */ jsx("h3", { children: "Server-Log-Dateien" }),
					/* @__PURE__ */ jsx("p", { children: "Der Hoster der Seiten (Vercel) erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:" }),
					/* @__PURE__ */ jsxs("ul", { children: [
						/* @__PURE__ */ jsx("li", { children: "Browsertyp und Browserversion" }),
						/* @__PURE__ */ jsx("li", { children: "verwendetes Betriebssystem" }),
						/* @__PURE__ */ jsx("li", { children: "Referrer URL" }),
						/* @__PURE__ */ jsx("li", { children: "Hostname des zugreifenden Rechners" }),
						/* @__PURE__ */ jsx("li", { children: "Uhrzeit der Serveranfrage" }),
						/* @__PURE__ */ jsx("li", { children: "IP-Adresse" })
					] }),
					/* @__PURE__ */ jsx("p", { children: "Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet sowie unser berechtigtes Interesse an der technischen Optimierung der Website." }),
					/* @__PURE__ */ jsx("h3", { children: "Kontaktformular" }),
					/* @__PURE__ */ jsx("p", { children: "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter." }),
					/* @__PURE__ */ jsx("p", { children: "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) falls diese abgefragt wurde." }),
					/* @__PURE__ */ jsxs("p", { children: [
						/* @__PURE__ */ jsx("strong", { children: "FormSubmit.co" }),
						/* @__PURE__ */ jsx("br", {}),
						"Für den Versand der Formulardaten nutzen wir den Dienst FormSubmit.co (Anbieter: FormSubmit, USA). Ihre Daten werden dabei sicher verschlüsselt an diesen Dienst übertragen, der die E-Mail an uns zustellt. FormSubmit speichert Ihre Daten nicht dauerhaft über den Versandzeitpunkt hinaus."
					] }),
					/* @__PURE__ */ jsx("h3", { children: "Google Fonts (Lokales Hosting)" }),
					/* @__PURE__ */ jsx("p", { children: "Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts. Diese werden lokal auf unserem Server gehostet. Eine Verbindung zu Servern von Google findet nicht statt. Somit werden keine IP-Adressen an Google übertragen." }),
					/* @__PURE__ */ jsx("h3", { children: "Google Maps (2-Klick-Lösung)" }),
					/* @__PURE__ */ jsx("p", { children: "Wir nutzen auf dieser Website Google Maps. Erst wenn Sie die Karte aktiv durch Klick auf den Platzhalter laden, wird eine Verbindung zu den Servern von Google hergestellt. Dabei wird Ihre IP-Adresse an Google übertragen. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland." }),
					/* @__PURE__ */ jsx("h3", { children: "WhatsApp" }),
					/* @__PURE__ */ jsx("p", { children: "Wenn Sie den WhatsApp-Link auf dieser Website nutzen, werden Sie zu einem Angebot der WhatsApp Ireland Limited weitergeleitet. Dabei können personenbezogene Daten wie Ihre IP-Adresse oder Meta-Daten der Verbindung verarbeitet werden. Die Nutzung erfolgt auf Grundlage Ihrer freiwilligen Entscheidung, uns über diesen Kanal zu kontaktieren (Art. 6 Abs. 1 lit. a DSGVO)." })
				] })
			})
		})
	] });
}
//#endregion
//#region src/App.jsx
function ScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
}
function NotFound() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: "Seite nicht gefunden",
		description: "Die angeforderte Seite wurde nicht gefunden.",
		path: "/404",
		noindex: true
	}), /* @__PURE__ */ jsx("section", {
		className: "min-h-[70vh] bg-gray-50 pt-40 sm:pt-48 md:pt-52 pb-20",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-3xl mx-auto px-4 text-center",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "text-3xl sm:text-4xl md:text-5xl font-900 text-charcoal mb-6",
					children: "Diese Seite gibt es nicht mehr"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-gray-500 mb-8",
					children: "Kein Problem — hier finden Sie alles Wichtige direkt:"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap justify-center gap-4",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							className: "btn-primary",
							children: "Zur Startseite"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/leistungen",
							className: "btn-primary",
							children: "Unsere Leistungen"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/kontakt",
							className: "btn-primary",
							children: "Kontakt aufnehmen"
						})
					]
				})
			]
		})
	})] });
}
function App() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen overflow-x-hidden",
		children: [
			/* @__PURE__ */ jsx(ScrollToTop, {}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("main", {
				className: "overflow-x-hidden",
				children: /* @__PURE__ */ jsxs(Routes, { children: [
					/* @__PURE__ */ jsx(Route, {
						path: "/",
						element: /* @__PURE__ */ jsx(Home$1, {})
					}),
					/* @__PURE__ */ jsx(Route, {
						path: "/leistungen",
						element: /* @__PURE__ */ jsx(Leistungen, {})
					}),
					/* @__PURE__ */ jsx(Route, {
						path: "/leistungen/:slug",
						element: /* @__PURE__ */ jsx(LeistungDetail, {})
					}),
					/* @__PURE__ */ jsx(Route, {
						path: "/referenzen",
						element: /* @__PURE__ */ jsx(Referenzen, {})
					}),
					/* @__PURE__ */ jsx(Route, {
						path: "/ueber-uns",
						element: /* @__PURE__ */ jsx(UeberUns, {})
					}),
					/* @__PURE__ */ jsx(Route, {
						path: "/ratgeber",
						element: /* @__PURE__ */ jsx(Ratgeber, {})
					}),
					/* @__PURE__ */ jsx(Route, {
						path: "/ratgeber/:slug",
						element: /* @__PURE__ */ jsx(RatgeberDetail, {})
					}),
					/* @__PURE__ */ jsx(Route, {
						path: "/standorte/:slug",
						element: /* @__PURE__ */ jsx(StandortDetail, {})
					}),
					/* @__PURE__ */ jsx(Route, {
						path: "/kontakt",
						element: /* @__PURE__ */ jsx(Kontakt, {})
					}),
					/* @__PURE__ */ jsx(Route, {
						path: "/impressum",
						element: /* @__PURE__ */ jsx(Impressum, {})
					}),
					/* @__PURE__ */ jsx(Route, {
						path: "/datenschutz",
						element: /* @__PURE__ */ jsx(Datenschutz, {})
					}),
					/* @__PURE__ */ jsx(Route, {
						path: "*",
						element: /* @__PURE__ */ jsx(NotFound, {})
					})
				] })
			}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(FloatingActions, {})
		]
	});
}
//#endregion
//#region src/entry-server.jsx
function render(url) {
	const helmetContext = {};
	return {
		html: renderToString(/* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(HelmetProvider, {
			context: helmetContext,
			children: /* @__PURE__ */ jsx(StaticRouter, {
				location: url,
				children: /* @__PURE__ */ jsx(App, {})
			})
		}) })),
		helmet: helmetContext.helmet
	};
}
//#endregion
export { articleSlugs, render };
