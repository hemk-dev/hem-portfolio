"use client";

import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 100; // Account for sticky nav height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer id="contact" className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-lg text-gray-700">
              Open to backend opportunities, freelance projects, and startup collaborations.
            </p>
            <p className="text-lg text-gray-700 mt-2">
              Let&apos;s connect and see how I can contribute.
            </p>
          </motion.div>

          {/* Get in Touch Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <motion.a
                href="mailto:hemk.dev@gmail.com"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex items-center text-blue-600 hover:text-blue-700 transition-colors group"
              >
                <Mail className="w-5 h-5 text-gray-600 mr-3 group-hover:text-blue-600 transition-colors" />
                <span>hemk.dev@gmail.com</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/hem-kamli/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex items-center text-blue-600 hover:text-blue-700 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-gray-600 mr-3 group-hover:text-blue-600 transition-colors" />
                <span>LinkedIn Profile</span>
              </motion.a>

              <motion.a
                href="https://github.com/hemk-dev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex items-center text-blue-600 hover:text-blue-700 transition-colors group"
              >
                <Github className="w-5 h-5 text-gray-600 mr-3 group-hover:text-blue-600 transition-colors" />
                <span>GitHub Profile</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Hem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
