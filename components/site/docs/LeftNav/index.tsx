import { useRouter } from "next/router";
import { FC, ReactElement, useMemo } from "react";
import { useWhppt, WhpptLinkData } from "@whppt/next";

export type DocsLeftNavGroupData = {
  group: {
    title: string;
    links: WhpptLinkData[];
  };
};

const LeftNavItem: FC<{ href: string; text: string }> = ({ href, text }) => {
  const { page } = useWhppt();
  const isActive = useMemo(() => {
    return href === `/${page.slug}`;
  }, [href, page.slug]);

  return (
    <div
      className={[
        "leftNavGroup__item",
        isActive ? "leftNavGroup__item--active" : "",
      ].join(" ")}
    >
      <a href={href}>{text}</a>
    </div>
  );
};

const LeftNavGroup: FC<{
  title: string;
  children: ReactElement | ReactElement[];
}> = ({ title, children }) => {
  return (
    <div>
      <div className="leftNavGroup__title">{title}</div>
      <div className="leftNavGroup__panel">{children}</div>
    </div>
  );
};

export const LeftNav: FC = () => {
  return (
    <div className="leftNav">
      <LeftNavGroup title="Get Started">
        <LeftNavItem href="/docs/installation" text="Installation" />
      </LeftNavGroup>
      <LeftNavGroup title="Editors">
        <LeftNavItem href="/docs/editors" text="Overview" />
      </LeftNavGroup>
      {/* <LeftNavGroup title="Plugins">
        <LeftNavItem href="/docs/plugins" text="Overview" />
        <LeftNavItem href="/docs/plugins/tagging" text="Tagging" />
      </LeftNavGroup> */}
    </div>
  );
};
