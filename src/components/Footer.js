import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Grid>
        <Row>
          <Col
            xs={6}
            xsOffset={3}
            sm={6}
            smOffset={3}
            xs={6}
            xsOffset={3}
            className="text-center"
          >
            <p>
              Developed by{" "}
              <a href="http://cristiancristea.com">Cristian Cristea</a>
            </p>
          </Col>
        </Row>
      </Grid>
    </footer>
  );
}
