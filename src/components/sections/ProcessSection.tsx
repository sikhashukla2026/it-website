"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { Lightbulb, PenTool, Code, TestTube, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Discovery", desc: "Understanding your business goals, target audience, and project requirements.", color: "from-amber-500 to-orange-500" },
  { icon: PenTool, title: "Design", desc: "Creating intuitive wireframes and pixel-perfect UI/UX designs.", color: "from-pink-500 to-rose-500" },
  { icon: Code, title: "Development", desc: "Building scalable architecture with modern tech stacks.", color: "from-blue-500 to-cyan-500" },
  { icon: TestTube, title: "Testing", desc: "Rigorous QA testing, security audits, and performance optimization.", color: "from-emerald-500 to-green-500" },
  { icon: Rocket, title: "Deployment", desc: "Smooth launch with zero-downtime deployment strategies.", color: "from-violet-500 to-purple-500" },
  { icon: HeartHandshake, title: "Support", desc: "Ongoing maintenance, monitoring, and continuous improvement.", color: "from-cyan-500 to-teal-500" },
];

export function ProcessSection() {
  return (
    <section className="py-24 relative bg-muted/30 overflow-hidden">
      {/* Background decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <Container>
        <SectionHeading
          badge="HOW WE WORK"
          title="Our Development Process"
          subtitle="A transparent, agile, and results-driven approach to building digital products."
        />

        <div className="relative">
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[5%] right-[5%] h-[2px] z-0 overflow-hidden">
            <div className="w-full h-full bg-border/30"></div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 flex flex-col items-center text-center group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className={`w-20 h-20 rounded-2xl glass-card border border-white/15 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:${step.color} group-hover:border-transparent transition-all duration-500 shadow-lg relative overflow-hidden`}
                  >
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300 relative z-10" />
                    
                    {/* Glow behind icon on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background border-2 border-border flex items-center justify-center text-xs font-bold shadow-md z-20 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                      {i + 1}
                    </div>
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
