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
export default function SkillCard() {
  return (
    <>
      {data.map((category, index) => (
        <div
          key={index}
          className="leading-relaxed h-80 bg-slate-900 border border-slate-700 rounded-md hover:bg-slate-950 text-left p-5"
        >
          <h1 className="text-xl mb-4">{category.title}</h1>
          <div className="mb-4">
            <span className="text-sm text-textColor-600">
              Level: {category.level}/10
            </span>
            <div className="relative h-2 w-full text-lg bg-slate-800 rounded-lg mt-2">
              <div
                style={{ width: `${category.level * 10}%` }}
                className="bg-accent-600 h-full rounded-lg"
              ></div>
            </div>
          </div>
          {category.skills.map((skill) => (
            <div key={skill} className="mb-2">
              • {skill}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
