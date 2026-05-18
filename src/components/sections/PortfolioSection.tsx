"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { portfolio } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Websites", "Mobile Apps", "CRM", "ERP", "SaaS", "AI Automation"];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredPortfolio = portfolio.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 relative bg-background overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px] -z-10"></div>
      
      <Container>
        <SectionHeading
          badge="OUR WORK"
          title="Featured Case Studies"
          subtitle="Explore our portfolio of successful digital transformations and high-performance applications."
        />

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 20 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 25 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl glass-card aspect-[4/3] mb-4 border border-white/10 group-hover:border-primary/30 transition-colors duration-500">
                  {/* Hover overlay with glassmorphism */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-end justify-center pb-8 backdrop-blur-[2px]">
                    <motion.span 
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-medium flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.4)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                    >
                      <ExternalLink className="w-4 h-4" /> View Project
                    </motion.span>
                  </div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 text-xs font-semibold bg-background/80 backdrop-blur-md rounded-full shadow-lg border border-white/10">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1.5 bg-muted/80 rounded-full text-muted-foreground font-medium border border-border/50 hover:border-primary/30 hover:text-primary transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
