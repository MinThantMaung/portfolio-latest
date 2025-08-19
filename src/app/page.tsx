import Hero from "./(hero)/page";
import { Suspense } from "react";
import LoadingTest from "./ui/loadingTest";
import { Skills } from "./components/skills";
import Timeline from "./components/timeline";

export default function Home() {
  return (
    <>
      <div className="bg-white text-black">
        <Hero />
        <Skills />
        <Timeline />
      </div>
    </>
  );
}
