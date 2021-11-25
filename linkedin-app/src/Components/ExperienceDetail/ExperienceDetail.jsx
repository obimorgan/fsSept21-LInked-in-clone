import { useParams } from 'react-router-dom'
import SingleExprJumbotron from './SingleExprJumbotron'
import { useEffect, useState } from 'react'


const ExperienceDetail = () => {
    const { expId } = useParams()
    const [singleExp, setSingleExp] = useState({})
    useEffect(() => {
        fetchSingleExperience(expId).then((res) => setSingleExp(res))
    }, [])

    return (
        <div className="d-flex">
            <Col md={9}>
                <SingleExprJumbotron singleExp={singleExp}
                />
            </Col>
            <Col md={4}>
                <MyTopSidebar />
            </Col>
        </div>
    )
}

export default ExperienceDetail