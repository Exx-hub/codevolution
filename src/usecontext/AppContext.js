import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import ComponentY from "./ComponentY";

export const UserContext = React.createContext();

export const CountContext = React.createContext();
export const ClickContext = React.createContext();

class AppContext extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "meg",
      count: 0,
      hookCount: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  hookHandleClick = () => {
    console.log("hookclick");
    this.setState((prevState) => {
      return {
        hookCount: prevState.hookCount + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <UserContext.Provider
          value={{
            name: this.state.name,
            count: this.state.count,
            handleClick: this.handleClick,
          }}
        >
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </UserContext.Provider>

        <CountContext.Provider value={this.state.hookCount}>
          <ClickContext.Provider value={this.hookHandleClick}>
            <ComponentY />
          </ClickContext.Provider>
        </CountContext.Provider>
      </div>
    );
  }
}

export default AppContext;
