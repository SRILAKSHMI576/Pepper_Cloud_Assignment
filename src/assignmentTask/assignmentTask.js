import React, { Component } from "react";
import Header from "../Header/Header";
import PageBlocks from "../PageBlocks/PageBlocks";
import "./style.css";

class AssignmentTask extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="pages">
          <PageBlocks
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGFGyTTAAYg5v_oRjooBD46SiO1FWvCt8adbB9ytvm4DZ6JO48QQ"
            heading="The Shy Person’s Guide to Winning 
          Friends and Influencing People"
            heading1="Kindness is a superpower"
            heading2="Michael Thompson in Forge"
            heading3="Aug 13. 4 min read"
          />
          <PageBlocks
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnBKl8tFuoZaZQMdxz0QblbUn11ATmjuZ6pnE0aC-2PZbyxK9_"
            heading=" We Need to Stop Criminalizing 
        School-Age Black Girls"
            heading1="What they are, what you need to know, and"
            heading2="Dana G Smith in Elemental"
            heading3="Aug 15. 3 min read"
          />
        </div>
        <div className="pages">
          <PageBlocks
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmw9BKT1VsMHhp2kcIhkXl6tMsdzJtKCBV-nMoJD3hVEHpu8uJ"
            heading=" Stop Making Everything Perfect for  Your Kid"
            heading1="Kindness is a superpower"
            heading2="Michael Thompson in Forge"
            heading3="Aug 13. 4 min read"
          />
          <PageBlocks
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzVkuGeLO3lPSph8ySVdHOGvUt5Y0eW117DPPlcAVKpSQGUrHkCA"
            heading=" What If I Said No? (And Other
              Questions to Consider Daily)"
            heading1="What they are, what you need to know, and"
            heading2="Dana G Smith in Elemental"
            heading3="Aug 15. 3 min read"
          />
        </div>
      </div>
    );
  }
}

export default AssignmentTask;
