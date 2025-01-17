import { FaLaptopCode, FaServer, FaChalkboardTeacher } from 'react-icons/fa'; // Icons for services

const Services = () => {
  return (
    <section id='services' className="py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My <span className="text-[#d4af37]">Services</span>
        </h2>

        {/* Services Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

          {/* Service 1: Web Design */}
          <div className="p-8 shadow-inner shadow-[#d4af37] rounded-lg">
            <FaLaptopCode className="text-5xl text-[#d4af37] mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-4">Frontend <span className="text-[#d4af37]">Development</span></h3>
            <p className="text-lg text-white">
            I craft intuitive, user-friendly interfaces with a focus on responsiveness and performance. Using modern technologies like React, Next.js, and CSS frameworks, I bring designs to life and ensure they work seamlessly across devices for an exceptional user experience.
            </p>
          </div>

          {/* Service 2: Software Development (Front & Back End) */}
          <div className="p-8 shadow-inner shadow-[#d4af37] rounded-lg">
            <FaServer className="text-5xl text-[#d4af37] mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-4">Backend <span className="text-[#d4af37]">Development</span></h3>
            <p className="text-lg text-white">
            I design and implement robust, scalable backend systems that power your applications. Leveraging technologies like Node.js, Express.js, Python, Flask, and MongoDB, I deliver secure APIs, database integrations, and optimized server performance to meet your unique needs.
            </p>
          </div>

          {/* Service 3: Mentorship */}
          <div className="p-8 shadow-inner shadow-[#d4af37] rounded-lg">
            <FaChalkboardTeacher className="text-5xl text-[#d4af37] mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-4">Maintenance & <span className="text-[#d4af37]">Support</span></h3>
            <p className="text-lg text-white">
            I offer comprehensive maintenance and support services to ensure your applications remain functional, secure, and up-to-date. From debugging and performance optimization to regular updates, I keep your systems running smoothly, so you can focus on growing your business.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
