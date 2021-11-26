/** @format */

import "./App.css";
import { Row, Col } from "react-bootstrap";
import Myfooter from "./Components/Footer/Myfooter";
import MyNavbar from "./Components/NavBar/MyNavbar";
import NewsFeed from "./Components/HomePage/NewsFeed";
import PersonalPage from "./Components/PersonalPage/PersonalPage";
import PersonalExpr from "./Components/PersonalPage/PersonalExpr"
import ExperienceDetail from "./Components/ExperienceDetail/ExperienceDetail"
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
          <Route path="/" exact={true} element ={<PersonalPage/>} />
          <Route path="/notification"  element ={<ImgProfileUpload /> } />
          <Route path="/messaging"  element ={<ImgBgUpload /> } />
          <Route path="/profile" exact={true}  element ={<PersonalPage/>} />
          <Route path="/profile/:id" exact={true}  element ={<PersonalExpr/>} />
          <Route path="/profile/:id/:expId" exact={true} element ={<ExperienceDetail/>} />
          <Route path="/home" exact={true}  element ={<NewsFeed />} />
        </Routes>
        <Myfooter/>
     </Col> 
    </Row>
      </div>
    </BrowserRouter>
  );
}

export default App;
