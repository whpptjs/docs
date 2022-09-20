import { FC } from "react";
import { DarkMode } from "./DarkMode";
import { GitHub } from "./Github";
import { Logo } from "../../Logo";

export const DocsNav: FC = () => {
  return (
    <div className="docsNav">
      <div className="docsNav__inner">
        <div className="docsNav__left">
          <Logo />
        </div>
        <div className="docsNav__right">
          <div className="docsNav__menu">
            <a className="docsNav__menuLink" href="/docs/installation">
              Docs
            </a>
          </div>
          <div className="docsNav__divider"></div>
          <div className="docsNav__actions">
            <DarkMode />
            <GitHub />
          </div>
        </div>
      </div>
    </div>
  );
};
