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
    <footer className="bg-yellow-100 text-gray-800 pt-12 pb-6 mt-20 shadow-inner border-t-4 border-yellow-300">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <Fade direction="up" triggerOnce>
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
              <FaPizzaSlice className="text-red-500" />
              Savor Book
            </h2>
            <p className="text-sm">
              Explore, cook, and share your favorite recipes with the world.
              Perfect for foodies and home chefs alike!
            </p>
          </div>
        </Fade>

        {/* Quick Links */}
        <Fade direction="up" delay={100} triggerOnce>
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="hover:text-orange-500">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-orange-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </Fade>

        {/* Social */}
        <Fade direction="up" delay={200} triggerOnce>
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/shoaib.5782/"
                className="hover:text-blue-600"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="https://x.com/soyebislam_1"
                className="hover:text-sky-400"
              >
                <FaTwitter size={22} />
              </a>
              <a
                href="https://instagram.com/code_shoaib"
                className="hover:text-pink-500"
              >
                <FaInstagram size={22} />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-500">
                <FaLinkedin size={22} />
              </a>
            </div>
            <div className="mt-6 flex space-x-2 text-lg">
              <FaHamburger className="text-red-400" />
              <FaIceCream className="text-purple-400" />
            </div>
          </div>
        </Fade>
      </div>

      <Fade delay={300} triggerOnce>
        <div className="text-center text-sm text-gray-600 mt-10 pt-6 border-t border-yellow-300">
          © {new Date().getFullYear()} Savor Book by Soyeb Islam. All rights
          reserved.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
