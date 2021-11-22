import { Navbar, Nav, Form, FormControl, Row, Col, Container} from "react-bootstrap";
import { ImHome3 } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import { IoBriefcase } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";

const MyNavbar = () => (
  <Container>
  <Row>
    <Col md={12}>
  <Navbar sticky="top" bg="white" variant="light" >
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
        <FormControl  type="text" placeholder="Search" className="mr-sm-5" />
      </Form>
      <Nav className="mr-auto">
        <div>
          <ImHome3 style={{ fontSize: "25px" }} />
          <Nav.Link href="#home">Home</Nav.Link>
        </div>
        <div>
          <BsPeopleFill style={{ fontSize: "25px" }} />
          <Nav.Link href="#network">Network</Nav.Link>
        </div>
        <div>
          <IoBriefcase style={{ fontSize: "25px" }} />
          <Nav.Link href="#jobs">Jobs</Nav.Link>
        </div>
        <div>
          <AiFillMessage style={{ fontSize: "25px" }} />
          <Nav.Link href="#messaging">messaging</Nav.Link>
        </div>
        <div>
          <IoNotifications style={{ fontSize: "25px" }} />
          <Nav.Link href="#notification">notification</Nav.Link>
        </div>

        <div>
          <FaUserCircle style={{ fontSize: "25px" }} />
          <Nav.Link href="#notification">me </Nav.Link>
        </div>
        <div class="vl"></div>
        <div class="work">
          <BsGrid3X3GapFill style={{ fontSize: "25px" }} />
          <Nav.Link href="#notification">work</Nav.Link>
        </div>
        <div>
          <h6 className="h6text">Try premium for free</h6>
        </div>
      </Nav>
    </div>
  </Navbar>
  </Col>
  </Row>
  </Container>
);

export default MyNavbar;
