import React from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";
import { Grid, Row } from "react-bootstrap";

export default function Contacts({ contacts, editContact, deleteContact }) {
  return (
    <Grid>
      <Row>
        <ul id="contacts">
          {contacts.map(contact => {
            return (
              <li key={contact.id}>
                <Contact
                  onEdit={editContact}
                  onDelete={deleteContact}
                  {...contact}
                />
              </li>
            );
          })}
        </ul>
      </Row>
    </Grid>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired
};
