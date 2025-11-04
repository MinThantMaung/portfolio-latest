"use client";

import { staticData } from "../static";
import { FlipWords } from "../ui/flip-words";
import hero from "../../../public/hero.png";
import Image from "next/image";

const Hero = () => {
  const words = [
    "React Developer",
    "Frontend Developer",
    "Fullstack Developer",
  ];

  return (
    <>
      <div className="min-h-screen flex justify-center items-center mx-4 md:mx-24">
        <div className="flex flex-col md:flex-row md:gap-20">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {staticData.name}
            </h2>
            <div className="flex text-2xl md:text-3xl mb-4">
              {staticData.role} <FlipWords words={words} /> <br />
            </div>
            <p>{staticData.title}</p>
            <p className="my-4">{staticData.subtitle}</p>
            <p>{staticData.title_description}</p>
            <a
              href="/resume/minthantmaung.pdf"
              download
              className="my-6 bg-black text-white px-6 py-2 rounded-full text-sm inline-block"
            >
              {staticData.download}
            </a>
          </div>
          <div className="md:w-1/2 hidden md:block">
            <Image src={hero} alt="" className="rounded-xl md:mt-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
