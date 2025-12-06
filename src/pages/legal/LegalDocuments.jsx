import React from "react";

const LegalDocuments = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-purple-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Legal Documents & Disclaimer</h1>
        <p className="text-sm text-gray-500 mt-1">Last Updated: [Date]</p>

        <section className="mt-6 space-y-4 text-gray-700 leading-relaxed">
          <p>
            This page provides legal disclaimers and notices for <strong>AnalyixHub</strong>.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">Educational Purpose</h3>
          <p className="ml-2">All courses are provided for educational purposes. We do not guarantee earnings, placements, or specific outcomes. Success depends on individual effort.</p>

          <h3 className="text-lg font-semibold text-gray-800">No Professional Liability</h3>
          <p className="ml-2">AnalyixHub is not liable for any loss of revenue, business damages, or other losses arising from course use or advice provided.</p>

          <h3 className="text-lg font-semibold text-gray-800">Third-Party Tools</h3>
          <p className="ml-2">Courses may reference third-party tools (Adobe, YouTube, platforms). We do not represent those companies and any third-party terms apply.</p>

          <h3 className="text-lg font-semibold text-gray-800">Intellectual Property</h3>
          <p className="ml-2">All content is protected by copyright © [Year] AnalyixHub. Unauthorized copying or distribution is prohibited.</p>

          <h3 className="text-lg font-semibold text-gray-800">Jurisdiction</h3>
          <p className="ml-2">All disputes shall be governed by the laws of India and fall under the jurisdiction of the applicable courts.</p>

          <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
          <p className="ml-2">support@analyixhub.com</p>
        </section>
      </div>
    </div>
  );
};

export default LegalDocuments;
