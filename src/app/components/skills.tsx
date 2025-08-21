"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { skills } from "../static/skill";
import { staticData } from "../static";

export function Skills() {
  return (
    <>
      <div className="py-12 md:py-32">
        <h2 className="font-bold text-3xl ml-4 md:ml-0 md:text-center">
          SKILLS
        </h2>
        <div className="mx-4 md:mx-24 md:text-center mt-6">
          {staticData.skill_description}
        </div>
        <div className="h-52 bg-white flex flex-col antialiased items-center justify-center relative overflow-hidden my-12 md:my-20">
          <InfiniteMovingCards items={skills} direction="left" speed="slow" />
        </div>
      </div>
    </>
  );
}
