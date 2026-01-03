//import React from "react";
import { Component } from "react";
import "./App.css";
import "../fontawesome-free-6.7.2-web/css/all.min.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/home";
import About from "./components/about/About";
import Skill from "./components/Skill/Skill";

class App extends Component {
  render() {
    return (
      <div className="relative space-y-1 flex flex-col flex-start w-full h-full">
        <Navbar />
        <div className="flex flex-col space-y-1 static">
          <Home />
          <About />
          <Skill />
        </div>
      </div>
    );
  }
}

export default App;
