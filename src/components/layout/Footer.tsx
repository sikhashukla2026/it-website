import * as React from "react";
import Link from "next/link";
import { Cpu, ArrowUpRight } from "lucide-react";
import { Container } from "../common/Container";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 relative overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
      
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">Tech<span className="text-gradient">Nova</span></span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Building scalable digital solutions for modern businesses. We specialize in AI, Cloud, and custom software development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Services", "Portfolio", "Pricing"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(" ", "")}`} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {["Web Development", "Mobile Apps", "AI & Automation", "Cloud Solutions"].map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">Subscribe to our newsletter for the latest tech news and updates.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-11 w-full rounded-xl border border-border/50 bg-background/50 px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors focus:border-primary/50 flex-1"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white h-11 px-5 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="section-divider mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TechNova. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
