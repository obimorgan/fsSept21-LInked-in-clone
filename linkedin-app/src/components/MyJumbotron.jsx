import { BsFillAlarmFill } from "react-icons/bs";
import { Row, Col, Button, Jumbotron} from "react-bootstrap";
    const MyJumbotron = () => {
  return (
    <Row>
      <Col md={9}>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </Col>
    </Row>
  );
};
export default MyJumbotron;
