import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Col,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";

export default class AddContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: {
        id: "",
        name: "",
        address: "",
        email: ""
      }
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleTextChange(e) {
    // store the name and value properties from the event in local variables
    const { name: fieldName, value: fieldValue } = e.target;
    const { contact } = this.state;
    const newContact = {
      // copy the existing object
      ...contact,
      id: Date.now(),
      // use ES6 computed properties to set the name: value pairs with the data from the event
      [fieldName]: fieldValue
    };
    this.setState({
      contact: newContact
    });
  }

  // check if a contact is valid - no empty strings,
  isContactValid(contact) {
    if (typeof contact !== "object") {
      return false;
    }

    for (let prop in contact) {
      return contact[prop].length < 3 ? false : true;
    }
  }

  // reset form after submit
  resetForm() {
    document.getElementById("addContactForm").reset();
  }

  // reset form and send the contact object to the App component
  handleClick(contact) {
    this.resetForm();
    this.props.onSave(contact);
  }

  render() {
    // store the contact and check if its valid
    const { contact } = this.state;
    const validContact = this.isContactValid(contact);

    return (
      <aside className="add-contact-form container-form">
        <h1 className="text-center">Create Contact</h1>
        <form
          className="form-horizontal"
          id="addContactForm"
          onReset={this.props.cancelHandler}
        >
          <FormGroup>
            <Col sm={3}>
              <ControlLabel htmlFor="name">Name</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl
                type="text"
                name="name"
                value={this.state.contact.name}
                placeholder="Name"
                id="name"
                required
                minLength="3"
                title={`Enter your full name`}
                onChange={e => this.handleTextChange(e)}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={3}>
              <ControlLabel htmlFor="address">Address</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl
                type="text"
                name="address"
                value={this.state.contact.address}
                placeholder="Address"
                id="address"
                required
                minLength="3"
                title={`Enter your full address`}
                onChange={e => this.handleTextChange(e)}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={3}>
              <ControlLabel htmlFor="email">Email</ControlLabel>
            </Col>
            <Col sm={8}>
              <FormControl
                type="email"
                name="email"
                value={this.state.contact.email}
                placeholder="Email"
                id="email"
                required
                minLength="3"
                title={`Enter your email address`}
                onChange={e => this.handleTextChange(e)}
              />
            </Col>
          </FormGroup>

          <FormGroup className="mt-small">
            <Col sm={4} smOffset={3}>
              <Button
                disabled={!validContact}
                onClick={validContact ? () => this.handleClick(contact) : null}
              >
                Submit
              </Button>
            </Col>
            <Col sm={4}>
              <Button type="reset" name="Cancel">
                Cancel
              </Button>
            </Col>
          </FormGroup>
        </form>
      </aside>
    );
  }
}

AddContact.propTypes = {
  onSave: PropTypes.func.isRequired,
  cancelHandler: PropTypes.func.isRequired
};
