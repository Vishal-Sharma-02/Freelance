import React from "react";

const AboutUs = ()=> {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="w-full py-24 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">About AnaylixHub</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We guide learners to improve their creativity, content skills, and
            social media confidence.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            AnaylixHub is a modern learning platform dedicated to Video Editing,
            Graphic Design, Script Writing, and Social Media Management. We aim
            to bridge the gap between theoretical learning and real industry
            expectations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our mission is simple: make high-quality content for every —
            students, working professionals, and businesses.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=60"
            alt="Team working together"
            className="rounded-xl w-full"
          />
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
              We don’t just teach — we mentor. Our programs are built for those
              who want to excel in the fields of Video Editing, Graphic Design,
              Script Writing, and Social Media Management.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Hands-on projects and real datasets</li>
              <li>Industry-focused curriculum</li>
              <li>Expert mentors and trainers</li>
              <li>Career guidance and portfolio support</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
            <img
              src="https://images.unsplash.com/photo-1584697964194-bf134a22c652?auto=format&fit=crop&w=900&q=60"
              alt="Analytics training"
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Future of Learning</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Be part of a thriving community of learners advancing with content related skills. Start your journey with AnaylixHub today.
        </p>
        <button className="px-10 py-3 bg-yellow-400 text-gray-900 rounded-full font-semibold shadow-lg hover:bg-yellow-300 transition">
          Explore Courses
        </button>
      </section>
      <div className="p-5 bg-white"></div>
    </div>
  );
}

export default AboutUs;