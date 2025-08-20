"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { skills } from "../static/skill";
import { staticData } from "../static";

export function Skills() {
  return (
    <>
      <div className="py-12 md:py-32">
        <h2 className="ml-4 md:ml-32 font-bold text-3xl">SKILLS</h2>
        <div className="mx-4 md:mx-32 mt-6">{staticData.skill_description}</div>
        <div className="h-52 bg-white flex flex-col antialiased items-center justify-center relative overflow-hidden my-12 md:my-20">
          <InfiniteMovingCards items={skills} direction="left" speed="slow" />
        </div>
      </div>
    </>
  );
}
