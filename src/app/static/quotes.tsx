import { cn } from "../lib/utils";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

export const quotesItem = [
  {
    id: 0,
    name: "Cristiano Ronaldo",
    designation: "Professional Footballer",
    slug: "/quotes/cr7.jpg",
    content: (
      <p className="italic">
        "Your love makes me strong, your <Highlight>hate</Highlight> makes me{" "}
        <Highlight>unstoppable.</Highlight>"
      </p>
    ),
  },
  {
    id: 1,
    name: "Napoleon Bonaparte",
    designation: "General and former King of Italy",
    slug: "/quotes/napeleon.webp",
    content: (
      <p className="italic">
        “<Highlight>Impossible</Highlight> is a word to be found only in the
        dictionary of fools.”
      </p>
    ),
  },
  {
    id: 2,
    name: "Mike Tyson",
    designation: "Professional Boxer",
    slug: "/quotes/mikeTyson.webp",
    content: (
      <p className="italic">
        “Everybody has a <Highlight>plan</Highlight> until they get punched in
        the mouth.”
      </p>
    ),
  },
  {
    id: 3,
    name: "Benjamin Franklin",
    designation: "Founding Father of the United States",
    slug: "/quotes/franklin.jpg",
    content: (
      <p className="italic">
        “An investment in <Highlight>knowledge</Highlight> pays the best
        interest.”
      </p>
    ),
  },
  {
    id: 4,
    name: "Socrates",
    designation: "Philosopher",
    slug: "/quotes/Socrates.jpg",
    content: (
      <p className="italic">
        “Wisdom begins in <Highlight>wonder</Highlight>.”
      </p>
    ),
  },
];
