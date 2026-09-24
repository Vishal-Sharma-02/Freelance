import {useState} from "react";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import FAQs from "./FAQs";

const Home = () => {

  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <div>
      {/* TECHNICAL MAINTENANCE INFO BANNER */}
      {bannerVisible && (
        <div className="relative z-50 w-full bg-linear-to-r from-blue-50 via-purple-50 to-blue-50 border-b-2 border-blue-200 py-6 px-4 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="shrink-0 mt-0.5">
                <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-600">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-blue-900">
                  Recent Technical Updates
                </h3>
                <p className="mt-2 text-sm text-blue-800">
                  We've made some technical improvements to our platform. If you
                  encounter any errors or issues, please try{" "}
                  <strong>resetting your site data</strong> (clear browser
                  cache) or <strong>logging in again</strong>. This will ensure
                  you have the latest version of the website.
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      localStorage.clear();
                      window.location.reload();
                    }}
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                  >
                    Clear Site Data
                  </button>
                  <a
                    href="/login"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-blue-200 text-blue-700 text-sm font-medium hover:bg-blue-50 transition"
                  >
                    Go to Login
                  </a>
                </div>
              </div>
              <button
                onClick={() => setBannerVisible(false)}
                className="shrink-0 text-blue-600 hover:text-blue-800 transition mt-0.5"
                aria-label="Close banner"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="md:-mt-20">
        <div className="min-h-screen w-full bg-linear-to-b from-white via-[#f8f6ff] to-[#eef2ff] overflow-x-hidden">
          {/* HERO SECTION */}
          <section className="relative w-full min-h-screen flex items-center pb-5">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,210,70,0.35),transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(60,90,255,0.25),transparent_70%)]"></div>

            <div className="relative max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* LEFT TEXT */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                  Turn Your{" "}
                  <span className="bg-yellow-500 text-white px-4 py-1 rounded-md shadow-md">
                    Knowledge
                  </span>
                  <br />
                  Into Digital Income.
                </h1>

                <p className="text-gray-600 text-lg max-w-md">
                  Learn. Create. Sell. Scale.
                </p>

                {/* CTA BUTTON */}
                <Link
                  to={"/course"}
                  className="px-8 py-3 rounded-full bg-linear-to-r from-yellow-500 to-blue-700 text-white shadow-lg text-lg font-medium inline-flex items-center gap-2 hover:opacity-90 transition"
                >
                  Enroll Now →
                </Link>
              </div>

              {/* RIGHT: BOOK GLASS CARD */}
              <div className="flex justify-center md:justify-end">
                <div
                  className="
                  relative
                  w-72 h-96 md:w-88 md:h-120
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
                    src="https://res.cloudinary.com/dhulhgd5y/image/upload/v1789147945/IMG_7775_ginq2n.png"
                    alt="Mastery Pack"
                    className="relative w-[80%] object-contain drop-shadow-[0_0_25px_rgba(255,170,50,0.45)]"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <AboutUs />
      <FAQs />
    </div>
  );
};

export default Home;
