import MyJumbotron from "./MyJumbotron"
import MyProfilesSidebar from "../Sidebar/MyProfileSidebar"
import MyTopSidebar from "../Sidebar/MyTopSidebar"
import ExprJumbotron from "./ExprJumbotron"
import { fetchProfiles, fetchPersonalProfileInfo } from "../../ApiCalls"
import { useEffect, useState } from 'react'
import { Col, } from 'react-bootstrap'



const PersonalPage = () => {
    const [allUserProfiles, setAllUserProfiles] = useState([])
    const [personalProfile, setPersonalProfile] = useState({})


    useEffect(() => {
        fetchProfiles().then((res) => setAllUserProfiles(res))
        fetchPersonalProfileInfo("me").then((res) => setPersonalProfile(res))
    }, [])

    return (
        <div className="d-flex">
            <Col md={9} xs={12}>
                {personalProfile && <MyJumbotron info={personalProfile} />}
                {personalProfile && <ExprJumbotron info={personalProfile} />}
            </Col>
            <Col md={4} xs={12}>
                <MyTopSidebar />
                <MyProfilesSidebar personalInfo = {allUserProfiles}/>
            </Col>
        </div>
    )
}
export default PersonalPage