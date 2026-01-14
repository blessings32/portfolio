import Title from "../reusable/title";
import { useAppearOnScroll } from "../../hooks/useAppearOnScroll";
const modules = [
  {
    title: "Engineering Drawing",
    description:
      "Technical drawings, standards, and visual communication of engineering ideas.",
  },
  {
    title: "Engineering Thermodynamics",
    description:
      "Fundamental principles of thermodynamics and their applications in engineering systems.",
  },
  {
    title: "Fluid Mechanics",
    description:
      "Analysis of fluid flow, pressure, and energy transfer in engineering systems.",
  },
  {
    title: "Electrical Machines and Measurements",
    description:
      "operation and characteristics of motors, generators and transformers, and techniques for electrical measurements.",
  },
  {
    title: "Introduction to Energy and Energy Resources",
    description:
      "Convetinal and renewable energy sources, energy conversion technologies, sustainability concepts and energy economics.",
  },
  {
    title: "Calculus I & II",
    description:
      "Differential and integral calculus of single-variable and multivariable functions, including limits, derivatives, integrals, and series.",
  },
  {
    title: "Electrical and Electronic Science",
    description:
      "Circuit analysis, basic electronics, and electrical fundamentals.",
  },
  {
    title: "Engineering Materials",
    description:
      "Material properties, selection and performance in engineering applications.",
  },
  {
    title: "Computer Programming (Python)",
    description:
      "Introduction to programming concepts, algorithms, and problem-solving using programming languages.",
  },
];

function ModuleCovered() {
  const { ref, visible } = useAppearOnScroll(0.4);
  return (
    <div
      ref={ref}
      id="coursework"
      className={`scroll-mt-14 ${
        visible ? "animate-appear" : "opacity-0 scale-50"
      } pt-6 px-4 md:pl-14 w-full h-auto`}
    >
      <Title className="w-full md:w-max" text="Relevant Module Covered" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 text-left w-full md:w-[calc(100%-20px)] pr-0 md:pr-5">
        {modules.map((module, index) => {
          return (
            <div
              key={index}
              className="min-h-32 transition-all hover:translate-y-2 duration-300 cursor-pointer border-l-4 border-accent-600 bg-slate-900 rounded-md p-5 shadow-sm shadow-slate-800 hover:border-accent-700"
            >
              <h2 className="text-lg md:text-xl font-bold text-textColor-100">
                {module.title}
              </h2>
              <p className="text-textColor-400 text-sm md:text-base mt-2">
                {module.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ModuleCovered;
