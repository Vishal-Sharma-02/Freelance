import React from "react";
import { ExternalLink, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    name: "Instagram",
    href: " https://www.instagram.com/anaylixhub?stkn=MWtqcjM2c2d0NDNtbg=",
  },
  {
    name: "WhatsApp",
    href: " https://whatsapp.com/channel/0029VbDi2oTId7nI4igCJs1q",
  },
  {
    name: "YouTube",
    href: " https://youtube.com/@anaylixhub?si=ImBI5c1lkLagXlNs",
  },
  { name: "Telegram", href: " https://t.me/AnayaPinterestwork" },
];

const Footer = ()=>{
  return (
    <footer className="bg-[#0B0C2A] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12">
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
            {/* <li>» Digital Product Course</li>
            <li>» Script Writing</li> */}
            <li>» Digital Product Business Guides </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Get In Touch</h3>
          <div className="w-10 h-1 bg-yellow-500 mb-4" />

          <p className="flex items-center gap-2 text-gray-300 mb-3">
            <Phone size={18} /> +91 82106-67664
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <Mail size={18} /> support@anaylixhub.in
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow AnaylixHub</h3>
          <div className="w-10 h-1 bg-yellow-500 mb-4" />
          <ul className="space-y-2 text-gray-300">
            {socialLinks.map((socialLink) => (
              <li key={socialLink.name}>
                <a
                  href={socialLink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
                >
                  <span aria-hidden="true">»</span>
                  {socialLink.name}
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
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
