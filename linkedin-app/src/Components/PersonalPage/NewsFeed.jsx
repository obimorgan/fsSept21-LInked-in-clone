// import { fetchPosts } from "../../ApiCalls";
import { Container, Row, Col, Card, Button, Jumbotron } from "react-bootstrap";
import { useState, useEffect } from "react";
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { IoMdSend } from "react-icons/io";
const NewsFeed = () => {
  const [posts, setPost] = useState([]);

  useEffect(async () => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/", {
            method: "GET",
            headers:{

                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTljOWYyM2QzNzU4MDAwMTU0OWI5ZmYiLCJpYXQiOjE2Mzc2NjcyOTgsImV4cCI6MTYzODg3Njg5OH0.gf1qWhpzpZKM0aFa2UShaRr8Fj276lsI2YB6ZQFMVq0"
            }
        })
      console.log(response);

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setPost(data)
      } else {
        console.log("error has occured");
      }
    } catch (error) {}
  };

  return (
    <Container>
        <Row className=" justify-content-center">
            <Col className="col-8">
    {
         posts.slice(0, 10).map(post=>(
            <Jumbotron className="bg-light">
            <img src={post.user.image} className="user-img" alt="user-img" />
            <h3>{post.user.username}</h3>
            <p>
              {post.text}<br/>
              <strong>{post.user.title}</strong>
            </p>
            <p >Contact Info</p>
            <p className="emails text-primary">{post.user.email}</p>
           <hr/>
           <form action="" className="form-inline justify-content-center">
           <Button className="user-btns mx-2" variant=""><BiLike /> Like</Button>
           <Button className="user-btns mx-2" variant=""><FaRegCommentDots /> Comment</Button>
           <Button className="user-btns mx-2" variant=""><FiShare2 /> Share</Button>
           <Button className="user-btns mx-2" variant=""><IoMdSend /> Send</Button>
           </form>
          </Jumbotron>

        ))
    }
    </Col>
    </Row>
    </Container>
  );
};
export default NewsFeed;
