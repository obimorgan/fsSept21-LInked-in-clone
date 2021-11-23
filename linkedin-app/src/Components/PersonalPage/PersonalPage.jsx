import MyJumbotron from "../MyJumbotron"
import MyProfilesSidebar from "../Sidebar/MyProfileSidebar"
import MyTopSidebar from "../Sidebar/MyTopSidebar"
import ExprJumbotron from "../ExprJumbotron"
import { fetchProfiles, fetchPersonalProfileInfo } from "../../ApiCalls"
import { useEffect, useState } from 'react'
import { Row, Col, } from 'react-bootstrap'



const PersonalPage = () => {
    const [allUserProfiles, setAllUserProfiles] = useState([])
    const [personalProfile, setPersonalProfile] = useState({})

    useEffect(() => {
        fetchProfiles().then((res) => setAllUserProfiles(res))
        fetchPersonalProfileInfo("me").then((res) => setPersonalProfile(res))
    }, [])

    return (
        <div className="d-flex">
        
            <Col md={9}>
                <MyJumbotron />
                <ExprJumbotron />
            </Col>
            <Col md={4}>
                <MyTopSidebar />
                <MyProfilesSidebar />
            </Col>

        </div>
    )
}
export default PersonalPage