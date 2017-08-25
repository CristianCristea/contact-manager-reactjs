import React from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";
import { Grid, Row } from "react-bootstrap";

export default function Contacts({ contacts, editContact }) {
  return (
    <Grid>
      <Row>
        <ul id="contacts">
          {contacts.map(contact => {
            return (
              <li key={contact.id}>
                <Contact clickHandler={editContact} {...contact} />
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
