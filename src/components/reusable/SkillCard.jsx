const data = [
  {
    title: "Technical Skills",
    skills: [
      {
        skill: "Engineering Drawing",
        level: 8,
      },
      {
        skill: "Electric Machines",
        level: 7,
      },
      {
        skill: "Thermal Dynamics",
        level: 6,
      },
      {
        skill: "Fluid Mechanics",
        level: "7",
      },
    ],
  },
];

export default function SkillCard() {
  const replace = (skillData) => {
    for (let i = 0; i < skillData.length; i++) {
      let title = skillData[i].title;
      let skil = skillData[i].skills.map((skill) => {
        return (
          <div key={skill.skill} className="w-[calc(100%-12px)]">
            <span className=" text-sm float-right text-textColor-600">
              {skill.level}/10
            </span>
            {skill.skill}
            <br />
            <div className="relative h-2 w-full bg-slate-800 rounded-lg">
              <div
                style={{ width: `${skill.level * 10}%` }}
                className="bg-accent-600 h-full rounded-lg"
              ></div>
            </div>
          </div>
        );
      });
      title = <h1 className="text-2xl">{title}</h1>;
      return (
        <>
          {title}
          {skil}
        </>
      );
    }
  };
  return (
    <div className="h-1/2 leading-relaxed bg-slate-900 border border-slate-700 rounded-md hover:bg-slate-950 text-left p-5">
      {replace(data)}
    </div>
  );
}
