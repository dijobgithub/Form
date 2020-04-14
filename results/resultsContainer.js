import React, { useState } from "react";
import { connect } from "react-redux";
import Header from './components/header'
import Navbar from './components/navbar'
import ModalForm from './components/modalForm'
import "./styles/results.css";

const mapStateToProps = state => ({
  scores:state.scores, 
  data:state.data,
  totalScore: state.totalScore,
   selectedItems: state. selectedItems,
  title: state.title
});
const mapDispatchToProps = dispatch => ({
  startOver: x => dispatch({ type: "startOver" })
});

 function ResultsContainer(props) {
   let content
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  let { selectedItems, title, scores } = props;
   let length =  selectedItems.length
  if (length > 0) {
    content =  selectedItems.map((x,index) => (  
      <div style={{ display: 'flex', width: '100%', justifyContent:'space-between' }} >
        <span> {x}</span>
        <span> +{scores[index]}%</span>
      </div>))
  } else {
    content = '...'
  }
  return (
    <div>
      <Header totalScore={props.totalScore} title={title} />
      <div>
      <div className='flex-container'>
          <div style={{textAlign: "left", alignItems:'flex-start' }} className='main'>
      {content}
      <Navbar startOver={props.startOver} open={handleShow} />
          </div>
      </div>
        <ModalForm startOver={props.startOver} close={handleClose} show={show} />
      </div>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);
