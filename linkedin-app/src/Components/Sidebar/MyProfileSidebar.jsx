<<<<<<< Updated upstream

import { Button, Nav, Col, Image } from 'react-bootstrap'

const MyProfilesSidebar = () => {
    return (
        <Nav className="flex-column MyProfilesSidebarItem border rounded mt-3">
            <h5 className="h5ProfileHeader">People you may know</h5>
            
         
                    <div className="d-flex my-1">
                        <Col md={2} className="my-auto">
                            <Image className="sideBarProfileImg rounded-circle" />
                        </Col>
                        <Col md={10} className="flex-column">
                            <div className="nav-link px-0 py-0 pName">John Smith</div>
                            <div className="nav-link px-0 py-0 pJob">Smith</div>
                            <Button variant="text-" className="btn3 border-dark rounded-pill mt-2">Connect</Button>
                        </Col>
                </div>
                
            
        </Nav>
=======
import { Nav, Button, Col, Image } from 'react-bootstrap'
import { fetchProfiles } from '../../ApiCalls'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom"

const MyProfilesSidebar = () => {

    const navigate = useNavigate()
    const params = useParams()
    const [profiles, setProfiles] = useState({})
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        fetchProfiles(params.id).then((res) => setProfiles(res))
    }, [])

    return (
        <>  
            <Nav className="flex-column MyProfilesSidebarItem border rounded mt-3">
                <h5 className="h5ProfileHeader">People you may know</h5>
                {
                    profiles && profiles.map((profile) =>
                        
                            <div key={profile.id} className="d-flex my-1">
                                <Col md={2} className="my-auto">
                                    <Image className="sideBarProfileImg rounded-circle" src={profile.image} />
                                </Col>
                                <Col md={10} className="flex-column">
                                    <div className="nav-link px-0 py-0 pName"
                                        selected={selected}
                                        changeSelectedProfile={id => setSelected(id)}
                                        >{profile.name}{profile.surname}</div>

                                    <div className="nav-link px-0 py-0 pJob">{profile.title}</div>
                                    <Button variant="text-" className="btn3 border-dark rounded-pill mt-2">Connect</Button>
                                </Col>
                            </div>
                        
                    )
                }
            </Nav>
            {/* <Nav className="flex-column MyProfilesSidebarItem border rounded mt-3">
                <h5 className="h5ProfileHeader">People you may know</h5>
                <div className="d-flex my-1">
                    <Col md={2} className="my-auto">
                        <Image className="sideBarProfileImg rounded-circle" />
                    </Col>
                    <Col md={10} className="flex-column">
                        <div className="nav-link px-0 py-0 pName"
                        onClick={() => navigate('/profile')}>Johm Smith</div>
                        <div className="nav-link px-0 py-0 pJob">Smith</div>
                        <Button variant="text-" className="btn3 border-dark rounded-pill mt-2">Connect</Button>
                    </Col>
                </div>
            </Nav> */}
        </>
>>>>>>> Stashed changes
    )
}

export default MyProfilesSidebar