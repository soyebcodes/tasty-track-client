import React from "react";
import { Link } from "react-router";
import {
  FaPizzaSlice,
  FaHamburger,
  FaIceCream,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content dark:text-gray-300 pt-12 pb-6 mt-20 shadow-inner border-t-4 border-yellow-300 dark:border-yellow-600">
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Brand/Intro */}
        <Fade direction="up" triggerOnce>
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <FaPizzaSlice className="text-3xl text-red-500 dark:text-red-400" />
              <span className="text-2xl font-bold text-amber-700 dark:text-amber-400">
                Tasty Track
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-400">
              Discover, cook, and share recipes from around the world. Built for
              food lovers and home chefs.
            </p>
          </div>
        </Fade>

        {/* Quick Links */}
        <Fade direction="up" delay={100} triggerOnce>
          <div>
            <h2 className="text-xl font-semibold mb-4 text-amber-700 dark:text-amber-400">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/terms"
                  className="hover:text-orange-500 dark:hover:text-orange-400"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-orange-500 dark:hover:text-orange-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-500 dark:hover:text-orange-400"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="hover:text-orange-500 dark:hover:text-orange-400"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </Fade>

        {/* Social Links */}
        <Fade direction="up" delay={200} triggerOnce>
          <div>
            <h2 className="text-xl font-semibold mb-4 text-amber-700 dark:text-amber-400">
              Connect with Us
            </h2>
            <div className="flex space-x-4 text-gray-700 dark:text-gray-400">
              <a
                href="https://web.facebook.com/shoaib.5782/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="https://x.com/soyebislam_1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 dark:hover:text-sky-300"
              >
                <FaTwitter size={22} />
              </a>
              <a
                href="https://instagram.com/code_shoaib"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 dark:hover:text-pink-400"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 dark:hover:text-blue-300"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
            <div className="mt-6 flex space-x-2 text-lg">
              <FaHamburger className="text-red-400 dark:text-red-500" />
              <FaIceCream className="text-purple-400 dark:text-purple-500" />
            </div>
          </div>
        </Fade>
      </div>

      {/* Copyright */}
      <Fade delay={300} triggerOnce>
        <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-10 pt-6 border-t border-yellow-300 dark:border-yellow-600">
          © {new Date().getFullYear()} <strong>Tasty Track</strong> by Soyeb
          Islam. All rights reserved.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
