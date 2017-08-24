import React, { Component } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AddContact from "./containers/AddContact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addContact: false,
      editContact: false,
      contacts: []
    };

    this.showAddContactForm = this.showAddContactForm.bind(this);
    this.hideAddContactForm = this.hideAddContactForm.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
  }

  handleOnSave(contact) {
    this.addContact(contact);
  }

  addContact(contact) {
    // add the contact to the existing contacts
    // update the state
    const allContacts = this.state.contacts;
    allContacts.push(contact);
    this.setState({ contacts: allContacts });
  }

  deleteContact(contact) {}

  showAddContactForm() {
    this.setState({ addContact: true });
  }

  hideAddContactForm() {
    this.setState({ addContact: false });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Header title="Contact Manager" />
        <NavBar clickHandler={this.showAddContactForm} />
        {this.state.addContact
          ? <AddContact
              cancelHandler={this.hideAddContactForm}
              onSave={this.handleOnSave}
            />
          : null}
      </div>
    );
  }
}

export default App;

// TODO: render single contact, render contact list, implement edit, store to local storage, implement search
