/** @format */

import "./App.css";
import { Container } from "react-bootstrap";
import Myfooter from "./Components/Footer/Myfooter";
import MyNavbar from "./Components/MyNavbar";
import PersonalPage from "./Components/PersonalPage/PersonalPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container>
      < MyNavbar/>
        <Routes>
          <Route path="/personal" element ={<PersonalPage/>} />
        </Routes>
        <Myfooter/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
