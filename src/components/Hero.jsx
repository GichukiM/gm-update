
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImage from "../assets/Collins.jpg";

const HeroSection = () => {
  return (
    <main
      id="home"
      className="relative overflow-hidden px-6 py-16  lg:px-8"
    >
      <div className="max-w-screen-xl container mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left Section: Text and CTA */}
        <article className="flex-1 space-y-6 md:pr-8">
          <h1 className="text-4xl font-bold text-black leading-tight">
          Building Thoughtful, Scalable Digital Experiences
          </h1>
          <h2 className="text-3xl font-bold text-black">
            <span className="text-4xl font-bold">Hello, I am Collins GICHUKI,</span>
          </h2>
          <p className="text-lg text-black lg:w-9/12 sm:w-full">
            A Full-Stack Developer focused on crafting clean, intuitive, and scalable solutions that drive real-world results. I bring together deep technical understanding and a strong design sensibility to build products that are not only functional — but delightful to use. Whether it's streamlining systems, enhancing user journeys, or solving complex problems, I thrive on creating experiences that make a lasting impact.
            <br />
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 text-xl">
            <a
              href="https://github.com/GichukiM"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-black border-2 gold-border rounded-full p-2 hover:text-white hover:bg-[#0b061f]"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/collins-gichuki"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-black border-2 gold-border rounded-full p-2 hover:text-white hover:bg-[#0b061f]"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:collinsgichuki01@gmail.com"
              aria-label="Email"
              target='_blank'
              className="text-black border-2 gold-border rounded-full p-2 hover:text-white hover:bg-[#0b061f]"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Button to Contact Page */}
          <a
            href="https://docs.google.com/document/d/1VG65EGezBmJ7Ozl8ii2dSxsk2vP7TysYY39FVek2bk0/edit?usp=sharing"  target="_blank"
            className="inline-block text-white border gold-border bg-[#0b061f] hover:bg-white hover:text-[#0b061f] focus:outline-none font-medium text-xl px-4 py-2 text-center uppercase"
          >
            Download Resume
          </a>
        </article>

        {/* Right Section: Image */}
        <div className="flex-shrink-0">
          <img
            src={profileImage}
            alt="Software Engineer Collins Gichuki"
            className="w-96 h-96 shadow-lg object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
