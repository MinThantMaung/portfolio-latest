"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

let interval: ReturnType<typeof setInterval>;

type Card = {
  id: number;
  name: string;
  slug: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.1;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <Image
              src={card.slug}
              alt={card.name}
              fill
              className="absolute inset-0 object-cover rounded-3xl"
              priority={index === 0}
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 33vw"
            />

            {/* Optional gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b rounded-3xl from-black/30 via-black/20 to-black/50" />

            {/* Content overlay */}
            <div className="relative z-10 h-full text-white flex flex-col">
              <div className="font-normal text-white/90">{card.content}</div>

              {/* Author block pinned to bottom */}
              <div className="mt-auto">
                <p className="font-semibold text-white">{card.name}</p>
                <p className="text-white/80">{card.designation}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
