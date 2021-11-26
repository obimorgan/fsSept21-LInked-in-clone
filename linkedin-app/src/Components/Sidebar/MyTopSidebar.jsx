import { RiQuestionFill } from "react-icons/ri";
import { Nav } from "react-bootstrap";

const MyTopSidebar = () => {
  return (
    <>
      <Nav className="flex-column MyTopSidebarItem border rounded mt-5">
        <div className="d-flex justify-content-around">
          <div className="nav-link py-3">Edit public profile &amp; URL</div>
          <div className="ml-auto my-auto pr-2">
            <RiQuestionFill />
          </div>
        </div>
        <div className="border-top mx-2"></div>
        <div className="d-flex">
          <div className="nav-link py-3"> Add profile in another language</div>
          <div className="ml-auto my-auto pr-2">
            <RiQuestionFill />
          </div>
        </div>
      </Nav>
      <Nav className="flex-column border  mt-2">
        <div className="advertimage">
          <img
            src="assets/linkedin-adver.png"
            alt=""
            width="360"
            height="300"
          />
        </div>
      </Nav>
    </>
  );
};

export default MyTopSidebar;
