
import { Button, Nav, Col, Image } from 'react-bootstrap'

const MyProfilesSidebar = (props) => {
    return (
        <Nav className="flex-column MyProfilesSidebarItem border rounded mt-3">
            <h5 className="h5ProfileHeader">People you may know</h5>
            
         
                    <div className="d-flex my-1">
                        <Col md={2} className="my-auto">
                            <Image className="sideBarProfileImg rounded-circle" src={props.src} />
                        </Col>
                        <Col md={10} className="flex-column">
                            <div className="nav-link px-0 py-0 pName">{props.name}</div>
                            <div className="nav-link px-0 py-0 pJob">{props.surname}</div>
                            <Button variant="text-" className="btn3 border-dark rounded-pill mt-2">Connect</Button>
                        </Col>
                </div>
        </Nav>
    )
}

export default MyProfilesSidebar