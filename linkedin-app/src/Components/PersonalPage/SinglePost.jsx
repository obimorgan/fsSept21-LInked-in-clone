import { Button, Jumbotron, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { IoMdSend } from "react-icons/io";
import { GrEdit } from "react-icons/gr";

const SinglePost = ({ post }) => {
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const [text, setText] =useState(post.text)
  
  const updatePost = async() => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + post._id,
        {
          method: "PUT",
          body: JSON.stringify({text}),
          headers: {
            "Content-Type": "application/json",
            "Authorization":
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTljOWYyM2QzNzU4MDAwMTU0OWI5ZmYiLCJpYXQiOjE2Mzc5MjM5MTgsImV4cCI6MTYzOTEzMzUxOH0.33s9YKpvuar5K-gBELToRiix85OjS-TqkNpP5NUNcto",
          },
        }
      );
      if (res.ok) {
        alert("post is updated");
      } else {
        console.log("Error has occured");
      }
    } catch (e) {
      console.log("error", e);
    }
  //  console.log({text:text})
  }
  const deletePost = async () => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + post._id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization":
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTljOWYyM2QzNzU4MDAwMTU0OWI5ZmYiLCJpYXQiOjE2Mzc5MjM5MTgsImV4cCI6MTYzOTEzMzUxOH0.33s9YKpvuar5K-gBELToRiix85OjS-TqkNpP5NUNcto",
          },
        }
      );
      if (res.ok) {
        alert("post is deleted");
      } else {
        console.log("Error has occured");
      }
    } catch (e) {
      console.log("error", e);
    }
  };
  return (
    <>
      <Jumbotron className="bg-light border border-muted">
        <img src={post.user.image} className="user-img" alt="user-img" />
        <h3>{post.user.username}</h3>
        <p>
          {post.text}
          <br />
          <strong>{post.user.title}</strong>
        </p>
        {post.image &&
        <img src={post.image} style={{width:"100%"}} />
        }
        <p>Contact Info</p>
        <p className="emails text-primary">{post.user.email}</p>
        <Button className="edit-btn mx-2 rounded-pill" variant="success" onClick={() => setShow(true)}>
            <GrEdit /> Edit
          </Button>
        <hr />
        <form action="" className="form-inline justify-content-center">
          <Button className="user-btns mx-2 rounded-pill" variant="">
            <BiLike /> Like
          </Button>
          <Button className="user-btns mx-2 rounded-pill" variant="">
            <FaRegCommentDots /> Comment
          </Button>
          <Button
            className="user-btns mx-2 rounded-pill"
            variant=""
            
          >
            <FiShare2 /> Share
          </Button>
          <Button
            className="user-btns mx-2 rounded-pill"
            variant=""
            
          >
            <IoMdSend /> Send
          </Button>
        </form>
      </Jumbotron>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Post Area</Form.Label>
            <Form.Control as="textarea" rows={3} value={text} onChange={(e)=>setText(e.target.value)} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button className="mr-auto rounded-pill" variant="danger"onClick={deletePost}>Delete</Button>
          <Button variant="success" className="rounded-pill" onClick={updatePost}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SinglePost;
