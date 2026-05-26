import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Arpita Jaiswal | AI Engineer",
  description: "Portfolio of Arpita Jaiswal, an AI Engineer and Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white`}>
        <main className="relative w-full flex flex-col items-center justify-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}