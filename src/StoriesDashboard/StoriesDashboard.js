import React, { Component } from "react";
import Header from "../Header/Header";
import "./style.css";
import StoryBlocks from "../StoryBlocks/StoryBlocks";

class StoriesDashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="pages">
          <StoryBlocks
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGFGyTTAAYg5v_oRjooBD46SiO1FWvCt8adbB9ytvm4DZ6JO48QQ"
            title="The Shy Person’s Guide to Winning 
          Friends and Influencing People"
            desciption="Kindness is a superpower"
          />
          <StoryBlocks
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnBKl8tFuoZaZQMdxz0QblbUn11ATmjuZ6pnE0aC-2PZbyxK9_"
            title=" We Need to Stop Criminalizing 
        School-Age Black Girls"
            desciption="What they are, what you need to know, and"
          />
        </div>
        <div className="pages">
          <StoryBlocks
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmw9BKT1VsMHhp2kcIhkXl6tMsdzJtKCBV-nMoJD3hVEHpu8uJ"
            title=" Stop Making Everything Perfect for  Your Kid"
            desciption="Kindness is a superpower"
          />
          <StoryBlocks
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzVkuGeLO3lPSph8ySVdHOGvUt5Y0eW117DPPlcAVKpSQGUrHkCA"
            title=" What If I Said No? (And Other
              Questions to Consider Daily)"
            desciption="What they are, what you need to know, and"
          />
        </div>
      </div>
    );
  }
}

export default StoriesDashboard;
