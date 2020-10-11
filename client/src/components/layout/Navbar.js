import React from "react";
import { Navbar, Nav, Button } from 'react-bootstrap'

class XNavbar extends React.Component {
  render() {
    return (
      <Navbar inverse fluid style={{background: "blue"}}>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{background: "blue", padding: 10}}>
            <Nav.Link href="/" style={{
                fontFamily: "monospace",
              }} className="col s5 brand-logo center white-text">
              Survey
            </Nav.Link>
            <Button style={{
                  width: "120px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  background: "white",
                  color: "black",
                  marginLeft: 10,
                  float: "right",
                }} href="/login">Login</Button>
            <Button class="pull-right" style={{
                  width: "120px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  background: "white",
                  color: "black",
                  marginLeft: 10,
                  float: "right",
                }} href="/register">Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default XNavbar;
