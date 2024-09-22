import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';

const Contact = () => {

  const [state, handleSubmit] = useForm("contact-form");

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const contactDetails = [
    { icon: <FaMapMarkerAlt className="text-2xl text-[#d4af37]" />, text: 'Nairobi, Kenya' },
    { icon: <FaPhone className="text-2xl text-[#d4af37]" />, text: <a href='tel:+254713764676'>+254 713 764 676</a> },
    { icon: <FaEnvelope className="text-2xl text-[#d4af37]" />, text: <a href='mailto:collinsgichuki01@gmail.com'>collinsgichuki01@gmail.com</a> },
    { icon: <FaLinkedin className="text-2xl text-[#d4af37]" />, text: <a href="https://linkedin.com/in/collins-gichuki">LinkedIn Profile</a> },
  ];

  const handleScheduleClick = () => {
    Calendly.initPopupWidget({ url: 'https://calendly.com/collinsgichuki01/30min' });
    return false;
  };

  return (
    <section id='contact' className="py-12 px-6 sm:py-16 sm:px-12 lg:px-16">
      <div className="max-w-screen-xl mx-auto space-y-16">
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

          {/* Right Section: Contact Form */}
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold text-[#0b061f] mb-4">Contact <span className="text-[#d4af37]">Form</span></h2>
            <p className="text-gray-600 mb-6">
              You'll hear from me within 24 hours. For a quicker response, feel free to <Link to="/BookMeeting" className="text-[#d4af37] underline">Book a Meeting!</Link>
            </p>
            <form action="https://formspree.io/f/xrbzwqrj" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {['first-name', 'last-name'].map((name) => (
                  <div key={name}>
                    <label htmlFor={name} className="block text-lg font-medium text-gray-700">
                      {name === 'first-name' ? 'First Name' : 'Last Name'}
                    </label>
                    <input
                      type="text"
                      id={name}
                      name={name}
                      required
                      className="mt-1 py-3 px-4 block w-full border border-gray-300 shadow-sm"
                    />
                  </div>
                ))}
              </div>
              {['email', 'subject', 'message'].map((name) => (
                <div key={name}>
                  <label htmlFor={name} className="block text-lg font-medium text-gray-700">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </label>
                  {name === 'message' ? (
                    <textarea
                      id={name}
                      name={name}
                      rows="4"
                      required
                      className="mt-1 px-4 py-3 block w-full border border-gray-300 shadow-sm"
                    ></textarea>
                  ) : (
                    <input
                      type={name === 'email' ? 'email' : 'text'}
                      id={name}
                      name={name}
                      required
                      className="mt-1 py-3 px-4 block w-full border border-gray-300 shadow-sm"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="inline-block text-white border gold-border bg-[#0b061f] hover:bg-white hover:text-[#0b061f] focus:outline-none font-medium text-xl px-4 py-2 text-center uppercase"
              >
                Send Message
              </button>
            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
