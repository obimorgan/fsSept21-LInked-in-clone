
import { Col} from 'react-bootstrap'
import MyTopSidebar from '../Sidebar/MyTopSidebar'
import MyProfileSidebar from '../Sidebar/MyProfileSidebar'
import MyPJumbo from './MyPJumbo'
import { useEffect, useState } from 'react'
import { fetchPersonalProfileInfo, fetchProfiles } from '../../ApiCalls'
import { useParams } from 'react-router-dom'

const PersonalExpr = () => {
    const { id } = useParams()
    const [userInfo, setUserInfo] = useState({})
    const [allUserProfiles, setAllUserProfiles] = useState([])

    useEffect(() => {
        fetchPersonalProfileInfo(id).then((res) => setUserInfo(res))
        fetchProfiles().then((res) => setAllUserProfiles(res))
    }, [id])
    return (
        <div className="d-flex">
            <Col md={9}>
                <MyPJumbo userInfo={userInfo}/>
            </Col>
            <Col md={4}>
                <MyTopSidebar />
                <MyProfileSidebar personalInfo = {allUserProfiles}/>
            </Col>
        </div>
    )
}
export default PersonalExpr