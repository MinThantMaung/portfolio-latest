"use client";

import RichTextRenderer from "../RichTextRanderer";
import { staticData } from "../static";
import { FlipWords } from "../ui/flip-words";

const Hero = () => {
  const words = [
    "React Developer",
    "Frontend Developer",
    "Fullstack Developer",
  ];

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex mx-4 md:mx-10">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {staticData.name}
            </h2>
            <div className="flex text-2xl md:text-3xl mb-4">
              {staticData.role} <FlipWords words={words} /> <br />
            </div>

            <div className="text-sm">
              <RichTextRenderer content={staticData.title} />
            </div>
            <a
              href="/resume/minthantmaung.pdf"
              download
              className="my-6 bg-black text-white px-6 py-2 rounded-full text-sm inline-block"
            >
              {staticData.download}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
