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
  changeUsername = e => {
    this.setState({
      username: e.target.value
    });
  };
  changePassword = e => {
    this.setState({
      password: e.target.value
    });
  };
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
              onChange={this.changeUsername}
            />
          </p>
          <p>
            Password:
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.changePassword}
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
