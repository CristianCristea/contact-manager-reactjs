import React, { Component } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AddContact from "./components/AddContact";

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Contact Manager" />
        <NavBar />
        <AddContact />
      </div>
    );
  }
}

export default App;
