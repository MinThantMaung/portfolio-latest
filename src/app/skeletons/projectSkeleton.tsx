import React from "react";

const ProjectSkeleton = () => {
  return (
    <section className="min-h-screen w-full animate-pulse">
      {/* Title */}
      <h2 className="font-bold text-3xl ml-4 md:ml-0 md:text-center md:pt-14 pt-4">
        Projects
      </h2>

      {/* Description */}
      <p className="mx-4 md:mx-24 md:text-center mt-6 text-muted-foreground">
        <span className="block h-4 w-3/4 mx-auto bg-neutral-200 rounded"></span>
      </p>

      {/* Carousel skeleton */}
      <div className="carousel carousel-center rounded-box gap-10 md:gap-20 px-10 md:px-24 mt-8 w-full">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className="carousel-item h-[25rem] flex items-center justify-center"
          >
            <div className="w-80 h-80 shadow-lg rounded-xl bg-white/5 border border-neutral-200 p-4 flex flex-col">
              {/* Title placeholder */}
              <div className="h-5 w-32 bg-neutral-200 rounded mb-2"></div>

              {/* Description placeholder */}
              <div className="h-4 w-48 bg-neutral-200 rounded mb-4"></div>

              {/* Image placeholder */}
              <div className="flex-1 w-full rounded-lg bg-neutral-200"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSkeleton;
