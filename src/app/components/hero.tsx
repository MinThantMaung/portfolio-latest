import { staticData } from "../static";
import { FlipWords } from "../ui/flip-words";
import hero from "../../../public/hero.png";
import Image from "next/image";
import { words } from "../static/hero";

const Hero = () => {
  return (
    <>
      <section
        aria-labelledby="hero-heading"
        className="min-h-screen flex items-center px-4 sm:px-12 lg:px-24"
      >
        <div className="min-h-screen flex justify-center items-center">
          <div className="flex flex-col md:flex-row sm:gap-20">
            <div className="md:w-1/2 pt-10">
              <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold mb-2">
                {staticData.name}
              </h1>
              <div className="flex text-xl sm:text-2xl lg:text-3xl mb-4">
                {staticData.role} <FlipWords words={words} />
              </div>
              <p>{staticData.title}</p>
              <p className="my-4">{staticData.subtitle}</p>
              <p>{staticData.title_description}</p>
              <a
                href="/resume/minthantmaung.pdf"
                download
                className="my-6 bg-black text-white px-6 py-2 rounded-full text-sm inline-block"
                aria-label="Download Resume"
              >
                {staticData.download}
              </a>
            </div>
            <div className="md:w-1/2 ml-4 mr-4 sm:ml-0 sm:mr-0 mt-10 hidden sm:block">
              <Image
                src={hero}
                alt="Hero Image"
                className="rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
