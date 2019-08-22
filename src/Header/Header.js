import React, { Component } from "react";
import "./style.css";
import PageBlocks from "../PageBlocks/PageBlocks";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      story: "story"
    };
  }
  openStory = event => {
    this.setState({
      story: event.target.value
    });
  };
  render() {
    return (
      <div className="header">
        <div className="title">Pepper Cloud Private Limited</div>
        <form className="search-button">
          <input type="text" placeholder="Pepper cloud.." name="search" />
        </form>
        <a href="https://medium.com" className="home">
          Home
        </a>
        <button className="button" onClick={this.openStory}>
          Create story
        </button>
        <PageBlocks />
      </div>
    );
  }
}

export default Header;
