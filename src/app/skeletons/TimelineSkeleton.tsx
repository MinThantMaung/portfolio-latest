import React from "react";

const TimelineSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Heading */}
      <h2 className="ml-4 md:ml-0 md:text-center font-bold text-3xl pt-2 md:pt-6">
        <div className="h-8 w-48 text-black rounded mx-auto">Experience</div>
      </h2>

      {/* Description */}
      <div className="mx-4 md:mx-24 md:text-center mt-6 space-y-2">
        <div className="h-4 w-3/4 bg-neutral-200 rounded mx-auto"></div>
        <div className="h-4 w-1/2 bg-neutral-200 rounded mx-auto"></div>
      </div>

      {/* StickyScroll placeholder */}
      <div className="w-full md:py-12 py-4">
        <div className="space-y-8">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="h-32 w-full max-w-3xl bg-neutral-200 rounded-lg mx-auto"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineSkeleton;
