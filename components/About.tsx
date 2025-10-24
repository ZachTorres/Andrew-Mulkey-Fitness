"use client";

import Image from "next/image";
import { FaGraduationCap, FaDumbbell, FaHeart, FaCertificate } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-uga-black mb-4">
              About Andrew
            </h2>
            <div className="w-24 h-1 bg-uga-red mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
                <Image
                  src="/images/andrew-profile.jpg"
                  alt="Andrew Mulkey - Personal Trainer"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-uga-red to-uga-black hidden items-center justify-center">
                  <div className="text-white text-center p-8">
                    <FaDumbbell className="w-32 h-32 mx-auto mb-4 opacity-50" />
                    <p className="text-2xl font-heading">Andrew Mulkey</p>
                    <p className="text-sm mt-2 opacity-75">Add photo: /public/images/andrew-profile.jpg</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-uga-red text-white p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-bold">5+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-heading font-bold text-uga-black">
                My Mission: Your Transformation
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm Andrew Mulkey, and fitness isn't just what I do—it's who I am. As a certified personal trainer and UGA alumnus, I've dedicated my career to helping people like you break through barriers and achieve what they once thought impossible.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My coaching philosophy is simple: sustainable results through personalized programming, evidence-based methods, and unwavering accountability. I don't believe in quick fixes or cookie-cutter programs. Every client gets my full attention, custom-tailored workouts, and the support needed to succeed long-term.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're getting back into fitness or pushing for your next PR, I'm here to guide you every step of the way.
              </p>

              {/* Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <FaGraduationCap className="w-6 h-6 text-uga-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-uga-black">Education</h4>
                    <p className="text-gray-600 text-sm">University of Georgia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <FaCertificate className="w-6 h-6 text-uga-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-uga-black">Certified</h4>
                    <p className="text-gray-600 text-sm">Personal Trainer</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <FaDumbbell className="w-6 h-6 text-uga-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-uga-black">Specialization</h4>
                    <p className="text-gray-600 text-sm">Strength & Conditioning</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <FaHeart className="w-6 h-6 text-uga-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-uga-black">Philosophy</h4>
                    <p className="text-gray-600 text-sm">Sustainable Results</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-block bg-uga-red text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
                >
                  Work With Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
