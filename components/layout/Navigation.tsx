"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const heroHeight = window.innerHeight;
          setIsScrolled(scrollPosition > heroHeight * 0.5);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Account for sticky nav height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
  ];

  return (
    <motion.nav
      className={`sticky top-4 z-50 mx-auto ${className}`}
      initial={{ width: "85%" }}
      animate={{ width: isScrolled ? "70%" : "85%" }}
      transition={{ 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smoothness
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      <motion.div
        className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 px-6 py-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 17
              }}
            >
              <span className="text-white font-bold text-lg">H</span>
            </motion.div>
            <span className="text-gray-900 font-semibold text-lg hidden sm:block group-hover:text-gray-700 transition-colors duration-300">
              Hem
            </span>
          </Link>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.href} className="relative">
                <Link
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-medium text-sm relative group"
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-gray-900 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ 
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Contact Button - Right */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 17
            }}
          >
            <Link
              href="#contact"
              onClick={(e) => handleScrollToSection(e, "#contact")}
              className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-5 py-2 rounded-full font-medium text-sm hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Contact
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
