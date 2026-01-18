"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";

interface Integration {
  name: string;
  description: string;
  challenges: string[];
  solutions: string[];
  technologies: string[];
}

const integrations: Integration[] = [
  {
    name: "Hotelbeds",
    description: "Global hotel inventory and booking API integration",
    challenges: [
      "Complex authentication with token refresh mechanisms",
      "Rate limiting: 100 requests per second",
      "Large response payloads requiring pagination",
      "Data normalization across multiple hotel property types",
    ],
    solutions: [
      "Implemented token caching with automatic refresh",
      "Built request queuing system to respect rate limits",
      "Used streaming for large dataset imports",
      "Created unified data model mapping different property structures",
    ],
    technologies: ["Node.js", "PostgreSQL", "Redis"],
  },
  {
    name: "Mystifly",
    description: "Flight inventory and booking API integration",
    challenges: [
      "Real-time availability checks with strict timeout requirements",
      "Complex pricing structures with multiple fare types",
      "Booking confirmation webhook handling",
      "Handling flight cancellations and modifications",
    ],
    solutions: [
      "Implemented async request pattern with timeout handling",
      "Built pricing normalization layer for consistent display",
      "Created idempotent webhook processor",
      "Designed state machine for booking lifecycle management",
    ],
    technologies: ["Node.js", "MongoDB", "WebSockets"],
  },
  {
    name: "PKFARE",
    description: "Travel supplier API for flights and hotels",
    challenges: [
      "Large dataset synchronization (millions of records)",
      "Incremental updates vs full sync trade-offs",
      "API versioning and backward compatibility",
      "Error recovery for failed sync operations",
    ],
    solutions: [
      "Implemented chunked bulk import strategy",
      "Built incremental sync with change detection",
      "Created version adapter layer for API changes",
      "Designed retry mechanism with exponential backoff",
    ],
    technologies: ["Node.js", "PostgreSQL", "AWS S3"],
  },
];

export default function Integrations() {
  return (
    <Section 
      id="integrations" 
      title="Real-World Integrations" 
      subtitle="Experience integrating complex third-party APIs with unique challenges around authentication, rate limiting, data normalization, and large dataset synchronization."
      className="bg-white"
    >
      <div className="space-y-8">
        {integrations.map((integration, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: idx * 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <Card hover>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {integration.name}
              </h3>
              <p className="text-gray-700 mb-4">{integration.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">
                  Challenges
                </h4>
                <ul className="space-y-2">
                  {integration.challenges.map((challenge, cIdx) => (
                    <li key={cIdx} className="flex items-start">
                      <span className="text-red-600 mr-2">⚠</span>
                      <span className="text-gray-700 text-sm">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Solutions</h4>
                <ul className="space-y-2">
                  {integration.solutions.map((solution, sIdx) => (
                    <li key={sIdx} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700 text-sm">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {integration.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
