import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="border-b border-white shadow-md bg-white sticky top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap logo">GM</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to="/BookMeeting"
              className="text-black bg-white border gold-border hover:bg-[#0b061f] hover:text-white hover:border-white focus:outline-none font-medium text-xl px-4 py-2 text-center uppercase"
            >
              Consultation
            </Link>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
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
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col uppercase font-medium p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <a href="/" className="block py-2 px-3 md:p-0 gold-text font-medium text-xl uppercase hover:underline" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="block py-2 px-3 md:p-0 gold-text font-medium text-xl uppercase hover:underline">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="block py-2 px-3 md:p-0 gold-text font-medium text-xl uppercase hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="block py-2 px-3 md:p-0 gold-text font-medium text-xl uppercase hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="block py-2 px-3 md:p-0 gold-text font-medium text-xl uppercase hover:underline">
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
