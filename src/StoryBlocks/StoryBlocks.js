import React, { Component } from "react";
import "./style.css";
import { Redirect } from "react-router-dom";

class StoryBlocks extends Component {
  constructor() {
    super();
    this.state = {
      text: "false"
    };
    this.alertText = this.alertText.bind(this);
  }

  alertText(e) {
    this.setState({
      text: true
    });
  }
  showDescription(e) {
    if (this.state.text) {
      return <Redirect to="/story-description" />;
    }
  }
  render() {
    return (
      <div className="main-header">
        {this.showDescription()}
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
