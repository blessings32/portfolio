import React from "react";
import Title from "../reusable/title";
import SkillCard from "../reusable/SkillCard";

const data = [
  {
    title: "Software & Web Development",
    level: 8,
    skills: [
      "JavaScript (ES6+)",
      "React.js (Hooks, JSK, State)",
      "HTML5, CSS3, Tailwindcss",
      "Git & GitHub",
      "Node.js, Express.js",
      "Database Management (MySQL)",
    ],
  },
  {
    title: "Embedded Systems & IoT",
    level: 6.5,
    skills: [
      "Arduino Programming",
      "Sensor & actuators",
      "Digital / Analog I/O",
      "Hardware-software integration",
      "Proteus & LTspice (simulation/testing)",
    ],
  },
  {
    title: "Electrical & microcontroller Systems",
    level: 7,
    skills: [
      "Circuit fundamentals (AC/DC)",
      "Interfacing sensors & actuators with microcontrollers",
      "Troubleshooting & debugging simple circuits",
    ],
  },
  {
    title: "Systems Thinking & Problem Solving",
    level: 8,
    skills: [
      "End-to-end system design(hardware + software)",
      "Debugging across layers",
      "user-centered design approach",
      "Critical thinking and evaluation",
    ],
  },
];
const Skill = () => {
  return (
    <div className="pt-6 px-4 md:pl-14 w-full h-auto">
      <Title className="w-full md:w-72" text="Skill & Expertise" />
      <p className="text-left text-textColor-400 mt-6 text-base md:text-lg">
        A comprehensive overview of my technical abilities, software proficiency
        and soft skills.
      </p>
      <div className="mt-6 h-auto w-full md:w-10/12 p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <SkillCard data={data} />
      </div>
    </div>
  );
};

export default Skill;
