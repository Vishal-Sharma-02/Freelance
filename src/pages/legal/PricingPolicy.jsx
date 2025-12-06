import React from "react";

const PricingPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-purple-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Pricing Policy</h1>
        <p className="text-sm text-gray-500 mt-1">Last Updated: [Date]</p>

        <section className="mt-6 space-y-4 text-gray-700 leading-relaxed">
          <p>
            This Pricing Policy explains how course prices are set and how offers and taxes are handled on <strong>AnalyixHub</strong>.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">Course Fees</h3>
          <p className="ml-2">Each course price is determined by duration, depth of content, and included materials. Prices may change without prior notice.</p>

          <h3 className="text-lg font-semibold text-gray-800">Offers & Discounts</h3>
          <p className="ml-2">We may run limited-time offers, discount codes, and combo deals. Discounts are non-transferable and subject to expiry.</p>

          <h3 className="text-lg font-semibold text-gray-800">Taxes</h3>
          <p className="ml-2">Applicable GST or other taxes are applied as required by local law and are shown at checkout.</p>

          <h3 className="text-lg font-semibold text-gray-800">Payment Methods</h3>
          <p className="ml-2">Payments are handled via Razorpay — UPI, Cards, Netbanking, Wallets.</p>

          <h3 className="text-lg font-semibold text-gray-800">Failed Transactions</h3>
          <p className="ml-2">If payment is debited but course access not granted, contact support with payment ID and screenshot. We will resolve within 24–48 hours.</p>

          <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
          <p className="ml-2">support@analyixhub.com</p>
        </section>
      </div>
    </div>
  );
};

export default PricingPolicy;
