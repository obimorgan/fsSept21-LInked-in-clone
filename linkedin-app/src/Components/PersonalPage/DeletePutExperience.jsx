import { Modal, Form, Button, } from 'react-bootstrap'
import { IoMdAdd } from "react-icons/io";
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import {useEffect} from 'react'




const DeleteExpFormModal = ({ lgShow, singleExp }) => {

    const [toEdit, setToEdit] = useState({
        role: "",
        company: "",
        description: "",
        area: "",
        startDate: new Date()
    })

    const { id, expId } = useParams()
    const params = useParams()
    console.log(params)

    useEffect(() =>
        setToEdit({
            role: singleExp.role,
            company: singleExp.company,
            description: singleExp.description,
            area: singleExp.area,
        }), [singleExp]
    )


    const deleteExperience = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${expId}`,
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

    // function handleChange(e) {

    // }
    const saveEdit = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${expId}`,
                {
                    method: "PUT",
                    body: JSON.stringify(toEdit),
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_JWT_TOKEN}`,
                        Accept: "application/json"
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
                                // placeholder={singleExp.role}
                                value={toEdit.role}
                                onChange={e =>
                                    setToEdit({
                                        ...toEdit,
                                        role: e.target.value
                                    })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Company name*</Form.Label>
                            <Form.Control
                                type="text"
                                // placeholder={singleExp.company}
                                value={toEdit.company}
                                onChange={e =>
                                    setToEdit({
                                        ...toEdit,
                                        company: e.target.value
                                    })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                // placeholder={singleExp.area}
                                value={toEdit.area}
                                onChange={e =>
                                    setToEdit({
                                        ...toEdit,
                                        area: e.target.value
                                    })}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="mt-4">Description</Form.Label>
                            <Form.Control
                                type="text"
                                rows={3}
                                // placeholder={singleExp.description}
                                value={toEdit.description}
                                onChange={e =>
                                    setToEdit({
                                        ...toEdit,
                                        description: e.target.value,

                                    }), console.log("editing")}
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