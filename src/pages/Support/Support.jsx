import React from "react";

const Support = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">
        Support Center
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Having trouble or need help with something? We're here to assist you!
      </p>

      <div className="bg-base-100 shadow-lg rounded p-8 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-amber-700 mb-2">FAQs</h3>
          <p className="text-gray-700">
            Check our FAQ section for quick answers to common questions.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-amber-700 mb-2">
            Email Support
          </h3>
          <p className="text-gray-700">
            You can email us at{" "}
            <a
              href="mailto:support@savorfood.com"
              className="text-orange-600 underline"
            >
              support@tastytrack.com
            </a>
            and we'll get back to you within 24 hours.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-amber-700 mb-2">
            Live Chat
          </h3>
          <p className="text-gray-700">
            Our team is available for live chat from{" "}
            <strong>9 AM – 6 PM (UTC+6)</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
