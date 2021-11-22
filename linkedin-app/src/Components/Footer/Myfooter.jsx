import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Nav } from 'react-bootstrap'
import DropdownInput from "./DropdownInput";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { IconContext } from "react-icons"



const Myfooter = () => {
    return (
        <Row className="jutify-content-end">
            <Col md={3}>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <div className="nav-link footerItem py-0">Active</div>
                    <div className="nav-link footerItem py-0">About</div>
                    <div className="nav-link footerItem py-0">Community Guidelines</div>
                    <div className="nav-link footerItem py-0">Privacy and Terms</div>
                    <div className="nav-link footerItem py-0">Sales Solutions</div>
                    <div className="nav-link footerItem py-0">Safety Centers</div>
                    <div className="nav-link footerItem py-0" disabled>
                        LinkedIn C 2021
                        </div>
                </Nav>
            </Col>
            <Col md={2}>
                <Nav className="flex-column">
                    <div className="nav-link footerItem py-0">Accesibility</div>
                    <div className="nav-link footerItem py-0">Careers</div>
                    <div className="nav-link footerItem py-0">Ad Choices</div>
                    <div className="nav-link footerItem py-0">Mobile</div>
                </Nav>
            </Col>
            <Col md={2}>
                <Nav className="flex-column">
                    <div className="nav-link footerItem py-0">Team Solutions</div>
                    <div className="nav-link footerItem py-0">Marketing Solutions</div>
                    <div className="nav-link footerItem py-0">Advertising</div>
                    <div className="nav-link footerItem py-0">Small Business</div>
                </Nav>
            </Col>
            <Col md={2}>
                <Nav className="flex-column">
                <IconContext.Provider value={{ color: "black", size: "25px" }}>
                    <div>
                    
                        <div className="d-flex">
                            <BsFillQuestionCircleFill/>
                            <p className="ml-1" >Questions?</p>
                        </div>
                        <div className="nav-link footerItem py-0">Visit ou Help Center</div>
                    </div>
                    <div>
                        <div className="d-flex">
                            <IoSettingsSharp/>
                            <p className="ml-1" >Manange your account and privacy?</p>
                        </div>
                        <div className="nav-link footerItem py-0">Go to your Settingss</div>
                       
                    </div>
                    </IconContext.Provider>
                </Nav>
            </Col>
            <Col md={3}>
                <>
                    <DropdownInput />
                </>

            </Col>
        </Row>
    )
}

export default Myfooter