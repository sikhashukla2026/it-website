"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-24 relative bg-muted/30 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      
      <Container>
        <SectionHeading
          badge="CLIENT SUCCESS"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here is what leading companies have to say about working with TechNova."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl relative group transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_60px_rgba(255,255,255,0.03)] overflow-hidden"
            >
              {/* Gradient border top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors duration-500" />
              
              <div className="flex text-yellow-500 mb-6 gap-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 300 }}
                  >
                    <Star className="w-4 h-4 fill-current" />
                  </motion.div>
                ))}
              </div>
              
              <p className="text-lg italic text-muted-foreground mb-8 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300"
                  />
                  {/* Online indicator */}
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-background"></div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
