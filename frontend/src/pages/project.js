import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/ProjectNavbar";
import Background from "../components/Background";
import ProjectPage from "../components/ProjectPage";
const Project = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Background />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ProjectPage />
    </>
  );
};

export default Project;
