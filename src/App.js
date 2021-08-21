import React, { Component } from "react";
import UserInput from "./components/UserInput";
import ConnectedUsers from "./components/Users";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <ConnectedUsers />
      </div>
    );
  } //ask if after you submit a new user, which changes the store, does every component below app re-render and that is why users is rerendered to show the new user?
}

export default App;
