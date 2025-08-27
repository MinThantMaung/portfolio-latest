import React from "react";
import { projectItems } from "../static/project";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";
import { staticData } from "../static";

const Project = () => {
  return (
    <section className="min-h-screen w-full">
      <h2 className="font-bold text-3xl ml-4 md:ml-0 md:text-center md:pt-14 pt-4">
        Projects
      </h2>

      <p className="mx-4 md:mx-24 md:text-center mt-6 text-muted-foreground">
        {staticData.project_description}
      </p>

      <div className="carousel carousel-center rounded-box gap-10 md:gap-20 px-10 md:px-24 mt-8 w-full">
        {projectItems.map((item, idx) => (
          <div
            className="carousel-item h-[25rem] flex items-center justify-center"
            key={item.id}
          >
            <PinContainer
              title={item.title}
              href={item.href}
              containerClassName="w-80 h-80"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/70 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {item.name}
                </h3>

                <div className="text-sm !m-0 !p-0 font-normal">
                  <span className="text-slate-400">{item.description}</span>
                </div>

                <div className="relative flex-1 w-full rounded-lg mt-4 overflow-hidden">
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    fill
                    sizes="200"
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
