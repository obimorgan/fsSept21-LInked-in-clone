import './App.css';

import MyNavbar from './Components/MyNavbar';

import { Container, Row, Col } from 'react-bootstrap'
import Myfooter from './Components/Footer/Myfooter'
import MyJumbotron from './Components/MyJumbotron'
import ExprJumbotron from './Components/ExprJumbotron'


function App() {
  return (
    <>
    <div></div>
      <Container>
        <MyNavbar/>
      </Container>
    <Container>
      <MyJumbotron />
      <ExprJumbotron />
     <Myfooter />
    </Container>
    </>
  );
}

export default App;
