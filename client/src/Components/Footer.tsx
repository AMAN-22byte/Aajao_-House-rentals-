import React from "react";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t bg-white py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-5">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-900">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/About"
                  className="text-gray-500 hover:text-purple-700">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-purple-700">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-purple-700">
                  Press
                </a>
              </li>
              <li>
                {/* <a href="#" className="text-gray-500 hover:text-purple-700">
                  Privacy
                </a> */}
                <Link
                  to="/privacy"
                  className="text-gray-500 hover:text-purple-700">
                  Privacy
                </Link>
                <br></br>
              </li>
              <li>
                <Link
                  to="/T&C"
                  className="text-gray-500 hover:text-purple-700 mt-3">
                  T&C
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-900">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-purple-700">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-purple-700">
                  Safety Information
                </a>
              </li>
              <li>
                <Link
                  to="/Cancel"
                  className="text-gray-500 hover:text-purple-700">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-purple-700">
                  Contact Us
                </a>
              </li>
              <li>
                <Link
                  to="/Host&Agreements"
                  className="text-gray-500 hover:text-purple-700">
                  Host & Agreement
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-900">Hosting</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-purple-700">
                  Try Hosting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-purple-700">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-purple-700">
                  Community Forum
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-purple-700">
                  Host Responsibly
                </a>
              </li>
              <li>
                <Link
                  to="/Blogs"
                  className="text-gray-500 hover:text-purple-700">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-900">aajao</h3>
            <p className="text-gray-500">
              Find your perfect stay with aajao, the world's leading
              accommodation booking platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-purple-700">
                {/* Replace with actual Facebook icon */}
                <span>📘</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-700">
                {/* Replace with actual Instagram icon */}
                <span>📸</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-700">
                {/* Replace with actual Twitter icon */}
                <span>🐦</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t pt-4 text-center">
          <p className="text-gray-500">© 2025 aajao. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
