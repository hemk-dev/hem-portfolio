"use client";

import Section from "@/components/ui/Section";
import testimonialsData from "@/content/data/testimonials.json";
import { Testimonial } from "@/lib/types";
import { User, Quote } from "lucide-react";
import { motion } from "framer-motion";

const data = testimonialsData as { testimonials: Testimonial[] };

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      title="Testimonials"
      subtitle="Developing solutions trusted by businesses"
      className="bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1] as const,
              }}
              whileHover={{
                y: -8,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              className="group relative bg-white rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:border-gray-300 hover:shadow-xl"
            >
              {/* Spotlight gradient effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-blue-50/30 via-transparent to-transparent" />
              
              <div className="relative z-10">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                  <User className="w-6 h-6 text-gray-400" />
                </div>
                
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-gray-200 mb-4" />
                
                {/* Testimonial content */}
                <p className="text-gray-600 leading-relaxed mb-6 text-base">
                  {testimonial.quote}
                </p>
                
                {/* Author info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <span className="text-gray-400 text-sm">By</span>
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <User className="w-3 h-3 text-gray-400" />
                  </div>
                  <div>
                    <span className="text-gray-900 font-semibold">
                      {testimonial.author}
                    </span>
                    {testimonial.role && testimonial.company && (
                      <span className="text-gray-500 text-sm ml-2">
                        {testimonial.role}, {testimonial.company}
                      </span>
                    )}
                    {testimonial.role && !testimonial.company && (
                      <span className="text-gray-500 text-sm ml-2">
                        {testimonial.role}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
