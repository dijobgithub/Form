
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Navbar(props) {
    return (
        <div className="buttonsContainer">
            <Link to="/">
            <Button onClick={props.startOver} variant="secondary">
                Start over
                     </Button>
                </Link>
            <Button onClick={props.open} variant="primary">
  ?
            </Button>

        </div>
    )
}
