import React from "react";
import Title from "../reusable/title";
import SkillCard from "../reusable/SkillCard";

const Skill = () => {
  return (
    <div className="pt-6 pl-14 w-full h-auto">
      <Title className="w-72" text="Skill & Experties" />
      <p className="text-left text-textColor-400 mt-6 text-lg">
        A comprehesive overview of my technical abilities, software proficiency
        and soft skills.
      </p>
      <div className="mt-6 h-auto w-10/12 p-8 space-x-1 grid grid-cols-2 gap-4">
        <SkillCard />
      </div>
    </div>
  );
};

export default Skill;
