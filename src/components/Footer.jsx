import React from "react";
import { Mail, Phone } from "lucide-react";

const Footer = ()=>{
  return (
    <footer className="bg-[#0B0C2A] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">AnaylixHub</h2>
          <p className="text-gray-300 leading-relaxed">
            At AnaylixHub, we empower learners with industry-ready analytics and
            technology skills. Our mission is to create a future where
            data-driven knowledge transforms careers and businesses.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Useful Links</h3>
          <div className="w-10 h-1 bg-yellow-500 mb-4" />
          <ul className="space-y-2 text-gray-300">
            <li>» Home</li>
            <li>» About Us</li>
            <li>» Courses</li>
            <li>» Contact Us</li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Our Courses</h3>
          <div className="w-10 h-1 bg-yellow-500 mb-4" />
          <ul className="space-y-2 text-gray-300">
            <li>» Data Analytics</li>
            <li>» Power BI / Tableau</li>
            <li>» Excel & Automation</li>
            <li>» Tech & AI Skills</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Get In Touch</h3>
          <div className="w-10 h-1 bg-yellow-500 mb-4" />

          <p className="flex items-center gap-2 text-gray-300 mb-3">
            <Phone size={18} /> +91 9999999999
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <Mail size={18} /> support@anaylixhub.com
          </p>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-700 mt-12 pt-4 text-center text-gray-300 text-sm flex flex-wrap justify-center gap-6">
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        <span>Refund Policy</span>
        <span>Pricing Policy</span>
        <span>Legal Documents</span>
      </div>

      {/* Copyright */}
      <div className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black py-3 mt-6 text-center font-medium">
        © {new Date().getFullYear()} AnaylixHub. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
