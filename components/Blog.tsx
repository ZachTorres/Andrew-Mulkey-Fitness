"use client";

import { FaCalendar, FaClock, FaArrowRight } from "react-icons/fa";

const blogPost = {
  title: "The Truth About Progressive Overload: Building Sustainable Strength",
  excerpt: "Progressive overload is the cornerstone of any effective training program, but it's often misunderstood. Learn how to apply this principle correctly for consistent, long-term gains without burnout or injury.",
  date: "January 15, 2025",
  readTime: "5 min read",
  category: "Training Principles",
  image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070",
  content: `
Progressive overload is one of the most fundamental principles in fitness, yet it's frequently misapplied. Many people think it simply means adding more weight to the bar every workout, but sustainable strength building requires a more nuanced approach.

## What Is Progressive Overload?

Progressive overload is the gradual increase of stress placed on the body during training. This principle is essential for continuous improvement in strength, muscle mass, and overall fitness. However, "stress" can be increased in multiple ways beyond just adding weight.

## The Five Variables of Progressive Overload

**1. Increase Weight (Intensity)**
The most obvious method, but not always the best starting point. Adding 5-10 pounds to your lifts when proper form and volume are established.

**2. Increase Volume (Sets x Reps)**
Adding an extra set or a few more reps can provide the progressive stimulus your muscles need without the joint stress of heavier loads.

**3. Improve Exercise Technique**
Better form means more effective muscle recruitment. Perfecting your squat depth or bench press bar path is a form of progression.

**4. Increase Training Frequency**
Training a muscle group an additional day per week can accelerate progress, provided you're recovering adequately.

**5. Decrease Rest Periods**
Performing the same work in less time increases training density and metabolic stress.

## The Smart Approach to Implementation

Start with volume and technique. Master the movement pattern with moderate loads and gradually increase sets and reps. Only when you've maximized these variables should you focus heavily on adding weight.

Track your progress meticulously. Keep a training log that records weights, sets, reps, and how each workout felt. This data guides your progression and prevents stagnation.

## Common Mistakes to Avoid

**Progressing Too Quickly:** Adding weight every single session isn't sustainable. You'll plateau quickly and risk injury. Plan for progression over weeks and months, not days.

**Ignoring Recovery:** Progressive overload only works when paired with adequate recovery. Sleep, nutrition, and deload weeks are non-negotiable.

**Sacrificing Form for Weight:** Heavier weights with poor form don't build strength effectively and significantly increase injury risk.

## Programming Progressive Overload

A practical approach is the "double progression" method: choose a rep range (like 8-12 reps). When you can perform the maximum reps for all sets with good form, increase the weight by 5-10% and drop back to the lower end of the rep range.

For example:
- Week 1-2: 3 sets of 8 reps at 135 lbs
- Week 3-4: 3 sets of 10 reps at 135 lbs
- Week 5-6: 3 sets of 12 reps at 135 lbs
- Week 7: 3 sets of 8 reps at 145 lbs

## The Bottom Line

Progressive overload is essential, but it must be applied intelligently. Focus on consistent, small improvements across multiple variables rather than chasing heavy weights at all costs. The goal is sustainable progress over years, not weeks.

Remember: the best program is the one you can stick to consistently while staying healthy. Progressive overload should challenge you, not break you.

Ready to implement these principles in your training? Let's work together to build a program that delivers results you can maintain for life.
  `
};

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-uga-black mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Weekly evidence-based articles on training, nutrition, and sustainable fitness
            </p>
            <div className="w-24 h-1 bg-uga-red mx-auto mt-6"></div>
          </div>

          {/* Featured Blog Post */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${blogPost.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-uga-red text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {blogPost.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <FaCalendar className="w-4 h-4" />
                      {blogPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="w-4 h-4" />
                      {blogPost.readTime}
                    </span>
                  </div>

                  <h3 className="text-3xl font-heading font-bold text-uga-black mb-4 leading-tight">
                    {blogPost.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {blogPost.excerpt}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => {
                      const modal = document.getElementById('blog-modal');
                      if (modal) modal.classList.remove('hidden');
                    }}
                    className="inline-flex items-center gap-2 text-uga-red font-semibold hover:gap-3 transition-all group"
                  >
                    Read Full Article
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Coming Soon */}
          <div className="text-center mt-12">
            <p className="text-gray-500 italic">
              New articles published every week. Stay tuned for more insights!
            </p>
          </div>
        </div>
      </div>

      {/* Blog Modal */}
      <div id="blog-modal" className="hidden fixed inset-0 bg-black/80 z-50 overflow-y-auto">
        <div className="min-h-screen px-4 py-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl">
            {/* Modal Header */}
            <div className="relative h-96">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-t-2xl"
                style={{ backgroundImage: `url(${blogPost.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-t-2xl"></div>
              </div>
              <button
                onClick={() => {
                  const modal = document.getElementById('blog-modal');
                  if (modal) modal.classList.add('hidden');
                }}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="bg-uga-red text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                  {blogPost.category}
                </span>
                <h2 className="text-4xl font-heading font-bold text-white mb-4">
                  {blogPost.title}
                </h2>
                <div className="flex items-center gap-4 text-sm text-white/90">
                  <span className="flex items-center gap-1">
                    <FaCalendar className="w-4 h-4" />
                    {blogPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock className="w-4 h-4" />
                    {blogPost.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                {blogPost.content.trim().split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-heading font-bold text-uga-black mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-uga-black mt-6 mb-3">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    );
                  } else {
                    return (
                      <p key={index} className="text-gray-700 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    );
                  }
                })}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-heading font-bold text-uga-black mb-3">
                    Ready to Build Your Program?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Let's apply these principles to create a personalized training plan that delivers real results.
                  </p>
                  <a
                    href="#contact"
                    onClick={() => {
                      const modal = document.getElementById('blog-modal');
                      if (modal) modal.classList.add('hidden');
                    }}
                    className="inline-block bg-uga-red text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
