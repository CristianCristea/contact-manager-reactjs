import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col, Jumbotron } from "react-bootstrap";
import DefaultButton from "./DefaultButton";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Jumbotron>
          <Row>
            <Col xs={12} sm={6} md={6} className="text-center">
              <DefaultButton name="Add Contact" size="large" />
            </Col>
            <Col xs={12} sm={6} md={6} className="text-center">
              <input
                placeholder="Search"
                name="search_contact"
                type="search"
                required={null}
              />
            </Col>
          </Row>
        </Jumbotron>
      </Grid>
    );
  }
}
