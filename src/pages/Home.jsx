
import About from '../components/About'
import HeroSection from '../components/Hero'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import MyLatestWork from '../components/LatestProject'
// import Testimonials from '../components/Testimonials'
import OtherProjects from '../components/OtherProjects'
import Services from '../components/Services.jsx'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer.jsx'
import WorkExperience from '../components/WorkExperience.jsx'

function Home() {
  return (
    <>
    
    <Navbar />
    <HeroSection />
    <About />
    <Skills />
    <WorkExperience />
    <MyLatestWork />
    <OtherProjects />
    <Services />
    {/* <Testimonials /> */}
    <Contact />
    <Footer />
    </>
  )
}

export default Home