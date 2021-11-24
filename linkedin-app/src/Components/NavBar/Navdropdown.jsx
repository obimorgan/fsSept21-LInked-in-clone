import React from "react";
import { NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FaUserCircle } from "react-icons/fa";

class Navdropdown extends React.Component {
  render() {
    return (
      <div>
        <NavDropdown title="Me" id="basic-nav-dropdown">
          <FaUserCircle className="navicon" style={{ fontSize: "80px" }} />

          <NavDropdown.Item href="#">
            <button className="profilebtn">Profile</button>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </div>
    );
  }
}

export default Navdropdown;
