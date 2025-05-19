import linkshambaImage from "../assets/Macbook-Air-link-shamba.vercel.app.png";

const MyLatestWork = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-16 sm:py-32 lg:px-8"
    >
      <h1 className="text-4xl font-bold text-black mb-16 text-center">
        My Latest <span className="text-[#d4af37]">Project</span>
      </h1>
      <div className="max-w-screen-xl container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Section: Project Details */}
        <div className="flex-1 space-y-6 md:pr-8">
          <h2 className="text-3xl font-bold text-black">
            Project: LINKSHAMBA - Farm Management App
          </h2>
          <div className="space-y-4 text-lg text-black">
            <p>
              <strong>Overview:</strong> LINKSHAMBA is a digital solution born out of a real need within my own farming operations. The platform is designed to help African farmers take control of their farm management through better organization, accountability, and access to insights.
            </p>
            <p>
              <strong>Team & Approach:</strong> I’m working alongside a close friend in a startup-like setting where we both contribute to all areas of the project. While my main focus is on frontend development, I actively assist with backend tasks to ensure cohesive progress across the system.
            </p>
            <p>
              <strong>Progress:</strong> We are currently building and testing the core experience internally, with many features still under development and only accessible to the team. However, we expect to roll out the first version in the coming months.
            </p>
            <p>
              We’ve already launched a landing page with a waitlist for early access. This will help us gauge interest and gather feedback from potential users as we prepare for the initial release.
            </p>
          </div>
        </div>

        {/* Right Section: Screenshot */}
        <div className="flex-shrink-0">
          <img
            src={linkshambaImage}
            alt="LINKSHAMBA Farm Management App Screenshot"
            className="w-full max-w-sm rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default MyLatestWork;
