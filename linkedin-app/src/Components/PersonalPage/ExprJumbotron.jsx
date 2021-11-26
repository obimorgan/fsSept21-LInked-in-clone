import { Jumbotron, Col, Image, Button } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import { GrEdit } from "react-icons/gr";
import { useState } from "react";
import PostExpFormModal from "./PostExpFormModal"
import DeleteExpFormModal from "./PostExpFormModal"
import ExpFormModal from './ExpFormModal'
import { Link } from "react-router-dom"



const ExprJumbotron = ({ expInfo, id }) => {
  const [lgShow, setLgShow] = useState(false);
  // const [expId, setExpId] = useState("")

  return (

    <>

      {/* ----------------------------------------------Experience Jumbotron Section ----------------------------------------------*/}

      <Jumbotron className="px-0 py-1" >
        <div className="flex-column">
          <div className='d-flex'>
            <Col md={10}>
              <h4 className="mt-2">Experiences</h4>
            </Col>
            <Col md={2} className="">
              <Button variant="" className="expr-add-btn px-0" onClick={() => setLgShow(true)}><IoMdAdd /></Button>
            </Col>
          </div>
          {
            expInfo && expInfo.map((exp) =>
              <>
                <div key={exp._id} className='d-flex mx-3 mb-2 border-bottom'>
                  <Image className="sideBarProfileImg mb-2" src={exp.image} roundedCircle />
                  <Col className="flex-column">
                    <div className="pName mb-2">{exp.area}</div>
                    <div className="pJob">{exp.description}</div>
                  </Col>
                  <Col md={2} >

                    {/* Link to <ExperienceDetail/> */}

                    <Link className="ml-3" to={`/profile/${id}/${exp._id}`}><GrEdit /></Link>


                  </Col>
                </div>
                <DeleteExpFormModal lgShow={lgShow} expInfo={exp._id} />
                <PostExpFormModal lgShow={lgShow} />
                <ExpFormModal lgShow={lgShow} setLgShow={setLgShow} id={exp._id}/>

              </>
            )}
        </div>
      </Jumbotron>
    </>

  );
};
export default ExprJumbotron;
