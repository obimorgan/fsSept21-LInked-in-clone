/** @format */

import "./App.css";
import { Container } from "react-bootstrap";
import Myfooter from "./Components/Footer/Myfooter";
import MyNavbar from "./Components/MyNavbar";
import PersonalPage from "./Components/PersonalPage/PersonalPage";

function App() {
  return (
    <>
      <div></div>
      <Container>
        <MyNavbar />
      </Container>
      <Container>
        <PersonalPage />
        <Myfooter />
      </Container>
    </>
  );
}

export default App;
