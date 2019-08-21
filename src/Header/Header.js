import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <div className="title">Pepper Cloud Private Limited</div>
      <form className="search-button">
        <input type="text" placeholder="Pepper cloud.." name="search" />
      </form>
      <a href="https://medium.com" className="home">
        Home
      </a>
    </div>
  );
}

export default Header;
