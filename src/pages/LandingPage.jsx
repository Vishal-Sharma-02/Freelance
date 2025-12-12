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

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT SECTION */}
            <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
                Digital Skill <br />
                Mastery
              </h1>

              <p className="text-gray-300 text-lg max-w-md mx-auto lg:mx-0">
                Stop just scrolling. Start earning! 💰
              </p>

              {/* Mobile Book Image */}
              <div className="lg:hidden flex justify-center mt-6">
                <img
                  src="https://res.cloudinary.com/dhulhgd5y/image/upload/v1765532643/WhatsApp_Image_2025-12-10_at_13.40.19_f1f9d56a_zwgox9.jpg"
                  alt="Mastery Book"
                  className="
                    w-40 md:w-52
                    rounded-xl
                    shadow-[0_0_25px_rgba(255,200,50,0.4)]
                    ring-1 ring-yellow-500/20
                  "
                />
              </div>

              {/* Mobile Price */}
              <div className="lg:hidden text-yellow-400 text-3xl font-bold mt-4">
                Only ₹3499
              </div>

              {/* CTA BUTTON */}
              <Link
                to="/signup"
                className="inline-block mt-5 relative p-[2px] rounded-lg bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 group"
              >
                <span className="block px-8 py-4 bg-[#1c1607] rounded-lg text-white font-bold text-lg">
                  Get Instant Access for ₹3499
                </span>
              </Link>

            </div>

            {/* RIGHT SECTION — VIDEO */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="w-full rounded-xl overflow-hidden bg-black border border-[#2b2b2b] shadow-lg aspect-[16/9]">
                <VideoPlayer />
              </div>
            </div>

          </div>
        </div>

        {/* ======================== */}
        {/*      MASTERY PACK        */}
        {/* ======================== */}

        {/* ======================== */}
{/*      MASTERY PACK        */}
{/* ======================== */}

<div className="w-full bg-gradient-to-br from-[#0d0a00] to-black py-20 mt-10 px-6">

  {/* Heading */}
  <h2 className="text-center text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-lg">
    THE MASTERY PACK
  </h2>

  <p className="text-center text-gray-300 text-lg max-w-2xl mx-auto mt-3">
    Learn the most in-demand skills and start earning from Day 1.
  </p>

  {/* 2-COLUMN LAYOUT */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 mt-16 items-center">

    {/* LEFT – BOOK IMAGE FULL HEIGHT (DESKTOP ONLY) */}
<div className="hidden lg:flex justify-center">
  <img
    src="https://res.cloudinary.com/dhulhgd5y/image/upload/v1765532643/WhatsApp_Image_2025-12-10_at_13.40.19_f1f9d56a_zwgox9.jpg"
    alt="Mastery Pack Book"
    className="
      w-64 md:w-80 lg:w-[420px]
      rounded-2xl
      shadow-[0_0_40px_rgba(255,200,50,0.4)]
      ring-1 ring-yellow-500/30
    "
  />
</div>

    {/* RIGHT – SKILL BOXES */}
    <div className="grid grid-cols-1 gap-6">

      {masteryItems.map((text, i) => (
        <div
          key={i}
          className="
            p-[3px]
            rounded-2xl
            bg-gradient-to-r from-yellow-400 to-orange-500
            shadow-[0_0_30px_rgba(255,180,0,0.35)]
            hover:scale-[1.02]
            transition
          "
        >
          <div className="bg-[#111111] rounded-2xl h-full py-5 px-6 flex items-center gap-4">
            <span className="text-yellow-400 text-3xl">⭐</span>

            <p className="text-white font-semibold text-xl leading-snug">
              {text}
            </p>
          </div>
        </div>
      ))}

    </div>

  </div>

  {/* FULL-WIDTH BUTTON */}
  <div className="flex justify-center mt-14">
    <Link
      to="/signup"
      className="w-full max-w-2xl relative p-[3px] rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 group"
    >
      <span
        className="block w-full bg-[#1d1507] text-white font-bold text-xl py-4 rounded-xl text-center tracking-wide group-hover:bg-[#2a210a] transition"
      >
        Enroll Now – Pay ₹3499
      </span>
    </Link>
  </div>

</div>


       {/* ABOUT SECTION – PREMIUM GOLD BOX */}
<div className="w-full flex justify-center px-6 mt-20" data-animate>
  <div className="
    max-w-4xl 
    w-full
    bg-black/40 
    backdrop-blur-xl 
    border border-yellow-500/20 
    rounded-2xl 
    p-10 
    text-center 
    shadow-[0_0_25px_rgba(255,200,50,0.15)]
    reveal
  ">
    <p className="text-gray-300 text-lg leading-relaxed">
      <span className="font-semibold text-yellow-400">Anaylix Hub</span> is your direct path  
      to monetizing your student life.  
      We teach real, in-demand digital skills with a complete earning roadmap tailored  
      for beginners, students, and aspiring digital professionals.
    </p>
  </div>
</div>

{/* FOOTER – GOLD TOP BORDER */}
<footer className="w-full mt-16 py-8 text-center border-t border-yellow-600/20 text-gray-400 text-sm">
  © {new Date().getFullYear()} <span className="text-yellow-400">AnaylixHub</span>. All Rights Reserved.
</footer>

      </div>
    </div>
  );
};

export default LandingPage;
