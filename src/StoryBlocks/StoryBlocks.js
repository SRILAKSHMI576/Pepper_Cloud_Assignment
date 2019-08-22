import React from "react";
import "./style.css";

function StoryBlocks(props) {
  return (
    <div className="main-header">
      <div>
        <img className="image-1" src={props.img} alt="lion" />
        <h3 className="para-1">{props.title}</h3>
        <p className="para-2">{props.desciption}</p>
      </div>
    </div>
  );
}

export default StoryBlocks;
