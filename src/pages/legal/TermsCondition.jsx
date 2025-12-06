import React from "react";

const TermsCondition = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-purple-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 mt-1">Last Updated: [Date]</p>

        <section className="mt-6 space-y-4 text-gray-700 leading-relaxed">
          <p>
            By accessing or using <strong>AnalyixHub</strong> and purchasing courses, you agree to these Terms & Conditions.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">Use of Website</h3>
          <p className="ml-2">You must be at least 13 years old and provide accurate information. You agree not to misuse the platform or share your account credentials.</p>

          <h3 className="text-lg font-semibold text-gray-800">Course Access</h3>
          <p className="ml-2">Courses are available only to the registered purchaser. Account sharing or reselling access is prohibited. Access durations vary by package.</p>

          <h3 className="text-lg font-semibold text-gray-800">Payments</h3>
          <p className="ml-2">All payments are processed by Razorpay. By making a purchase you authorize Razorpay to charge your chosen payment method.</p>

          <h3 className="text-lg font-semibold text-gray-800">Intellectual Property</h3>
          <p className="ml-2">All content (videos, PDFs, images) is owned by AnalyixHub. You may not copy, distribute, or resell content without explicit permission.</p>

          <h3 className="text-lg font-semibold text-gray-800">Prohibited Activities</h3>
          <p className="ml-2">You must not attempt to reverse-engineer content, download videos for redistribution, or engage in fraudulent activities (chargeback fraud, fake accounts).</p>

          <h3 className="text-lg font-semibold text-gray-800">Account Suspension</h3>
          <p className="ml-2">We may suspend or terminate accounts found violating these terms, copyright laws, or committing fraud.</p>

          <h3 className="text-lg font-semibold text-gray-800">Limitation of Liability</h3>
          <p className="ml-2">AnalyixHub is not liable for technical failures, lost data, or any indirect damages arising from using the platform.</p>

          <h3 className="text-lg font-semibold text-gray-800">Changes to Terms</h3>
          <p className="ml-2">We reserve the right to update these Terms. Continued use of the platform constitutes acceptance.</p>

          <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
          <p className="ml-2">support@analyixhub.com</p>
        </section>
      </div>
    </div>
  );
};

export default TermsCondition;
