"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { fadeUp, slideInRight } from "@/lib/animations";
import { Mail, Phone, MapPin, MessageSquare, Send, ArrowRight } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@technova.com", color: "from-blue-500 to-cyan-500" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", color: "from-emerald-500 to-green-500" },
  { icon: MapPin, label: "Office", value: "123 Tech Boulevard, Silicon Valley, CA 94025", color: "from-violet-500 to-purple-500" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative bg-background overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10"></div>
      
      <Container>
        <SectionHeading
          badge="GET IN TOUCH"
          title="Ready to Transform Your Business?"
          subtitle="Contact us today for a free consultation. Let's discuss how we can build scalable digital solutions for you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-8"
          >
            <div className="glass-card p-8 rounded-2xl h-full flex flex-col justify-between border-border relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                <p className="text-muted-foreground mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div 
                        key={i}
                        className="flex items-center gap-4 group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm text-muted-foreground">{item.label}</h4>
                          <p className="font-semibold">{item.value}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <Button variant="outline" className="w-full gap-2 h-12 rounded-xl hover:bg-green-500/10 hover:border-green-500/30 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300" size="lg">
                  <MessageSquare className="w-5 h-5 text-green-500" />
                  Chat on WhatsApp
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="glass-card p-8 rounded-2xl border-border relative overflow-hidden">
              {/* Decorative top gradient */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500"></div>
              
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary/50 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary/50 transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@company.com" className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary/50 transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Service Needed</label>
                  <select className="flex h-12 w-full rounded-xl border border-border/50 bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors focus:border-primary/50">
                    <option value="null" disabled >Select a service...</option>
                    <option value="web" >Web Development</option>
                    <option value="app">Mobile App Development</option>
                    <option value="ai">AI & Automation</option>
                    <option value="custom">Custom Software</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Details</label>
                  <textarea 
                    className="flex min-h-[120px] w-full rounded-xl border border-border/50 bg-background/50 px-3 py-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors focus:border-primary/50 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <Button className="w-full h-12 text-base mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white border-0 shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transition-all hover:-translate-y-0.5 gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
