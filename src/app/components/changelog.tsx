import React from "react";
import { Timeline } from "../ui/timeline";
import { changelogItems } from "../static/changelog";

const Changelog = () => {
  return (
    <div className="relative md:mx-10 overflow-clip">
      <Timeline data={changelogItems} />
    </div>
  );
};

export default Changelog;
