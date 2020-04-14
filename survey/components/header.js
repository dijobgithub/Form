import React from "react";
import { ProgressBar } from "react-bootstrap";
export default function Header(props) {
  return (
    <div className='header'>
      <a href="/">
          <p style={{ textAlign: "center", fontSize: "22px" }}>Complexity Assessment for {props.title} </p>
      </a>
      <ProgressBar
        animated
        style={{ marginTop: "10px" }}
        variant="success"
        now={props.progress}
      />
    </div>
  );
}
