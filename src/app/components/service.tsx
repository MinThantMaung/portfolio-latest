import { staticData } from "../static";
import { serviceContent } from "../static/service";
import { HoverEffect } from "../ui/card-hover-effect";

const Service = () => {
  return (
    <>
      <h2 className="ml-4 md:ml-0 md:text-center md:pt-14 pt-4 font-bold text-3xl">
        SERVICES
      </h2>
      <div className="mx-4 md:mx-24 md:text-center mt-6">
        {staticData.service_description}
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={serviceContent} />
      </div>
    </>
  );
};

export default Service;
