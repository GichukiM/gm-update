
import profileImage from "../assets/gichuki.png";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-16 sm:py-32 lg:px-8"
    >
      <div className="max-w-screen-xl container mx-auto flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-white mb-16 text-center">
          About <span className="text-[#d4af37]">Me</span>
        </h1>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Section: Image */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 border-2 border-[#d4af37] rounded transform -translate-x-4 -translate-y-4 -rotate-4" />
            <img
              src={profileImage}
              alt="Collins Gichuki"
              className="w-64 h-64 md:w-80 md:h-80 rounded shadow-lg object-cover relative border-4 border-[#0b061f] solid"
              loading="lazy"
            />
          </div>

          {/* Right Section: About Me Text */}
          <article className="flex-1 space-y-6 md:pl-8">
            <div className="space-y-4 text-lg text-white">
              <p>
                I’m a Full-Stack Software Engineer passionate about creating
                intuitive, scalable web applications. With expertise in the MERN
                stack (MongoDB, Express, React, Node.js) and Python with Flask,
                I build seamless, end-to-end solutions that combine
                functionality with exceptional user experience.
              </p>
              <p>
                Collaboration and open communication are at the heart of my
                work. Whether developing innovative systems or refining existing
                processes, I approach every project with professionalism,
                warmth, and a commitment to exceeding expectations.
              </p>
              <p>
                Outside of work, I’m an avid biker and runner. These activities
                keep me energized and inspire creative problem-solving, helping
                me bring fresh perspectives to the challenges I tackle in
                development.
              </p>
              <p>Let’s connect and build impactful solutions together.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
