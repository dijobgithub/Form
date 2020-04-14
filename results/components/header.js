import React from "react";
import {ProgressBar} from "react-bootstrap";
export default function Top(props) {
    let { totalScore, title } = props;
    return (
        <div className='header'>
            <div
                style={{
                    color: "#007bff",
                    textAlign: "center",
                    fontSize: "22px"
                }} >
                Complexity Level of The {title} : {totalScore}% <br />
                <ProgressBar
                    className="progressBar"
                    variant="primary"                 
                    now={totalScore}
                />
            </div>
        </div>
    );
}