import { FC } from "react";
import Svelte_Bruce from "../../../assets/svg/Svelte_Bruce.svg";

export const Logo: FC = () => {
  return (
    <div className="logo">
      <div className="logo__icon">
        <Svelte_Bruce />
      </div>
      <div>whppt</div>
    </div>
  );
};
