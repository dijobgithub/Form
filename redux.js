import { response } from "./data.js";
import { createStore } from "redux";
const initialState = {
    scores:[],
    totalScore:0,
    data: response,
    title: response.title,
    currentPage: 0,
    selectedItems: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "nextPage":
            return { ...state, currentPage: state.currentPage + 1 };
        case "prevPage":
            return { ...state, currentPage: state.currentPage - 1 };
        case "clickOnItem":
            let value
            let {selectedItems, totalScore, scores} = state
            let {name, score} = action.payload
            let index = selectedItems.indexOf(name) 
            if (index === -1) {
                value = [...selectedItems, name] 
                totalScore += score 
                scores.push(score)
            }
            else { 
                scores = [...scores.slice(0, index), ...scores.slice(index + 1)]
                value = [...selectedItems.slice(0, index), ...selectedItems.slice(index + 1)]
                totalScore -= score 
            }
            return { ...state, selectedItems: value, totalScore:totalScore, scores:scores};
        case "startOver":
            return {...initialState}
        default:
            return { ...state };
    }
}

const store = createStore(reducer);
export default store