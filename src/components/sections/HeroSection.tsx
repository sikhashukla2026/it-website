"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "../common/Container";
import { MagneticButton } from "../common/MagneticButton";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ArrowRight, ShieldCheck, Globe, Sparkles } from "lucide-react";
import Link from "next/link";

function TypewriterText() {
  const words = ["Cloud Solutions", "AI Automation", "Cybersecurity", "Mobile Apps"];
  const [currentWord, setCurrentWord] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      key={currentWord}
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-gradient inline-block"
    >
      {words[currentWord]}
    </motion.span>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Extra ambient glow behind hero */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-5"></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/15 to-blue-500/15 border border-primary/25 text-primary w-fit backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">ENTERPRISE IT SOLUTIONS</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Building Scalable <br />
              <TypewriterText /> <br />
              <span className="text-foreground">for Modern Businesses</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              We engineer intelligent, secure, and high-performance software that drives business growth and digital transformation.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <MagneticButton>
                <Button size="lg" className="h-14 px-8 text-base rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] transition-all transform hover:-translate-y-1 border-0" asChild>
                  <Link href="#contact">
                    Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full bg-background/50 backdrop-blur-md border-white/15 hover:bg-white/10 hover:border-white/25 transition-all transform hover:-translate-y-1" asChild>
                  <Link href="#services">
                    View Our Services
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-6 pt-4 border-t border-border/50">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i} 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 300 }}
                    className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden ring-2 ring-background"
                  >
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-yellow-500 text-sm">
                  {"★★★★★"}
                </div>
                <span className="text-sm text-muted-foreground">Trusted by <span className="font-semibold text-foreground">500+</span> clients</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Abstract Tech Graphic / Mockup */}
            <div className="relative w-full max-w-lg aspect-square">
              {/* Outer Glow */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-violet-500/30 rounded-full blur-[100px]"
              ></motion.div>
              
              {/* Main Dashboard Card */}
              <motion.div 
                animate={{ y: [0, -15, 0], rotateX: [0, 2, 0], rotateY: [0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-4 glass-card rounded-2xl border border-white/20 overflow-hidden shadow-2xl p-6 flex flex-col gap-4 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between border-b border-border/50 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">system_status.sh</div>
                </div>
                <div className="flex-1 rounded-xl bg-black/20 dark:bg-black/40 border border-border/50 p-4 font-mono text-sm overflow-hidden relative">
                   <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.5 }}
                   >
                     <div className="text-primary mb-2">$ initialize_system --secure</div>
                   </motion.div>
                   <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 1.0 }}
                   >
                     <div className="text-muted-foreground mb-1">[OK] Firewall active</div>
                   </motion.div>
                   <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 1.5 }}
                   >
                     <div className="text-muted-foreground mb-1">[OK] Databases synced</div>
                   </motion.div>
                   <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 2.0 }}
                   >
                     <div className="text-muted-foreground mb-1">[OK] AI Models loaded</div>
                   </motion.div>
                   <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 2.5 }}
                   >
                     <div className="text-green-500 mt-4 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                       System operating at optimal capacity.
                     </div>
                   </motion.div>
                   
                   {/* Animated scan line */}
                   <motion.div 
                     animate={{ top: ["0%", "100%", "0%"] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                     className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                   />
                </div>
              </motion.div>

              {/* Floating Element 1 */}
              <motion.div
                animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 top-20 glass-card p-4 rounded-xl flex items-center gap-4 shadow-xl border border-white/15 backdrop-blur-lg"
              >
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Globe className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Global Scale</div>
                  <div className="text-xs text-muted-foreground">99.99% Uptime</div>
                </div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div
                animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -right-8 bottom-32 glass-card p-4 rounded-xl flex items-center gap-4 shadow-xl border border-white/15 backdrop-blur-lg"
              >
                <div className="bg-emerald-500/20 p-3 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Enterprise Security</div>
                  <div className="text-xs text-muted-foreground">SOC2 Compliant</div>
                </div>
              </motion.div>

              {/* Orbiting ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] border border-dashed border-primary/10 rounded-full pointer-events-none"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40px] border border-dashed border-cyan-500/10 rounded-full pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
