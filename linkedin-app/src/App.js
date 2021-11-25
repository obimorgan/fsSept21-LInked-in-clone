/** @format */

import "./App.css";
import { Container } from "react-bootstrap";
import Myfooter from "./Components/Footer/Myfooter";
import MyNavbar from "./Components/NavBar/MyNavbar";
import NewsFeed from "./Components/HomePage/NewsFeed";
import PersonalPage from "./Components/PersonalPage/PersonalPage";
import PersonalExpr from "./Components/PersonalPage/PersonalExpr"
import ExperienceDetail from "./Components/ExperienceDetail/ExperienceDetail"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container>
      < MyNavbar/>
        <Routes>
          <Route path="/" exact={true} element ={<PersonalPage/>} />
          <Route path="/profile" exact={true}  element ={<PersonalPage/>} />
          <Route path="/profile/:id" exact={true}  element ={<PersonalExpr/>} />
          <Route path="/profile/:id/:expId" exact={true} element ={<ExperienceDetail/>} />
          <Route path="/home" exact={true}  element ={<NewsFeed />} />
        </Routes>
        <Myfooter/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
