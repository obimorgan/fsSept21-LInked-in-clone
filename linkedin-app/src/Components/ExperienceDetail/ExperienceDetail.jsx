import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import MyTopSidebar from '../Sidebar/MyTopSidebar'
// import EditExpJumbo from './EditExpJumbo'
// import ExprJumbtron from '../ExperienceDetail/SingleExprJumbotron'
import SingleExprJumbotron from './SingleExprJumbotron'


const ExperienceDetail = () => {
    const params = useParams()
    console.log(params)

    const { id, expId } = useParams()
    const [singleExp, setSingleExp] = useState({})

    useEffect(() => {
        const fetchSingleExperience = async () => {
            try {
                let response = await fetch(
                    `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${expId}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${process.env.REACT_APP_JWT_TOKEN}`
                        },
                    }
                );
                if (response.ok) {
                    let data = await response.json()
                    setSingleExp(data)
                } else {
                    console.log('error')
                }
            } catch (error) {
                console.log('error')
            }
        }
        fetchSingleExperience()
    }, [id, expId])
    return(
        <div className="d-flex mt-5" >
        {console.log(123)}
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

