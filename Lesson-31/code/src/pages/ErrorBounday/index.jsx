import React, { Component } from "react";

class index extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch = (error, info) => {
    //handle error
    console.log("error", error, info);
    this.setState({
      hasError: true,
    });
  };

  render() {
    if (this.state.hasError) {
      return <p>Opps! something wen wrong!</p>;
    }
    
    return this.props.children;
  }
}

export default index;
