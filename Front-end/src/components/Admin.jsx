import React from 'react'
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import Testimonial from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner2 from "./Banner2/Banner2";

function Admin() {
  return (
    <>
     <Navbar />
     <Hero/>
     <About />
     <Services />
     {/* <Contact /> */}
     <Testimonial />
     <Footer />
     {/* <Banner2 /> */}
    </>
  )
}

export default Admin
