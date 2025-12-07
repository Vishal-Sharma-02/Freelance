import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div>

    <div className="min-h-screen w-full bg-white text-gray-900 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-yellow-100 via-white to-blue-100">
        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

        <div className="relative max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT TEXT */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Never Stop{" "}
              <span className="bg-yellow-500 px-3 py-1 rounded-md text-white">
                Learning
              </span>
              <br />
              Life <span className="font-extrabold">Never Stop Teaching</span>
            </h1>

            <p className="text-gray-700 text-lg max-w-md">
              Every teaching and learning journey is unique. Following along,
              we'll help guide your way.
            </p>

            <Link to={"/course"} className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-blue-900 text-white shadow-lg text-lg font-medium inline-flex items-center gap-2">
              Enroll Now →
            </Link>
          </div>

          {/* RIGHT SHAPE ART */}
          <div className="relative flex justify-center md:justify-end">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-gradient-to-br from-blue-600 to-yellow-500 shadow-2xl transform rotate-6"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 md:w-80 md:h-80 rounded-3xl bg-white shadow-xl flex items-center justify-center text-2xl font-bold text-blue-800">
              Learn with AnaylixHub
            </div>
          </div>
        </div>
      </section>
    </div>

    <AboutUs/>
    </div>
  );
};

export default Home;
