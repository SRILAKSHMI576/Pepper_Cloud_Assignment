import React, { Component } from "react";
import "./style.css";

class StoryPage extends Component {
  constructor() {
    super();
    this.state = {
      title: "title"
    };
  }
  changeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="title"
          value={this.state.title}
          className="title-1"
          onChange={this.changeTitle}
        />
        <textarea className="text-area" placeholder="Write a story..." />
      </div>
    );
  }
}
export default StoryPage;
