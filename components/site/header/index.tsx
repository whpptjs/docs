import { WhpptLogo, Link } from "@components";
import { GitHubLinks } from "./GitHubLinks";

export const SiteHeader = () => {
  return (
    <div className=" text-grey-700">
      <div className="pl-8 py-8 border-b border-grey-400 flex justify-between">
        <WhpptLogo />
        <ul className="flex space-x-3 pr-4">
          <li>
            <Link href="https://www.whppt.org/guide/gettingStarted/prerequisites.html">Guide</Link>
          </li>
          <li>
            <Link href="">Api</Link>
          </li>
          <li>
            <GitHubLinks />
          </li>
        </ul>
      </div>
    </div>
  );
};
