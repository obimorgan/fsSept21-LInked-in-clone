import { fetchPosts } from "../../ApiCalls";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import { useState, useEffect } from "react";
const NewsFeed = () => {
  const [posts, setPost] = useState([]);

  useEffect(async() => {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTljOWYyM2QzNzU4MDAwMTU0OWI5ZmYiLCJpYXQiOjE2Mzc2NjcyOTgsImV4cCI6MTYzODg3Njg5OH0.gf1qWhpzpZKM0aFa2UShaRr8Fj276lsI2YB6ZQFMVq0"
          }

      })
      setPost(response[0])
      console.log(setPost);
       
  }, []);
  return (
      <>
          {
              posts && posts.map(post => {
                  <Col md={12}>
                    <Card key={post.user._id}>
                    <h1>asdasdgg</h1>
                    <Card.Img variant="top" src={post.user.image} />
                    <Card.Body>
                        <Card.Title>{post.username}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>

              })
          }
    </>
  );
};
export default NewsFeed;
