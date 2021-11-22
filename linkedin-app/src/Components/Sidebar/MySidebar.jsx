import { RiQuestionFill } from "react-icons/ri";
import { Row, Col, Nav } from 'react-bootstrap'

const MyTopSidebar = () => {
    return (

        <Row>
            <Col md={3}
                className="border rounded MyTopSidebar">
                <Nav defaultActiveKey="/home"
                    className="flex-column MyTopSidebarItem">
                    <div className="d-flex">
                        <div className="nav-link py-3 px-0">Edit public profile &amp; URL</div>
                        <div className="ml-auto my-auto"><RiQuestionFill /></div>
                    </div>
                    <div className="border-top "></div>
                    <div className="d-flex">
                        <div className="nav-link py-3 px-0"> Add profile in another language</div>
                        <div className="ml-auto my-auto"><RiQuestionFill /></div>
                    </div>
                       
                </Nav>
            </Col>
        </Row>

    )
}

export default MyTopSidebar