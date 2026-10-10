const defaultConfig = {
  w: "10rem",
  h: "3rem",
  radius: "0.5rem",
  variant: "dark",
};

const bgColor = {
  dark: "bg-gray-500",
  light: "",
};

/**
 * @param {Object} props
 * @param {string} [props.w]
 * @param {string} [props.h]
 * @param {string} [props.radius]
 * @param {"light" | "dark"} [props.variant]
 *
 */
export default function JSkeleton({
  w = defaultConfig.w,
  h = defaultConfig.h,
  radius = defaultConfig.radius,
  variant = defaultConfig.variant,
  ...props
}) {
  return (
    <div
      className={`rounded-sm ${bgColor[variant]}`}
      style={{ width: w, height: h, borderRadius: radius }}
    />
  );
}
