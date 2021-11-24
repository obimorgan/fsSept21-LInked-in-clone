import { Modal, Form, Button, } from 'react-bootstrap'
import { IoMdAdd } from "react-icons/io";
import { useState, useEffect } from "react"



const ExpFormModal = ({ lgShow, id }) => {
    const [experience, setExperience] = useState({
        role: "",
        company: "",
        description: "",
        area: "",
        startDate:new Date()
        
    })
    // useEffect(() => {
    //     setExperience(experience => ({
    //         ...experience,
           
    //     }))
    // }, [id])

    const postExperience = async () => {
        try {
            let res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
                {
                    method: "POST",
                    body: JSON.stringify(experience),
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_JWT_TOKEN}`
                    }
                })
            if (res.ok) {
                alert("You added a new experience!")
            } else {
                throw res
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
                                placeholder="Ex: Retail Sales Manager"
                                value={experience.role}
                                onChange={e =>
                                    setExperience({
                                        ...experience,
                                        role: e.target.value
                                    })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Company name*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ex: Google "
                                value={experience.company}
                                onChange={e =>
                                    setExperience({
                                        ...experience,
                                        company: e.target.value
                                    })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ex: London, United Kingdom "
                                value={experience.area}
                                onChange={e =>
                                    setExperience({
                                        ...experience,
                                        area: e.target.value
                                    })}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="mt-4">Description</Form.Label>
                            <Form.Control
                                type="text"
                                rows={3}
                                placeholder="Describe your experience"
                                value={experience.description}
                                onChange={e =>
                                    setExperience({
                                        ...experience,
                                        description: e.target.value
                                    })}
                            />
                        </Form.Group>
                        <Button variant="" className="rounded-pill add-media text-primary border-primary"><IoMdAdd />Add media</Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={postExperience} className="rounded-pill">
                            Submit
          </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </>
    )
}

export default ExpFormModal