import React, { Component } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Contacts from "./components/Contacts";
import CreateContact from "./containers/CreateContact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContactForm: false,
      editContactForm: false,
      contacts: [],
      currentContact: {}
    };

    this.showCreateContactForm = this.showCreateContactForm.bind(this);
    this.hideCreateContactForm = this.hideCreateContactForm.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
  }

  componentDidMount() {
    // get contacts from localStorage
    const contacts = localStorage.getItem("contacts");
    this.setState({ contacts: JSON.parse(contacts) });
  }

  handleOnSave(contact) {
    this.addContact(contact);
  }

  saveContacts() {
    // save contacts to localStorage
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  addContact(contact) {
    const allContacts = this.state.contacts;
    const { currentContact } = this.state;

    // if edit - replace the old Contact with the new contact
    if (this.state.editContactForm) {
      const contactToEdit = this.filterContact(
        allContacts,
        Number(currentContact.id)
      );
      allContacts.splice(allContacts.indexOf(contactToEdit), 1, contact);
    } else {
      // if it is a new contact just add it
      allContacts.push(contact);
    }
    this.setState({ contacts: allContacts });
    this.hideCreateContactForm();
    this.saveContacts();
  }

  // filter object(contact) from an array of objects(contacts)
  filterContact(list, contactId) {
    return list.filter(contact => contact.id === contactId)[0];
  }

  editContact(e) {
    // get the contact id
    const contactId = e.target
      .closest(".contact-block")
      .getAttribute("data-id");
    // filter contact
    const currentContact = this.filterContact(
      this.state.contacts,
      Number(contactId)
    );
    this.setState({
      currentContact: currentContact,
      editContactForm: true
    });
    // display CreateContact form
    this.showCreateContactForm();
  }

  deleteContact(e) {
    // get the contact id
    const contactId = e.target
      .closest(".contact-block")
      .getAttribute("data-id");
    // filter contact
    const contacts = this.state.contacts;
    contacts.splice(
      contacts.indexOf(this.filterContact(contacts, Number(contactId))),
      1
    );

    this.setState({ contacts: contacts });
    this.hideCreateContactForm();
    // update localStorage
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }

  showCreateContactForm() {
    this.setState({
      showContactForm: true
    });
  }

  hideCreateContactForm() {
    this.setState({
      showContactForm: false,
      editContactForm: false
    });
  }

  render() {
    const initialContact = {
      id: "",
      name: "",
      address: "",
      email: ""
    };

    return (
      <div>
        <Header title="Contact Manager" />
        <NavBar clickHandler={this.showCreateContactForm} />

        {/* toggle between CreateContact form and Contacts List  */}
        {!this.state.showContactForm ? (
          <Contacts
            contacts={this.state.contacts}
            editContact={e => this.editContact(e)}
            deleteContact={e => this.deleteContact(e)}
          />
        ) : (
          <CreateContact
            currentContact={
              this.state.editContactForm ? (
                this.state.currentContact
              ) : (
                initialContact
              )
            }
            cancelHandler={this.hideCreateContactForm}
            onSave={this.handleOnSave}
            edit={this.state.editContactForm}
          />
        )}
      </div>
    );
  }
}

export default App;

// TODO: implement edit, store to local storage, implement search
