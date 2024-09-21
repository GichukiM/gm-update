import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" bg-[#0b061f] py-4">
      {/* <div className="max-w-screen-xl container mx-auto px-4 flex flex-col md:flex-row justify-between">
        
        
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold mb-4">Receive the Solutions You Need</h2>
          <p className="text-lg">
          Don't settle for less in quality or functionality—work with a developer who is committed to your success. I offer cutting-edge, dependable, and scalable solutions tailored to meet your objectives. Ready to take your business to the next level? Let's get in touch!
          </p>
        </div>

        
        <div className="flex-1 flex flex-col items-end space-y-4">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <p className="text-lg">
              <a href="tel:+254713764676" className="block flex items-center space-x-2 hover:underline">
                <FaPhone className="text-xl" />
                <span>+254 713 764 676</span>
              </a>
              <a href="mailto:collinsgichuki01@gmail.com" className="block flex items-center space-x-2 hover:underline">
                <FaEnvelope className="text-xl" />
                <span>collinsgichuki01@gmail.com</span>
              </a>
            </p>
            <br />
            <Link to="/contact">
              <a className="inline-block text-white border border-[#d4af37] bg-[#0b061f] hover:bg-white hover:text-[#0b061f] focus:outline-none font-medium text-xl px-4 py-2 text-center uppercase">
                Talk To Me
              </a>
            </Link>
          </div>
        </div>
        
      </div> */}

      {/* Bottom Section: Footer Note */}
      <div className="text-center mt-1">
        <div className='relative overflow-hidden px-8 py-4 sm:py-4 lg:px-4'>
        <p className="text-gray-400">
          © 2024. All rights reserved, Gichuki Muchiri.
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
