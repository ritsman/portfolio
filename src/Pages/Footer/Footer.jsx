// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Assistance
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="hover:text-red-400 cursor-pointer transition duration-300">
                +91-9977882637
              </li>
              <li className="hover:text-red-400 cursor-pointer transition duration-300">
                Email Us
              </li>
              <li className="hover:text-red-400 cursor-pointer transition duration-300">
                Chat With Us
              </li>
              <li className="hover:text-red-400 cursor-pointer transition duration-300">
                Track Your Order
              </li>
              <li className="hover:text-red-400 cursor-pointer transition duration-300">
                Returns & Exchange
              </li>
              <li className="hover:text-red-400 cursor-pointer transition duration-300">
                Resize & Repair
              </li>
              <li className="hover:text-red-400 cursor-pointer transition duration-300">
                FAQs
              </li>
              <li className="hover:text-red-400 cursor-pointer transition duration-300">
                Accessibility
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Experience E-Commerce
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="hover:text-red-400 cursor-pointer transition duration-300">
                Free Express Shipping
              </li>
              <li className="hover:text-red-400 cursor-pointer transition duration-300">
                Free Returns
              </li>
              <li className="hover:text-red-400 cursor-pointer transition duration-300">
                Payment Options
              </li>
              <li className="hover:text-red-400 cursor-pointer transition duration-300">
                Lifetime Warranty
              </li>
              <li className="hover:text-red-400 cursor-pointer transition duration-300">
                Enhanced Warranty Plan
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Promotions
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="hover:text-red-400 cursor-pointer transition duration-300">
                US Service Discount
              </li>
              <li className="hover:text-red-400 cursor-pointer transition duration-300">
                Community Offers
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              About Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="hover:text-red-400 cursor-pointer transition duration-300">
                Our Story
              </li>
              <li className="hover:text-red-400 cursor-pointer transition duration-300">
                Customer Reviews
              </li>

              <li className="hover:text-red-400 cursor-pointer  transition duration-300">
                The Blog
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex justify-center space-x-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1024px-PayPal.svg.png"
              alt="PayPal"
              className="h-6 cursor-pointer transition-transform transform hover:scale-110"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB6YnQoM78NCEw3f--iWcGhpQFjBxfo9k6fw&s"
              alt="Visa"
              className="h-6 cursor-pointer transition-transform transform hover:scale-110"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/640px-Mastercard_2019_logo.svg.png"
              alt="Mastercard"
              className="h-6 cursor-pointer transition-transform transform hover:scale-110"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Amazon_Pay_logo.svg/2560px-Amazon_Pay_logo.svg.png"
              alt="Amazon Pay"
              className="h-6 cursor-pointer transition-transform transform hover:scale-110"
            />
          </div>
          <p className="text-base text-gray-400 text-center mt-8">
            &copy; 2024 E-Commerce Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
