import React from "react";
import PropTypes from "prop-types";
import { Col, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default function FormInput({
  labelName,
  typeName,
  idName,
  requiredBool,
  minLength
}) {
  return (
    <FormGroup>
      <Col sm={3}>
        <ControlLabel htmlFor={idName}>
          {labelName}
        </ControlLabel>
      </Col>
      <Col sm={8}>
        <FormControl
          type={typeName}
          placeholder={labelName}
          id={idName}
          required={requiredBool}
          minLength="3"
          title={`Minimum ${minLength} letters`}
        />
      </Col>
    </FormGroup>
  );
}
