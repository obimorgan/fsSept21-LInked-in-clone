import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Nav, } from 'react-bootstrap'
import DropdownInput from "./DropdownInput";
import { RiQuestionFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Container } from "react-bootstrap";


const Myfooter = () => {
    return (
        <Container className="roby">
            <Row  >
                <Col>
                {/* <img src={logo192} alt="linkedin-logo"/> */}
                    <IconContext.Provider value={{ color: "rgb(0, 65, 130)", size: "25px" }}>
                        <div className="nav-link footerItem py-1"> <BsLinkedin /></div>
                    </IconContext.Provider>
                </Col>
            </Row>
            <Row className="jutify-content-end">
                <Col md={2}>

                    <Nav defaultActiveKey="/home" className="flex-column">
                        <div className="nav-link footerItem py-1">About</div>
                        <div className="nav-link footerItem py-1">Community Guidelines</div>
                        <div className="nav-link footerItem py-1">Privacy and Terms</div>
                        <div className="nav-link footerItem py-1">Sales Solutions</div>
                        <div className="nav-link footerItem py-1">Safety Centers</div>
                        <div className="nav-link footerItem py-1" disabled>
                            LinkedIn C 2021
                        </div>
                    </Nav>
                </Col>
                <Col md={2}>
                    <Nav className="flex-column">
                        <div className="nav-link footerItem py-1">Accesibility</div>
                        <div className="nav-link footerItem py-1">Careers</div>
                        <div className="nav-link footerItem py-1">Ad Choices</div>
                        <div className="nav-link footerItem py-1">Mobile</div>
                    </Nav>
                </Col>
                <Col md={2}>
                    <Nav className="flex-column">
                        <div className="nav-link footerItem py-1">Team Solutions</div>
                        <div className="nav-link footerItem py-1">Marketing Solutions</div>
                        <div className="nav-link footerItem py-1">Advertising</div>
                        <div className="nav-link footerItem py-1">Small Business</div>
                    </Nav>
                </Col>
                <Col md={3}>
                    <Nav className="flex-column">
                        <IconContext.Provider value={{ color: "black", size: "20px" }}>
                            <div>
                                <div className="d-flex align-items-start">
                                    <RiQuestionFill />
                                    <p className="ml-1 my-auto footerP" >Questions?</p>
                                </div>
                                <div className="nav-link ml-1 mt-n2 dropdownfooterItem">Visit our Help Center</div>

                            </div>
                            <div>
                                <div className="d-flex align-items-start">
                                    <IoSettingsSharp />
                                    <p className="ml-1 my-auto footerP" >Manange your account and privacy</p>
                                </div>
                                <div className="nav-link ml-1 mt-n2 dropdownfooterItem">Go to your Settings</div>

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
        </Container>
    )
}

export default Myfooter