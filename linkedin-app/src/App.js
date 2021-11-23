/** @format */

import "./App.css";
import { Container } from "react-bootstrap";
import Myfooter from "./Components/Footer/Myfooter";
import MyNavbar from "./Components/MyNavbar";
import MyJumbotron from "./Components/MyJumbotron";
import MyTopSidebar from "./Components/Sidebar/MyTopSidebar";


function App() {
  return (
    <>
      <div></div>
      <Container>
        <MyNavbar />
      </Container>
      <Container>
          <div class="d-flex justify-content-between">
            <MyJumbotron />
            <MyTopSidebar />
          </div>
        <Myfooter />
      </Container>
      npm start
    </>
  );
}

export default App;
