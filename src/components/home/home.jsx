// Import the Button component from the button folder
import Button from "../button/Button";

// Home component - displays the hero section of the portfolio
const Home = () => {
  // border-8 border-l-primary-500 border-t-primary-900 border-r-secondary-800 border-b-accent-900
  return (
    <div className="p-4 md:p-6 mt-8 md:mt-16 w-full min-h-[calc(100vh-4rem)] flex flex-col md:flex-row items-center md:items-center gap-8">
      {/* Main container with padding and full width/height */}
      {/* Image container with animated gradient background */}
      <div className="relative overflow-hidden mx-auto md:mx-0 md:float-right w-64 h-64 md:w-96 md:h-96 flex-shrink-0">
        {/* Animated gradient circular background */}
        <div className="absolute inset-0 rounded-full animate-spin bg-[conic-gradient(from_0deg,#4054ff,#060d91,#471dba,#4a5512)] h-full w-full"></div>
        {/* <div className="absolute insert-[1px] rounded-lg bg-black w-f"></div> */}
        {/* Profile image positioned in the center with rounded corners */}
        <img
          src="/assets/IMG-20250902-WA0041.jpg"
          className="absolute left-1 top-1 h-[calc(100%-12px)] w-[calc(100%-12px)] object-cover rounded-full"
        />
      </div>
      {/* Text content section with intro and social links */}
      <div className="text-2xl md:text-3xl text-left w-full md:w-7/12">
        Hi, I'm
        <br />
        {/* Name displayed in bold secondary color */}
        <span className="font-bold text-3xl md:text-4xl text-secondary-200">
          Blessings chaleka
        </span>
        ,
        <br />
        <span className="text-base md:text-xl text-textColor-300">
          Sustainable Energy Engineering Student at Malawi University of Science
          and Technology
        </span>
        {/* Social media links container */}
        <div className="flex flex-row gap-6 md:gap-7 mt-6 md:mt-8 text-xl md:text-2xl">
          {/* LinkedIn link */}
          <a
            className="hover:text-primary-400 transition-colors"
            title="linkedin"
            href="https://www.linkedin.com/in/blessings-chaleka-226196262"
          >
            <i className="fa-brands fa-linkedin"></i>{" "}
          </a>
          {/* Instagram link */}
          <a
            className="hover:text-secondary-400 transition-colors"
            title="instagram"
            href="https://www.instagram.com/chaleka32"
          >
            <i className="fa-brands fa-instagram"></i>{" "}
          </a>
          {/* Facebook link */}
          <a
            className="hover:text-accent-400 transition-colors"
            title="facebook"
            href="https://www.facebook.com/chaleka32"
          >
            <i className="fa-brands fa-facebook"></i>{" "}
          </a>
          {/* GitHub link */}
          <a
            className="hover:text-slate-300 transition-colors"
            title="github"
            href="https://github.com/blessings32"
          >
            <i className="fa-brands fa-github"></i>{" "}
          </a>
          <br />
          {/*  */}
        </div>
        <Button className="mt-6 md:mt-8" type="button" textValue="See More>" />
      </div>
    </div>
  );
};

// Export the Home component as default
export default Home;
