import React from "react";
import { Link } from "react-router-dom";

const AboutUs = ()=> {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="w-full bg-[#0B0C2A] text-white py-20 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -left-12 -top-12 w-32 h-32 border border-yellow-400/40 rounded-full" />
            <p className="relative text-sm font-semibold tracking-[0.25em] text-yellow-400 uppercase mb-5">
              Learn with purpose
            </p>
            <h1 className="relative text-5xl md:text-6xl font-bold leading-[1.05]">
              About
              <span className="block text-yellow-400">AnaylixHub</span>
            </h1>
            <div className="mt-8 h-1 w-20 bg-yellow-400" />
            <p className="mt-6 max-w-sm text-lg text-blue-100 leading-relaxed">
              Practical learning for people ready to turn what they know into
              something valuable.
            </p>
          </div>

          <div className="border-l-2 border-yellow-400/70 pl-6 md:pl-10">
            <p className="text-lg md:text-xl text-blue-50 leading-relaxed">
              AnaylixHub is a digital education platform built to help you turn
              your knowledge, skills, and ideas into digital income. We provide
              practical resources, step-by-step guides, and strategies to help
              you create, launch, sell, and scale digital products.
            </p>
            <p className="mt-6 text-base md:text-lg text-blue-100/80 leading-relaxed">
              Whether you’re a beginner or already building an online business,
              AnaylixHub helps you simplify the process and move forward with
              confidence.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {['Learn', 'Create', 'Sell', 'Scale'].map((step) => (
                <span
                  key={step}
                  className="px-4 py-2 rounded-full border border-yellow-400/60 text-sm font-semibold text-yellow-300"
                >
                  {step}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-[#f6f7fb] py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-0 items-stretch overflow-hidden rounded-3xl shadow-xl">
          <div className="bg-[#0B0C2A] text-white p-8 md:p-12 lg:p-14 flex flex-col justify-center">
            <p className="text-sm font-semibold tracking-[0.25em] text-yellow-400 uppercase mb-5">
              The AnaylixHub approach
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Who We Are
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              AnaylixHub is a modern learning platform dedicated to Digital
              Product Creation and Script Writing. We help learners transform
              ideas into impactful digital products and compelling scripts that
              meet real industry standards.
            </p>
            <div className="border-l-2 border-yellow-400 pl-5 mb-8">
              <p className="text-xl font-semibold text-white leading-relaxed">
                “Learn the skill. Build the thing. Share it with the world.”
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-white/15">
              <div>
                <p className="text-yellow-400 font-bold text-xl">Practical</p>
                <p className="text-blue-100/70 text-sm mt-1">Learning by doing</p>
              </div>
              <div>
                <p className="text-yellow-400 font-bold text-xl">Creative</p>
                <p className="text-blue-100/70 text-sm mt-1">Ideas into assets</p>
              </div>
              <div>
                <p className="text-yellow-400 font-bold text-xl">Relevant</p>
                <p className="text-blue-100/70 text-sm mt-1">Built for today</p>
              </div>
            </div>
          </div>
          <div className="relative min-h-80 lg:min-h-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1100&q=80"
              alt="Team working together"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0B0C2A]/15" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 p-5 rounded-2xl shadow-lg">
              <p className="text-sm font-semibold text-blue-900 uppercase tracking-wider">
                Our promise
              </p>
              <p className="mt-1 text-gray-700 leading-relaxed">
                High-quality content for students, professionals, and
                businesses ready to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-white rounded-2xl shadow text-center">
              <h3 className="text-xl font-bold mb-3">Quality Learning</h3>
              <p className="text-gray-600">
                Structured, high-value courses crafted by expert educators.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow text-center">
              <h3 className="text-xl font-bold mb-3">Industry Relevance</h3>
              <p className="text-gray-600">
                Applied content designed around real analytics tools and
                workflows.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow text-center">
              <h3 className="text-xl font-bold mb-3">Student Success</h3>
              <p className="text-gray-600">
                Our goal is to help every learner grow, upskill, and achieve
                more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose AnaylixHub?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              We don’t just teach — we mentor. Our programs are designed for
              individuals who want to excel in Digital Product Creation and
              Script Writing, turning creative ideas into market-ready products
              and powerful, audience-driven scripts.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Hands-on projects and real datasets</li>
              <li>Industry-focused curriculum</li>
              <li>Expert mentors and trainers</li>
              <li>Career guidance and portfolio support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="overflow-hidden rounded-2xl shadow-lg md:h-full">
            <img
              src="https://res.cloudinary.com/dhulhgd5y/image/upload/v1789147504/IMG_0010.JPG_ovxmrv.jpg"
              alt="Anaya, founder of AnaylixHub"
              className="w-full h-auto md:h-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold tracking-[0.25em] text-yellow-600 uppercase mb-4">
              Meet the Founder
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
              Hi, I’m Anaya Raj — Founder of Anaylixhub.
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                For the past 4 years, I’ve been building and working in the
                digital product business, helping creators and aspiring
                entrepreneurs turn their knowledge and skills into digital
                products and online income.
              </p>
              <p>
                I’m also a Digital Product Sales Coach, dedicated to simplifying
                the process of creating, marketing, and selling digital
                products.
              </p>
              <p>
                Over the years, I’ve had the opportunity to teach 6,000+
                students how to start and sell digital products with the right
                strategies, practical guidance, and a clear roadmap.
              </p>
              <p>
                Through Anaylixhub, my mission is simple — to help you turn your
                knowledge into a digital product, build a sustainable online
                business, and create the freedom you’re working towards.
              </p>
            </div>
            <p className="mt-7 font-semibold text-blue-900">
              Founder, AnaylixHub
            </p>
          </div>
        </div>
      </section>

      {/* RESULTS AND ROADMAP */}
      <section className="bg-[#f6f7fb] py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold tracking-[0.25em] text-yellow-600 uppercase mb-4">
              Results that matter
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Knowledge becomes powerful when you put it to work.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { value: "6,000+", label: "Students Trained" },
              { value: "4+ Years", label: "Industry Experience" },
              { value: "Digital Products", label: "Created & Taught" },
              { value: "One Mission", label: "Turn Knowledge Into Income" },
            ].map((result, index) => (
              <div
                key={result.value}
                className={`min-h-40 p-6 rounded-2xl border shadow-sm flex flex-col justify-between ${
                  index === 3
                    ? "bg-[#0B0C2A] border-[#0B0C2A] text-white"
                    : "bg-white border-gray-200 text-gray-900"
                }`}
              >
                <p
                  className={`text-2xl md:text-3xl font-bold ${
                    index === 3 ? "text-yellow-400" : "text-blue-900"
                  }`}
                >
                  {result.value}
                </p>
                <p
                  className={`text-sm leading-relaxed ${
                    index === 3 ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {result.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-[0.25em] text-yellow-600 uppercase mb-4">
                Your learning roadmap
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                From first idea to real momentum.
              </h2>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
              <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-px bg-yellow-400" />
              {["Learn", "Create", "Launch", "Sell", "Scale"].map(
                (step, index) => (
                  <div key={step} className="relative flex lg:flex-col items-center gap-4 lg:gap-5 text-center">
                    <div className="z-10 w-12 h-12 shrink-0 rounded-full bg-[#0B0C2A] text-yellow-400 border-4 border-[#f6f7fb] shadow-md flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{step}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {[
                          "Build your foundation",
                          "Shape your expertise",
                          "Put it in the world",
                          "Reach the right people",
                          "Grow with confidence",
                        ][index]}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Future of Learning</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Be part of a thriving community of learners advancing with content
          related skills. Start your journey with AnaylixHub today.
        </p>
        <Link
          to={"/course"}
          className="px-10 py-3 bg-yellow-400 text-gray-900 rounded-full font-semibold shadow-lg hover:bg-yellow-300 transition"
        >
          Explore Courses
        </Link>
      </section>
      <div className="p-5 bg-white"></div>
    </div>
  );
}

export default AboutUs;