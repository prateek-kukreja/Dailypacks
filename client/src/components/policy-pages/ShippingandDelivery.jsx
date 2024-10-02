import React from 'react'

function ShippingandDelivery() {
  return (
    <section className="bg-white py-8 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Shipping and Delivery Policy
        </h1>
        <p className="text-gray-600 mb-6">
          At DailyPacks, we aim to deliver your products as quickly as possible.
          Below are our shipping policies.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          1. Processing Time
        </h2>
        <p className="text-gray-600 mb-4">
          Orders are processed within 1-2 business days. Orders placed on
          weekends will be processed the next business day.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          2. Shipping Time
        </h2>
        <p className="text-gray-600 mb-4">
          Domestic orders take 3-7 business days, while international orders may
          take up to 14 days.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          3. Lost or Damaged Packages
        </h2>
        <p className="text-gray-600 mb-4">
          If your package is lost or damaged, please contact us, and we will
          assist in resolving the issue.
        </p>
      </div>
    </section>
  )
}

export default ShippingandDelivery
