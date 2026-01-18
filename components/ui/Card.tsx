"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
}: CardProps) {
  const baseStyles =
    "bg-white rounded-lg border border-gray-200 p-6 shadow-sm";

  if (hover) {
    return (
      <motion.div
        className={`${baseStyles} hover:shadow-xl transition-shadow duration-300 ${className}`}
        whileHover={{
          y: -4,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
          },
        }}
        transition={{
          duration: 0.2,
          ease: [0.25, 0.1, 0.25, 1] as const,
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );
}
