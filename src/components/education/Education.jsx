import Title from "../reusable/title";
import { useAppearOnScroll } from "../../hooks/useAppearOnScroll";
export default function Education() {
  const { ref, visible } = useAppearOnScroll(0.4);

  const educationData = [
    {
      year: "2022",
      school: "Ngabu Secondary School",
      description: "Secondary Education",
    },
    {
      year: "2024 - 2029",
      school: "Malawi University of Science and Technology",
      description: "BEng in Sustainable Energy Engineering",
    },
  ];

  return (
    <div
      id="education"
      className={` scroll-mt-14 ${
        visible ? "animate-appear" : "opacity-0 scale-50"
      } pt-6 pl-14 w-full h-max`}
      ref={ref}
    >
      <Title text="Education" className="w-max" />
      <p className="text-left text-textColor-400 mt-6 text-lg">
        A timeline of my academic journey and educational milestones.
      </p>
      <div className="mt-8 relative w-full flex justify-center">
        {/* Center timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 via-secondary-600 to-accent-600 hidden md:block"></div>

        {/* Mobile timeline - left side */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 via-secondary-600 to-accent-600 md:hidden"></div>

        <div className="w-full md:w-11/12 space-y-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Left side content (desktop only) */}
              <div className="hidden md:flex md:w-5/12 md:justify-end md:pr-12">
                {index % 2 === 0 && (
                  <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-primary-600 transition-colors w-full">
                    <span className="text-sm font-semibold text-primary-400">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold mt-2 text-textColor-100">
                      {item.school}
                    </h3>
                    <p className="text-textColor-400 mt-2">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Center dot */}
              <div className="hidden md:flex md:w-2/12 justify-center relative z-10">
                <div className="w-8 h-8 bg-primary-600 rounded-full border-4 border-gray shadow-lg"></div>
              </div>

              {/* Right side content (desktop only) */}
              <div className="hidden md:flex md:w-5/12 md:pl-12">
                {index % 2 === 1 && (
                  <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-primary-600 transition-colors w-full">
                    <span className="text-sm font-semibold text-primary-400">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold mt-2 text-textColor-100">
                      {item.school}
                    </h3>
                    <p className="text-textColor-400 mt-2">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Mobile view - show all on right side */}
              <div className="md:hidden ml-16 bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-primary-600 transition-colors w-full mr-4">
                <span className="text-sm font-semibold text-primary-400">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold mt-2 text-textColor-100">
                  {item.school}
                </h3>
                <p className="text-textColor-400 mt-2">{item.description}</p>
              </div>

              {/* Mobile dot */}
              <div className="md:hidden absolute left-4 w-8 h-8 bg-primary-600 rounded-full border-4 border-background-900 shadow-lg z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
