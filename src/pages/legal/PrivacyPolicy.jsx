import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-purple-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mt-1">Last Updated: [Date]</p>

        <section className="mt-6 space-y-4 text-gray-700 leading-relaxed">
          <p>
            Welcome to <strong>AnalyixHub</strong> (“we”, “our”, “us”). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our website, courses, and related services. By accessing our website or purchasing our courses, you consent to the practices described in this Privacy Policy.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">1. Information We Collect</h3>
          <p className="ml-2">
            <strong>A. Personal Information:</strong> Full Name, Email Address, Mobile Number, State/Location, Gender (optional), Username, Password (encrypted), Sponsor/Referral details (if applicable).
          </p>
          <p className="ml-2">
            <strong>B. Payment Information:</strong> When you purchase a course through Razorpay we collect transaction IDs, payment status, and Razorpay payment identifiers. We do not store card details — Razorpay processes payments securely.
          </p>
          <p className="ml-2">
            <strong>C. Automatically Collected Information:</strong> IP address, device information, browser type, access times, pages viewed, cookies & tracking data.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">2. How We Use Your Information</h3>
          <p className="ml-2">
            We use your information to create and manage accounts, process purchases, provide access to purchased courses, communicate updates and offers, improve content and platform performance, and prevent fraud or misuse.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">3. Sharing Your Information</h3>
          <p className="ml-2">
            We never sell or rent your data. We may share data with Razorpay (payment processing), trusted service providers (hosting, email, analytics), and legal authorities if required by law.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">4. Cookies & Tracking</h3>
          <p className="ml-2">We use cookies for sessions, analytics, personalization, and to improve user experience. You can disable cookies in your browser but some features may break.</p>

          <h3 className="text-lg font-semibold text-gray-800">5. Data Storage & Security</h3>
          <p className="ml-2">We use SSL, firewalls, encrypted password storage, and regular security audits. We do not store sensitive payment data such as full card numbers or CVV codes.</p>

          <h3 className="text-lg font-semibold text-gray-800">6. Your Rights</h3>
          <p className="ml-2">You may request access, correction, deletion of your personal data, or opt-out of promotional communication. Contact: <span className="font-medium">support@analyixhub.com</span></p>

          <h3 className="text-lg font-semibold text-gray-800">7. Course Access & Refunds</h3>
          <p className="ml-2">Purchased courses are non-transferable. Refunds are governed by our Refund Policy. Sharing your login may lead to account termination.</p>

          <h3 className="text-lg font-semibold text-gray-800">8. Children’s Privacy</h3>
          <p className="ml-2">Our services are not intended for children under 13. We do not knowingly collect data from minors.</p>

          <h3 className="text-lg font-semibold text-gray-800">9. Third-Party Links</h3>
          <p className="ml-2">We are not responsible for the privacy practices of third-party websites linked from our site.</p>

          <h3 className="text-lg font-semibold text-gray-800">10. Changes to This Policy</h3>
          <p className="ml-2">We may update this policy occasionally. We will post the updated date on this page.</p>

          <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
          <p className="ml-2">Email: <span className="font-medium">support@analyixhub.com</span></p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
