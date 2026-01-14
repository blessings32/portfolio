//import React from "react";
import { Component } from "react";
import "./App.css";
import "../fontawesome-free-6.7.2-web/css/all.min.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/home";
import About from "./components/about/About";
import Skill from "./components/Skill/Skill";
import ModuleCovered from "./components/modules/moduleCovered";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import Certificate from "./components/certificate/Certificate";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="relative space-y-1 flex flex-col flex-start w-full h-full poppins-regular">
        <Navbar />
        <div className="flex flex-col space-y-1 static border-4 mt-14">
          <Home />
          <About />
          <Skill />
          <ModuleCovered />
          <Projects />
          <Education />
          <Certificate />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
