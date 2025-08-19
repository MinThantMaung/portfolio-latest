"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { skills } from "../static/skill";
import { staticData } from "../static";

export function Skills() {
  return (
    <>
      <h2 className="text-center font-bold text-3xl">SKILLS</h2>
      <div className="text-center text-lg my-4 md:mx-52 mx-4">
        {staticData.skill_description}
      </div>
      <div className="h-52 bg-white flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={skills} direction="left" speed="slow" />
      </div>
    </>
  );
}
