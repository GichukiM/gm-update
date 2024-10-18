import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="border-b border-white shadow-md bg-white sticky top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap logo">GM</span>
          </a>

          {/* Desktop NavLinks */}
          <div className="hidden md:flex space-x-8 md:order-1 uppercase font-medium">
            <Link to="/" className="gold-text text-xl hover:underline">
              Home
            </Link>
            <Link to="/#about" className="gold-text text-xl hover:underline">
              About Me
            </Link>
            <Link to="/#projects" className="gold-text text-xl hover:underline">
              Projects
            </Link>
            <Link to="/#services" className="gold-text text-xl hover:underline">
              Services
            </Link>
            <Link to="/#contact" className="gold-text text-xl hover:underline">
              Contact
            </Link>
          </div>

          {/* Consultation Button and Hamburger Menu */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to="/BookMeeting"
              className="text-black bg-white border gold-border hover:bg-[#0b061f] hover:text-white hover:border-white focus:outline-none font-medium text-xl px-4 py-2 text-center uppercase"
            >
              Consultation
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-2/3 bg-white transition-transform transform ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden z-40 shadow-lg`}
            id="navbar-cta"
          >
            <div className="flex justify-end p-4">
              <button
                type="button"
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col uppercase font-medium p-4 mt-4 space-y-4">
              <li>
                <a href="/" className="block py-2 px-3 gold-text font-medium text-xl uppercase hover:underline" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="block py-2 px-3 gold-text font-medium text-xl uppercase hover:underline">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="block py-2 px-3 gold-text font-medium text-xl uppercase hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="block py-2 px-3 gold-text font-medium text-xl uppercase hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="block py-2 px-3 gold-text font-medium text-xl uppercase hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
