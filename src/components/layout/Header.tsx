"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X, Cpu, Sparkles } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-3"
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <motion.div 
            className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-shadow duration-300"
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Cpu className="w-5 h-5 text-white" />
          </motion.div>
          <span className="font-bold text-xl tracking-tight">Tech<span className="text-gradient">Nova</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              {link.name}
              {/* Animated underline */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button className="rounded-full px-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white border-0 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all" asChild>
              <Link href="#contact" className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Get Consultation
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, height: "auto", backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-background/90 backdrop-blur-xl border-b border-white/10 px-4 py-4 overflow-hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block text-sm font-medium text-muted-foreground hover:text-foreground py-3 px-4 rounded-xl hover:bg-muted/50 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Button className="w-full mt-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0" asChild onClick={() => setMobileMenuOpen(false)}>
                  <Link href="#contact">Get Consultation</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
