/** @format */

import "./App.css";
import { Container } from "react-bootstrap";
import Myfooter from "./Components/Footer/Myfooter";
import MyNavbar from "./Components/NavBar/MyNavbar";
import NewsFeed from "./Components/HomePage/NewsFeed";
import PersonalPage from "./Components/PersonalPage/PersonalPage";
import PersonalExpr from "./Components/PersonalPage/PersonalExpr"
import ExperienceDetail from "./Components/PersonalPage/PersonalExpr"
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
          <Route path="/profile/details/experience/:expId"  element ={<ExperienceDetail/>} />
          <Route path="/home"  element ={<NewsFeed />} />
        </Routes>
        <Myfooter/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
