import React from 'react'
import { Link } from 'react-router-dom'

function Wrapup() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">DailyPacks</h2>
            <p className="mt-4 text-gray-400">
              Your trusted source for high-quality bags that fit your daily
              needs. Explore our variety of backpacks, travel bags, and more.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to={'/'} className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to={'/privacy_policy'}
                  className="text-gray-400 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={'/tnc'} className="text-gray-400 hover:text-white">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to={'/contact_us'}
                  className="text-gray-400 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to={'/shipping_and_delivery'}
                  className="text-gray-400 hover:text-white"
                >
                  Shipping and Delivery
                </Link>
              </li>
              <li>
                <Link
                  to={'/cancellation_and_refund'}
                  className="text-gray-400 hover:text-white"
                >
                  Cancellation and Refund
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-400">
                <i className="fas fa-envelope mr-2"></i> [email@example.com]
              </li>
              <li className="text-gray-400">
                <i className="fas fa-phone-alt mr-2"></i> [Phone Number]
              </li>
              <li className="text-gray-400">
                <i className="fas fa-map-marker-alt mr-2"></i> [Business
                Address]
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          &copy; 2024 DailyPacks. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Wrapup
