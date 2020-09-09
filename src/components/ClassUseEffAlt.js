import React, { Component } from "react";

class ClassUseEffAlt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  handleClick = () => {
    console.log("clicked");
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  tick = () => {
    console.log("hello");
  };

  componentDidMount() {
    console.log("mounted from class");
    document.title = `Title: Click to change title`;
    // this.interval = setInterval(this.tick, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("updated / re-rendered from class");
      document.title = `Title: Clicked ${this.state.count} times`;
    }
  }

  componentWillUnmount() {
    console.log("unmounted");
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>Class</p>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br /> {this.state.name}
        <br />
        <button onClick={this.handleClick}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassUseEffAlt;
