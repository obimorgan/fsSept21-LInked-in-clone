import { GrEdit } from "react-icons/gr";
import { Row, Col, Image,  Button, Jumbotron} from "react-bootstrap";
import logo from './backImage.png';
import logo2 from './userImg2.jpg';
    const MyJumbotron = () => {
  return (
    <Row>
      <Col md={9}>
        <Jumbotron className="mt-5">
          <div className="jumbtrn-cover">
          <Button variant="" className="edit-btn2"><GrEdit /></Button>
          <Image className="cover-img" src={logo} alt="image-back" />
          <Image className="cover-img2" src={logo2} alt="image-back" />
          <Button variant="" className="edit-btn"><GrEdit /></Button>
          </div>
          <h1>I'm A User</h1>
          <p>
            Valunteer Web Developer - LT Student
          </p>
          <p className="text-muted">
          Warsaw, Mazowieckie, Poland.  <span className="text-primary">Contact info</span>
          </p>
          <p className="text-primary">
            100 connections
          </p>
          <form className="form-inline" action="">
          <Button variant="primary" className="btn1 rounded-pill">Open to</Button>
          <Button variant="text-" className="ml-1 btn2 border-dark rounded-pill">Add Section</Button>
          <Button variant="text-" className="ml-1 btn3 border-dark rounded-pill">More</Button>
          </form>
        </Jumbotron>
      </Col>
    </Row>
  );
};
export default MyJumbotron;
