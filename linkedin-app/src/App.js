import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import Myfooter from './Components/Footer/Myfooter'

function App() {
  return (
    <Container fluid>
      <Row className="px-0">
        <Col md={9} className="px-0">
        </Col>
        <Col md={2}>
          <Col>
          </Col>
        </Col>
      </Row>
      <Myfooter/>
    </Container>
  );
}

export default App;
