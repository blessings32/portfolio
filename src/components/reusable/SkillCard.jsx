export default function SkillCard(props) {
  const { data } = props;
  return (
    <>
      {data.map((category, index) => (
        <div
          key={index}
          className="leading-relaxed h-96 bg-slate-900 border border-slate-700 rounded-md hover:bg-slate-950 text-left p-5"
        >
          <h1 className="text-xl mb-4">
            <i
              className={`${category.icon} mr-5 text-2xl text-secondary-400`}
            ></i>
            {category.title}
          </h1>
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
