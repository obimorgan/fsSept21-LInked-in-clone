import { Nav, Button, Col, Image} from 'react-bootstrap'

const MyProfilesSidebar = () => {
    return (
        <Nav className="flex-column MyProfilesSidebarItem border rounded mt-3">
            <h5 className="h5ProfileHeader">People you may know</h5>
            <div className="d-flex">
                <Col md={2} className="ml-auto my-auto px-0">
                <Image src="holder.js/171x180" roundedCircle />
                </Col>
                <Col md={10} className="flex-column">
                    <div className="nav-link px-0 py-0 pName">Anders Hjerthen</div>
                    <div className="nav-link px-0 py-0 pJob">Politibetjent</div>
                    <Button variant="text-" className="btn3 border-dark rounded-pill mt-2">Connect</Button>
                </Col>
            </div>
        </Nav>
    )
}

export default MyProfilesSidebar