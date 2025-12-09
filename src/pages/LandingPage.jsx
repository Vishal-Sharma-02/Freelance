import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  const masteryItems = [
    "Master Video Editing",
    "Graphic Designing",
    "Script Writing",
    "Social Media Management",
    "Turn Your Free Time into Income"
  ];

  return (
    <div>
      <Navbar type={"false"} />

      {/* PAGE BACKGROUND */}
      <div className="min-h-screen bg-gradient-to-br from-black via-[#1c1403] to-[#000000] text-white font-sans pt-20">

        {/* HERO SECTION */}
        <div className="w-full bg-gradient-to-br from-black via-[#120d03] to-black pt-16 pb-16 px-6 sm:px-10 md:px-20 lg:px-32">

          {/* Mobile: Video On Top | Desktop: Side-by-Side */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* RIGHT SIDE → SHOWS FIRST ON MOBILE */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div
                className="
                  w-full
                  max-w-[620px]
                  rounded-2xl
                  overflow-hidden
                  bg-[#00000050]
                  backdrop-blur
                  shadow-[0_0_35px_rgba(0,0,0,0.45)]
                  border border-[#2b2b2b]
                "
              >
                <VideoPlayer />
              </div>
            </div>

            {/* LEFT SIDE CONTENT → SHOWS BELOW VIDEO ON MOBILE */}
            <div className="order-2 lg:order-1 space-y-6 lg:pr-10 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
                Digital Skill <br />
                Mastery
                <br />
                <span className="text-yellow-400 block mt-3">Only ₹3499</span>
              </h1>

              <p className="text-gray-300 text-lg max-w-md mx-auto lg:mx-0">
                Stop just scrolling. Start earning! 💰
              </p>

              {/* CTA BUTTON */}
              <Link
                to="/signup"
                className="inline-block mt-4 relative p-[2px] rounded-lg bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 group"
              >
                <span
                  className="block px-8 py-4 bg-[#1c1607] rounded-lg text-white font-bold text-lg group-hover:bg-[#2a210a] transition"
                >
                  Get Instant Access for ₹3499
                </span>
              </Link>
            </div>

          </div>
        </div>

        {/* MASTERY PACK */}
        <div className="max-w-6xl mx-auto mt-20 text-center px-5">
          <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-300 drop-shadow-md">
            THE MASTERY PACK
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto mt-2">
            Learn the most in-demand skills and start earning from Day 1.
          </p>

          {/* FEATURE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
            {masteryItems.map((text, i) => (
              <div
                key={i}
                className="
                  p-[3px]
                  rounded-2xl
                  bg-gradient-to-r from-yellow-400 to-orange-500
                  shadow-[0_0_30px_rgba(255,180,0,0.25)]
                  hover:scale-[1.03]
                  transition
                "
              >
                <div
                  className="
                    bg-[#111111]
                    rounded-2xl
                    h-40
                    flex
                    items-center
                    px-5
                    gap-4
                  "
                >
                  <span className="text-yellow-400 text-3xl">⭐</span>

                  <p className="text-white font-semibold text-lg leading-snug">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ENROLL BUTTON */}
          <Link
            to="/signup"
            className="mt-12 inline-block relative p-[2px] rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 group"
          >
            <span
              className="block w-full bg-[#1d1507] text-white font-bold text-xl px-10 py-4 rounded-xl text-center group-hover:bg-[#2a210a] transition"
            >
              Enroll Now – Pay ₹3499
            </span>
          </Link>
        </div>

        {/* ABOUT TEXT */}
        <div className="max-w-5xl mx-auto mt-16 text-center text-gray-400 px-5 leading-relaxed">
          Anaylix Hub is your direct path to monetizing your student life.
          We teach real, in-demand digital skills with a complete earning roadmap.
        </div>

        {/* FOOTER */}
        <div className="text-center text-gray-500 text-sm py-10 mt-10">
          © 2025 Knowledge Wave India — All Rights Reserved
        </div>

      </div>
    </div>
  );
};

export default LandingPage;
