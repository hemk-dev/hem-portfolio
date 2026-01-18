"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import experienceData from "@/content/data/experience.json";
import { ExperienceData, CaseStudyProject } from "@/lib/types";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Briefcase,
  Target,
  Shield,
  Database,
  Layers,
  CheckCircle,
} from "lucide-react";

const data = experienceData as ExperienceData;

interface ProjectCardProps {
  project: CaseStudyProject;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-gray-300 hover:shadow-lg">
      {/* Header - Always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left flex items-start justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900">
                {project.title}
              </h4>
              <p className="text-sm text-gray-500">{project.subtitle}</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            {project.impact}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>
        <div className="flex-shrink-0 mt-1">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>

      {/* Expanded content */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-100">
          <div className="mt-6 space-y-6">
            {/* Business Problem */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-blue-600" />
                <h5 className="font-semibold text-gray-900">Business Problem</h5>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-7">
                {project.businessProblem}
              </p>
            </div>

            {/* Architecture Overview */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-5 h-5 text-blue-600" />
                <h5 className="font-semibold text-gray-900">Architecture Overview</h5>
              </div>
              <ul className="space-y-2 pl-7">
                {project.architectureOverview.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Features */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <h5 className="font-semibold text-gray-900">Key Features</h5>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-7">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <h6 className="font-medium text-gray-900 text-sm mb-1">
                      {feature.title}
                    </h6>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Considerations */}
            {project.securityConsiderations && project.securityConsiderations.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <h5 className="font-semibold text-gray-900">Security Considerations</h5>
                </div>
                <ul className="space-y-2 pl-7">
                  {project.securityConsiderations.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Database Decisions */}
            {project.databaseDecisions && project.databaseDecisions.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Database className="w-5 h-5 text-blue-600" />
                  <h5 className="font-semibold text-gray-900">Database Decisions</h5>
                </div>
                <ul className="space-y-2 pl-7">
                  {project.databaseDecisions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* All Technologies */}
            <div className="pt-4 border-t border-gray-100">
              <h5 className="font-semibold text-gray-900 mb-3">Technologies Used</h5>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <Section 
      id="experience" 
      title="Experience" 
      subtitle="Professional journey and case studies showcasing real-world problem-solving and technical expertise."
      className="bg-white"
    >
      <div className="space-y-16">
        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Work Experience
          </h3>
          <div className="space-y-8">
            {data.workExperience.map((exp, idx) => (
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
                <Card hover className="mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      {exp.role}
                    </h4>
                    <p className="text-lg text-gray-700 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500">
                      {exp.duration}
                      {exp.location && ` • ${exp.location}`}
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-4">
                  {exp.achievements.map((achievement, aIdx) => (
                    <div key={aIdx} className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900 mb-1">
                        {achievement.category}
                      </h5>
                      <p className="text-gray-700 mb-2">
                        {achievement.description}
                      </p>
                      <p className="text-sm text-gray-600 italic">
                        Impact: {achievement.impact}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
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
        </motion.div>

        {/* Case Study Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Case Study Projects
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Detailed breakdowns of production systems I&apos;ve designed and built,
            showcasing architecture decisions and real-world problem solving.
          </p>
          <div className="space-y-6">
            {data.caseStudyProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
