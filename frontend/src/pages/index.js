import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";
import Divider from "../components/Divider";
import ProjectsSection from "../components/ProjectsSection";
import Expertise from "../components/ExpertiseSection";
import AboutSection from "../components/AboutSection";
import Contact from "../components/ContactSection";
import Footer from "../components/FooterSection";
import Background from "../components/Background";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Background />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      {/* add id={id} to Divider */}
      {/* <Divider
        id="project"
        date="01/03"
        section="PROJECTS"
        name="ARSEN SALADIKHANOV"
      />
      <ProjectsSection /> */}

      <Divider
        id="expertise"
        date="01/04"
        section="EXPERTISE"
        name="ARSEN SALADIKHANOV"
      />
      <Expertise />
      <Divider
        id="about"
        date="02/03"
        section="ABOUT"
        name="ARSEN SALADIKHANOV"
      />
      <AboutSection />
      <Divider
        id="contact"
        date="03/03"
        section="CONTACT"
        name="ARSEN SALADIKHANOV"
      />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
