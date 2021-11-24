import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Row,
  Col,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { ImHome3 } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import { IoBriefcase } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import  Navdropdown  from "./Navdropdown"
import { Link, useLocation } from 'react-router-dom'

const MyNavbar = () => {
      const location = useLocation()
      return(
  <div className="container">
  <Navbar sticky="top" bg="white" variant="light">
      <Row>
        <Col >
          <Navbar.Brand href="#home">
            <img
              src="assets/Linkedin_logo_initials.png"
              alt=""
              width="35"
              height="35"
            />
          </Navbar.Brand>
        </Col>
      </Row>
      <Row>
        <Col >
          <Form inline>
            <BsSearch className="searchicon" />
            <FormControl
            
              type="text"
              placeholder="Search"
              className="searchinput"
            />
          </Form>
        </Col>
      </Row>
      <Row>
        <Col >
          <Nav className="mr-auto">
            <div className="iconntext">
              {" "}
              <ImHome3 className="navicon" style={{ fontSize: "22px" }} />

              <Link to="/home">
                <div className={'nav-link' + (location.pathname === '/home' ? ' active' : '')}>Home</div>
              </Link>
            </div>
          </Nav>
        </Col>
      </Row>

      <Row>
        <Col >
          <div className="iconntext">
            <BsPeopleFill className="navicon" style={{ fontSize: "22px" }} />
            <Nav.Link href="#network"> Network</Nav.Link>{" "}
          </div>
        </Col>
      </Row>
      <Row>
        <Col >
          <div className="iconntext">
            <IoBriefcase className="navicon" style={{ fontSize: "22px" }} />
            <Nav.Link href="#jobs">Jobs</Nav.Link>
          </div>
        </Col>
        </Row>
        <Row>
        <Col>
          <div className="iconntext">
            <AiFillMessage className="navicon" style={{ fontSize: "22px" }} />
            <Nav.Link href="#messaging">Messaging</Nav.Link>
          </div>
        </Col>
        </Row>

        <Row>
        <Col >
          <div className="iconntext">
            <IoNotifications className="navicon" style={{ fontSize: "22px" }} />
            <Nav.Link href="#notification">Notification</Nav.Link>
          </div>
        </Col>
        </Row>
        <Row>
        <Col>
          <div className="iconntext">
            <FaUserCircle className="navicon" style={{ fontSize: "22px" }} />
            <Navdropdown/>
          </div>
        </Col>
        </Row>
        <Row>
        <Col >
          <div class="vl"></div>
        </Col>
        </Row>
        <Row>
        <Col >
          <div className="iconntext">
            <BsGrid3X3GapFill
              className="navicon"
              style={{ fontSize: "25px" }}
            />
            <NavDropdown title="Work" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Col>
        </Row>
        <Row>

        <Col >
          <div>
            <h6 className="h6text">Try premium for free</h6>
          </div>
        </Col>
      </Row>
  </Navbar>
    </div>
      )
}

export default MyNavbar;
