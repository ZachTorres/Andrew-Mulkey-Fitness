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
  title: "Andrew Mulkey | Personal Training & Fitness Coaching",
  description: "Transform your fitness journey with personalized training programs from Andrew Mulkey. Expert coaching, nutrition guidance, and sustainable results.",
  keywords: ["personal trainer", "fitness coach", "online training", "nutrition coaching", "Andrew Mulkey"],
  authors: [{ name: "Andrew Mulkey" }],
  openGraph: {
    title: "Andrew Mulkey | Personal Training & Fitness Coaching",
    description: "Transform your fitness journey with personalized training programs from Andrew Mulkey.",
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
