import * as React from "react";
import "./Chip.css";

export function Chip({
  label = "",
  isActive = false,
  setFoodItem = undefined,
  setRestaurant = undefined,
  setCategory = undefined,
}) {
  let c = "chip";
  if (isActive) c = "chip active";
  return (
    <button
      className={c}
      onClick={() => {
        if (setRestaurant) {
          setRestaurant(label);
        }
        if (setCategory) {
          setCategory(label);
        }
        if (setFoodItem) {
          setFoodItem(label);
        }
      }}
    >
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  );
}

export default Chip;
