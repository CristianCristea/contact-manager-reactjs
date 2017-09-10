import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Grid, Row, Col, Jumbotron, Button } from "react-bootstrap";

export default class NavBar extends Component {
  constructor(props) {
    super();
    this.state = { searchValue: "" };
  }

  onSearch(e) {
    this.setState({ searchValue: e.target.value }, () =>
      this.props.handleSearch(this.state.searchValue)
    );
  }

  render() {
    return (
      <Grid>
        <Jumbotron>
          <Row>
            <Col xs={12} sm={6} md={6} className="text-center">
              <Button onClick={this.props.clickHandler} bsSize="large">
                Add Contact
              </Button>
            </Col>
            <Col xs={12} sm={6} md={6} className="text-center">
              <input
                placeholder="Search"
                name="search_contact"
                value={this.state.searchValue}
                type="search"
                onChange={e => this.onSearch(e)}
              />
            </Col>
          </Row>
        </Jumbotron>
      </Grid>
    );
  }
}
