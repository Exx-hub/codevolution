import React, { Component } from "react";

class ClassTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    console.log("mounted");
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        return {
          timer: prevState.timer + 1,
        };
      });
    }, 1000);
  }

  handleClick = () => {
    clearInterval(this.interval);
  };

  componentWillUnmount() {
    console.log("unmounted");
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Class Timer - {this.state.timer}
        <div>
          <button onClick={this.handleClick}>Clear</button>
        </div>
      </div>
    );
  }
}

export default ClassTimer;
