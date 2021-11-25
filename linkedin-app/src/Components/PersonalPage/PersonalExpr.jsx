
import { Col } from 'react-bootstrap'
import MyTopSidebar from '../Sidebar/MyTopSidebar'
import MyProfileSidebar from '../Sidebar/MyProfileSidebar'
import MyPJumbo from './MyPJumbo'
import { useEffect, useState } from 'react'
import { fetchPersonalProfileInfo, fetchProfiles, fetchPersonalExpiriences } from '../../ApiCalls'
import { useParams } from 'react-router-dom'
import ExprJumbotron from './ExprJumbotron'

const PersonalExpr = () => {
    const { id } = useParams()
    const [userInfo, setUserInfo] = useState({})
    const [allUserProfiles, setAllUserProfiles] = useState([])
    const [experiences, setExperiences] = useState([])

    useEffect(() => {
        fetchPersonalProfileInfo(id).then((res) => setUserInfo(res))
        fetchProfiles().then((res) => setAllUserProfiles(res))
        fetchPersonalExpiriences(id).then((res) => setExperiences(res))

    }, [id])
    return (
        <div className="d-flex">
            <Col md={9}>
                <MyPJumbo userInfo={userInfo} />
                <ExprJumbotron expInfo={experiences}
                id={id}
                />

            </Col>
            <Col md={4}>
                <MyTopSidebar />
                <MyProfileSidebar personalInfo={allUserProfiles} />
            </Col>
        </div>
    )
}
export default PersonalExpr