"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { scaleUp, staggerContainer } from "@/lib/animations";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative bg-muted/30">
      {/* Section decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <Container>
        <SectionHeading
          badge="OUR EXPERTISE"
          title="Transforming Ideas into Digital Reality"
          subtitle="We offer end-to-end IT services designed to elevate your business in the modern digital landscape."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={scaleUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative p-8 rounded-2xl glass-card overflow-hidden transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.02)] spotlight cursor-pointer"
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl pointer-events-none"></div>
                
                {/* Shimmer line at top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col gap-4">
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-primary group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:border-transparent group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-500"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-gradient transition-all">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="pt-4 flex items-center text-sm font-medium text-primary opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Learn more <motion.span className="ml-1 inline-block" whileHover={{ x: 5 }}>→</motion.span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
