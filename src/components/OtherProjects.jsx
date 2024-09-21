import React from 'react';

const OtherProjects = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#0b061f] mb-12">
          Other <span className="text-[#d4af37]">Projects</span>
        </h2>

        {/* Project Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Mindforge Project */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Project Image */}
            <div className="flex-1 mb-6 md:mb-0 md:mr-8">
              <img 
                src="/src/assets/Macbook-Air-mindforge-three.vercel.app.png" 
                alt="Mindforge Project Image"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Project Description */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-[#0b061f] mb-4">Mindforge</h3>
              <p className="text-lg text-gray-600">
              Mindforge is a personal development platform that allows users to search for and add self-development books, quotes, and podcasts, creating a resource hub for others to enjoy.
              </p>
            </div>
          </div>

          {/* GrowHub Coaching Project */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Project Image */}
            <div className="flex-1 mb-6 md:mb-0 md:mr-8">
              <img 
                src="/src/assets/Macbook-Air-coaching-website-kappa.vercel.app.png" 
                alt="GrowHub Coaching Project Image"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Project Description */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-[#0b061f] mb-4">GrowHub Coaching</h3>
              <p className="text-lg text-gray-600">
                GrowHub Coaching provides personalized coaching services to help individuals and teams achieve their goals. The platform features tailored coaching sessions, resources, and support to foster personal and professional growth.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;
