// import { fetchPosts } from "../../ApiCalls";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import CreatePost from "./CreatePost";
import SinglePost from "../PersonalPage/SinglePost";
import HomePageLeftSideBar from "../Sidebar/HomePageLeftSideBar"
import {fetchPersonalProfileInfo} from "../../ApiCalls"

const NewsFeed = () => {
  const [userInfo, setUserInfo] = useState({})
  const [posts, setPost] = useState([]);

  useEffect(async () => {
    fetchPost();
    fetchPersonalProfileInfo('me').then((res) => setUserInfo(res))
  }, []);

  const fetchPost = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTljOWYyM2QzNzU4MDAwMTU0OWI5ZmYiLCJpYXQiOjE2Mzc5MjM5MTgsImV4cCI6MTYzOTEzMzUxOH0.33s9YKpvuar5K-gBELToRiix85OjS-TqkNpP5NUNcto",
          },
        }
      );
      console.log(response);

      if (response.ok) {
        let data = await response.json();
        setPost(data.reverse());
      } else {
        console.log("error has occured");
      }
    } catch (error) { }
  };

  return (
    <Row className=" justify-content-center">
      <Col className="col-3 mt-2 px-0">
        <HomePageLeftSideBar userInfo={userInfo}/>
      </Col>
      <Col className="col-8 mt-2">
        <CreatePost />
        {posts.slice(1, 20).map((post) => (
          <>
            <SinglePost post={post} />
           
          </>
        ))}
      </Col>
    </Row>
  );
};
export default NewsFeed;
