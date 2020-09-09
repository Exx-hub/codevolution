import React, { Component } from "react";

class ClassCounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleDecrement = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  };

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        {this.state.count}
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

export default ClassCounterTwo;
