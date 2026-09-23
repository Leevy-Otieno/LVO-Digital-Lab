import React, { useState } from "react";
import TopNavbar from "../components/Nav/TopNavbar";
import Sidebar from "../components/Nav/Sidebar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";

export default function Landing() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <TopNavbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />
      <Sidebar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />
      
      <div id="home">
        <Header darkMode={darkMode} />
      </div>

      <div id="services">
        <Services darkMode={darkMode} />
      </div>

      <div id="projects">
        <Projects darkMode={darkMode} />
      </div>

      <div id="blog">
        <Blog darkMode={darkMode} />
      </div>

      <div id="pricing">
        <Pricing darkMode={darkMode} />
      </div>

      <div id="contact">
        <Contact darkMode={darkMode} />
      </div>

      <Footer darkMode={darkMode} />
    </>
  );
}