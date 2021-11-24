/** @format */

import "./App.css";
import { Container } from "react-bootstrap";
import Myfooter from "./Components/Footer/Myfooter";
import MyNavbar from "./Components/NavBar/MyNavbar";
import NewsFeed from "./Components/PersonalPage/NewsFeed";
import PersonalPage from "./Components/PersonalPage/PersonalPage";
import PersonalExpr from "./Components/PersonalPage/PersonalExpr"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container>
      < MyNavbar/>
        <Routes>
          <Route path="/" element ={<PersonalPage/>} />
          <Route path="/profile"  element ={<PersonalPage/>} />
          <Route path="/profile/:id"  element ={<PersonalExpr/>} />
        </Routes>
        <NewsFeed  />
        <Myfooter/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
