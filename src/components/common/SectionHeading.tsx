"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  badge,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "flex flex-col space-y-4 mb-16",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {badge && (
        <motion.span 
          className="px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-primary/15 to-blue-500/15 text-primary border border-primary/25 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.1)] inline-flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          {badge}
        </motion.span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-[700px] leading-relaxed">
          {subtitle}
        </p>
      )}
      {/* Decorative line under heading */}
      <div className="flex items-center gap-2 pt-2">
        <div className="w-8 h-1 rounded-full bg-primary/60"></div>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-cyan-500"></div>
        <div className="w-8 h-1 rounded-full bg-cyan-500/60"></div>
      </div>
    </motion.div>
  );
}
