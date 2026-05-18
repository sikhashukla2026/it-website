"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { HelpCircle } from "lucide-react";

export function FaqSection() {
  return (
    <section className="py-24 relative bg-muted/30 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[120px] -z-10"></div>
      
      <Container>
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with us and our development process."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden"
        >
          {/* Gradient border top */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500"></div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <AccordionItem value={`item-${i}`} className="border-border/50">
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary transition-colors duration-300 gap-4 py-5">
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary/50 shrink-0" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  );
}
