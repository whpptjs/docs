import { Icon } from "@components";
import { useState } from "react";
import { GitHubLink } from "./GitHubLink";
import { Link } from "@components";

export const GitHubLinks = () => {
  const [isOpen, toggle] = useState(false);

  return (
    <div className=" relative group">
      <div className="flex items-center ">
        <span>Github</span>
        <Icon icon="carret" size={16} />
      </div>
      <ul className="absolute right-0 py-4 px-8 border border-grey-400 space-y-1 bg-white hidden flex-col group-hover:flex hover:flex">
        <GitHubLink href="https://github.com/whpptjs/whppt-api-express" text="Whppt / Api" />
        <GitHubLink href="https://github.com/whpptjs/whppt-nuxt" text="Whppt / Nuxt" />
        <GitHubLink href="" text="Whppt / Next" />
      </ul>
    </div>
  );
};
