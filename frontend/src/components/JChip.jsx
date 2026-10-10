import { icons } from "./logos/icons";
import css from "./JChip.module.css";

export default function JChip({ icon, name }) {
  const Icon = icon;

  return (
    <div className={css.jchip}>
      <Icon />
      <span className="text-nowrap">{name}</span>
    </div>
  );
}
