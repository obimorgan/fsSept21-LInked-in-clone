import { Jumbotron, Col, Image, Button } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import { GrEdit } from "react-icons/gr";
import { useState } from "react";
import PostExpFormModal from "./PostExpFormModal"



const ExprJumbotron = ({ expInfo }) => {
  const [lgShow, setLgShow] = useState(false);
  return (

    <>

      {/* ----------------------------------------------Experience Jumbotron Section ----------------------------------------------*/}

      <Jumbotron className="px-0 py-1" >
        <div className="flex-column">
          <div className='d-flex'>
            <Col md={10}>
              <h3 className="">Experiences</h3>
            </Col>

            <Col md={2} className="d-flex">
              <Button variant="" className="expr-add-btn px-0" onClick={() => setLgShow(true)}><IoMdAdd /></Button>
              <Button variant="" className=""><GrEdit /></Button>
            </Col>
          </div>
          {
            expInfo && expInfo.map((exp) =>
              <div key={exp._id} className='d-flex mt-2 ml-3 mb-2'>
                <Image className="sideBarProfileImg " src={exp.image} roundedCircle />
                <Col className="flex-column">
                  <div className="pName">{exp.area}</div>
                  <div className="pJob">{exp.description}</div>
                </Col>
              </div>
            )}
        </div>
      </Jumbotron>
      <PostExpFormModal lgShow={lgShow} />
    </>

  );
};
export default ExprJumbotron;
