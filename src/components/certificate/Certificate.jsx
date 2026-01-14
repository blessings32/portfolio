import Title from "../reusable/title";
import { useAppearOnScroll } from "../../hooks/useAppearOnScroll";
const awards = [
  {
    title: "Introduction to IoT",
    instution: "Cisco",
    date: "Issued Dec 2025",
    credentialId: "",
    link: "https://www.credly.com/badges/dd65d1ee-3d88-46cd-8f05-45b723d6e129",
    download: "/docs/awards/Introduction_to_IoT_certificate.pdf",
  },
  {
    title: "Basics of Machine Learning Algorithms",
    instution: "Cambridge International Qualifications, Uk",
    date: "Issued Nov 2025",
    credentialId: "Credential ID 9085-6960-7011",
    link: "https://uniathena.com/verify/certificate?certID=9085-6960-7011",
    download: "/docs/awards/machine_learning.pdf",
  },
  {
    title: "Introduction to Sustanable Development in Practice",
    instution: "United Nations Institute for Training and Research (UNITAR)",
    date: "Issued Nov 2025",
    credentialId: "",
    link: "#",
    download: "/docs/awards/Certificate_sustainable.pdf",
  },
  {
    title: "Basics of Digital Marketing",
    instution: "Cambridge International Qualification, UK",
    date: "Issued Oct 2025",
    credentialId: "Credential ID 5415-8646-5084",
    link: "https://uniathena.com/verify/certificate?certID=5415-8646-5084",
    download: "/docs/awards/Blessings_Digital_Marketing.pdf",
  },
  {
    title: "Sirius-X Energy Academy Fellowship (cohort 2)",
    instution: "Sirius-X Energy",
    date: "issued Sep 2025",
    credentialId: "Credential ID SXE-FEL-2/022",
    link: "#",
    download: "/docs/awards/sirius.pdf",
  },
];
export default function Certificate() {
  const { ref, visible } = useAppearOnScroll(0.4);
  return (
    <div
      id="awards-honors"
      className={`scroll-mt-14 ${
        visible ? "animate-appear" : "opacity-0 scale-50"
      } pt-6 px-4 md:pl-14 w-full h-max`}
      ref={ref}
    >
      <Title text="Certificates" className="w-max" />
      <p className="text-left text-textColor-400 mt-6 text-base md:text-lg">
        Beyond just a piece of paper; they are a testament to my dedication,
        hard work, and commitment to continuous learning in the ever-evolving
        field of technology.
      </p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left w-full md:w-[calc(100%-150px)]">
        {awards.map((award, index) => {
          return (
            <div
              key={index}
              className="bg-slate-900 flex flex-col rounded-lg border border-slate-700 hover:border-primary-600 hover:bg-gradient-to-tl from-accent-700/25 via-transparent to-transparent transition-all hover:translate-x-2 duration-300 cursor-pointer h-full overflow-hidden"
            >
              {/* Icon and Header Section */}
              <div className="p-4 md:p-6">
                <div className="flex flex-row gap-4">
                  <div className="flex-shrink-0 text-3xl md:text-4xl">
                    <i className="text-accent-600 fa-solid fa-award"></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-semibold text-textColor-100">
                      {award.title}
                    </h3>
                    <p className="text-textColor-400 text-sm md:text-base mt-1 font-medium">
                      {award.instution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="px-4 md:px-6 pb-4">
                <p className="text-textColor-400 text-sm font-medium">
                  {award.date}
                </p>
                {award.credentialId && (
                  <p className="text-textColor-400 text-xs md:text-sm mt-2 font-medium">
                    {award.credentialId}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-auto px-4 md:px-6 pb-4 flex flex-col sm:flex-row gap-2 w-full">
                <a
                  href={award.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex-1 bg-slate-950 hover:bg-primary-700 text-textColor-100 text-sm md:text-base font-semibold py-2 px-3 rounded-md border border-slate-700 hover:border-primary-600 transition-all duration-200 text-center"
                >
                  Verify{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                </a>
                <a
                  href={award.download}
                  className="flex-1 bg-slate-950 hover:bg-primary-700 text-textColor-100 text-sm md:text-base font-semibold py-2 px-3 rounded-md border border-slate-700 hover:border-primary-600 transition-all duration-200 text-center"
                >
                  Download <i className="fa-solid fa-download ml-2"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
