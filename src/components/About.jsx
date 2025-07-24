
import profileImage from "../assets/gichuki.png";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-16 sm:py-32 lg:px-8"
    >
      <div className="max-w-screen-xl container mx-auto flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-black mb-16 text-center">
          About <span className="text-[#d4af37]">Me</span>
        </h1>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
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
            <div className="space-y-4 text-lg text-black">
              <p>
                I’m a Full-Stack Developer who cares deeply about creating digital experiences that are not only functional, but thoughtful, intuitive, and built to last.
              </p>
              <p>
                I enjoy transforming complex ideas into well-structured, user-centered solutions — whether that’s building from scratch or improving what already exists. My work is rooted in clarity, scalability, and clean code practices.
              </p>
              <p>
                I’m driven by curiosity and collaboration. I believe great products are born out of great communication and an openness to learn, adapt, and iterate.
              </p>
              <p>
                When I’m not coding, I recharge by biking or running — activities that keep my mind fresh and focused. They remind me that progress, in code or life, is best made with purpose and rhythm.
              </p>
              <p>
                I&apos;m always excited to connect and create — let’s build something meaningful together.
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
