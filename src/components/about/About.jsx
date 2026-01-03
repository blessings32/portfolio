import { Component } from "react";
import Button from "../button/Button";
import Title from "../reusable/title";

class About extends Component {
  render() {
    return (
      <div className="pt-24 pl-14 w-full h-screen">
        <Title text="About Me" />
        <div className="mt-7 flex flex-row gap-5  h-[calc(100%-80px)] ">
          <div className="text-xl h-full text-left w-5/12 text-textColor-300 pt-10 relative">
            Sustainable Energy Engineering student with strong skills in web
            development, databases, and embedded systems. I build smart,
            data-driven energy and IoT solutions using technologies like
            JavaScript, Node.js, MySQL, InfluxDB, and Arduino.
            <br />
            <br />
            My work focuses on bridging hardware and software to support
            renewable energy innovation and sustainable infrastructure in
            Africa.
            <div className="bottom-20 absolute w-full p-8 pl-0">
              <Button
                icon={<i className="fa-solid fa-download"></i>}
                className="w-full"
                type="button"
                textValue="Download CV"
              />
            </div>
          </div>

          <div className="w-7/12  p-8 space-5">
            <img
              src="/src/assets/IMG-20250120-WA0032.jpg"
              className="float-right w-6/12 h-72 object-cover rounded-lg"
            />

            <div className="flex-col bg-slate-900 w-5/12 p-2 h-24 min-w-5/12 overflow-hidden   border border-slate-700 rounded-md hover:bg-slate-800 mb-8 mt-48">
              <h3 className="font-bold text-left">Education</h3>
              <p className="text-textColor-400 text-left">
                BEng in Sustainable Energy Engineering
                <br />
                ... 2019
              </p>
            </div>
            <div className="flex flex-row space-x-16">
              <div className="flex-col bg-slate-900 w-5/12 p-2 h-24  border border-slate-700 rounded-md hover:bg-slate-800 mb-8">
                <h3 className="font-bold text-left">Projects</h3>
                <p className="text-textColor-400 text-left">4 complited</p>
              </div>

              <div className="flex-col bg-slate-900 w-6/12 p-2 h-24  border border-slate-700 rounded-md hover:bg-slate-800">
                <h3 className="font-bold text-left">Awards & Certificate</h3>
                <p className="text-textColor-400 text-left">5 Recognitions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
