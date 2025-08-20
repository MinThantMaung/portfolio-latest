import React from "react";
import { CardStack } from "../ui/card-stack";
import { quotesItem } from "../static/quotes";
import { staticData } from "../static";

const Quotes = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row mx-4 md:mx-32">
        <div className="md:w-1/2 flex flex-col justify-center items-start md:mx-10">
          <h2 className="font-bold text-3xl">Quotes</h2>
          <div className="mt-6">{staticData.quote_description}</div>
        </div>
        <div className="h-[40rem] flex items-center justify-center md:w-1/2">
          <CardStack items={quotesItem} />
        </div>
      </div>
    </>
  );
};

export default Quotes;
