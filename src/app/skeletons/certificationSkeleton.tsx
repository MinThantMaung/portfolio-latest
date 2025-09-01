import React from "react";

const CertificationSkeleton = () => {
  return (
    <div className="min-h-screen animate-pulse">
      <h2 className="font-bold text-3xl ml-4 md:ml-0 md:text-center md:pt-12 pt-4">
        CERTIFICATES
      </h2>

      <div className="mx-4 md:mx-24 md:text-center mt-6">
        <div className="h-4 w-3/4 bg-neutral-200 rounded mx-auto"></div>
      </div>
      <div className="md:py-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-24">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="shadow-lg rounded-2xl p-4 sm:p-6 bg-white h-full"
          >
            <div className="flex items-center gap-4">
              <div className="w-[90px] h-[90px] bg-neutral-200 rounded-lg shrink-0"></div>

              <div className="min-w-0 flex-1">
                <div className="h-5 w-32 bg-neutral-200 rounded mb-2"></div>
                <div className="h-3 w-20 bg-neutral-200 rounded"></div>
              </div>
            </div>

            <div className="mt-4 h-3 w-40 bg-neutral-200 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationSkeleton;
