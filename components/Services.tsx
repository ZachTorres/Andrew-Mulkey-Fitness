import { FaLaptop, FaUsers, FaAppleAlt, FaChartLine } from "react-icons/fa";

const services = [
  {
    icon: FaLaptop,
    title: "Online Coaching with Andrew",
    description: "Train with me from anywhere. I'll design your personalized program, review your form via video, and check in weekly to keep you on track.",
    features: [
      "Custom workout plans by Andrew",
      "Personal video exercise library",
      "Weekly 1-on-1 progress reviews",
      "Direct messaging access to Andrew"
    ]
  },
  {
    icon: FaUsers,
    title: "1-on-1 In-Person Training",
    description: "Work directly with me in person. Get hands-on coaching, real-time feedback, and the accountability that comes with having me by your side.",
    features: [
      "Andrew's undivided attention",
      "Real-time form correction",
      "Flexible scheduling options",
      "Programming tailored to you"
    ]
  },
  {
    icon: FaAppleAlt,
    title: "Nutrition Coaching",
    description: "I'll help you dial in your nutrition with a science-based approach that actually fits your lifestyle—no extreme diets, just sustainable results.",
    features: [
      "Personalized macro calculations",
      "Practical meal strategies",
      "Honest supplement guidance",
      "Lifestyle-first approach"
    ]
  },
  {
    icon: FaChartLine,
    title: "12-Week Transformation",
    description: "My signature program. We'll work together for 12 weeks with complete training, nutrition, and mindset coaching for a total transformation.",
    features: [
      "Andrew's full training & nutrition system",
      "Bi-weekly coaching calls with Andrew",
      "Daily accountability and support",
      "Lifetime access to your program"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-uga-black mb-4">
              How I Can Help You
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I offer several coaching options to fit your goals and lifestyle. No matter which path you choose, you'll get my complete commitment to your success.
            </p>
            <div className="w-24 h-1 bg-uga-red mx-auto mt-6"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-uga-red group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-uga-red rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold text-uga-black mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <svg
                              className="w-5 h-5 text-uga-red mr-2 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Not sure which program is right for you?
            </p>
            <a
              href="#contact"
              className="inline-block bg-uga-red text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all hover:scale-105 shadow-xl"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
