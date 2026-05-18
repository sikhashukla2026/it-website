import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechNova | Modern IT Solutions",
  description: "Building Scalable Digital Solutions for Modern Businesses. Web, Mobile, AI, Cloud, and Cybersecurity.",
  keywords: "IT company, software development, cloud computing, AI automation, cybersecurity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen antialiased flex flex-col selection:bg-primary/20 selection:text-primary`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
