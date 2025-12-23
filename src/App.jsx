//import React from "react";
import { Component } from "react";
import "./App.css";
import "../fontawesome-free-6.7.2-web/css/all.min.css";
import Navbar from "./components/navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div className="flex flex-col flex-start w-full">
        <Navbar />
      </div>
    );
  }
}

export default App;
