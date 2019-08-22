import React, { Component } from "react";
import "./style.css";
import PageBlocks from "../PageBlocks/PageBlocks";

class Header extends Component {
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
        <PageBlocks />
        <Link to="/story-create" className="button">
          Create story
        </Link>
      </div>
    );
  }
}

export default Header;
