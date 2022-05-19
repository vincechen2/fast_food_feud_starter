import * as React from "react";
import "./Chip.css";

export function Chip({
  label = "",
  isActive = true,
  setRestaurant = undefined,
  setCategory = undefined,
}) {
  return (
    <button
      className="chip"
      onClick={() => {
        if (setRestaurant) {
          setRestaurant(label);
        }
        if (setCategory) {
          setCategory(label);
        }
      }}
    >
      <p className="label">{label}</p>
      <span className="close" role="button"></span>
    </button>
  );
}

export default Chip;
