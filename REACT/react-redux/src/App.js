import logo from "./logo.svg";
import React, { Component } from "react";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";
import "./App.css";

class App extends Component {
  state = { number: 0 };
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot
          onClick={function (id) {
            this.setState({
              number: this.state.number + Number(id),
            });
          }.bind(this)}
        ></AddNumberRoot>
        <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
      </div>
    );
  }
}

export default App;
