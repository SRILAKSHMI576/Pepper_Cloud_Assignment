import React, { Component } from "react";
import "./style.css";

class LoginSignup extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      username: "name",
      password: "word"
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
            <input
              type="email"
              placeholder="Email"
              value={this.state.username}
              required
            />
          </p>
          <p>
            Password:
            <input
              type="password"
              placeholder="Username"
              value={this.state.password}
            />
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
