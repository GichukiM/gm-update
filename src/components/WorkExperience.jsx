const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-16 sm:py-32 lg:px-8"
    >
      <h2 className="text-4xl font-bold text-white mb-16 text-center">
        My <span className="text-[#d4af37]">Experience</span>
      </h2>
      <div className="max-w-screen-xl container mx-auto flex flex-col md:flex-row items-center gap-8">
      
          {/* Internship Experience */}
          <div className="flex-1 space-y-6 md:pr-8">
            <h3 className="text-2xl font-bold text-white">
              Software Developer Intern{" "}
              <span className="text-[#d4af37]">| GO2COD</span>
            </h3>
            <p className="text-sm text-white mb-2">
              October 2024 - November 2024 | Remote - Addis Ababa, Ethiopia
            </p>
            <p className="text-white mb-4">
              As a Software Developer Intern at GO2COD, I was responsible for
              delivering full-stack web applications and enhancing my technical
              skills through practical projects. During this 4-week internship,
              I worked on the following projects:
            </p>
            <ul className="list-disc pl-6 text-white space-y-2 mb-4">
              <li>
                <strong>Contact Manager:</strong> Developed a contact management
                system allowing users to perform CRUD operations on contact
                records.{" "}
                <a
                  className="text-[#d4af37] hover:text-white"
                  href="https://jinasave-frontend.onrender.com/"
                >
                  Live Link
                </a>
              </li>
              <li>
                <strong>CalcHub:</strong> Built a multi-functional calculator
                app featuring compound interest, currency conversion (using the
                ExchangeRate API), and loan payment calculators.{" "}
                <a
                  className="text-[#d4af37] hover:text-white"
                  href="https://ubuntu-calc-hub-frontend.onrender.com/"
                >
                  Live Link
                </a>
              </li>
              <li>
                <strong>Rock Paper Scissors Game:</strong> Created single-player
                and multiplayer versions of the RPS game, allowing users to play
                against the computer or challenge others using a unique room ID.{" "}
                <a
                  className="text-[#d4af37] hover:text-white"
                  href="https://rock-paper-scissors-sx38.onrender.com/"
                >
                  Live Link
                </a>
              </li>
              <li>
                <strong>SecurePass:</strong> Designed a secure password
                generator with email verification for sign-ups, logins, and
                password recovery, emphasizing user security.{" "}
                <a
                  className="text-[#d4af37] hover:text-white"
                  href="https://go2cod-sd-03.onrender.com/signup"
                >
                  Live Link
                </a>
              </li>
            </ul>
            <h4 className="text-lg font-semibold text-[#d4af37]">
              Key Achievements:
            </h4>
            <ul className="list-disc pl-6 text-white space-y-2">
              <li>
                Developed projects using the MERN stack (MongoDB, Express,
                React, Node.js), integrating external APIs to build scalable,
                user-friendly applications.
              </li>
              <li>
                Delivered projects independently, managing scope and timelines
                effectively, with a focus on functionality and security.
              </li>
              <li>
                Documented projects on GitHub and LinkedIn, showcasing the full
                development lifecycle, from planning to completion.
              </li>
            </ul>
          </div>
       
      </div>
    </section>
  );
};

export default WorkExperience;
