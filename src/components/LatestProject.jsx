import React from 'react';

const MyLatestWork = () => {
  return (
    <section id='projects' className="py-16">
        <h1 className="text-4xl font-bold text-[#0b061f] mb-16 text-center">My Latest <span className='text-[#d4af37]'>Project</span></h1>
      <div className="max-w-screen-xl container mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Section: Screenshot */}
        <div className="flex-1 space-y-6 md:pl-8">
          <h2 className="text-3xl font-bold text-[#0b061f]">Project: Mirico Ri Coli</h2>
          <div className="space-y-4 text-lg text-gray-600">
            <p><strong>Overview:</strong> Mirirco Ri Coli is a sophisticated e-commerce platform currently in development, designed for premium leather shoes. The site aims to offer an intuitive shopping experience with high-resolution product images, detailed descriptions, and a streamlined checkout process. Although still in progress, the project focuses on creating an engaging and efficient user experience with a modern design.</p>
            <p><strong>Role & Skills:</strong> I am leading the development of this project using Next.js for the front-end and Flask for the back-end. My role involves designing the site architecture, implementing responsive design, and integrating payment gateways. I am dedicated to building a user-friendly interface while ensuring the platform is robust and scalable.</p>
            <p><strong>Current Status:</strong> The project is actively being developed, with ongoing work on finalizing features and optimizing performance. Initial prototypes and designs have been well-received, and I am working towards completing the remaining tasks to deliver a polished and functional e-commerce platform.</p>
          </div>
        </div>

        {/* Right Section: Project Details */}
        <div className="flex-shrink-0">
          <img
            src="../../src/assets/Macbook-Air-mirico-ri-coli.vercel.app.png" // Replace with the actual image path
            alt="Mirirco Ri Coli Screenshot"
            className="w-full max-w-sm rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default MyLatestWork;
