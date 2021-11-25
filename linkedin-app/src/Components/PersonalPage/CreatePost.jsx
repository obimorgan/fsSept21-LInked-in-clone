import { Jumbotron, Button, Form, Modal } from "react-bootstrap";
import img from "../../Assets/userImg.png";
import { MdAddToPhotos } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";
import { GrArticle } from "react-icons/gr";
import { BiWorld } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
const CreatePost = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [post, setPost] = useState({
    text: "",
  });
  const handleInput =(fieldName, value)=> {
    setPost({
      ...post,
      [fieldName] : value
    })
  }
  const postSmth = async () => {
    alert("hello");
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify(post),
          headers: {
            "Content-Type": "application/json",
            "Authorization":
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTljOWYyM2QzNzU4MDAwMTU0OWI5ZmYiLCJpYXQiOjE2Mzc4NTQyNTUsImV4cCI6MTYzOTA2Mzg1NX0._gyDpYS0U-qJkLEesr8w71R4VPnITeZbPi_FCWHey_4",
          },
        }
      );
      if (response.ok) {
        alert("post is added");
      } else {
        console.log("Error has occured");
      }
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="text-muted">Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" className="form-inline justify-content-start">
            <img
              src={img}
              alt="image"
              className="post-user-img rounded-circle"
            />
            <p className="user-name">I am a user</p>
            <Button
              variant=""
              className="anyone-seen-btn rounded-pill text-left text-muted mt-4"
              onClick={handleShow}
            >
              {" "}
              <BiWorld />
              Anyone
              <IoMdArrowDropdown />
            </Button>
          </form>
          
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="text-muted">
              What do you want to talk about?
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={8}
              value={post.text}
              onChange={(e) => {
                handleInput('text',   e.target.value);
              }}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="rounded-pill" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" className="rounded-pill" onClick={postSmth}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
      <Jumbotron className="bg-light border border-muted mt-5 position-relative">
        <form action="" className="form-inline justify-content-start">
          <img src={img} alt="image" className="user-img rounded-circle" />
          <Button
            variant=""
            className="user-btn rounded-pill text-left text-muted"
            onClick={handleShow}
          >
            Start a post
          </Button>
        </form>
        <form action="" className="form-inline justify-content-center ">
          <Button variant="" className="user-btns1 ml-5 rounded-pill">
            <MdAddToPhotos /> Photo
          </Button>
          <Button variant="" className="user-btns1 ml-5 rounded-pill">
            <MdOutlineVideoLibrary /> Video
          </Button>
          <Button variant="" className="user-btns1 ml-5 rounded-pill">
            <RiCalendarEventLine /> Event
          </Button>
          <Button variant="" className="user-btns1 ml-5 rounded-pill">
            <GrArticle /> Write article
          </Button>
        </form>
      </Jumbotron>
    </>
  );
};
export default CreatePost;
