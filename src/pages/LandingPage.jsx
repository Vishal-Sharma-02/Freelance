import React from "react";
import backgroundImage from "../assets/landingImage.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="min-h-screen text-white font-sans bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="bg-black/70 min-h-screen px-5 py-10">
        {/* GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto pt-10">
          {/* LEFT SIDE CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Instagram <br />
              Automation <br />
              Mastery – Just <br />
              <span className="text-yellow-400">$</span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg max-w-md">
              Learn how to automate reels, grow followers fast, and monetize
              Instagram daily.
            </p>

            {/* CTA BUTTON */}
            <Link
              to={"/home"}
              className="inline-block bg-yellow-500 text-black font-bold text-xl px-8 py-4 rounded-lg shadow-xl hover:bg-yellow-400 transition mt-8"
            >
              Get Instant Access for $
            </Link>

            {/* STUDENT COUNT */}
            <div className="flex items-center gap-3 mt-6 opacity-80">
              <img
                className="w-12 h-12 rounded-md object-cover"
                src="https://i.postimg.cc/6qk4RvqG/people.jpg"
                alt="students"
              />
              <p className="text-sm tracking-wide">
                <span className="font-bold text-white">44,000+</span> STUDENTS
                ALREADY LEARNING – JOIN THEM & START EARNING
              </p>
            </div>
          </div>

          {/* RIGHT SIDE — VIDEO SECTION */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700 relative">
            <div className="w-full h-64 md:h-80 bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Dummy video
                title="Dummy Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* WHAT YOU WILL LEARN SECTION */}
        <div className="max-w-6xl mx-auto mt-20 text-center">
          <h2 className="text-3xl font-bold">What You’ll Learn for ₹951</h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-10 text-left">
            <div className="bg-white/10 p-5 rounded-lg backdrop-blur border border-white/20">
              <p className="font-bold text-lg">Instagram Automation Setup</p>
            </div>

            <div className="bg-white/10 p-5 rounded-lg backdrop-blur border border-white/20">
              <p className="font-bold text-lg">
                Reel Creation System (no face needed)
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-lg backdrop-blur border border-white/20">
              <p className="font-bold text-lg">
                Auto-Posting & Scheduling Hacks
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-lg backdrop-blur border border-white/20">
              <p className="font-bold text-lg">Monetization & Daily Income</p>
            </div>

            <div className="bg-white/10 p-5 rounded-lg backdrop-blur border border-white/20">
              <p className="font-bold text-lg">Scaling ₹2k → ₹5k/day</p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center text-gray-400 text-sm py-10">
          © 2025 KnowledgeWaveIndia.com
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
