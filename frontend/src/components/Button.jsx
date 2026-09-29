import { useEffect, useState } from "react";
import styles from "./Button.module.css";

export default function Button({ children, onClick, className, initialState }) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setClicked(initialState);
  }, [initialState]);

  const handleClick = () => {
    setClicked(!clicked);
    onClick(clicked);
  };

  return (
    <button onClick={handleClick} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
}
