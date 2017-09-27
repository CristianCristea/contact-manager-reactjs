import React from "react";
import PropTypes from "prop-types";
import NoContactsFound from "./NoContactsFound";
import Contact from "./Contact";
import { Grid, Row } from "react-bootstrap";

export default function Contacts({
  displayContacts,
  editContact,
  deleteContact
}) {
  return displayContacts.length > 0 ? (
    <Grid>
      <Row>
        <ul id="contacts">
          {displayContacts.map(contact => {
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
  ) : (
    <NoContactsFound />
  );
}

Contacts.propTypes = {
  displayContacts: PropTypes.array.isRequired
};
