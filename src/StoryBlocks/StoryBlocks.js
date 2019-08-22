import React, { Component } from "react";
import "./style.css";
import { Redirect } from "react-router-dom";

class StoryBlocks extends Component {
  constructor() {
    super();
    this.state = {
      result: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      result: true
    });
  }
  showDescription(e) {
    if (this.state.result) {
      return (
        <Redirect
          to={
            ((pathname = "/story-description"),
            (state = {
              title: this.props.title,
              img: this.props.img
            }))
          }
        />
      );
    }
  }
  render() {
    return (
      <div className="main-header">
        {this.showDescription()}
        <div onClick={this.handleChange}>
          <img className="image-1" src={this.props.img} alt="lion" />
          <h3 className="para-1">{this.props.title}</h3>
          <p className="para-2">{this.props.desciption}</p>
        </div>
      </div>
    );
  }
}

export default StoryBlocks;
