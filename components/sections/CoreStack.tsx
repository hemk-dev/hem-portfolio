"use client";

import Section from "@/components/ui/Section";
import coreStackData from "@/content/data/core-stack.json";
import { CoreStackCategory } from "@/lib/types";
import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Cloud,
  Settings,
  Zap,
  Lock,
  Code,
  Box,
  Link2,
} from "lucide-react";

const data = coreStackData as { categories: CoreStackCategory[] };

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  Infrastructure: Cloud,
  Containers: Box,
  Payments: Lock,
  "Third-party Integrations": Link2,
  Deployment: Cloud,
  "CI/CD": Settings,
};

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
  description: string;
}

const organizeSkills = (): SkillCategory[] => {
  const categories: SkillCategory[] = [];

  const categoryMap: Record<string, { items: string[]; description: string }> = {};

  data.categories.forEach((category) => {
    const items = category.items.map((item) => item.name);
    
    if (category.title === "Frontend") {
      categoryMap["Frontend"] = {
        items,
        description: "Modern UI frameworks and tools for building responsive, interactive user interfaces.",
      };
    } else if (category.title === "Backend") {
      categoryMap["Backend"] = {
        items,
        description: "Server-side technologies and frameworks for building scalable APIs and services.",
      };
    } else if (category.title === "Databases") {
      categoryMap["Databases"] = {
        items,
        description: "Relational and NoSQL database systems for efficient data management and storage.",
      };
    } else if (category.title === "Payments" || category.title === "Third-party Integrations") {
      if (!categoryMap["Integrations"]) {
        categoryMap["Integrations"] = {
          items: [],
          description: "Payment gateways and third-party API integrations for seamless service connectivity.",
        };
      }
      categoryMap["Integrations"].items.push(...items);
    } else if (
      category.title === "Infrastructure" ||
      category.title === "Containers" ||
      category.title === "Deployment"
    ) {
      if (!categoryMap["Cloud & DevOps"]) {
        categoryMap["Cloud & DevOps"] = {
          items: [],
          description: "Cloud infrastructure, containerization, and deployment solutions for scalable applications.",
        };
      }
      categoryMap["Cloud & DevOps"].items.push(...items);
    } else if (category.title === "CI/CD") {
      categoryMap["Tools & CI/CD"] = {
        items,
        description: "Development tools, automation, and CI/CD pipelines for efficient workflow management.",
      };
    }
  });

  // Convert to array with icons
  Object.entries(categoryMap).forEach(([title, data]) => {
    const iconKey =
      title === "Frontend"
        ? "Frontend"
        : title === "Backend"
        ? "Backend"
        : title === "Databases"
        ? "Databases"
        : title === "Cloud & DevOps"
        ? "Infrastructure"
        : title === "Integrations"
        ? "Third-party Integrations"
        : title === "Tools & CI/CD"
        ? "CI/CD"
        : "Backend"; // Default fallback

    categories.push({
      title,
      icon: iconMap[iconKey] || Code,
      items: data.items,
      description: data.description,
    });
  });

  return categories;
};

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const SkillCard = ({ category, index }: SkillCardProps) => {
  const IconComponent = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        y: -8,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      className="group"
    >
      <div className="bg-white border border-gray-200 rounded-xl p-6 h-full transition-all duration-300 hover:border-gray-300 hover:shadow-lg">
        {/* Icon */}
        <motion.div
          className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors duration-300"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <IconComponent className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
        </motion.div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-900 transition-colors duration-300">
          {category.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">
          {category.description}
        </p>

        {/* Skills List */}
        <div className="flex flex-wrap gap-2 mt-4">
          {category.items.slice(0, 6).map((item, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.1 + idx * 0.05,
              }}
              whileHover={{ scale: 1.1 }}
              className="px-2.5 py-1 bg-gray-50 text-gray-700 text-xs rounded-md font-medium border border-gray-200 group-hover:border-gray-300 transition-colors duration-300"
            >
              {item}
            </motion.span>
          ))}
          {category.items.length > 6 && (
            <span className="px-2.5 py-1 bg-gray-50 text-gray-500 text-xs rounded-md font-medium border border-gray-200">
              +{category.items.length - 6} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function CoreStack() {
  const categories = organizeSkills();

  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Tools and technologies I work with for backend development. Used for APIs, data handling, integrations, and background processing."
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <SkillCard key={category.title} category={category} index={index} />
        ))}
      </div>
    </Section>
  );
}
