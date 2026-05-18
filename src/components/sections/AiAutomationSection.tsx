"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { fadeUp, slideInRight } from "@/lib/animations";
import { Bot, Sparkles, Workflow, LineChart, Zap, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "../common/MagneticButton";

const features = [
  { icon: Bot, title: "Intelligent Chatbots", desc: "24/7 customer support automation.", color: "from-blue-500 to-blue-700" },
  { icon: Workflow, title: "Process Automation", desc: "Streamline complex business logic.", color: "from-violet-500 to-purple-600" },
  { icon: BrainCircuit, title: "LLM Integration", desc: "Custom fine-tuned AI models.", color: "from-cyan-500 to-teal-600" },
  { icon: LineChart, title: "Predictive Analytics", desc: "Data-driven business forecasting.", color: "from-emerald-500 to-green-600" },
];

export function AiAutomationSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950 text-slate-50 dark:bg-background border-y border-white/10 dark:border-border">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Glowing Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{ left: `${10 + i * 12}%`, top: `${20 + (i % 3) * 25}%` }}
        />
      ))}

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <motion.div 
              className="inline-flex px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-500/10 text-blue-400 w-fit border border-blue-500/20 items-center gap-2"
              animate={{ boxShadow: ["0 0 0px rgba(59,130,246,0)", "0 0 20px rgba(59,130,246,0.3)", "0 0 0px rgba(59,130,246,0)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" /> FUTURE READY
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.2]">
              Supercharge Operations with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 glow-text">AI Automation</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              We integrate cutting-edge artificial intelligence and Large Language Models (LLMs) into your existing workflows to automate repetitive tasks, extract insights, and elevate customer experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={i} 
                    className="flex flex-col gap-2 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </motion.div>
                )
              })}
            </div>

            <div className="pt-6">
              <MagneticButton>
                <Button size="lg" className="rounded-full px-8 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white border-0 shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all hover:-translate-y-1 gap-2">
                  <Zap className="w-4 h-4" /> Explore AI Solutions
                </Button>
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
            {/* Futuristic UI Mockup */}
            <motion.div 
              className="relative glass-card bg-slate-900/50 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-md"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Gradient border top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500"></div>
              
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Bot className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-sm">TechNova AI Agent</div>
                    <div className="text-xs text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                      Online
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-8 h-8 rounded-full bg-slate-800 shrink-0"></div>
                  <div className="bg-slate-800 rounded-2xl rounded-tl-sm p-3 text-sm text-slate-300">
                    Analyze the Q3 sales data and generate a predictive model for Q4.
                  </div>
                </motion.div>
                <motion.div 
                  className="flex gap-4 flex-row-reverse"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shrink-0 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-blue-600/20 border border-blue-500/30 rounded-2xl rounded-tr-sm p-4 text-sm text-slate-200">
                    <p className="mb-2">Analysis complete. Based on historical trends and current market indicators:</p>
                    <ul className="space-y-1.5 list-none pl-0 text-cyan-200">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>Projected Q4 revenue increase: 22%</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>High-growth segment: Enterprise SaaS</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>Recommended action: Increase marketing spend by 15%</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
              
              <div className="relative">
                <input 
                  type="text" 
                  disabled
                  placeholder="Processing automation sequence..." 
                  className="w-full bg-slate-950 border border-white/10 rounded-full px-4 py-3 text-sm text-slate-500 pr-12"
                />
                <motion.div 
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.4)]"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </motion.div>
              </div>
            </motion.div>

            {/* Orbiting ring decoration */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-dashed border-blue-500/10 rounded-2xl pointer-events-none"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
