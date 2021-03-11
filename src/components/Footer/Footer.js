
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 className="title">GUIDE Astro</h1>
          </Col>
          <Col md="3">
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/contactus" tag={Link}>
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" tag={Link}>
                  About Us
                </NavLink>
              </NavItem>
              
              
            </Nav>
          </Col>
          <Col md="3">
            <h3 className="title">Visit us:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round "
                color="default"
                href=""
                id="tooltip622135962"
              >
                <img src={require("assets/img/Footer/git.png").default} />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Git Hub
              </UncontrolledTooltip>
              
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
