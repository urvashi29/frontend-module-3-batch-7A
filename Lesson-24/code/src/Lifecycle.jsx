import React, { Component } from "react";
import axios from "axios";

class Lifecycle extends Component {
  // initialization
  constructor() {
    super();
    this.state = {
      firstName: "alex",
      score: 20,
      age: 0,
      users: [],
    };
  }

  //   Mouting (dep)
  //   componentWillMount = () => {
  //     console.log("componentWillMount");
  //   };

  static getDerivedStateFromProps = (props, state) => {
    console.log(state);
    //api calls
  };

  componentDidMount = () => {
    //api calls on initial rendering
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   updation
  handleUpdate = () => {
    this.setState({
      firstName: "alina",
      score: 25,
      age: 20,
    });

    //api calls
  };

  //   optimization
  shouldComponentUpdate = (nextProps, nextState) => {
    // conditional rendering () ? () : ()
    // return boolean
    return true;
  };

  //   (dep)
  //   componentWillUpdate = () => {
  //     console.log("componentWillUpdate");
  //   };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    return "snaphot";
  };

  componentDidUpdate = (prevProps, prevState, snaphot) => {
    console.log(prevState, snaphot);
    // if(this.state.age >= 18) {
    //     alert("eligible to vote!");
    // }

    // alert(
    //   `Your score is update from ${prevState.score} to ${this.state.score}`
    // );
  };

  componentWillUnmount = () => {
    // clearTimeout();
    // clearInterval();
    // window.removeEventListener();
  };

  render() {
    console.log(this.state.users);
    const users = this.state.users;

    return (
      <div>
        <input />
        {this.state.firstName}
        <button onClick={this.handleUpdate}>Update</button>

        <p>
          {users.length ? (
            users.map((user) => {
              return <p>{user.username}</p>;
            })
          ) : (
            <p>No Post Yet!</p>
          )}
        </p>
      </div>
    );
  }
}

export default Lifecycle;

// class Shape {
//     constructor (id) {
//         this.id = id;
//     }
// }

// class Circle extends Shape {
//     constructor() {
//         super(20);//call parent class constctutor function
//     }
// }

// const c = new Circle ();
// console.log(c.id)
