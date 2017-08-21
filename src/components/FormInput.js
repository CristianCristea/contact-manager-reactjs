import React from "react";
import PropTypes from "prop-types";
import { Col, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default function FormInput({ label, type, id, required, minLength }) {
  return (
    <FormGroup>
      <Col sm={3}>
        <ControlLabel htmlFor={id}>
          {label}
        </ControlLabel>
      </Col>
      <Col sm={8}>
        <FormControl
          type={type}
          placeholder={label}
          id={id}
          required={required}
          minLength="3"
          title={`Minimum ${minLength} letters`}
        />
      </Col>
    </FormGroup>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  minLength: PropTypes.number.isRequired
};
