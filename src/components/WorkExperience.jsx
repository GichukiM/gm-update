const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-16 sm:py-32 lg:px-8"
    >
      <h2 className="text-4xl font-bold text-white mb-16 text-center">
        My <span className="text-[#d4af37]">Experience</span>
      </h2>
      <div className="max-w-screen-xl container mx-auto flex flex-col items-center gap-8">
        {/* M-Treat Experience */}
        <div className="w-full space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Full-Stack Developer Intern
            <span className="text-[#d4af37]"> | M-Treat</span>
          </h3>
          <p className="text-sm text-white mb-2">
            February 2025 - Present | Remote - Nairobi, Kenya
          </p>
          <h4 className="text-lg font-semibold text-[#d4af37]">
            Key Responsibilities & Achievements:
          </h4>
          <ul className="list-disc pl-6 text-white space-y-2">
            <li>
              Built and styled interactive UI components using Material UI, enhancing user experience.
            </li>
            <li>
              Developed and integrated frontend components with RESTful API endpoints for seamless functionality.
            </li>
            <li>
              Collaborated with the backend team to optimize performance and scalability in a fast-paced Agile environment.
            </li>
          </ul>
        </div>

        {/* GO2COD Experience */}
        <div className="w-full space-y-6">
          <h3 className="text-2xl font-bold text-white">
            Software Developer Intern
            <span className="text-[#d4af37]"> | GO2COD</span>
          </h3>
          <p className="text-sm text-white mb-2">
            October 2024 - November 2024 | Remote - Addis Ababa, Ethiopia
          </p>
          <h4 className="text-lg font-semibold text-[#d4af37]">
            Key Responsibilities & Achievements:
          </h4>
          <ul className="list-disc pl-6 text-white space-y-2">
            <li>
              Developed projects using the MERN stack (MongoDB, Express, React, Node.js), integrating external APIs to build scalable applications.
            </li>
            <li>
              Managed project scope and timelines effectively, ensuring functionality and security.
            </li>
            <li>
              Documented projects on GitHub and LinkedIn, showcasing the full development lifecycle.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;