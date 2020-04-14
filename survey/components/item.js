import React from "react";

export default function Item(props) {
  let data = {name:props.value, score:props.score}
  return (
    <label className="item">
      <input  
        score = {props.score}
        onClick={() => props.clickOnItem(data)}
        type="checkbox"
        checked={props.isChecked}
        className="checkbox"
        value={props.value}
      />
      {props.content}
      <span className="checkmark" />
    </label>
  );
}
