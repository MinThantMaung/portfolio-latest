import React from "react";
import { CardStack } from "../ui/card-stack";
import { quotesItem } from "../static/quotes";
import { staticData } from "../static";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const Quotes = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row mx-4 md:mx-32">
        <div className="lg:w-1/2 flex flex-col justify-center items-start md:mx-10">
          {/* <h2 className="font-bold text-3xl">Quotes</h2> */}
          <TextGenerateEffect words={staticData.quote_description} />
          {/* <div className="mt-6 text-xl font-bold">{staticData.quote_description}</div> */}
        </div>
        <div className="h-[40rem] flex items-center justify-center lg:w-1/2">
          <CardStack items={quotesItem} />
        </div>
      </div>
    </>
  );
};

export default Quotes;
