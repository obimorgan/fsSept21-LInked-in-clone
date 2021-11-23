
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
                    <div className="d-flex my-1">
                        <Col md={2} className="my-auto">
                            <Image className="sideBarProfileImg rounded-circle" src={profile.image} />
                        </Col>
                        <Col md={10} className="flex-column">
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