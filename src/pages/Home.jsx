import React from 'react'
import About from '../components/About'
import HeroSection from '../components/Hero'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import MyLatestWork from '../components/LatestProject'
import Newsletter from '../components/Newsletter'
import Testimonials from '../components/Testimonials'
import OtherProjects from '../components/OtherProjects'
import Services from '../components/Services.jsx'
import NewsletterPopover from '../components/NewsletterPop.jsx'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <>
    
    <Navbar />
    <HeroSection />
    <About />
    <Skills />
    <MyLatestWork />
    <OtherProjects />
    <Services />
    <Testimonials />
    <Contact />
    <Newsletter />
    <Footer />
    </>
  )
}

export default Home