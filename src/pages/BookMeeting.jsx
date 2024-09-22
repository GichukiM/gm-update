import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {

    const contactDetails = [
        { icon: <FaMapMarkerAlt className="text-2xl text-[#d4af37]" />, text: 'Nairobi, Kenya' },
        { icon: <FaPhone className="text-2xl text-[#d4af37]" />, text: <a href='tel:+254713764676'>+254 713 764 676</a> },
        { icon: <FaEnvelope className="text-2xl text-[#d4af37]" />, text: <a href='mailto:collinsgichuki01@gmail.com'>collinsgichuki01@gmail.com</a> },
        { icon: <FaLinkedin className="text-2xl text-[#d4af37]" />, text: <a href="https://linkedin.com/in/collins-gichuki">LinkedIn Profile</a> },
      ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* <ContactHero /> */}
      <section className="bg-gray-50 py-12 px-6 sm:py-16 sm:px-12 lg:px-16">
        <div className="max-w-screen-xl mx-auto space-y-16">
        <Link
      to="/"
      className="inline-block bg-white border gold-border hover:bg-[#0b061f] hover:text-white hover:border-white focus:outline-none px-4 py-2 text-black text-3xl font-bold"
    >
      Back <span className="text-[#d4af37]">Home</span>
    </Link>
          <div className="flex flex-col md:flex-row md:items-start gap-12">
                {/* Left Section: Get in Touch */}
                <div className="flex-1 space-y-4 flex flex-col justify-between">
                    <div>
                    <h2 className="text-3xl font-bold text-[#0b061f] mb-4">Get in <span className="text-[#d4af37]">Touch</span></h2>
                    <p className="text-lg text-gray-600 mb-6">
                        I'm here to partner with you throughout every stage of your project and turn your ideas into reality together. Don't settle for less in quality or functionality—work with a developer who is committed to your success. I offer cutting-edge, dependable, and scalable solutions tailored to meet your objectives. Ready to take your business to the next level? Let's get in touch!
                    </p>
                    <div className="space-y-6">
                        {contactDetails.map(({ icon, text }, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            {icon}
                            <p className="text-lg text-gray-800">{text}</p>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>

                {/* Right Section: Calendly Plugin */}
                <div className="flex-1">
                <h2 className="text-3xl font-bold text-[#0b061f] mb-4">Book a <span className="text-[#d4af37]">Call</span></h2>
                <div className="bg-white shadow-lg p-6">
                    {/* Calendly Inline Widget */}
                    <div className="calendly-inline-widget" data-url="https://calendly.com/collinsgichuki01/30min" style={{ minWidth: '320px', height: '700px' }}></div>
                </div>
                </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
