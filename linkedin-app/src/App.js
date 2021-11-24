/** @format */

import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Myfooter from "./Components/Footer/Myfooter";
import MyNavbar from "./Components/NavBar/MyNavbar";
import NewsFeed from "./Components/PersonalPage/NewsFeed";
import PersonalPage from "./Components/PersonalPage/PersonalPage";
import PersonalExpr from "./Components/PersonalPage/PersonalExpr"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App-header">
    <Row className="justify-content-center">
      <Col md={7}>
    <BrowserRouter>
      < MyNavbar/>
        <Routes>
          <Route path="/" element ={<PersonalPage/>} />
          <Route path="/profile"  element ={<PersonalPage/>} />
          <Route path="/profile/:id"  element ={<PersonalExpr/>} />
          <Route path="/home"  element ={<NewsFeed />} />
        </Routes>
        <Myfooter/>
    </BrowserRouter>
     </Col> 
    </Row>
      </div>
  );
}

export default App;
