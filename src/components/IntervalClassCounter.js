import React, { Component } from "react";

class IntervalClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  tick = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  componentDidMount() {
    console.log("mounted");
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    console.log("unmounted");
    clearInterval(this.interval);
  }
  render() {
    return <h1>{this.state.count}</h1>;
  }
}

export default IntervalClassCounter;
