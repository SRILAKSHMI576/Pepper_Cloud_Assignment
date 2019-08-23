import React, { Component } from "react";
import "./style.css";

class LoginSignup extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      };
    });
  }
  render() {
    // let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In";
    let displayText = this.state.isLoggedIn ? (
      "hi"
    ) : (
      <div className="login">
        <center>
          <p>
            Username:
            <input type="email" placeholder="Email" required />
          </p>
          <p>
            Password:
            <input type="password" placeholder="Username" required />
          </p>
          <button className="submit">Submit</button>
        </center>
      </div>
    );
    return (
      <div>
        {/* <button onClick={this.handleClick}>{buttonText}</button> */}
        <h1>{displayText}</h1>
      </div>
    );
  }
}

export default LoginSignup;
