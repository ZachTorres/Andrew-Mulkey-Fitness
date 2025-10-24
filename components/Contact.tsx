"use client";

import { useState } from "react";
import { FaEnvelope, FaInstagram, FaTiktok, FaYoutube, FaCheckCircle } from "react-icons/fa";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-uga-black mb-4">
              Let's Build Your Program
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to take the first step? Reach out and let's talk about your goals. I personally review every message and will get back to you within 24 hours.
            </p>
            <div className="w-24 h-1 bg-uga-red mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-heading font-bold text-uga-black mb-6">
                Message Andrew Directly
              </h3>

              {formStatus === 'success' ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                  <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-heading font-bold text-green-700 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-green-600">
                    Thanks for reaching out! I'll personally review your message and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-uga-red focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-uga-red focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-uga-red focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-sm font-semibold text-gray-700 mb-2">
                      What are your fitness goals? *
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      required
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-uga-red focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your goals, current fitness level, and what you're looking for in a coach..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-uga-red text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all hover:scale-105 shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-heading font-bold text-uga-black mb-6">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-uga-red/10 rounded-lg flex items-center justify-center">
                      <FaEnvelope className="w-6 h-6 text-uga-red" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-uga-black mb-1">Email</h4>
                      <a
                        href="mailto:andrew@mulkeyfitness.com"
                        className="text-gray-600 hover:text-uga-red transition-colors"
                      >
                        andrew@mulkeyfitness.com
                      </a>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-uga-black mb-4">Follow My Journey</h4>
                    <div className="flex gap-4">
                      <a
                        href="https://www.instagram.com/andrewmulkeycoach/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                        aria-label="Instagram"
                      >
                        <FaInstagram className="w-6 h-6" />
                      </a>
                      <a
                        href="https://www.tiktok.com/@andrew.mulkey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                        aria-label="TikTok"
                      >
                        <FaTiktok className="w-6 h-6" />
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UCt_qkqdYfJ4JOLL5voOlXAg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                        aria-label="YouTube"
                      >
                        <FaYoutube className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-uga-red to-uga-black rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Ready to Commit?
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Transforming your body takes dedication, consistency, and expert guidance. I'm here to provide all three. Let's build something great together.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Personalized programming</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Ongoing support & accountability</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Sustainable, science-based results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
