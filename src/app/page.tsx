import Hero from "./(hero)/page";
import Gallary from "./components/gallary";
import Quotes from "./components/quotes";
import { Skills } from "./components/skills";
import Timeline from "./components/timeline/timeline";
import { experienceItems } from "./static/experience";

export default function Home() {
  return (
    <>
      <div className="bg-white text-black">
        <Hero />
        <Skills />
        <Timeline />
        <Quotes />
        <Gallary />
      </div>
    </>
  );
}
