import CarretIcon from "./carret.svg";
import ExternalIcon from "./external.svg";

export const Icon = ({ icon, size }: { icon: String; size: Number }) => {
  const SelectedIcon: any =
    icon === "carret" ? (
      <CarretIcon />
    ) : icon === "external" ? (
      <ExternalIcon />
    ) : (
      <CarretIcon />
    );
  return (
    <div style={{ width: `${size}px` }}>{SelectedIcon || <SelectedIcon />}</div>
  );
};
