import React from "react";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = ()=>{
  return (
    <footer className="bg-[#0B0C2A] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">AnaylixHub</h2>
          <p className="text-gray-300 leading-relaxed">
            AnaylixHub supports learners in building creative skills and
            managing their digital presence. Our mission is to build a future
            where creative expertise and strategic storytelling transform
            personal brands, careers, and businesses.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Useful Links</h3>
          <div className="w-10 h-1 bg-yellow-500 mb-4" />
          <ul className="space-y-2 text-gray-300">
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/about">About Us</Link>
            </li>
            <li>
              {" "}
              <Link to="/course">Courses</Link>
            </li>
            <li>
              {" "}
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Our Courses</h3>
          <div className="w-10 h-1 bg-yellow-500 mb-4" />
          <ul className="space-y-2 text-gray-300">
            <li>» Video Editing</li>
            <li>» Graphic Design</li>
            <li>» Script Writing</li>
            <li>» Social media Management</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Get In Touch</h3>
          <div className="w-10 h-1 bg-yellow-500 mb-4" />

          <p className="flex items-center gap-2 text-gray-300 mb-3">
            <Phone size={18} /> +91 7979824380
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <Mail size={18} /> anaylixhub@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-700 mt-12 pt-4 text-center text-gray-300 text-sm flex flex-wrap justify-center gap-6">
        <Link to="/privacyPolicy">Privacy Policy</Link>
        <Link to="/termsCondition">Terms & Conditions</Link>
        <Link to="/refundPolicy">Refund Policy</Link>
        <Link to="/pricingPolicy">Pricing Policy</Link>
        <Link to="/legalDocuments">Legal Documents</Link>
      </div>

      {/* Copyright */}
      <div className="w-full text-yellow-800 py-3 mt-6 text-center font-medium">
        © {new Date().getFullYear()} AnaylixHub. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
