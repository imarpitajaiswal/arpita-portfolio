import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Optimize font loading
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Arpita Jaiswal | AI Engineer",
  description: "AI Engineer specializing in Agentic workflows, scalable LLM infrastructure, and high-performance web applications.",
  keywords: ["AI Engineer", "Full Stack Developer", "Machine Learning", "Next.js", "Python", "Arpita Jaiswal"],
  authors: [{ name: "Arpita Jaiswal" }],
  openGraph: {
    title: "Arpita Jaiswal | AI Engineer",
    description: "Architecting Intelligent Systems and scalable LLM infrastructure.",
    url: "https://arpita-portfolio-puce.vercel.app",
    siteName: "Arpita Jaiswal Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arpita Jaiswal | AI Engineer",
    description: "Architecting Intelligent Systems and scalable LLM infrastructure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#050505] text-white antialiased selection:bg-white/20 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}