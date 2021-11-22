import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Nav } from 'react-bootstrap'
import DropdownInput from "./DropdownInput";


const Myfooter = () => {
    return (
        
            <Row className="jutify-content-end">
                <Col md={3}>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home">Active</Nav.Link>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                        <Nav.Link eventKey="disabled" disabled>
                        Disabled
                        </Nav.Link>
                    </Nav>
                </Col>
                <Col md={2}>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home">Active</Nav.Link>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                        {/* <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link> */}
                    </Nav>
                </Col>
                <Col md={2}>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home">Active</Nav.Link>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                        {/* <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link> */}
                    </Nav>
                </Col>
                <Col md={2}>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home">Active</Nav.Link>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                        {/* <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link> */}
                    </Nav>
                </Col>
                <Col md={3}>
                    <>
                    <DropdownInput/>
                    </>
                    
                </Col>
            </Row>


    )
}

export default Myfooter