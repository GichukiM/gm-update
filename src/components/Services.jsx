import { FaLaptopCode, FaServer, FaChalkboardTeacher } from 'react-icons/fa';

const Services = () => {
  return (
    <section id='services' className="py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-black mb-12">
          My <span className="text-[#d4af37]">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

          {/* Frontend Development */}
          <div className="p-8 shadow-inner shadow-[#d4af37] rounded-lg">
            <FaLaptopCode className="text-5xl text-[#d4af37] mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold text-black mb-4">
              Frontend <span className="text-[#d4af37]">Development</span>
            </h3>
            <p className="text-lg text-black">
              I create user-focused digital experiences that look great and function flawlessly across devices. This includes everything from crafting intuitive layouts to ensuring accessibility and performance. Whether it's a landing page or a full-fledged web app, I ensure every element aligns with your brand and audience needs.
            </p>
          </div>

          {/* Backend Development */}
          <div className="p-8 shadow-inner shadow-[#d4af37] rounded-lg">
            <FaServer className="text-5xl text-[#d4af37] mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold text-black mb-4">
              Backend <span className="text-[#d4af37]">Development</span>
            </h3>
            <p className="text-lg text-black">
              I build the behind-the-scenes systems that power your digital products. This includes setting up secure data storage, managing user authentication, creating efficient workflows, and integrating third-party services. Everything is tailored to ensure reliability, scalability, and smooth interaction with your frontend.
            </p>
          </div>

          {/* Maintenance & Support */}
          <div className="p-8 shadow-inner shadow-[#d4af37] rounded-lg">
            <FaChalkboardTeacher className="text-5xl text-[#d4af37] mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold text-black mb-4">
              Maintenance & <span className="text-[#d4af37]">Support</span>
            </h3>
            <p className="text-lg text-black">
              I provide ongoing support to keep your digital products running smoothly post-launch. From fixing bugs and improving performance to implementing updates and refining features, I ensure your system stays secure, efficient, and aligned with evolving user needs and business goals.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
