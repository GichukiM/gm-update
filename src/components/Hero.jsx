import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing icons
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <main id='home' className="py-16">
      <div className="max-w-screen-xl container mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        
        {/* Left Section: Text and CTA */}
        <article className="flex-1 space-y-6 md:pr-8">
          <h1 className="text-4xl font-bold text-[#0b061f] leading-tight">
            You envision, I build.
          </h1>
          <h2 className='text-3xl font-bold text-[#0b061f]'>
            Hello, I am Collins <br/>
            <span className='text-4xl font-bold'>GICHUKI MUCHIRI,</span>
          </h2>
          <p className="text-lg text-gray-600 w-9/12">
            A Full-stack Software Engineer focused on designing and building seamless, scalable solutions. From backend architecture to user-centric frontend design, I turn your ideas into reality. Let’s connect and bring your business online with powerful, intuitive web applications that drive success.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 text-xl">
            <a 
              href="https://github.com/GichukiM" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub" 
              className="text-gray-800 border gold-border rounded-full p-2 hover:text-white hover:bg-[#0b061f]"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/collins-gichuki" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn" 
              className="text-gray-800 border gold-border rounded-full p-2 hover:text-white hover:bg-[#0b061f]"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:collinsgichuki01@gmail.com" 
              aria-label="Email" 
              className="text-gray-800 border gold-border rounded-full p-2 hover:text-white hover:bg-[#0b061f]"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Button to Contact Page */}
          <Link 
            to="/contact" // Assuming this scrolls to the contact section or use Link for Next.js navigation
            className="inline-block text-white border gold-border bg-[#0b061f] hover:bg-white hover:text-[#0b061f] focus:outline-none font-medium text-xl px-4 py-2 text-center uppercase"
          >
            Book A Discovery Call
          </Link>
        </article>

        {/* Right Section: Image */}
        <div className="flex-shrink-0">
          <img
            src="../../src/assets/gichuki.png"
            alt="Software Engineer Collins Gichuki"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
