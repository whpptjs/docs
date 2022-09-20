import { FC, ReactElement } from "react";
import { LeftNav } from "../LeftNav";
import { DocsNav } from "../Nav";

export const DocsLayout: FC<{ children: ReactElement | ReactElement[] }> = ({
  children,
}) => {
  return (
    <div className="docsLayout">
      <DocsNav />
      <div className="docsLayout__content">
        <div className="docsLayout__left">
          <LeftNav />
        </div>
        <div className="docsLayout__main">{children}</div>
        <div className="docsLayout__right"></div>
      </div>
    </div>
  );
};
