import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const mapStateToProps = state => ({
  title: state.title
});
function Landing(props) {
  return (
    <div>
      <div className='header'>
        <h2 >Valuation Complexity Asessment</h2>
      </div>
      <div className='flex-container'>
      <div className='main'>
        <div style={{maxWidth:'50%'}}>
          <p>We need validation service for...</p>
        <Link to="/survey">
          <p style={{ textAlign: "center", fontSize: "22px" }}> {props.title} </p>
        </Link>
      <p>
        Select one to start. For each subject, I will ask 6-8 question i.e Does
        it have redemption right? Any catch-up perfomance condition? It won't
        take you more than 55 seconds. At the end we will provide you an index,
        from 0-100, to indicate the complexity level of the subject instrument.
      </p>
         </div>
      </div>
      </div>
    </div>
  );
}
export default connect(mapStateToProps, null)(Landing);
