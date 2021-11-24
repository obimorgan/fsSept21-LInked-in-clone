import { fetchPosts } from "../../ApiCalls";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
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
        <Row>
            <Col md={7}>
    {
         posts.slice(0, 10).map(post=>(
        <Card style={{ width: '10rem' }}>
        <Card.Img variant="top"  className="rounded-circle" src={post.user.image}/>
        <Card.Body>
          <Card.Title>{post.user.username}</Card.Title>
          <Card.Text>
            {post.user.bio}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

        ))
    }
    </Col>
    </Row>
    </Container>
  );
};
export default NewsFeed;
