import React from 'react';
import { FaLaptopCode, FaServer, FaChalkboardTeacher } from 'react-icons/fa'; // Icons for services

const Services = () => {
  return (
    <section id='services' className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#0b061f] mb-12">
          My <span className="text-[#d4af37]">Services</span>
        </h2>

        {/* Services Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

          {/* Service 1: Web Design */}
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <FaLaptopCode className="text-5xl text-[#d4af37] mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold text-[#0b061f] mb-4">Web Design</h3>
            <p className="text-lg text-gray-600">
              I create beautiful, user-centered web designs that bring your brand's vision to life. From wireframes to full-fledged designs, I ensure your website looks great and delivers excellent user experience.
            </p>
          </div>

          {/* Service 2: Software Development (Front & Back End) */}
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <FaServer className="text-5xl text-[#d4af37] mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold text-[#0b061f] mb-4">Software Development</h3>
            <p className="text-lg text-gray-600">
              From front-end to back-end, I build powerful, scalable software solutions. Whether it's a web app or a mobile interface, I ensure seamless functionality and optimal performance across all platforms.
            </p>
          </div>

          {/* Service 3: Mentorship */}
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <FaChalkboardTeacher className="text-5xl text-[#d4af37] mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold text-[#0b061f] mb-4">Mentorship</h3>
            <p className="text-lg text-gray-600">
              Passionate about guiding others, I offer mentorship for those looking to enhance their skills in web design, development, or software engineering. Let’s take your career to the next level together.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
