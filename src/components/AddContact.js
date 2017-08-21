import React from "react";
import PropTypes from "prop-types";
import { Col, FormGroup, Button } from "react-bootstrap";
import FormInput from "./FormInput";

export default function AddContact() {
  return (
    <aside className="add-contact-form container-form">
      <h1 className="text-center">Create Contact</h1>
      <form className="form-horizontal">
        <FormInput
          labelName="Name"
          idName="name"
          typeName="text"
          requiredBool="required"
          minLength={3}
        />

        <FormInput
          labelName="Address"
          idName="address"
          typeName="text"
          requiredBool="required"
          minLength={10}
        />

        <FormInput
          labelName="Email"
          idName="email"
          typeName="email"
          requiredBool="required"
          minLength={6}
        />

        <FormGroup className="mt-small">
          <Col sm={4} smOffset={3}>
            <Button type="submit" bsStyle="default" className="btn-block">
              Submit
            </Button>
          </Col>
          <Col sm={4}>
            <Button type="reset" bsStyle="default" className="btn-block">
              Cancel
            </Button>
          </Col>
        </FormGroup>
      </form>
    </aside>
  );
}
