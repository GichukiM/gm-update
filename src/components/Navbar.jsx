import { useState } from "react";
import { Link } from 'react-scroll';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="shadow-md bg-white sticky top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap logo">
              CGM
            </span>
          </a>

          {/* Desktop NavLinks */}
          <div className="hidden md:flex space-x-8 md:order-1 uppercase font-medium">
            <Link to="/" className="text-black text-xl hover:underline hover:text-[#d4af37]">
              Home
            </Link>
            <Link to="about" className="text-black text-xl hover:underline hover:text-[#d4af37]">
              About Me
            </Link>
            <Link to="skills" className="text-black text-xl hover:underline hover:text-[#d4af37]">
              Skills
            </Link>
            <Link to="experience" className="text-black text-xl hover:underline hover:text-[#d4af37]">
              experience
            </Link>
            <Link
              to="projects"
              className="text-black text-xl hover:underline hover:text-[#d4af37]"
            >
              Projects
            </Link>
            <Link
              to="services"
              className="text-black text-xl hover:underline hover:text-[#d4af37]"
            >
              Services
            </Link>
            <Link to="contact" className="text-black text-xl hover:underline hover:text-[#d4af37]">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 hover:text-[#0b061f]"
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

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-2/3 bg-white border-l border-1 border-white transition-transform transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden z-40 shadow-lg`}
            id="navbar-cta"
          >
            <div className="flex justify-end p-4">
              <button
                type="button"
                onClick={toggleMenu}
                className="text-black hover:text-gray-700 focus:outline-none"
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
                <a
                  href="/"
                  className="block py-2 px-3 text-black font-medium text-xl uppercase hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  to="about"
                  className="block py-2 px-3 text-black font-medium text-xl uppercase hover:underline"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  className="block py-2 px-3 text-black font-medium text-xl uppercase hover:underline"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  className="block py-2 px-3 text-black font-medium text-xl uppercase hover:underline"
                >
                 Experience
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  className="block py-2 px-3 text-black font-medium text-xl uppercase hover:underline"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  className="block py-2 px-3 text-black font-medium text-xl uppercase hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className="block py-2 px-3 text-black font-medium text-xl uppercase hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
