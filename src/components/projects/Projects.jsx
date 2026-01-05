import Button from "../button/Button";
import Title from "../reusable/title";

const projects = [
  {
    title: "Smart Home system",
    description:
      "A smart home system using RFID for automatic door access and a photoresistor to switch on security at night and off during the day.",
    technologies: ["Arduino", "RFID", "Photoresistor", "Arduino C"],
    image: "/assets/h2.jpg",
  },
  {
    title: "Environmental Monitoring System",
    description:
      "Uses a DHT sensor to display real-time temperature and humidity on an LCD and triggers a buzzer when the temperature goes above 37°C.",
    technologies: ["Arduino", "DHT Sensor", "LCD", "Buzzer", "Arduino C"],
    image: "/assets/e1.jpg",
  },
  {
    title: "Music Streaming Web App",
    description:
      "A web application that allows users to sign up, log in, and browse songs, artists, and albums. The app also tracks recently played songs for each user, providing a personalized listening experience.",
    technologies: [
      "Node.js",
      "Express",
      "MySQL",
      "CSS",
      "JavaScript",
      "HTML",
      "jwt & bcrypt",
    ],
    image: "/assets/web.jpg",
  },
];

export default function Projects() {
  return (
    <div className="pt-6 px-4 md:pl-14 w-full h-max">
      <Title text="Featured Projects" className="w-max" />
      <p className="text-left text-textColor-400 mt-6 text-base md:text-lg">
        A showcase of my recent works, highlighting my skills in software, web
        development, embedded systems, and IoT projects.
      </p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left w-full md:w-[calc(100%-150px)]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-900 flex flex-col rounded-lg border border-slate-700 hover:border-primary-600 hover:bg-gradient-to-tl from-accent-700/25 via-transparent to-transparent transition-all hover:translate-x-2 duration-300 cursor-pointer h-full"
          >
            <img
              src={project.image}
              alt="Project Screenshot"
              className="w-full h-40 md:h-48 rounded-t-md object-cover"
            />
            <h3 className="text-lg md:text-xl font-semibold p-4 pt-3">
              {project.title}
            </h3>
            <p className="text-textColor-400 text-sm md:text-base mb-2 p-4 pt-0 font-medium line-clamp-3">
              {project.description}
            </p>

            <div className="gap-2 p-4 pt-2 pb-0 mb-4 flex flex-wrap">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 h-max rounded-md text-xs font-semibold bg-accent-600 text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Button
              className="mt-auto ml-4 mb-4 w-[calc(100%-32px)]"
              type="button"
              textValue="View Project"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
