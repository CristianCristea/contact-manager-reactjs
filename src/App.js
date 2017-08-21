import React, { Component } from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Contact Manager" />
        <AddContact />
      </div>
    );
  }
}

export default App;
