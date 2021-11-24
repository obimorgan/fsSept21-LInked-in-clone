import {Link} from "react-router-dom"
import { Button, Nav, Col, Image } from 'react-bootstrap'

const MyProfilesSidebar = ({ personalInfo }) => {
    return (
        <Nav className="flex-column MyProfilesSidebarItem border rounded mt-3">
            <h5 className="h5ProfileHeader">People you may know</h5>
            {
                personalInfo && personalInfo.slice(Math.max(personalInfo.length - 7, 0)).map((info) =>
                    <div className="d-flex my-1">
                        <Col md={2} className="my-auto">
                            <Image className="sideBarProfileImg rounded-circle" src={info.image} />
                        </Col>
                        <Col md={10} className="flex-column">

                            <Link to={"/profile/" + info._id}>
                                <div className="nav-link px-0 py-0 pName">{info.name}</div>
                                <div className="nav-link px-0 py-0 pJob">{info.surname}</div>
                            </Link>


                            <Button variant="text-" className="btn3 border-dark rounded-pill mt-2">Connect</Button>
                        </Col>
                    </div>
                )
            }

        </Nav>
    )
}

export default MyProfilesSidebar