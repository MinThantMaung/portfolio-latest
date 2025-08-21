import Hero from "./(hero)/page";
import Changelog from "./components/changelog";
import Quotes from "./components/quotes";
import Service from "./components/service";
import { Skills } from "./components/skills";
import Timeline from "./components/timeline/timeline";

export default function Home() {
  return (
    <>
      <div className="bg-white text-black">
        <Hero />
        <Skills />
        <Timeline />
        <Service />
        <Quotes />
        <Changelog />
      </div>
    </>
  );
}
