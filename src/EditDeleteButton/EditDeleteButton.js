import React, { Component } from "react";

class EditDeleteButton extends Component {
  constructor() {
    super();
    this.state = {
      value: "Edit story"
    };
  }
  render() {
    return <div>{this.state.value}</div>;
  }
}

export default EditDeleteButton;
