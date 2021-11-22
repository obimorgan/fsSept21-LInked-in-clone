
import { Nav, Button, Col, Image } from 'react-bootstrap'
import { fetchProfiles } from '../../ApiCalls'
import { useState, useEffect } from 'react'

const MyProfilesSidebar = () => {

    const [profiles, setProfiles] = useState()

    useEffect(() => {
        fetchProfiles().then((res) => setProfiles(res))
    }, [])

    return (
        <Nav className="flex-column MyProfilesSidebarItem border rounded mt-3">
            <h5 className="h5ProfileHeader">People you may know</h5>
            {
                profiles && profiles.map((profile) =>
                    <div className="d-flex">
                        <Col md={2} className="ml-auto my-auto px-0">
                            <Image src={profile.image} roundedCircle />
                        </Col>
                        <Col md={10} className="flex-column">
                            <Image src={profile.image} roundedCircle />
                            <div className="nav-link px-0 py-0 pName">{profile.name}{profile.surname}</div>
                            <div className="nav-link px-0 py-0 pJob">{profile.title}</div>
                            <Button variant="text-" className="btn3 border-dark rounded-pill mt-2">Connect</Button>
                        </Col>
                    </div>
                )
            }
        </Nav>
    )
}

export default MyProfilesSidebar