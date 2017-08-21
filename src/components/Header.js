import React from "react";
import PropTypes from "prop-types";
import { Grid, Row } from "react-bootstrap";

export default function Header({ title }) {
  return (
    <header>
      <Grid>
        <Row>
          <h1 className="text-center">
            {title}
          </h1>
        </Row>
      </Grid>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};
