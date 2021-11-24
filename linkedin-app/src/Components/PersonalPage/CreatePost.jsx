import {Jumbotron, Button, Form} from 'react-bootstrap'
import img from '../../Assets/userImg.png'
import { MdAddToPhotos } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";
import { GrArticle } from "react-icons/gr";
const CreatePost =()=> {
    return(
        
        <Jumbotron className="bg-light">
        <form action="" className="form-inline">
            <img src={img} alt="image" className="post-user-img rounded-circle"/>
            <Button variant="" className="user-btn rounded-pill text-left text-muted">Start a post</Button>
        </form>
        <form action="" className="form-inline ml-5">
            <Button variant="" className=" rounded-pill"><MdAddToPhotos /> Photo</Button>
            <Button variant="" className=" rounded-pill"><MdOutlineVideoLibrary /> Video</Button>
            <Button variant="" className=" rounded-pill"><RiCalendarEventLine /> Event</Button>
            <Button variant="" className=" rounded-pill"><GrArticle /> Write article</Button>
        </form>
      </Jumbotron>
    )
}
export default CreatePost
