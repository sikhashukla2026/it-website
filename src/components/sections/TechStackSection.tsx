"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";

const technologies = [
  { name: "Next.js", color: "from-gray-700 to-gray-900 dark:from-gray-200 dark:to-white" },
  { name: "React.js", color: "from-cyan-400 to-blue-500" },
  { name: "Node.js", color: "from-green-500 to-emerald-600" },
  { name: "Python", color: "from-yellow-400 to-blue-500" },
  { name: "Django", color: "from-green-700 to-green-900" },
  { name: "FastAPI", color: "from-teal-400 to-emerald-500" },
  { name: "MongoDB", color: "from-green-500 to-green-700" },
  { name: "PostgreSQL", color: "from-blue-400 to-blue-600" },
  { name: "MySQL", color: "from-blue-500 to-orange-500" },
  { name: "AWS", color: "from-orange-400 to-yellow-500" },
  { name: "Docker", color: "from-blue-400 to-cyan-500" },
  { name: "Kubernetes", color: "from-blue-500 to-blue-700" },
  { name: "Firebase", color: "from-yellow-400 to-orange-500" },
  { name: "Tailwind CSS", color: "from-cyan-400 to-blue-500" },
  { name: "TypeScript", color: "from-blue-500 to-blue-700" },
];

export function TechStackSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <Container>
        <SectionHeading
          badge="OUR TOOLS"
          title="Modern Technology Stack"
          subtitle="We leverage the latest frameworks and cloud platforms to build robust, scalable, and secure applications."
        />

        <div className="relative flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {/* Abstract background blur */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md bg-primary/10 rounded-full blur-[100px] -z-10"
          ></motion.div>
          
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.04, duration: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ 
                scale: 1.12, 
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 15 }
              }}
              className="group glass-card px-6 py-4 rounded-xl border border-white/10 flex items-center justify-center font-medium text-foreground hover:border-primary/40 transition-all duration-300 shadow-sm cursor-pointer relative overflow-hidden"
            >
              {/* Hover gradient fill */}
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Shimmer on hover */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <span className="relative z-10">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
