"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Globe, Cloud, Database, Search, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  code: Code,
  globe: Globe,
  cloud: Cloud,
  database: Database,
  search: Search,
  settings: Settings,
};

interface Service {
  title: string;
  icon: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: "code",
    title: "API Development",
    description: "Build robust RESTful APIs and GraphQL endpoints with proper authentication, validation, and documentation.",
    features: [
      "REST & GraphQL APIs",
      "Authentication & Security",
      "API Documentation",
      "Rate Limiting"
    ]
  },
  {
    icon: "globe",
    title: "Full-stack Web Apps",
    description: "Create complete web applications from database design to user interface with modern technologies.",
    features: [
      "React/Next.js Frontend",
      "Node.js Backend",
      "Database Design",
      "Responsive UI/UX"
    ]
  },
  {
    icon: "cloud",
    title: "AWS Deployments",
    description: "Deploy and scale your applications on AWS with best practices for security and performance.",
    features: [
      "EC2 & Lambda",
      "RDS & DynamoDB",
      "S3 & CloudFront",
      "CI/CD Pipelines"
    ]
  },
  {
    icon: "database",
    title: "Database Solutions",
    description: "Design and optimize databases for performance, scalability, and data integrity.",
    features: [
      "Database Design",
      "Query Optimization",
      "Data Migration",
      "Backup Strategies"
    ]
  },
  {
    icon: "search",
    title: "Code Review & Consulting",
    description: "Provide expert code reviews, architecture guidance, and technical consulting services.",
    features: [
      "Code Review",
      "Architecture Design",
      "Performance Optimization",
      "Best Practices"
    ]
  },
  {
    icon: "settings",
    title: "Ongoing Maintenance & Responsibility",
    description: "Continuous support, updates, monitoring, and management — taking long-term responsibility for your digital presence.",
    features: [
      "Continuous Support",
      "Regular Updates & Patches",
      "System Monitoring",
      "Long-term Management"
    ]
  },
];

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none none",
            },
            y: 60,
            opacity: 0,
            duration: 1,
            delay: index * 0.1,
            ease: "power4.out",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Services
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <CardSpotlight
                key={service.title}
                className="p-6 cursor-pointer rounded-md"
                radius={350}
                color="#262626"
              >
                <div ref={(el) => { cardsRef.current[index] = el; }} className="relative z-20">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-neutral-200 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-3 list-none">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <CheckIcon />
                        <p className="text-white text-sm">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardSpotlight>
            );
          })}
        </div>
      </div>
    </section>
  );
}
