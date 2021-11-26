import {Modal, Button} from 'react-bootstrap'
import {useState} from 'react'
import { MdAddToPhotos } from "react-icons/md";
const ImageModal = ({post}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [image, setImage] = useState(null);
    
    
    const handleImage =async()=> {
        alert("hello");
        try {
          let response = await fetch(
            "https://striveschool-api.herokuapp.com/api/posts/",
            {
              method: "POST",
              body: JSON.stringify(image),
              headers: {
                "Content-Type": "application/json",
                "Authorization":
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTljOWYyM2QzNzU4MDAwMTU0OWI5ZmYiLCJpYXQiOjE2Mzc5MjM5MTgsImV4cCI6MTYzOTEzMzUxOH0.33s9YKpvuar5K-gBELToRiix85OjS-TqkNpP5NUNcto",
              },
            }
          );
          if (response.ok) {
            alert("image is added");
          } else {
            console.log("Error has occured");
          }
        } catch (e) {
          console.log(e);
        }
      };
    
  
  return (
      <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Your Photo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          {image && (
                <div>
                <img alt="not fount" width={"300px"} src={URL.createObjectURL(image)} />
                <br />
                <button onClick={()=>setImage(null)}>Remove</button>
                </div>
          )}
      <input type="file" variant="" className="text-primary ml-5"
         onChange={(event) => {
            console.log(event.target.files[0]);
            setImage(event.target.files[0]);
          }}
          
      />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" className="rounded-pill" onClick={handleClose}>
          Close
        </Button>
        <Button variant="success" className="rounded-pill" onClick={handleImage}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
     <Button variant="" className="user-btns1 ml-5 rounded-pill" onClick={handleShow}>
     <MdAddToPhotos /> Photo
   </Button>
  </>
  );
};
    
export default ImageModal
