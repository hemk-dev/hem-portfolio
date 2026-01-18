"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function About() {
  return (
    <Section id="about" title="About" className="bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="prose prose-lg mx-auto text-gray-700"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            className="text-lg leading-relaxed mb-6"
            variants={itemVariants}
          >
            I am a backend-focused software engineer with over 2 years of experience building and maintaining production systems used in real business environments. I am primarily concerned with the server-side logic, APIs, databases, and integrations that serve and support customer-facing applications.
          </motion.p>
          <motion.p
            className="text-lg leading-relaxed mb-6"
            variants={itemVariants}
          >
            My work involves integrating third-party services such as payment gateways and external APIs, handling background processing, and ensuring data flows correctly between systems. I&apos;ve built payment flows, recurring billing features, and backend services that interact with multiple external providers, where reliability and correctness matter more than flashy features.
          </motion.p>
          <motion.p
            className="text-lg leading-relaxed mb-6"
            variants={itemVariants}
          >
            I develop backends considering the production aspect. This means writing code that&apos;s easy to maintain, designing APIs that are predictable, designing architecture that perform great under load without unnecessary complexity. I&apos;ve worked with relational and NoSQL databases, optimized queries for performance, handled large datasets-keeping costs and system stability in check.
          </motion.p>
          <motion.p
            className="text-lg leading-relaxed"
            variants={itemVariants}
          >
            I enjoy working closely with product and frontend teams to turn real requirements into backend solutions that are simple, secure, and reliable.
          </motion.p>
        </motion.div>
      </div>
    </Section>
  );
}
