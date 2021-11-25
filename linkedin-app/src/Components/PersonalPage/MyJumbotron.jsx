import { GrEdit } from "react-icons/gr";
import { ImLinkedin } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { Image, Button, Jumbotron, Modal } from "react-bootstrap";
import logo from '../../Assets/cover2.jpg';
import { useState } from 'react'


const MyJumbotron = ({info}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose} className="userjumbo">
        <Modal.Header closeButton>
          <Modal.Title>I'm a User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Contact Info
            <p className="text-muted"><ImLinkedin /> Your Profile<br /> <span className="ml-4 text-primary">linkedin.com/in/user-name-3a83b11a4</span></p>
          <p className="text-muted"><BsFillTelephoneFill /> Phone<br /> <span className="ml-4 text-muted">+48572215555(Mobile)</span></p>
          <p className="text-muted"><ImLocation /> Address<br /> <span className="ml-4 text-primary">Warsaw, Poland</span></p>
          <p className="text-muted"><AiOutlineMail /> Email<br /> <span className="ml-4 text-primary">james1999007@gmail.com</span></p>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          <Button variant="primary" onClick={handleClose}>
            Edit
            </Button>
        </Modal.Footer>
      </Modal>
      <Jumbotron className="mt-5 border border-muted ">
        <div className="second-edit-btn">
          <Button variant="light" className="edit-btn2 rounded-pill"><GrEdit /></Button>
        </div>
        <div className="jumbtrn-cover">
          <Image className="cover-img" src={logo} alt="image-back" />
          <Image key={info.id} className="cover-img2" src={info.image} alt="image-back" />
          <Button variant="" className="edit-btn1"><GrEdit /></Button>
        </div>
        <div className="ml-3">
          <h1>{info.name} {info.surname}</h1>
          <p>

          </p>
          <form className="form-inline" action="">
            <p className="text-muted">
              <span className="text-primary contact-link" onClick={handleShow}>{info.area}</span>
            </p>
          </form>
          <p className="text-primary">
            100 connections
          </p>
          <form className="form-inline main-btns" action="">
            <Button variant="primary" className="btn1 rounded-pill">Open to</Button>
            <Button variant="text-" className="ml-1 btn2 border-dark rounded-pill">Add Section</Button>
            <Button variant="text-" className="ml-1 btn3 border-dark rounded-pill">More</Button>
          </form>
        </div>
      </Jumbotron>
    </>
  );
};
export default MyJumbotron;
