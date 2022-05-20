import * as React from "react";
import { nutritionFacts } from "../../constants";
import "./NutritionalLabel.css";

export function NutritionalLabel(props) {
  console.log(nutritionFacts);

  let arr = props.item[0];
  let temp = [
    arr.item_description,
    arr.calories,
    arr.cholesterol,
    arr.dietary_fiber,
    arr.sodium,
    arr.sugar,
    arr.total_fat,
    arr.saturated_fat,
    arr.trans_fat,
  ];
  console.log(temp);
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item[0].item_name}</h4>

      <ul className="fact-list">
        {nutritionFacts.map((item, index) => {
          return (
            <NutritionalLabelFact
              label={item.label}
              key={index}
              value={temp[index]}
            />
          );
        })}
      </ul>
    </div>
  );
}

export function NutritionalLabelFact({ label, value }) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{label}</span>{" "}
      <span className="fact-value">{value}</span>
    </li>
  );
}

export default NutritionalLabel;
