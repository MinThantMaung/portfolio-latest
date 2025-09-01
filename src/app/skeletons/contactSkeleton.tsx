import React from "react";

const ContactSkeleton = () => {
  return (
    <div className="flex md:mx-28 mx-4 min-h-screen justify-center items-center animate-pulse">
      {/* Left column: title + description */}
      <div className="md:w-1/2">
        <div className="h-8 w-48 bg-neutral-200 rounded"></div>

        <div className="mt-6 md:mt-12 space-y-3 md:mr-10">
          <div className="h-4 w-full bg-neutral-200 rounded"></div>
          <div className="h-4 w-5/6 bg-neutral-200 rounded"></div>
          <div className="h-4 w-3/5 bg-neutral-200 rounded"></div>
        </div>
      </div>

      {/* Right column: card with form placeholders */}
      <div className="md:w-1/2 flex justify-end items-center md:py-10">
        <div className="rounded-lg shadow-lg p-6 w-full max-w-sm">
          {/* Card title */}
          <div className="h-6 w-40 bg-neutral-200 rounded"></div>

          <div className="space-y-3 mt-3">
            {/* Email field */}
            <div className="h-12 bg-neutral-200 rounded-lg"></div>
            <div className="h-4 w-36 bg-neutral-200 rounded"></div>

            {/* Subject field */}
            <div className="h-12 bg-neutral-200 rounded-lg"></div>
            <div className="h-4 w-44 bg-neutral-200 rounded"></div>

            {/* Textarea */}
            <div className="h-28 bg-neutral-200 rounded-lg"></div>
            <div className="h-4 w-28 bg-neutral-200 rounded"></div>

            {/* Submit button */}
            <div className="h-14 bg-neutral-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSkeleton;
