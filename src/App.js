import React, { Component } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Contacts from "./components/Contacts";
import AddContact from "./containers/AddContact";
import { Grid, Row } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContactForm: false,
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
    this.hideAddContactForm();
  }

  filterContact(list, contactId) {}
  editContact(contact) {
    // get the contact id
    // filter contact
    // display contact form with pre-populated fields
    // update the state
  }

  deleteContact(contact) {}

  showAddContactForm() {
    this.setState({ showContactForm: true });
  }

  hideAddContactForm() {
    this.setState({ showContactForm: false });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Header title="Contact Manager" />
        <NavBar clickHandler={this.showAddContactForm} />

        {/* toggle between AddContact form and Contacts List  */}
        {!this.state.showContactForm
          ? <Contacts
              contacts={this.state.contacts}
              editContact={() => this.editContact(contact)}
            />
          : <AddContact
              cancelHandler={this.hideAddContactForm}
              onSave={this.handleOnSave}
            />}
      </div>
    );
  }
}

export default App;

// TODO: implement edit, store to local storage, implement search
