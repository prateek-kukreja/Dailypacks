import React from 'react'

function CancellationandRefund() {
  return (
    <section className="bg-gray-100 py-8 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Cancellation and Refund Policy
        </h1>
        <p className="text-gray-600 mb-6">
          We offer a simple and fair cancellation and refund process. Please
          review the policy below.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          1. Order Cancellation
        </h2>
        <p className="text-gray-600 mb-4">
          Orders can be canceled within 24 hours of placement unless they have
          been shipped.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          2. Return and Refund Policy
        </h2>
        <p className="text-gray-600 mb-4">
          Returns are accepted within 14 days of delivery. Items must be unused
          and in original packaging.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          3. Shipping Costs
        </h2>
        <p className="text-gray-600 mb-4">
          Return shipping costs are the responsibility of the customer unless
          the product is defective.
        </p>
      </div>
    </section>
  )
}

export default CancellationandRefund
