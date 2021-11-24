import { Jumbotron, Button, Col, Modal, Form } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";

const ExprJumbotron = ({ userInfo }) => {
  const [lgShow, setLgShow] = useState(false);
  return (

    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Experience
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="ali">
            Notify network <br />
            <span className="first-param">
              Turn on to notify your network.Job change updates can take up to
              2 hours.
                <span className="text-primary">
                Learn More
                  <Form.Check
                  disabled
                  label="off"
                  type="switch"
                  id="disabled-custom-switch"
                />
              </span>
            </span>
          </p>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: Retail Sales Manager"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Employment type</Form.Label>
            <Form.Control as="select">
              <option>Please select</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Self-employed</option>
              <option>Freelance</option>
              <option>Contract</option>
              <option>Internship</option>
              <option>Seasonal</option>
            </Form.Control>
            <Form.Text className="text-muted">
              Country specific employment types
              </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Company name*</Form.Label>
            <Form.Control type="text" placeholder="Ex: Google " />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: London, United Kingdom "
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I am currently working in this role"
            />
          </Form.Group>
          <Form>
            <Form.Row>
              <Col>
                <Form.Label className="mt-4">Start date*</Form.Label>
                <Form.Control type="date" placeholder="select" />
              </Col>
            </Form.Row>
          </Form>
          <Form>
            <Form.Row>
              <Col>
                <Form.Label className="mt-4">End date*</Form.Label>
                <Form.Control type="date" placeholder="select" />
              </Col>
            </Form.Row>
          </Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="mt-4">Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <p>
            Media <br />
            <span className="first-param">
              Add or link to external  documents, photos, sites, videos, and presentation.
                <span className="ml-2 text-primary">
                Learn More
                </span>
            </span>
          </p>
          <Button variant="" className="rounded-pill add-media text-primary border-primary"><IoMdAdd />Add media</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="rounded-pill">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <Jumbotron key={userInfo._id} >
        <div className='d-flex'>
          <h3 className="mt-n5">Experiences</h3>
          <p className="mt-n5">{userInfo.name}</p>
          <p className="mt-n5">{userInfo._id}</p>
        </div>

        <p className="expr-add-btn" onClick={() => setLgShow(true)}>
          <IoMdAdd />
        </p>
      </Jumbotron>
    </>

  );
};
export default ExprJumbotron;
