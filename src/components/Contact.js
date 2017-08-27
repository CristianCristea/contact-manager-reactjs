import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

export default function Contact({
  id,
  name,
  address,
  email,
  onEdit,
  onDelete
}) {
  return (
    <Col xs={11} sm={4} md={3} className="contact-block" data-id={id}>
      <h3 className="name">
        {name}
      </h3>
      <h5 className="heading-small">Email</h5>
      <p className="email">
        {email}
      </p>
      <h5 className="heading-small">Address</h5>
      <p className="address">
        {address}
      </p>
      <div className="contact-buttons mt-small">
        <button className="edit btn btn-default text-center" onClick={onEdit}>
          Edit
        </button>
        <button
          className="delete btn btn-default text-center"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </Col>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
};
