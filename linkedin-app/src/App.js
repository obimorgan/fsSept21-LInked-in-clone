import './App.css';
import { Container, Row, Col } from 'react-bootstrap'

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
    </Container>
  );
}

export default App;
