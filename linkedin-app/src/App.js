/** @format */

import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Myfooter from "./Components/Footer/Myfooter";
import MyNavbar from "./Components/NavBar/MyNavbar";
import NewsFeed from "./Components/PersonalPage/NewsFeed";
import PersonalPage from "./Components/PersonalPage/PersonalPage";
import PersonalExpr from "./Components/PersonalPage/PersonalExpr"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImgProfileUpload from "./Components/PersonalPage/ImgProfileUpload";
import ImgBgUpload from "./Components/PersonalPage/ImgBgUpload";

function App() {
  return (
    <BrowserRouter>
    <div className="App-header">
      < MyNavbar/>
    <Row className="justify-content-center">
      <Col md={7}>
        <Routes>
          <Route path="/" element ={<PersonalPage/>} />
          <Route path="/profile"  element ={<PersonalPage/>} />
          <Route path="/profile/:id"  element ={<PersonalExpr/>} />
          <Route path="/home"  element ={<NewsFeed />} />
          <Route path="/notification"  element ={<ImgProfileUpload /> } />
          <Route path="/messaging"  element ={<ImgBgUpload /> } />
         
        </Routes>
        <Myfooter/>
     </Col> 
    </Row>
      </div>
    </BrowserRouter>
  );
}

export default App;
