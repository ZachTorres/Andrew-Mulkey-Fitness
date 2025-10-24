import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Andrew Mulkey - Personal Trainer | Build Sustainable Strength",
  description: "I'm Andrew Mulkey, a certified personal trainer dedicated to helping you build sustainable strength through personalized coaching, science-backed training, and genuine support.",
  keywords: ["Andrew Mulkey", "personal trainer", "fitness coach", "online training", "nutrition coaching", "UGA", "strength training"],
  authors: [{ name: "Andrew Mulkey" }],
  openGraph: {
    title: "Andrew Mulkey - Personal Trainer",
    description: "Build sustainable strength with personalized coaching from Andrew Mulkey. Your partner in fitness transformation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
