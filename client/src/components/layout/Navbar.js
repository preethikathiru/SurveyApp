import React from "react";
import { Navbar, Nav, Button } from 'react-bootstrap'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class XNavbar extends React.Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <Navbar style={{background: "rgb(56, 165, 216)"}}>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{background: "rgb(56, 165, 216)", padding: 10}}>
            <Nav.Link href="/" style={{
                fontFamily: "monospace",
              }} className="col s5 brand-logo center white-text">
              Survey
            </Nav.Link>
            {(localStorage.jwtToken)? <Button style={{
                  width: "120px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  background: "white",
                  color: "black",
                  marginLeft: 10,
                  float: "right",
                }} onClick={this.onLogoutClick} >Logout</Button> : 
                <Button style={{
                  width: "120px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  background: "white",
                  color: "black",
                  marginLeft: 10,
                  float: "right",
                }} href="/login"> Login </Button> 
              }
            {(localStorage.jwtToken)? <Button style={{
                  width: "120px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  background: "white",
                  color: "black",
                  marginLeft: 10,
                  float: "right",
                }} href="/form">Form</Button> : 
                <Button style={{
                  width: "120px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  background: "white",
                  color: "black",
                  marginLeft: 10,
                  float: "right",
                }} href="/register">Register</Button>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

XNavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(XNavbar);

// export default XNavbar;
