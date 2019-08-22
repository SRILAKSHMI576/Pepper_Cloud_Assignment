import React, { Component } from "react";
import "./style.css";

class StoryBlocks extends Component {
  constructor() {
    super();
    this.state = {
      text: "alert"
    };
    this.alertText = this.alertText.bind(this);
  }

  alertText(e) {
    console.log("alert");
  }
  render() {
    return (
      <div className="main-header">
        <div onClick={this.alertText}>
          <img className="image-1" src={this.props.img} alt="lion" />
          <h3 className="para-1">{this.props.title}</h3>
          <p className="para-2">{this.props.desciption}</p>
        </div>
      </div>
    );
  }
}

export default StoryBlocks;
