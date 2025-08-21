import { experienceItems } from "@/app/static/experience";
import { staticData } from "../../static";
import { TimelineItem } from "./timelineItem";

type TimelineItemProps = {
  year: string;
  title: string;
  address: string;
  description: string;
  position?: "start" | "end";
};

const Timeline = () => {
  return (
    <>
      <h2 className="ml-4 md:ml-0 md:text-center font-bold text-3xl mt-2 md:mt-6">
        {staticData.experience}
      </h2>
      <div className="mx-4 md:mx-24 md:text-center my-4 md:my-12">
        {staticData.exp_description}
      </div>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-4 md:mx-32 py-6 md:py-14">
        {experienceItems.map((exp, index) => (
          <TimelineItem
            key={exp.year}
            year={exp.year}
            title={exp.title}
            address={exp.address}
            description={exp.description}
            position={index % 2 === 0 ? "start" : "end"}
            isFirst={index === 0}
            isLast={index === experienceItems.length - 1}
          />
        ))}
      </ul>
    </>
  );
};

export default Timeline;
