import MyJumbotron from "../MyJumbotron"
import MyProfilesSidebar from "../Sidebar/MyProfileSidebar"
import MyTopSidebar from "../Sidebar/MyTopSidebar"
import fetchProfiles from "../../ApiCalls"
import personalProfileInfo from "../../ApiCalls"
import { useEffect, useEffect, useState } from 'react'


const PersonalPage = () => {
    const [allUserProfiles, setAllUserProfiles] = useState([])
    const [personalProfile, setPersonalProfile] = useState({})
    
    useEffect(() => {
        fetchProfiles().then((res) => setAllUserProfiles(res))
        personalProfileInfo().then((res) => setPersonalProfile(res))
    }, [])

    return(
        <>
        <MyJumbotron/>
        <MyTopSidebar/>
        <MyProfilesSidebar/>
        <ExprJumbotron/>
        </>
    )
}
export default PersonalPage