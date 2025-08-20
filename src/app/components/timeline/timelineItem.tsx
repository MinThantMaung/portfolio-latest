type TimelineItemProps = {
  year: string;
  title: string;
  address: string;
  description: string;
  position?: "start" | "end";
  isFirst?: boolean;
  isLast?: boolean;
};

export const TimelineItem = ({
  year,
  title,
  address,
  description,
  position = "start",
  isFirst = false,
  isLast = false,
}: TimelineItemProps) => {
  return (
    <li>
      {!isFirst && <hr />}

      <div className="timeline-middle">
        {/* Check circle icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 
              0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 
              0 10-1.06 1.061l2.5 2.5a.75.75 
              0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div
        className={`timeline-${position} mx-1 mb-10 ${
          position === "start" ? "md:text-end" : ""
        }`}
      >
        <time className="font-mono italic">{year}</time>
        <p className="font-bold">{address}</p>
        <div className="text-lg font-black">{title}</div>
        <p>{description}</p>
      </div>

      {!isLast && <hr />}
    </li>
  );
};
