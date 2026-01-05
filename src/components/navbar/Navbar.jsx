import { Component } from "react";
import Button from "../button/Button";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
  };

  handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    this.closeMenu();
  };

  render() {
    const navLinks = [
      { name: "Home", id: "home" },
      { name: "About", id: "about" },
      { name: "Skills", id: "skills" },
      { name: "Coursework", id: "coursework" },
      { name: "Projects", id: "projects" },
      { name: "Education", id: "education" },
      { name: "Awards & honors", id: "awards" },
    ];

    return (
      <>
        <div className="z-50 fixed top-0 left-0 w-full h-16 border-b border-slate-700 bg-transparent backdrop-blur-md shadow-md">
          <div className="flex justify-between items-center h-full px-4 gap-4">
            <h1 className="text-textColor-100 text-xl font-bold whitespace-nowrap">
              BLESSINGS CHALEKA
            </h1>

            <div className="hidden lg:flex gap-2 items-center flex-1 justify-end">
              {navLinks.map((link) => (
                <Button
                  key={link.id}
                  type="navLink"
                  textValue={link.name}
                  onClick={() => this.handleNavClick(link.id)}
                />
              ))}
            </div>

            <button
              onClick={this.toggleMenu}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-textColor-100 transition-all duration-300 ${
                  this.state.isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-textColor-100 transition-all duration-300 ${
                  this.state.isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-textColor-100 transition-all duration-300 ${
                  this.state.isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>

          {this.state.isOpen && (
            <div className="lg:hidden absolute top-16 left-0 right-0 bg-background-900 border-b border-slate-700 shadow-lg">
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => this.handleNavClick(link.id)}
                    className="w-full text-left px-4 py-3 text-textColor-100 hover:bg-slate-800 hover:text-accent-400 transition-colors border-b border-slate-700 last:border-b-0"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="h-16"></div>
      </>
    );
  }
}

export default Navbar;
