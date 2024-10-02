import React from 'react'

function ContactUs() {
  return (
    <section className="bg-gray-100 py-8 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 mb-6">
          If you have any questions or concerns, feel free to reach out to us.
          We are here to help!
        </p>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Email</h2>
          <p className="text-gray-600">[email@example.com]</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Phone</h2>
          <p className="text-gray-600">[Phone Number]</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Address</h2>
          <p className="text-gray-600">[Business Address]</p>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
