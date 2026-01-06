import { Component, createRef } from "react";
import Button from "../button/Button";
import Title from "../reusable/title";

class About extends Component {
  ref = createRef();

  state = {
    visible: false,
  };

  componentDidMount() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.setState({ visible: true });
          this.observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (this.ref.current) {
      this.observer.observe(this.ref.current);
    }
  }

  componentWillUnmount() {
    if (this.observer) this.observer.disconnect();
  }
  render() {
    return (
      <div
        ref={this.ref}
        id="about"
        className={`pt-6 scroll-mt-14 ${
          this.state.visible ? "animate-appear" : "opacity-0 scale-50"
        } md:pt-24 px-4 md:pl-14 w-full min-h-screen flex flex-col`}
      >
        <Title text="About Me" />
        <div className="mt-6 md:mt-7 flex flex-col md:flex-row gap-6 md:gap-5 flex-1">
          {/* Text content section */}
          <div className="text-base md:text-xl text-left w-full md:w-5/12 text-textColor-300 md:pt-10 relative">
            Sustainable Energy Engineering student with strong skills in web
            development, databases, and embedded systems. I build smart,
            data-driven energy and IoT solutions using technologies like
            JavaScript, Node.js, MySQL, InfluxDB, and Arduino.
            <br />
            <br />
            My work focuses on bridging hardware and software to support
            renewable energy innovation and sustainable infrastructure in
            Africa.
            <div className="mt-8 md:mt-0 md:absolute md:bottom-20 w-full pr-4 md:pr-0">
              <Button
                icon={<i className="fa-solid fa-download"></i>}
                className="w-full"
                type="button"
                textValue="Download CV"
              />
            </div>
          </div>

          {/* Image and stats section */}
          <div className="w-full md:w-7/12 p-0 md:p-8">
            <img
              src="/assets/IMG-20250120-WA0032.jpg"
              className="w-full md:float-right md:w-6/12 md:h-72 h-64 object-cover rounded-lg mb-6 md:mb-0"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 md:space-y-6 md:mt-48">
              <div className="md:col-span-1 bg-slate-900 w-full p-4 min-h-24 border border-slate-700 rounded-md hover:border-primary-600 hover:bg-slate-800 transition-colors">
                <h3 className="font-bold text-left text-textColor-100">
                  <i className="fa-solid fa-graduation-cap mr-5 text-2xl text-secondary-400"></i>{" "}
                  Education
                </h3>
                <p className="text-textColor-400 text-left text-sm md:text-base">
                  BEng in Sustainable Energy Engineering
                  <br />
                  ... 2029
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-4 col-span-full md:col-span-2 md:space-x-6 md:space-y-0">
                <div className="bg-slate-900 w-full md:w-5/12 p-4 min-h-24 border border-slate-700 rounded-md hover:border-primary-600 hover:bg-slate-800 transition-colors">
                  <h3 className="font-bold text-left text-textColor-100">
                    <i className="fa-solid fa-cogs mr-1 text-2xl text-secondary-400"></i>{" "}
                    Projects
                  </h3>
                  <p className="text-textColor-400 text-left text-sm md:text-base">
                    3 completed
                  </p>
                </div>

                <div className="bg-slate-900 w-full md:w-6/12 p-4 min-h-24 border border-slate-700 rounded-md hover:border-primary-600 hover:bg-slate-800 transition-colors">
                  <h3 className="font-bold text-left text-textColor-100">
                    <i className="fa-solid fa-trophy mr-1 text-2xl text-secondary-400"></i>
                    Awards & certificates
                  </h3>
                  <p className="text-textColor-400 text-left text-sm md:text-base">
                    5 Recognitions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
