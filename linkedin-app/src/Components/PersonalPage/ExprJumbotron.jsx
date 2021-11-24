import { Jumbotron, Col, Image } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import ExpFormModal from "./ExpFormModal"



const ExprJumbotron = ({ expInfo }) => {
  const [lgShow, setLgShow] = useState(false);
  return (

    <>
      { expInfo && expInfo.map((exp) =>
        <>
          {/* ----------------------------------------------Jumbotron Section ----------------------------------------------*/}

          <Jumbotron key={exp._id} className="px-0 py-1" >
            <div className="flex-column">
              <div className='d-flex'>
                <Col md={11}>
                  <h3 className="">Experiences</h3>
                </Col>
                <Col md={1}>
                  <div className="expr-add-btn" onClick={() => setLgShow(true)}>
                    <IoMdAdd />
                  </div>
                </Col>
              </div>
              <div className='d-flex mt-2 ml-3 mb-2'>
                <Image className="sideBarProfileImg " src={exp.image} roundedCircle />
                <Col className="flex-column">
                  <div className="pName">{exp.area}</div>
                  <div className="pJob">{exp.description}</div>
                </Col>
              </div>
            </div>
          </Jumbotron>
        <ExpFormModal lgShow={lgShow} id={exp._id}/>
        </>
      )}
    </>

  );
};
export default ExprJumbotron;
