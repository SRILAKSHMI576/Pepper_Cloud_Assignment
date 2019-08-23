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
    let displayText = this.state.isLoggedIn ? (
      ""
    ) : (
      <div className="login">
        <center>
          <p>
            Username:
            <input type="email" placeholder="Email" required />
          </p>
          <p>
            Password:
            <input type="password" placeholder="Username" />
          </p>
          <button className="submit">Submit</button>
        </center>
      </div>
    );
    return (
      <div>
        <h1>{displayText}</h1>
      </div>
    );
  }
}

export default LoginSignup;
