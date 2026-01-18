"use client";

import { motion } from "framer-motion";
import { MoveRight, Mail, Circle } from "lucide-react";
import Link from "next/link";

export function AnimatedHero() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Static data to avoid JSON import issues in client component
  const projects = [
    { id: "ecommerce-stripe", title: "E-commerce API with Stripe Integration" },
    { id: "bulk-email-microservice", title: "Bulk Email Sending Microservice" },
    { id: "lambda-webhook-processor", title: "AWS Lambda Webhook Processor" },
  ];

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-20 lg:py-32 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">
                Hem 
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-xl md:text-2xl tracking-tight font-normal text-gray-600 mb-8">
                Software Engineer
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                I have more than 2 years of experience in working on the backend, ranging from APIs to databases and cloud platforms. The nature of my work is to create and manage back-end services, such as combining payment services, third-party APIs, and in-house tools used in a productive environment. The purpose is to develop back-end solutions that are reliable, safe, and feasible for daily use.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Link 
                href="#experience"
                onClick={(e) => handleScrollToSection(e, "#experience")}
                className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 text-sm font-medium border-2 border-gray-300 bg-white text-gray-900 hover:bg-gray-50 hover:border-gray-400 transition-colors"
              >
                View Projects <MoveRight className="w-4 h-4" />
              </Link>
              <Link 
                href="#contact"
                onClick={(e) => handleScrollToSection(e, "#contact")}
                className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              >
                Get in Touch <Mail className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Code Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 p-6">
              {/* Window Controls */}
              <div className="flex items-center gap-2 mb-4">
                <Circle className="w-3 h-3 text-red-500 fill-red-500" />
                <Circle className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <Circle className="w-3 h-3 text-green-500 fill-green-500" />
              </div>

              {/* Code Content */}
              <div className="bg-white rounded-xl p-6 mb-6 border border-gray-200 shadow-md">
                <pre className="text-sm font-mono leading-relaxed">
                  <code className="text-gray-800">
                    <span className="text-green-600">const</span>{" "}
                    <span className="text-gray-900">Engineer</span>{" "}
                    <span className="text-gray-900">=</span>{" "}
                    <span className="text-gray-900">{"{"}</span>
                    <br />
                    {"  "}
                    <span className="text-blue-500">name</span>
                    <span className="text-gray-900">:</span>{" "}
                    <span className="text-orange-500">&quot;Hem&quot;</span>
                    <span className="text-gray-900">,</span>
                    <br />
                    {"  "}
                    <span className="text-blue-500">skills</span>
                    <span className="text-gray-900">:</span>{" "}
                    <span className="text-gray-900">[</span>
                    <span className="text-orange-500">&quot;Node.js&quot;</span>
                    <span className="text-gray-900">, </span>
                    <span className="text-orange-500">&quot;PostgreSQL&quot;</span>
                    <span className="text-gray-900">, </span>
                    <span className="text-orange-500">&quot;AWS&quot;</span>
                    <span className="text-gray-900">],</span>
                    <br />
                    {"  "}
                    <span className="text-blue-500">passion</span>
                    <span className="text-gray-900">:</span>{" "}
                    <span className="text-orange-500">&quot;Building Backend Solutions&quot;</span>
                    <br />
                    <span className="text-gray-900">{"}"}</span>
                  </code>
                </pre>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    20+
                  </div>
                  <div className="text-gray-600 text-sm">Projects</div>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    2+
                  </div>
                  <div className="text-gray-600 text-sm">Years Exp</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
