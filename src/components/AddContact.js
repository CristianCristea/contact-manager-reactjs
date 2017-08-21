import React from "react";
import PropTypes from "prop-types";
import { Col, FormGroup } from "react-bootstrap";
import FormInput from "./FormInput";
import DefaultButton from "./DefaultButton";

export default function AddContact({ saveSubmit, cancelSubmit }) {
  return (
    <aside className="add-contact-form container-form">
      <h1 className="text-center">Create Contact</h1>
      <form
        className="form-horizontal"
        onSubmit={saveSubmit}
        onReset={cancelSubmit}
      >
        <FormInput
          label="Name"
          id="name"
          type="text"
          required={true}
          minLength={3}
        />

        <FormInput
          label="Address"
          id="address"
          type="text"
          required={true}
          minLength={10}
        />

        <FormInput
          label="Email"
          id="email"
          type="email"
          required={true}
          minLength={6}
        />

        <FormGroup className="mt-small">
          <Col sm={4} smOffset={3}>
            <DefaultButton type="submit" name="Submit" />
          </Col>
          <Col sm={4}>
            <DefaultButton type="reset" name="Cancel" />
          </Col>
        </FormGroup>
      </form>
    </aside>
  );
}

AddContact.propTypes = {
  saveSubmit: PropTypes.func.isRequired,
  cancelSubmit: PropTypes.func.isRequired
};
