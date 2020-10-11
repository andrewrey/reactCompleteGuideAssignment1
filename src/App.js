import React, { Component } from "react";
import "./App.scss";
import Header from "./Header";
import MainContent from "./MainContent";

class App extends Component {
  state = {
    pendingGuest: "",
    guests: [],
  };

  handleNameInput = (e) => {
    console.log(e.target.value);
    this.setState({
      guests: [{ name: e.target.value }],
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
