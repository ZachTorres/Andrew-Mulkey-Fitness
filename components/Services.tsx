import { FaLaptop, FaUsers, FaAppleAlt, FaChartLine } from "react-icons/fa";

const services = [
  {
    icon: FaLaptop,
    title: "Online Coaching",
    description: "Personalized training programs delivered digitally with weekly check-ins, form reviews, and ongoing support wherever you are.",
    features: [
      "Custom workout plans",
      "Video exercise library",
      "Weekly progress reviews",
      "24/7 messaging support"
    ]
  },
  {
    icon: FaUsers,
    title: "1-on-1 Training",
    description: "Hands-on personal training sessions tailored to your goals, fitness level, and schedule for maximum accountability and results.",
    features: [
      "Personalized attention",
      "Real-time form correction",
      "Flexible scheduling",
      "Goal-specific programming"
    ]
  },
  {
    icon: FaAppleAlt,
    title: "Nutrition Coaching",
    description: "Science-based nutrition guidance that fits your lifestyle, helping you fuel your body properly for optimal performance and recovery.",
    features: [
      "Macro calculations",
      "Meal planning strategies",
      "Supplement guidance",
      "Lifestyle integration"
    ]
  },
  {
    icon: FaChartLine,
    title: "Transformation Program",
    description: "Comprehensive 12-week program combining training, nutrition, and mindset coaching for complete body transformation.",
    features: [
      "Full training & nutrition plan",
      "Bi-weekly coaching calls",
      "Accountability tracking",
      "Lifetime program access"
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
              Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the program that fits your goals and lifestyle. All programs include expert guidance and unwavering support.
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
