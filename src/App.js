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
      currentContact: {},
      searchValue: ""
    };

    this.showCreateContactForm = this.showCreateContactForm.bind(this);
    this.hideCreateContactForm = this.hideCreateContactForm.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    // get contacts from localStorage
    const contacts = localStorage.getItem("contacts");
    if (localStorage.length > 0) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  handleOnSave(contact) {
    this.addContact(contact);
  }

  saveContacts() {
    // save contacts to localStorage
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  addContact(contact) {
    const { contacts, currentContact } = this.state;

    // if edit - replace the old Contact with the new contact
    if (this.state.editContactForm) {
      const contactToEdit = this.filterContact(
        contacts,
        Number(currentContact.id)
      );
      contacts.splice(contacts.indexOf(contactToEdit), 1, contact);
    } else {
      // if it is a new contact just add it
      contacts.push(contact);
    }
    this.setState({ contacts: contacts });
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

  filterContacts(nameValue, contacts) {
    return contacts.filter(contact =>
      contact["name"].toLowerCase().startsWith(nameValue.toLowerCase())
    );
  }

  handleSearch(searchValue) {
    this.setState({ searchValue: searchValue });
  }

  render() {
    const initialContact = {
      id: "",
      name: "",
      address: "",
      email: ""
    };
    const { contacts, searchValue } = this.state;

    return (
      <div>
        <Header title="Contact Manager" />
        <NavBar
          clickHandler={this.showCreateContactForm}
          handleSearch={this.handleSearch}
        />

        {/* toggle between CreateContact form and Contacts List  */}
        {!this.state.showContactForm ? (
          <Contacts
            displayContacts={
              searchValue ? (
                this.filterContacts(searchValue, contacts)
              ) : (
                contacts
              )
            }
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
