import React from 'react'
import Item from "./item.js";
export default function ItemsContainer(props) {
  let {clickOnItem, selectedItems, question, surveyItems} = props
  let ItemsList = surveyItems.map(x=>x[0])
  let scoreList = surveyItems.map(x=>x[1])
  let surveyOptions = ItemsList.map((x,index) => (
        <Item
          score = {scoreList[index]}
          clickOnItem={clickOnItem}
          isChecked={selectedItems.includes(x)}
          value={x}
          content={x}
          key={Math.random() + "l"} />
      ));
    return (
          <div>
          <h1>{question}</h1>
        {surveyOptions}
          </div>
    )
}
