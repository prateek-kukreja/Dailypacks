import React from 'react'

function PrivacyPolicy() {
  return (
    <section className="bg-gray-100 py-8 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-6">
          At DailyPacks, we respect your privacy and are committed to protecting
          your personal information. This Privacy Policy outlines how we
          collect, use, and protect your information.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          1. Information We Collect
        </h2>
        <p className="text-gray-600 mb-4">
          We may collect personal identification details, payment information,
          shipping details, and browsing behavior through cookies.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-600 mb-4">
          The information collected is used to process orders, provide customer
          support, and improve our services.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          3. Data Security
        </h2>
        <p className="text-gray-600 mb-4">
          We implement security measures to protect your information but note
          that no method is 100% secure.
        </p>
      </div>
    </section>
  )
}

export default PrivacyPolicy
