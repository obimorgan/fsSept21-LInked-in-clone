/** @format */

import "./App.css";
import { Container } from "react-bootstrap";
import Myfooter from "./Components/Footer/Myfooter";
import MyNavbar from "./Components/MyNavbar";
// import MyJumbotron from "./Components/MyJumbotron";
import MySidebar from "./Components/Sidebar/MySidebar"

function App() {
  return (
    <>
      <div></div>
      <Container>
        <MyNavbar />
      </Container>
      <Container>
        {/* <MyJumbotron /> */}
        <MySidebar/>
        <Myfooter />
      </Container>
    </>
  );
}

export default App;
