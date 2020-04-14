import React from "react";
import { connect } from "react-redux";
import Header from "./components/header.js";
import ItemsContainer from "./components/surveyItemsContainer"
import Navbar from './components/navbar'
import "./styles/SurveyItemsContaine.css";
const mapStateToProps = state => ({
  selectedItems: state.selectedItems,
  numPages: state.numPages,
  data: state.data,
  title: state.title,
  currentPage: state.currentPage
});
const mapDispatchToProps = dispatch => ({
  clickOnItem: x => dispatch({ type: "clickOnItem", payload: x }),
  openNextPage: () => dispatch({ type: "nextPage" }),
  openPrevPage: () => dispatch({ type: "prevPage" })
});
 function SurveyContainer(props) {
  let {currentPage, title, clickOnItem, selectedItems, data, openNextPage, openPrevPage } = props;
  let surveyItems, progress, question, numPages
  data = data.data;
  numPages= data.length;
  question = data[currentPage].question;
  surveyItems= data[currentPage].options
  progress = (100 / numPages) * (currentPage + 1);
  return (
    <div >
       <Header progress={progress} title={title} />
      <div className='flex-container'>
        <div className='main'>
          <ItemsContainer question={question} clickOnItem={clickOnItem} selectedItems={selectedItems} surveyItems={surveyItems} />
          <Navbar openPrevPage={openPrevPage} openNextPage={openNextPage} numPages={numPages} currentPage={currentPage} />
        </div>
      </div>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);