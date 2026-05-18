"use client";

import * as React from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Extract numeric part and suffix (e.g., "250+" -> 250, "+")
  const numericMatch = value.match(/^(\d+)(.*)$/);
  const targetNum = numericMatch ? parseInt(numericMatch[1]) : 0;
  const suffix = numericMatch ? numericMatch[2] : value;
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = React.useState("0");

  React.useEffect(() => {
    if (isInView && numericMatch) {
      const controls = animate(count, targetNum, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      });
      
      const unsubscribe = rounded.on("change", (v) => {
        setDisplayValue(String(v));
      });
      
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, targetNum, count, rounded, numericMatch]);

  if (!numericMatch) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {isInView ? displayValue : "0"}{suffix}
    </span>
  );
}
