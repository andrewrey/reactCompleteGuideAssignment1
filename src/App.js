import React, { Component } from "react";
import "./App.scss";
import Header from "./Header";
import MainContent from "./MainContent";

class App extends Component {
  state = {
    pendingGuest: "",
    guests: [],
  };

  lastId = 0;

  updateIDNumber = () => {
    let id = this.lastId;
    this.lastId += 1;
    return id;
  };

  handleNameInput = (e) => {
    console.log(e.target.value);
    this.setState({
      pendingGuest: e.target.value,
    });
  };

  handleNameSubmit = (name) => {
    let id = this.updateIDNumber();
    this.setState({
      guests: [{ name, id }, ...this.state.guests],
    });
  };

  render() {
    return (
      <div className={"App"}>
        <Header />
        <MainContent handleName={this.handleNameInput} />
      </div>
    );
  }
}

export default App;
