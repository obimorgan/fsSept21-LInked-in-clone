import React from "react";
import { NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

class Navdropdown extends React.Component {
  render() {
    return (
      <div>
        <NavDropdown title="Me" id="basic-nav-dropdown" >
          <FaUserCircle className="navicon" style={{ fontSize: "80px" }} />

          <NavDropdown.Item className="navdropdown">
            
            <Link to="/">
                  <div
                    className={
                      "nav-link-profile-btn" +
                      (useLocation.pathname === "/" ? " active" : "")
                    }
                  >
                    view profile
                  </div>
                </Link>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Account</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Manage</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Sign out</NavDropdown.Item>
        </NavDropdown>
      </div>
    );
  }
}

export default Navdropdown;
