import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import FAQs from "./FAQs";

const Home = () => {
  return (
    <div className="md:-mt-20">

      {/* MAIN WRAPPER */}
      <div className="min-h-screen w-full bg-gradient-to-b from-white via-[#f8f6ff] to-[#eef2ff] overflow-x-hidden">

        {/* HERO SECTION */}
        <section className="relative w-full min-h-screen flex items-center pb-5">

          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,210,70,0.35),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(60,90,255,0.25),transparent_70%)]"></div>

          <div className="relative max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT TEXT */}
            <div className="space-y-6">

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                Never Stop{" "}
                <span className="bg-yellow-500 text-white px-4 py-1 rounded-md shadow-md">
                  Learning
                </span>
                <br />
                Life Never Stop Teaching
              </h1>

              <p className="text-gray-600 text-lg max-w-md">
                Every teaching and learning journey is unique.  
                Following along, we’ll help guide your way.
              </p>

              {/* CTA BUTTON */}
              <Link
                to={"/course"}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-blue-700 text-white shadow-lg text-lg font-medium inline-flex items-center gap-2 hover:opacity-90 transition"
              >
                Enroll Now →
              </Link>

            </div>

            {/* RIGHT: BOOK GLASS CARD */}
            <div className="flex justify-center md:justify-end">

              <div
                className="
                  relative
                  w-72 h-96 md:w-[22rem] md:h-[30rem]
                  rounded-3xl
                  backdrop-blur-xl 
                  bg-white/40
                  shadow-[0_8px_40px_rgba(0,0,0,0.15)]
                  border border-white/40
                  flex items-center justify-center
                  hover:scale-[1.03]
                  hover:shadow-[0_12px_60px_rgba(0,0,0,0.25)]
                  transition-all duration-500
                "
              >
                {/* Glow Behind Book */}
                <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle,rgba(255,180,0,0.4),transparent_60%)]"></div>

                {/* Book Image */}
                <img
                  src="https://res.cloudinary.com/dhulhgd5y/image/upload/v1765559052/book_fagnv3.png"
                  alt="Mastery Pack"
                  className="relative w-[80%] object-contain drop-shadow-[0_0_25px_rgba(255,170,50,0.45)]"
                />
              </div>

            </div>

          </div>
        </section>
      </div>

      {/* ABOUT SECTION */}
      <AboutUs />
      <FAQs/>
    </div>
  );
};

export default Home;
