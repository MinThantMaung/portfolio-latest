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
          <TextGenerateEffect words={staticData.quote_description} />
        </div>
        <div className="h-screen flex items-center justify-center lg:w-1/2">
          <CardStack items={quotesItem} />
        </div>
      </div>
    </>
  );
};

export default Quotes;
