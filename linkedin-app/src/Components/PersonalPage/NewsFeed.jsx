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

        setPost(data);
      } else {
        console.log("error has occured");
      }
    } catch (error) {}
  };

  return (
    <>
    {
        posts.slice(0,50).map(post=> (
        <Card>
        <Card.Img variant="top" src="{post.user.image}"/>
        <Card.Body>
          <Card.Title>{post.user.name}</Card.Title>
          <Card.Title>{post.text}</Card.Title>
          <Card.Text>
          {post.user.title}<br/>
          {post.user.email}<br/>
          
                    
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

        ))
    }
    </>
  );
};
export default NewsFeed;
