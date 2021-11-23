import { RiQuestionFill } from "react-icons/ri";
import { Col, Nav } from 'react-bootstrap'
import MyProfilesSidebar from "./MyProfileSidebar";


const MyTopSidebar = () => {
    return (
        <Col md={4}>
            <Nav className="flex-column MyTopSidebarItem border rounded mt-5">
                <div className="d-flex justify-content-around">
                    <div className="nav-link py-3">Edit public profile &amp; URL</div>
                    <div className="ml-auto my-auto pr-2"><RiQuestionFill /></div>
                </div>
                <div className="border-top mx-2"></div>
                <div className="d-flex">
                    <div className="nav-link py-3"> Add profile in another language</div>
                    <div className="ml-auto my-auto pr-2"><RiQuestionFill /></div>
                </div>
            </Nav>
            <MyProfilesSidebar />
        </Col>
    )
}

export default MyTopSidebar