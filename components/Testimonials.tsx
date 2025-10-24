"use client";

import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Busy Professional",
    image: "https://ui-avatars.com/api/?name=Sarah+Mitchell&background=BA0C2F&color=fff&size=200",
    rating: 5,
    text: "Andrew's coaching transformed not just my body, but my entire relationship with fitness. His programs are challenging but sustainable, and he truly cares about his clients' success. Down 30 pounds and stronger than ever!",
    results: "Lost 30 lbs, Gained Confidence"
  },
  {
    name: "Marcus Johnson",
    role: "Former Athlete",
    image: "https://ui-avatars.com/api/?name=Marcus+Johnson&background=BA0C2F&color=fff&size=200",
    rating: 5,
    text: "After years away from the gym, Andrew helped me rebuild my strength safely and effectively. His knowledge of proper progression and injury prevention is exceptional. I'm moving better now than I did in my twenties.",
    results: "Regained Athletic Performance"
  },
  {
    name: "Emily Chen",
    role: "Marathon Runner",
    image: "https://ui-avatars.com/api/?name=Emily+Chen&background=BA0C2F&color=fff&size=200",
    rating: 5,
    text: "As a runner, I neglected strength training for years. Andrew showed me how to build strength without sacrificing my running performance. My race times have improved and I'm finally injury-free!",
    results: "PR'd Marathon, Zero Injuries"
  },
  {
    name: "David Thompson",
    role: "Executive",
    image: "https://ui-avatars.com/api/?name=David+Thompson&background=BA0C2F&color=fff&size=200",
    rating: 5,
    text: "Andrew's online coaching fits perfectly into my demanding schedule. The accountability and expertise have been game-changing. I've never been in better shape, and I actually enjoy the process.",
    results: "Best Shape of His Life"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-uga-black mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real transformations from real people who trusted the process
            </p>
            <div className="w-24 h-1 bg-uga-red mx-auto mt-6"></div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-xl transition-shadow"
              >
                <FaQuoteLeft className="absolute top-6 right-6 w-12 h-12 text-uga-red opacity-10" />

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-4 border-uga-red"
                  />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-uga-black">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4 relative z-10">
                  "{testimonial.text}"
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-uga-red">
                    {testimonial.results}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-uga-red mb-2">200+</div>
              <div className="text-gray-600">Clients Coached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-uga-red mb-2">5,000+</div>
              <div className="text-gray-600">Workouts Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-uga-red mb-2">95%</div>
              <div className="text-gray-600">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-uga-red mb-2">5★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
