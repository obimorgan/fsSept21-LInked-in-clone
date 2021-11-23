
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Row,
  Col,
  NavDropdown,
} from "react-bootstrap";



import { ImHome3 } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import { IoBriefcase } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

const MyNavbar = () => (

  <Navbar sticky="top" bg="white" variant="light">


    <div className="container">
      <Navbar.Brand href="#home">
        <img
          src="assets/Linkedin_logo_initials.png"
          alt=""
          width="38"
          height="38"
        />
      </Navbar.Brand>
      <Form inline>
      <BsSearch className="searchicon"/>
        <FormControl type="text" placeholder="Search" className="searchinput" />
      </Form>
      <Nav className="mr-auto">
        <div className="iconntext">
          {" "}
          <ImHome3 style={{ fontSize: "25px" }} />
          <Nav.Link href="#home">Home</Nav.Link>
        </div>
        <div className="iconntext">
          <BsPeopleFill className="navicon" style={{ fontSize: "25px" }} />
          <Nav.Link href="#network"> Network</Nav.Link>{" "}
        </div>
        <div className="iconntext">
          <IoBriefcase className="navicon" style={{ fontSize: "25px" }} />
          <Nav.Link href="#jobs">Jobs</Nav.Link>
        </div>
        <div className="iconntext">
          <AiFillMessage className="navicon" style={{ fontSize: "25px" }} />
          <Nav.Link href="#messaging">Messaging</Nav.Link>
        </div>
        <div className="iconntext">
          <IoNotifications className="navicon" style={{ fontSize: "25px" }} />
          <Nav.Link href="#notification">Notification</Nav.Link>
        </div>

        <div className="iconntext">
          <FaUserCircle className="navicon" style={{ fontSize: "25px" }} />
          <NavDropdown title="Me" id="basic-nav-dropdown">
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
        <div class="vl"></div>
        <div  className="iconntext">
          <BsGrid3X3GapFill className="navicon" style={{ fontSize: "25px" }} />
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
        <div>
          <h6 className="h6text">Try premium for free</h6>
        </div>
      </Nav>
    </div>
  </Navbar>
);

export default MyNavbar;
