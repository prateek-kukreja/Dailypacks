import React from 'react'

function TnC() {
  return (
    <div>
      <section className="bg-white py-8 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-600 mb-6">
            By using our website and purchasing from DailyPacks, you agree to
            the following terms and conditions.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Product Availability
          </h2>
          <p className="text-gray-600 mb-4">
            All products displayed on the site are subject to availability and
            may be discontinued at any time.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. Pricing
          </h2>
          <p className="text-gray-600 mb-4">
            Prices are subject to change without notice. The price you pay is
            the one displayed at checkout.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. Payment
          </h2>
          <p className="text-gray-600 mb-4">
            We accept multiple payment methods, including credit and debit
            cards.
          </p>
        </div>
      </section>
    </div>
  )
}

export default TnC
