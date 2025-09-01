import React from "react";

const ServiceSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Title */}
      <h2 className="ml-4 md:ml-0 md:text-center md:pt-14 pt-4 font-bold text-3xl">
        SERVICES
      </h2>

      {/* Description */}
      <div className="mx-4 md:mx-24 md:text-center mt-6">
        <div className="h-4 w-3/4 bg-neutral-200 rounded mx-auto"></div>
      </div>

      {/* Service cards */}
      <div className="max-w-5xl mx-auto px-8 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="h-40 bg-neutral-200 rounded-xl shadow-md"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSkeleton;
