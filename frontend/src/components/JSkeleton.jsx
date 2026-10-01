/**
 * @param {Object} props
 * @param {string} [props.w]
 * @param {string} [props.h]
 * @param {string} [props.radius]
 * @param {"light" | "dark"} [props.variant]
 *
 */
export default function JSkeleton({
  w = "unset",
  h = "unset",
  radius = "unset",
  variant = "dark",
  ...props
}) {
  const bgColor = {
    dark: "bg-gray-500",
    light: "",
  };
  return (
    <div
      className={"rounded-sm bg-gray-500"}
      style={`width: ${w}; height: ${h}; border-radius: ${radius}`}
    />
  );
}
