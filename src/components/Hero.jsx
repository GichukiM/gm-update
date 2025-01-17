
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImage from "../assets/gichuki.png";

const HeroSection = () => {
  return (
    <main
      id="home"
      className="relative overflow-hidden px-6 py-16  lg:px-8"
    >
      <div className="max-w-screen-xl container mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left Section: Text and CTA */}
        <article className="flex-1 space-y-6 md:pr-8">
          <h1 className="text-4xl font-bold text-white leading-tight">
          Building Impactful Software Solutions
          </h1>
          <h2 className="text-3xl font-bold text-white">
            Hello, I am Collins <br />
            <span className="text-4xl font-bold">GICHUKI MUCHIRI,</span>
          </h2>
          <p className="text-lg text-white lg:w-9/12 sm:w-full">
            A results-driven Full-Stack Software Engineer with expertise in
            designing scalable backend systems and creating seamless,
            user-focused interfaces. With a passion for problem-solving and a
            knack for collaboration, I build intuitive web applications that
            enhance user experiences and drive business growth.
            <br />
            <br />
            Let’s
            connect—I’m ready to bring my expertise to your team and help you
            achieve your goals.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 text-xl">
            <a
              href="https://github.com/GichukiM"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white border-2 gold-border rounded-full p-2 hover:text-white hover:bg-[#0b061f]"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/collins-gichuki"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white border-2 gold-border rounded-full p-2 hover:text-white hover:bg-[#0b061f]"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:collinsgichuki01@gmail.com"
              aria-label="Email"
              target='_blank'
              className="text-white border-2 gold-border rounded-full p-2 hover:text-white hover:bg-[#0b061f]"
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
            className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
