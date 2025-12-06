import React from "react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-purple-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Refund Policy</h1>
        <p className="text-sm text-gray-500 mt-1">Last Updated: [Date]</p>

        <section className="mt-6 space-y-4 text-gray-700 leading-relaxed">
          <p>
            Thank you for purchasing from <strong>AnalyixHub</strong>. Because our courses are digital products, we follow the policy below regarding refunds.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">No Refund Conditions</h3>
          <p className="ml-2">Generally, we do not provide refunds for digital course purchases after access has been granted. This includes:</p>
          <ul className="list-disc ml-8">
            <li>Change of mind</li>
            <li>Failure to complete the course</li>
            <li>Device or internet issues</li>
            <li>Expectation mismatch</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800">Eligible Refunds</h3>
          <p className="ml-2">Refunds may be considered only in limited situations such as duplicate charges or payment gateway errors. To request a refund, contact us within 48 hours with transaction details and evidence.</p>

          <h3 className="text-lg font-semibold text-gray-800">Processing Time</h3>
          <p className="ml-2">Refunds (if approved) are processed within 7–14 business days depending on the payment method and bank.</p>

          <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
          <p className="ml-2">support@analyixhub.com</p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
