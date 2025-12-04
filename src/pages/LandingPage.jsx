import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar type={"false"} />

      <div className="min-h-screen bg-black text-white font-sans pt-20">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Instagram <br />
              Automation <br />
              Mastery – Just <span className="text-yellow-400">₹3499</span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg max-w-md">
              Learn how to automate reels, grow followers fast, and monetize
              Instagram daily.
            </p>

            <Link
              to="/home"
              className="inline-block mt-8 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold text-xl px-8 py-4 rounded-lg shadow-xl hover:opacity-90 transition"
            >
              Get Instant Access for ₹3499
            </Link>

            <div className="flex items-center gap-3 mt-6 opacity-80">
              <img
                src="https://i.postimg.cc/6qk4RvqG/people.jpg"
                alt="students"
                className="w-12 h-12 rounded-md object-cover"
              />
              <span className="text-gray-300 font-semibold">
                1000+ Students Already Learning – Join Them & Start Earning
              </span>
            </div>
          </div>

          {/* Right Content (Video) */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700 relative">
            <VideoPlayer />
          </div>
        </div>

        {/* What You'll Learn Section */}
        <div className="max-w-6xl mx-auto mt-20 text-center px-5">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
            What You’ll Learn for ₹951
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left">
            <div className="flex items-center p-6 rounded-xl bg-gray-900 shadow-lg border border-gray-700 gap-4 hover:scale-105 transition-transform duration-300">
              <span className="text-yellow-400 text-3xl font-bold">₹</span>
              <p className="text-white font-semibold text-lg">
                All course access
              </p>
            </div>
            <div className="flex items-center p-6 rounded-xl bg-gray-900 shadow-lg border border-gray-700 gap-4 hover:scale-105 transition-transform duration-300">
              <span className="text-yellow-400 text-3xl font-bold">₹</span>
              <p className="text-white font-semibold text-lg">1:1 Mentorship</p>
            </div>
            <div className="flex items-center p-6 rounded-xl bg-gray-900 shadow-lg border border-gray-700 gap-4 hover:scale-105 transition-transform duration-300">
              <span className="text-yellow-400 text-3xl font-bold">₹</span>
              <p className="text-white font-semibold text-lg">
                Portfolio + First client help
              </p>
            </div>
            <div className="flex items-center p-6 rounded-xl bg-gray-900 shadow-lg border border-gray-700 gap-4 hover:scale-105 transition-transform duration-300">
              <span className="text-yellow-400 text-3xl font-bold">₹</span>
              <p className="text-white font-semibold text-lg">
                0 to 30k complete roadmap
              </p>
            </div>
            
          </div>

          {/* Enroll Now Button */}
          <Link
            to="/home"
            className="mt-12 inline-block w-full md:w-2/3 mx-auto bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold text-xl py-4 rounded-lg shadow-xl hover:opacity-90 transition"
          >
            Enroll Now – Pay ₹951 Now
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 text-sm py-10">
          Copyright © 2025 Knowledge Wave India
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
