import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="title">Pepper Cloud Private Limited</div>

        <a href="https://medium.com" className="home">
          Home
        </a>
      </div>
    );
  }
}

export default Header;
