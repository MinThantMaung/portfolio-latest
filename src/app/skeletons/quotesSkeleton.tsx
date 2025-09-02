import React from "react";

const QuotesSkeleton = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-4 md:mx-32 animate-pulse">
      {/* Left side (text effect placeholder) */}
      <div className="lg:w-1/2 flex flex-col justify-center items-start md:mx-10 space-y-3 mt-6 lg:mt-0">
        <div className="h-5 w-64 bg-neutral-200 rounded"></div>
        <div className="h-5 w-52 bg-neutral-200 rounded"></div>
        <div className="h-5 w-40 bg-neutral-200 rounded"></div>
      </div>

      {/* Right side (card stack placeholder) */}
      <div className="h-screen flex items-center justify-center lg:w-1/2 mt-10 lg:mt-0">
        <div className="relative w-96 h-96">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 rounded-xl bg-neutral-200 shadow-md`}
              style={{
                top: `${idx * 8}px`,
                left: `${idx * 8}px`,
                width: `calc(100% - ${idx * 16}px)`,
                height: `calc(100% - ${idx * 16}px)`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuotesSkeleton;
