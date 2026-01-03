import React from "react";
import Title from "../reusable/title";
import SkillCard from "../reusable/SkillCard";

const Skill = () => {
  return (
    <div className="pt-24 pl-14 w-full h-screen">
      <Title className="w-72" text="Skill & Experties" />
      <p className="text-left text-textColor-400 mt-6 text-lg">
        A comprehesive overview of my technical abilities, software proficiency
        and soft skills.
      </p>
      <div className="border-2 mt-10 h-full w-10/12 p-8 space-x-1 grid grid-cols-2 gap-4 border-blue-950">
        <SkillCard />
      </div>
    </div>
  );
};

export default Skill;
