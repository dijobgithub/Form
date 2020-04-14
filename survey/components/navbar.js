import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

 export default function Navbar(props) {
   let { currentPage, numPages, openNextPage, openPrevPage} = props
   let prevButton, nextButton
   //first     currentPage
          currentPage === 0?
      prevButton =
      <Link to="/">
      <Button
      variant="secondary"
     >
      Prev
      </Button> 
      </Link>
  :
     prevButton =
      <Button
      onClick={openPrevPage}
      variant="primary"
     >
      Prev
     </Button>

//last     currentPage
       currentPage<numPages-1? 
     nextButton = (
       <Button
         onClick={openNextPage}
         variant="primary"
        
       >
         Next
       </Button>
     ) 
     :
      nextButton = (
       <Link to="/results">
         <Button variant="success">
           Get Result
          </Button>
       </Link>
     );
  return (
    <div className="buttonsContainer">
{prevButton}
{nextButton}
    </div>
  );
}

