"use client";

import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-uga-red/90 via-uga-black/80 to-uga-black/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070')] bg-cover bg-center"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-uga-red text-xl sm:text-2xl font-semibold mb-4">
              Hi, I'm Andrew Mulkey
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Your Partner in Building
              <br />
              <span className="text-uga-red">Sustainable Strength</span>
            </h1>
          </div>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            I help driven individuals transform their bodies through personalized coaching, science-backed training, and a commitment to your long-term success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="bg-uga-red text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all hover:scale-105 shadow-xl"
            >
              Work With Me
            </a>
            <a
              href="#services"
              className="bg-white text-uga-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              My Programs
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/andrewmulkeycoach/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-uga-red transition-colors transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram className="w-8 h-8" />
            </a>
            <a
              href="https://www.tiktok.com/@andrew.mulkey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-uga-red transition-colors transform hover:scale-110"
              aria-label="TikTok"
            >
              <FaTiktok className="w-8 h-8" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCt_qkqdYfJ4JOLL5voOlXAg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-uga-red transition-colors transform hover:scale-110"
              aria-label="YouTube"
            >
              <FaYoutube className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <a href="#about" className="text-white animate-bounce block">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
