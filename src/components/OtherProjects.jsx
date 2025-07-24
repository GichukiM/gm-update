import { FaGlobe } from 'react-icons/fa';
import mindforgeImage from '../assets/Macbook-Air-mindforge-three.vercel.app.png'
import miricoricoliImage from '../assets/Macbook-Air-miricoricoli.vercel.app.png';
import wangariBooks from '../assets/Macbook-Air-wangarimuchiribooks.vercel.app.png'
// import linkshamba from '../assets/Macbook-Air-link-shamba.vercel.app.png'
import mountainBushKnives from '../assets/Macbook-Air-www.mbknanyuki.com.png'
import { FaGithub } from 'react-icons/fa6';

const OtherProjects = () => {
  return (
    <section className="py-16" id='projects'>
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-black mb-12">
          Other <span className="text-[#d4af37]">Projects</span>
        </h2>

        {/* Project Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">

          {/* Mountain Bush Knives */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-6 md:mb-0 md:mr-8">
              <img src={mountainBushKnives} alt="Mountain Bush Knives Project Image" className="w-full h-auto object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-black drop-shadow-gold mb-4">Mountain Bush Knives</h3>
              <p className="text-lg text-black mb-4">
                A full website for a Nanyuki-based knife-making business — complete with product showcases, blog, and event features — with a custom booking system at its core. Also built a private admin dashboard to manage bookings, products, blog posts, and events with ease.
              </p>
              <a href="https://mbknanyuki.com" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:text-black flex items-center">
                <FaGlobe className="mr-2" /> Live Link
              </a>
            </div>
          </div>

          {/* Wangari Muchiri Books */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-6 md:mb-0 md:mr-8">
              <img src={wangariBooks} alt="Wangari Muchiri Books Project Image" className="w-full h-auto object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-black drop-shadow-gold mb-4">Wangari Muchiri Books</h3>
              <p className="text-lg text-black mb-4">
                My first-ever freelance project. This site promotes Wangari Muchiri’s memoir <em>Take Up Space</em>, highlighting themes of self-love and resilience. It offers a downloadable e-book and features authentic testimonials from readers.
              </p>
              <a href="https://wangarimuchiribooks.co.ke" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:text-black flex items-center">
                <FaGlobe className="mr-2" /> Live Link
              </a>
            </div>
          </div>

          {/* Mirico Ri Coli */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-6 md:mb-0 md:mr-8">
              <img src={miricoricoliImage} alt="Mirico Ri Coli Project Image" className="w-full h-auto object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-black drop-shadow-gold mb-4">Mirico Ri Coli</h3>
              <p className="text-lg text-black mb-4">
                My first full-stack solo project, built using the MERN stack. This e-commerce platform for premium leather shoes helped solidify my confidence as a full-stack developer.
              </p>
              <a href="https://miricoricoli-gichuki-muchiris-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:text-black flex items-center">
                <FaGlobe className="mr-2" /> Live Link
              </a>
              <a href="https://github.com/GichukiM/MiricoRiColi" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:text-black flex items-center">
                <FaGithub className="mr-2" /> GitHub Link
              </a>
            </div>
          </div>

          {/* Mindforge */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-6 md:mb-0 md:mr-8">
              <img src={mindforgeImage} alt="Mindforge Project Image" className="w-full h-auto object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-black drop-shadow-gold mb-4">Mindforge</h3>
              <p className="text-lg text-black mb-4">
                My very first project as a developer — Mindforge is a personal development platform for discovering and sharing books, quotes, and podcasts. While there’s room for improvement, I keep it just the way it is, as a reminder of how far I’ve come.
              </p>
              <a href="https://mindforge-three.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:text-black flex items-center">
                <FaGlobe className="mr-2" /> Live Link
              </a>
              <a href="https://github.com/GichukiM/MindForge" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:text-black flex items-center">
                <FaGithub className="mr-2" /> GitHub Link
              </a>
            </div>
          </div>

          {/* LinkShamba */}
          {/* <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-6 md:mb-0 md:mr-8">
              <img src={linkshamba} alt="LinkShamba Project Image" className="w-full h-auto object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-black drop-shadow-gold mb-4">LinkShamba</h3>
              <p className="text-lg text-black mb-4">
                A project close to home — LinkShamba is a farm management app I’m building with a friend to help African farmers stay organized, accountable, and informed. We’re testing it internally and preparing for public release.
              </p>
              <a href="https://link-shamba.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:text-black flex items-center">
                <FaGlobe className="mr-2" /> Live Link
              </a>
            </div>
          </div> */}

        </div>

      </div>
    </section>
  );
};

export default OtherProjects;
