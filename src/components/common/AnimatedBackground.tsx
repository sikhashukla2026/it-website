"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#80808015_1px,transparent_1px)] bg-[size:16px_16px] opacity-50"></div>
      
      {/* Large Glowing Orb - Primary */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/15 dark:bg-blue-500/20 rounded-full blur-[130px]"
      />
      
      {/* Glowing Orb - Cyan */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[150px]"
      />
      
      {/* Glowing Orb - Violet accent */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-500/10 dark:bg-violet-500/15 rounded-full blur-[120px]"
      />

      {/* Animated line across the top */}
      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[20%] w-[300px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />
    </div>
  );
}
