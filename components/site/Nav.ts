import { DocsLeftNavGroupData } from "./docs/LeftNav";
import { Nav } from "@whppt/next/types/Site/Model";
import { Domain } from "@whppt/next";

export type SiteNavigation = {
  docs: {
    leftNav: DocsLeftNavGroupData[];
  };
};

export type InitSiteNavigationArgs = {
  nav?: Nav<SiteNavigation>;
  domain?: Domain;
};

export const InitSiteNavigation = ({ nav, domain }: InitSiteNavigationArgs) => {
  return {
    domainId: domain?._id || "",
    content: {
      ...(nav?.content || {}),
      docs: nav?.content?.docs || { leftNav: [] },
    },
  };
};
