import { Jumbotron, Col, Image, Button } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import { GrEdit } from "react-icons/gr";
import { useState } from "react";
import PostExpFormModal from "./PostExpFormModal"
import DeleteExpFormModal from "./PostExpFormModal"



const ExprJumbotron = ({ expInfo }) => {
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
            <Col md={2} className="d-flex">
              <Button variant="" className="expr-add-btn px-0" onClick={() => setLgShow(true)}><IoMdAdd /></Button>
              <Button variant="" className="" onClick={() => setLgShow(true)}><GrEdit /></Button>
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
                </div>
                <DeleteExpFormModal lgShow={lgShow} expInfo={exp._id} />
                <PostExpFormModal lgShow={lgShow} />
              </>
            )}
        </div>
      </Jumbotron>
     
    </>

  );
};
export default ExprJumbotron;
