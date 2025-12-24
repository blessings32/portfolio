import Button from "../button/Button";

const Home = () => {
  // border-8 border-l-primary-500 border-t-primary-900 border-r-secondary-800 border-b-accent-900
  return (
    <div className="p-14  w-full h-full">
      <div className=" relative overflow-hidden  mt-16 float-right w-96 h-96 ">
        <div className="absolute inset-0 rounded-full animate-spin bg-[conic-gradient(from_0deg,#4054ff,#060d91,#471dba,#4a5512)] h-full w-full"></div>
        {/* <div className="absolute insert-[1px] rounded-lg bg-black w-f"></div> */}
        <img
          src="/src/assets/IMG-20250902-WA0041.jpg"
          className="absolute left-1 top-1 h-[calc(100%-12px)] w-[calc(100%-12px)] object-cover  rounded-full "
        />
      </div>
      <div className="text-3xl text-left mt-32 w-7/12">
        Hi, I'm
        <br />
        <span className="font-bold text-4xl text-secondary-200">
          Blessings chaleka
        </span>
        ,
        <br />
        Sustainable Energy Engineering Student at Malawi University of Science
        and Technology
        <div className="flex flex-row gap-7 mt-8">
          <a
            className="hover:text-slate-200"
            title="linkedin"
            href="https://www.linkedin.com/in/blessings-chaleka-226196262"
          >
            <i className="fa-brands fa-linkedin"></i>{" "}
          </a>
          <a
            className="hover:text-slate-200"
            title="instagram"
            href="https://www.instagram.com/chaleka32"
          >
            <i className="fa-brands fa-instagram"></i>{" "}
          </a>
          <a
            className="hover:text-slate-200"
            title="facebook"
            href="https://www.facebook.com/chaleka32"
          >
            <i className="fa-brands fa-facebook"></i>{" "}
          </a>
          <a
            className="hover:text-slate-200"
            title="github"
            href="https://github.com/blessings32"
          >
            <i className="fa-brands fa-github"></i>{" "}
          </a>
        </div>
        <Button type="button" textValue="See More>" />
      </div>
    </div>
  );
};
export default Home;
