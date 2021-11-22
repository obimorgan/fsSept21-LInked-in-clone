import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import Myfooter from './Components/Footer/Myfooter'
import MyNavbar from './Components/MyNavbar'

function App() {
  return (
    <>
    <div></div>
      <Container>
        <MyNavbar/>
      </Container>
    <Container>
     <Myfooter />
    </Container>
    </>
  );
}

export default App;
