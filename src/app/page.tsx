// app/page.tsx  (Server Component by default)
import Hero from "./components/hero";
import { Skills } from "./components/skills";
import SectionsClient from "./common/section-client";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Hero />
      <Skills />
      <SectionsClient />
    </div>
  );
}
