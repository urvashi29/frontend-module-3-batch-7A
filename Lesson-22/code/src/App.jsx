import React, { Component } from "react";
import Display from "./Display";
import Employee from "./Employee";
import Counter from "./Counter";

class App extends Component {
  state = {
    firstName: "alina",
    age: 20,
    city: "pune",
    designation: "developer",
  };

  render() {
    return (
      <>
        <Display
          firstName={this.state.firstName}
          designation={this.state.designation}
        />

        <Employee />
        <Counter />
      </>
    );
  }
}

export default App;
