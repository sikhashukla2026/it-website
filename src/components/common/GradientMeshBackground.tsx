"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function GradientMeshBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Animated gradient mesh */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(6,182,212,0.1) 0%, transparent 50%)",
            "radial-gradient(ellipse at 50% 20%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(6,182,212,0.1) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 50%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(ellipse at 20% 50%, rgba(6,182,212,0.1) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(6,182,212,0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
