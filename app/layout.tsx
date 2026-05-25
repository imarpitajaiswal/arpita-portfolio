import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arpita Jaiswal | AI/ML Engineer",
  description: "Portfolio of Arpita Jaiswal, an AI/ML Engineer specializing in LLMs, RAG architectures, and scalable software solutions.",
  authors: [{ name: "Arpita Jaiswal" }],
  openGraph: {
    title: "Arpita Jaiswal | AI/ML Engineer",
    description: "AI/ML Engineer & Software Developer bridging the gap between research and enterprise applications.",
    type: "website",
    url: "https://arpita-portfolio-puce.vercel.app", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}