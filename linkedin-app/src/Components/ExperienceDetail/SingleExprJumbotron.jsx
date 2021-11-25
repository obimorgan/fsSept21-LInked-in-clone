import { Jumbotron, Col, Image, Button } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import { GrEdit } from "react-icons/gr";
import { useState} from "react";
import DeleteExpFormModal from "../PersonalPage/DeleteExpfroModal"




const SingleExprJumbotron = ({singleExp}) => {

  const [lgShow, setLgShow] = useState(false);
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
          <div key={singleExp._id} className='d-flex mx-3 mb-2 border-bottom'>
            <Image className="sideBarProfileImg mb-2" src={singleExp.image} roundedCircle />
            <Col className="flex-column">
              <div className="pName mb-2">{singleExp.area}</div>
              <div className="pJob">{singleExp.description}</div>
            </Col>
          </div>
          <DeleteExpFormModal lgShow={lgShow} expId={singleExp._id}
          singleExp={singleExp}
          />
          
          
        </div>
      </Jumbotron>

    </>

  );
};
export default SingleExprJumbotron;
