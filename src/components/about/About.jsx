import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="pt-24 pl-14 w-full h-screen border-2 border-red-700">
        <div className=" relative w-48">
          <div className="absolute bottom-[-6px] left-0 w-6/12 h-1 bg-gradient-to-l from-accent-400 to-primary-900 opacity-50"></div>
          <h1 className="mb-2 text-3xl  text-left font-bold text-textColor-50">
            About Me
          </h1>
        </div>
        <div className="mt-7 flex flex-row gap-5">
          <div className="text-xl text-left w-5/12 text-textColor-300 pt-10">
            Sustainable Energy Engineering student with strong skills in web
            development, databases, and embedded systems. I build smart,
            data-driven energy and IoT solutions using technologies like
            JavaScript, Node.js, MySQL, InfluxDB, and Arduino.
            <br />
            <br />
            My work focuses on bridging hardware and software to support
            renewable energy innovation and sustainable infrastructure in
            Africa.
          </div>
        </div>
      </div>
    );
  }
}

export default About;
