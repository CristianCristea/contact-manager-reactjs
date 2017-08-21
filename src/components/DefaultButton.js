import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export default function DefaultButton({ type, name, size }) {
  return (
    <Button type={type} bsStyle="default" className="btn-block" bsSize={size}>
      {name}
    </Button>
  );
}

DefaultButton.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  btnSize: PropTypes.string
};

DefaultButton.default = {
  type: null,
  bsSize: "normal"
};
