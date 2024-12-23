import React, { Component } from "react";
import Display from "./Display";

class User extends Component {
  state = {
    firstName: "alina",
    age: 20,
    country: "Canada",
    designation: "Intern",
    employee: [
      { id: 1, name: "alex" },
      { id: 2, name: "harry" },
    ],
    contact: {
      email: "admin@gmail.com",
    },
    isValid: false,
  };

  handleUpdate = () => {
    // this is referring to User
    // to update state in class
    this.setState({
      country: "India",
      designation: "Software Engineer",
    });
  };

  //   when state changes, component will re-render / re-displayed
  render() {
    // this will refer to User
    return (
      <p>
        <Display user={this.state} />
        <button onClick={this.handleUpdate}>Update</button>

        {this.state.employee.map((emp) => {
          return <p>{emp.name}</p>;
        })}

        {this.state.contact.email}

        {/* conditional rendering */}
        {/* {this.state.isValid ? <Dashboard /> : <Login />} */}
      </p>
    );
  }
}

export default User;

// in html
// <button onclick="update()">Update</button>

// reconcialiation process
// diffing algo
