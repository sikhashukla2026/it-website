"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { AnimatedCounter } from "../common/AnimatedCounter";
import { slideInRight, slideInLeft } from "@/lib/animations";
import { CheckCircle2, TrendingUp, Users, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "../common/MagneticButton";

const stats = [
  { label: "Projects Delivered", value: "250+", icon: Target },
  { label: "Happy Clients", value: "100+", icon: Users },
  { label: "Years Experience", value: "10+", icon: TrendingUp },
  { label: "Awards Won", value: "35+", icon: Award },
];

const highlights = [
  "Agile Development Process",
  "Dedicated IT Support",
  "Scalable Architecture",
  "Security-First Approach"
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] -z-10"></div>
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-primary/15 to-blue-500/15 text-primary w-fit border border-primary/25 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.1)] items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              WHO WE ARE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.2]">
              Innovating the Future of{" "}
              <span className="text-gradient">Digital Enterprises</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At TechNova, we believe in the power of technology to transform businesses. Our mission is to bridge the gap between complex technical challenges and elegant, scalable solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              With a team of seasoned engineers, designers, and strategists, we don't just write code—we build digital ecosystems that drive real business value and growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <MagneticButton>
                <Button size="lg" className="rounded-full px-8 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all transform hover:-translate-y-1 border-0">Learn More About Us</Button>
              </MagneticButton>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                alt="Team working" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Shimmer effect overlay */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Floating Stats Cards - Now with AnimatedCounter */}
            <div className="absolute -bottom-8 -left-8 right-8 grid grid-cols-4 gap-3">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={i}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.4, type: "spring", stiffness: 200 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="glass-card bg-background/90 p-3 md:p-4 rounded-xl shadow-xl flex flex-col items-center justify-center text-center border-t border-white/20 backdrop-blur-lg"
                  >
                    <Icon className="w-5 h-5 text-primary mb-1.5" />
                    <AnimatedCounter value={stat.value} className="text-xl md:text-2xl font-extrabold text-foreground" />
                    <div className="text-[10px] md:text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
