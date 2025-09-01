import React from "react";

const ChangelogSkeleton = () => {
  return (
    <div className="my-4 md:my-32 md:mx-10 overflow-clip animate-pulse">
      <h2 className="h-10 text-lg text-black md:text-4xl max-w-xs">
        Changelog
      </h2>
      <p className="h-20 bg-neutral-300 max-w-sm mt-4"></p>
      <div className="border-l border-neutral-300 ml-6 my-10">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div key={idx} className="mb-10 ml-4">
            {/* Circle marker */}
            <div className="absolute -left-2.5 w-4 h-4 bg-neutral-300 rounded-full"></div>

            {/* Date placeholder */}
            <div className="h-3 w-20 bg-neutral-200 rounded mb-2"></div>

            {/* Title placeholder */}
            <div className="h-4 w-40 bg-neutral-200 rounded mb-2"></div>

            {/* Description placeholder */}
            <div className="h-3 w-60 bg-neutral-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChangelogSkeleton;
