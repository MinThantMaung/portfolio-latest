import { experienceItems } from "@/app/static/experience";
import { staticData } from "../static";
import { StickyScroll } from "@/app/ui/sticky-scroll-reveal";

const Timeline = () => {
  return (
    <>
      <h2 className="ml-4 md:ml-0 md:text-center font-bold text-3xl pt-2 md:pt-6">
        {staticData.experience}
      </h2>
      <div className="mx-4 md:mx-24 md:text-center mt-6">
        {staticData.exp_description}
      </div>
      <div className="w-full md:py-12 py-6">
        <StickyScroll content={experienceItems} />
      </div>
    </>
  );
};

export default Timeline;
