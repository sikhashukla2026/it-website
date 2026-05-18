"use client";

import * as React from "react";
import { motion } from "framer-motion";

function Particle({ delay, size, x, y, duration }: { delay: number; size: number; x: string; y: string; duration: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-primary/30"
      style={{ width: size, height: size, left: x, top: y }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        opacity: [0, 0.8, 0],
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

export function ParticleField() {
  const particles = React.useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      delay: (i * 0.3) % 5,
      size: Math.random() * 4 + 2,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      duration: Math.random() * 4 + 4,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {particles.map((p) => (
        <Particle key={p.id} {...p} />
      ))}
    </div>
  );
}
