"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { pricing } from "@/data/pricing";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10"></div>
      
      <Container>
        <SectionHeading
          badge="PACKAGES"
          title="Transparent Pricing for Every Stage"
          subtitle="Whether you're a startup or an enterprise, we have scalable solutions to fit your budget and goals."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl p-8 flex flex-col overflow-hidden transition-all duration-500 ${
                plan.popular 
                  ? "glass-card border-primary/40 shadow-[0_0_40px_rgba(59,130,246,0.15)] scale-105 z-10" 
                  : "glass-card border-border hover:border-primary/20"
              }`}
            >
              {/* Popular plan glow */}
              {plan.popular && (
                <>
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[60px] pointer-events-none"></div>
                  <motion.div 
                    className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-3 h-3" /> POPULAR
                  </motion.div>
                </>
              )}

              {/* Shimmer effect for popular */}
              {plan.popular && (
                <div className="absolute inset-0 shimmer pointer-events-none"></div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 h-10">{plan.description}</p>
              
              <div className="mb-8">
                <span className={`text-5xl font-extrabold ${plan.popular ? "text-gradient" : ""}`}>{plan.price}</span>
                <span className="text-muted-foreground ml-2 text-sm">/ {plan.duration}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fi) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-start gap-3 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: fi * 0.05 + 0.3 }}
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? "bg-primary/20" : "bg-muted"}`}>
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "default" : "outline"} 
                size="lg" 
                className={`w-full transition-all duration-300 ${
                  plan.popular 
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white border-0 shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] hover:-translate-y-0.5" 
                    : "hover:border-primary/30 hover:-translate-y-0.5"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
