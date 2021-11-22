import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import Myfooter from './Components/Footer/Myfooter'
import MyNavbar from './Components/MyNavbar'
import MyJumbotron from './Components/MyJumbotron'

function App() {
  return (
    <>
    <div></div>
      <Container>
        <MyNavbar/>
      </Container>
    <Container>
      <MyJumbotron />
     <Myfooter />
    </Container>
    </>
  );
}

export default App;
