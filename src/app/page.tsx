import Certification from "./components/certification";
import Changelog from "./components/changelog";
import Hero from "./components/hero";
import Project from "./components/project";
import Quotes from "./components/quotes";
import Service from "./components/service";
import { Skills } from "./components/skills";
import Timeline from "./components/timeline";

export default function Home() {
  return (
    <>
      <div className="bg-white text-black">
        <Hero />
        <Skills />
        <Timeline />
        <Certification />
        <Project />
        <Service />
        <Changelog />
        <Quotes />
      </div>
    </>
  );
}
