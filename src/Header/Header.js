import React from "react";
import "./style.css";
import PageBlocks from "../PageBlocks/PageBlocks";

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
      <PageBlocks />
    </div>
  );
}

export default Header;
