import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

export default function NoContactsFound() {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <div className="no-contacts">
            <div>
              <p>No contacts found.</p>
              <p>Add contact or review you search.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Grid>
  );
}
