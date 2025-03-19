
import { FaGlobe } from 'react-icons/fa'; 
import mindforgeImage from '../assets/Macbook-Air-mindforge-three.vercel.app.png'
import miricoricoliImage from '../assets/Macbook-Air-miricoricoli.vercel.app.png';
import wangariBooks from '../assets/Macbook-Air-wangarimuchiribooks.vercel.app.png'
import linkshamba from '../assets/Macbook-Air-link-shamba.vercel.app.png'
import { FaGithub } from 'react-icons/fa6';

const OtherProjects = () => {
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Other <span className="text-[#d4af37]">Projects</span>
        </h2>

        {/* Project Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Mindforge Project */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Project Image */}
            <div className="flex-1 mb-6 md:mb-0 md:mr-8">
              <img 
                src={mindforgeImage} 
                alt="Mindforge Project Image"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Project Description */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white drop-shadow-gold mb-4">Mindforge</h3>
              <p className="text-lg text-white mb-4">
                Mindforge is a personal development platform that allows users to search for and add self-development books, quotes, and podcasts, creating a resource hub for others to enjoy.
              </p>
              {/* Live Website Link */}
              <a 
                href="https://mindforge-three.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#d4af37] hover:text-white flex items-center"
              >
                <FaGlobe className="mr-2" /> Live Link
              </a>
               {/* GitHub Link */}
               <a 
                href='https://github.com/GichukiM/MindForge'
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#d4af37] hover:text-white flex items-center"
              >
                <FaGithub className="mr-2" />GitHub Link
              </a>
            </div>
          </div>

          {/* Mirico Ri Coli Project */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Project Image */}
            <div className="flex-1 mb-6 md:mb-0 md:mr-8">
              <img 
                src={miricoricoliImage}
                alt="GrowHub Coaching Project Image"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Project Description */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white drop-shadow-gold mb-4">Mirico Ri Coli</h3>
              <p className="text-lg text-white mb-4">
              Mirirco Ri Coli is an e-commerce platform for premium leather shoes, built with the MERN stack. It streamlines the shopping experience with efficient product browsing, seamless checkout, and robust order and product management for admins.
              </p>
              {/* Live Website Link */}
              <a 
                href='https://miricoricoli-gichuki-muchiris-projects.vercel.app/'
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#d4af37] hover:text-white flex items-center"
              >
                <FaGlobe className="mr-2" />Live Link
              </a>
              {/* GitHub Link */}
              <a  
                href='https://github.com/GichukiM/MiricoRiColi'
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#d4af37] hover:text-white flex items-center"
              >
                <FaGithub className="mr-2" />GitHub Link
              </a>
            </div>
          </div>

          {/* Wangari Muchiri Book Project */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Project Image */}
            <div className="flex-1 mb-6 md:mb-0 md:mr-8">
              <img 
                src={wangariBooks}
                alt="GrowHub Coaching Project Image"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Project Description */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white drop-shadow-gold mb-4">Wangari Muchiri Books</h3>
              <p className="text-lg text-white mb-4">
              The website for Take Up Space promotes Wangari Muchiri’s memoir, offering insights into personal growth, self-love, and resilience. It provides information about the book, its themes, and its impact, alongside options to download the e-book and explore readers’ testimonials.
              </p>
              {/* Live Website Link */}
              <a 
                // href="https://coaching-website-kappa.vercel.app" 
                href='https://wangarimuchiribooks.co.ke'
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#d4af37] hover:text-white flex items-center"
              >
                <FaGlobe className="mr-2" />Live Link
              </a>
            </div>
          </div>

          {/* LinkShamba Project */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Project Image */}
            <div className="flex-1 mb-6 md:mb-0 md:mr-8">
              <img 
                src={linkshamba}
                alt="LinkShamba landing page Image"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Project Description */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white drop-shadow-gold mb-4">LinkShamba</h3>
              <p className="text-lg text-white mb-4">
              LINKSHAMBA is a comprehensive farm management app designed to empower African farmers to stay connected, informed, and in control of their farm operations.
              </p>
              {/* Live Website Link */}
              <a 
                href='https://link-shamba.vercel.app/'
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#d4af37] hover:text-white flex items-center"
              >
                <FaGlobe className="mr-2" />Live Link
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;
