import { FC, ReactElement } from "react";
import Icon from "./Icons/GitHub.svg";
import ApiIcon from "./Icons/Api.svg";
import ReactIcon from "./Icons/React.svg";
import NuxtIcon from "./Icons/Nuxt.svg";
import { NavPopoverIcon } from "../PopoverIcon";

const ActionButton: FC<{ href: string; icon: ReactElement; title: string }> = ({
  href,
  icon,
  title,
}) => {
  return (
    <a href={href} className="gitHubAction">
      <span className="gitHubAction__icon">{icon}</span>
      <span className="gitHubAction__title">{title}</span>
    </a>
  );
};

export const GitHub: FC = () => {
  return (
    <div className="gitHub">
      <NavPopoverIcon icon={<Icon />}>
        <div className="gitHub__Actions">
          <ActionButton
            href="https://github.com/whpptjs/whppt-api-express"
            icon={<ApiIcon />}
            title="Api"
          />
          <ActionButton
            href="https://github.com/whpptjs/whppt-next"
            icon={<ReactIcon />}
            title="React"
          />
          <ActionButton
            href="https://github.com/whpptjs/whppt-nuxt"
            icon={<NuxtIcon />}
            title="Nuxt"
          />
        </div>
      </NavPopoverIcon>
    </div>
  );
};
