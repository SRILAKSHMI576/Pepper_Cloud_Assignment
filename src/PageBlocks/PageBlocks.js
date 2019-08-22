import React from "react";
import "./style.css";

function PageBlocks(props) {
  return (
    <div className="main-header">
      <div>
        <img className="image-1" src={props.img} alt="lion" />
        <h3 className="para-1">{props.heading}</h3>
        <p className="para-2">{props.heading1}</p>
        <p className="para-3">{props.heading2}</p>
        <p className="para-4">{props.heading3}</p>
      </div>
    </div>
  );
}

export default PageBlocks;
