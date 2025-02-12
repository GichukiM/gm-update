import linkshambaImage from "../assets/Macbook-Air-link-shamba.vercel.app.png";

const MyLatestWork = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-16 sm:py-32 lg:px-8"
    >
      <h1 className="text-4xl font-bold text-white mb-16 text-center">
        My Latest <span className="text-[#d4af37]">Project</span>
      </h1>
      <div className="max-w-screen-xl container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Section: Project Details */}
        <div className="flex-1 space-y-6 md:pr-8">
          <h2 className="text-3xl font-bold text-white">
            Project: LINKSHAMBA - Farm Management App
          </h2>
          <div className="space-y-4 text-lg text-white">
            <p>
              <strong>Overview:</strong> LINKSHAMBA is a comprehensive farm
              management app designed to empower African farmers to stay
              connected, informed, and in control of their farm operations.
              With tools for real-time activity tracking, financial management,
              and record-keeping, LINKSHAMBA ensures convenience, transparency,
              and data security for farmers managing diverse operations.
            </p>
            <p>
              <strong>Role & Skills:</strong> As the sole developer, I am
              designing and implementing LINKSHAMBA using the MERN stack
              (MongoDB, Express, React, Node.js). My work involves building an
              intuitive user interface, crafting APIs for efficient data
              communication, and integrating real-time features that enhance
              usability and scalability for farmers.
            </p>
            <p>
              <strong>Current Status:</strong> LINKSHAMBA is currently in
              development. I’m focused on ensuring the functionality of its
              core features, including:
            </p>
            <ul className="list-disc list-inside pl-4 text-white">
              <li>Farm Activity Tracking: Monitor operations in real-time.</li>
              <li>Inventory Management: Track inputs, outputs, and supplies.</li>
              <li>Record-Keeping: Store and retrieve essential farm records.</li>
              <li>Financial Management: Manage budgets and expenses seamlessly.</li>
            </ul>
            <p>
              {/* You can explore the project’s prototype and progress{" "}
              <a
                href="https://linkshamba.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4af37] items-center"
              >
                here
              </a> */}
               The goal is to deliver a robust, user-friendly application
              tailored to the needs of African farmers.
            </p>
          </div>
        </div>

        {/* Right Section: Screenshot */}
        <div className="flex-shrink-0">
          <img
            src={linkshambaImage}
            alt="LINKSHAMBA Farm Management App Logo"
            className="w-full max-w-sm rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default MyLatestWork;
