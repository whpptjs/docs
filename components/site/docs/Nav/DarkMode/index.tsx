import { FC, ReactElement, useEffect, useMemo } from "react";
import { useLocalStorage } from "../../../../../assets/hooks/localStorage";
import DarkIcon from "./Icons/Dark.svg";
import LightIcon from "./Icons/Light.svg";
import SystemIcon from "./Icons/System.svg";
import { NavPopoverIcon } from "../PopoverIcon";

const DarkModeAction: FC<{
  icon: ReactElement;
  title: string;
  onClick: () => void;
}> = ({ icon, title, onClick }) => {
  return (
    <button className="darkModeAction" onClick={() => onClick()}>
      <div className="darkModeAction__icon">{icon}</div>
      <div className="darkModeAction__title">{title}</div>
    </button>
  );
};

export const DarkMode: FC = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  useEffect(() => {
    if (
      theme === "dark" ||
      (theme === "" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const activeModeIcon = useMemo(() => {
    if (theme === "dark") return <DarkIcon />;
    if (theme === "light") return <LightIcon />;
    return <SystemIcon />;
  }, [theme]);

  return (
    <div className="darkMode">
      <NavPopoverIcon icon={activeModeIcon}>
        <div className="darkMode__actions">
          <DarkModeAction
            icon={<DarkIcon />}
            title="Dark"
            onClick={() => setTheme("dark")}
          />
          <DarkModeAction
            icon={<LightIcon />}
            title="Light"
            onClick={() => setTheme("light")}
          />
          <DarkModeAction
            icon={<SystemIcon />}
            title="System"
            onClick={() => setTheme("")}
          />
        </div>
      </NavPopoverIcon>
    </div>
  );
};
