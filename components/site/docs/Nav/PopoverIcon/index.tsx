import { FC, ReactElement, useRef, useState } from "react";
import { useClickOutside } from "../../../../../assets/hooks/clickOutside";

export const NavPopoverIcon: FC<{
  icon: ReactElement;
  children: ReactElement;
}> = ({ icon, children }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => setOpen(false));

  return (
    <div ref={wrapperRef} className="popoverIcon">
      <button className="popoverIcon__icon" onClick={() => setOpen(!open)}>
        {icon}
      </button>
      {open && <div className="popoverIcon__panel">{children}</div>}
    </div>
  );
};
