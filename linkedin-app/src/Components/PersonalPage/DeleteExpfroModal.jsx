import { Modal, Form, Button, } from 'react-bootstrap'
import { IoMdAdd } from "react-icons/io";
// import {useState } from 'react'
import { useParams} from 'react-router-dom'
// import {useEffect} from 'react'




const DeleteExpFormModal = ({ lgShow, singleExp, experience }) => {

    
    const { id, expId } = useParams()
    const params = useParams()
    console.log(params)
   
    // useEffect (() => {
    //     deleteExperience()
    // }, [])
    const deleteExperience = async () => {
        try {
            let response= await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${expId}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_JWT_TOKEN}`
                    }
                })
            if (response.ok) {
             alert("Experience is deleted!")
                
            } else {
                throw response
            }
        } catch (error) {
            console.log(error)
        }
    }
    const editExperience = async () => {
        try {
            let response= await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${expId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_JWT_TOKEN}`
                    }
                })
            if (response.ok) {
             alert("Experience has been edited!")
                
            } else {
                throw response
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Form >
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => (lgShow)} ///// need to fix this!! this allows for the for to close
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Add Experience
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="ali">
                            Notify network <br />
                            <span className="first-param">
                                Turn on to notify your network.Job change updates can take up to
                                2 hours.
                <span className="text-primary">
                                    Learn More
                  <Form.Check
                                        disabled
                                        label="off"
                                        type="switch"
                                        id="disabled-custom-switch"
                                    />
                                </span>
                            </span>
                        </p>
                        <Form.Group

                            controlId="formBasicEmail">
                            <Form.Label>Title*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={singleExp.role}
                                value={singleExp.role}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Company name*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={singleExp.company}
                                value={singleExp.company}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={singleExp.area}
                                value={singleExp.area}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="mt-4">Description</Form.Label>
                            <Form.Control
                                type="text"
                                rows={3}
                                placeholder={singleExp.description}
                                value={singleExp.description}
                            />
                        </Form.Group>
                        <Button variant="" className="rounded-pill add-media text-primary border-primary"><IoMdAdd />Add media</Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={deleteExperience} className="rounded-pill">
                            Delete
          </Button>
          <Button variant="danger" onClick={saveEdit} className="rounded-pill">
                            save
          </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </>
    )
}

export default DeleteExpFormModal