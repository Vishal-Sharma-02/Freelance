import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar type={"false"} />

      <div className="min-h-screen bg-gradient-to-br from-black via-[#1c1403] to-[#000000] text-white font-sans pt-20">

        {/* Hero Section */}
        <div
          className="
  max-w-6xl mx-auto px-5 py-10 
  grid grid-cols-1 md:grid-cols-[1.1fr_1.6fr] 
  gap-10 
  items-start md:items-center   /* FIX ALIGNMENT */
"
        >
          {/* RIGHT SIDE - VIDEO */}
          <div className="order-1 md:order-2 flex items-center">
            <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-gray-700 md:ml-6">
              <VideoPlayer />
            </div>
          </div>

          {/* LEFT SIDE CONTENT */}
          <div className="order-2 md:order-1 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Instagram <br />
              Automation <br />
              Mastery – Just <span className="text-yellow-400">₹3499</span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg max-w-md">
              Learn how to automate reels, grow followers fast, and monetize
              Instagram daily.
            </p>

            {/* BUTTON */}
            <Link
              to="/home"
              className="
        inline-block mt-8 
        relative p-[2px] rounded-md
        bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 
        group
      "
            >
              <span
                className="
          relative block w-full h-full p-4
          bg-[#1c1607]
          rounded-md
          text-center text-white font-bold text-xl
          transition group-hover:bg-[#2a210a]
        "
              >
                Get Instant Access for ₹3499
              </span>
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
        </div>

        {/* WHAT YOU WILL LEARN SECTION */}
        <div className="max-w-6xl mx-auto mt-20 text-center px-5">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
            MASTERY PACK
          </h2>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  {[
    "All course access",
    "1:1 Mentorship",
    "Portfolio + First Client Guidance",
    "0 to 30k Complete Roadmap"
  ].map((text, i) => (
    <div 
      key={i}
      className="
        p-[2px] rounded-xl 
        bg-gradient-to-r from-yellow-500 to-orange-500 
        h-full
      "
    >
      <div className="
        h-full bg-[#111111] rounded-xl p-6 
        shadow-[0_0_15px_rgba(255,180,0,0.15)]
        hover:bg-[#161616]
        transition
      ">
        <div className="flex items-start gap-4">
          <span className="text-yellow-400 text-3xl font-bold">₹</span>
          <p className="text-white font-semibold text-lg leading-snug">
            {text}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>



          {/* ENROLL NOW BUTTON */}
          <Link
            to="/home"
            className="
    mt-12 
    block w-full mx-auto 
    relative p-[2px] rounded-lg
    bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500
    group
  "
          >
            <span
              className="
      block w-full 
      bg-[#1d1507]
      text-white font-bold text-xl 
      py-4
      rounded-lg 
      text-center
      transition 
      group-hover:bg-[#2a210a]
    "
            >
              Enroll Now – Pay ₹3499 Now
            </span>
          </Link>
        </div>

        {/* FOOTER */}
        <div className="text-center text-gray-400 text-sm py-10">
          Copyright © 2025 Knowledge Wave India
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
