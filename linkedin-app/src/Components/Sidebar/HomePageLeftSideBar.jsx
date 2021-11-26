import { BsFillBookmarkFill } from "react-icons/bs";
import { Nav, Image } from "react-bootstrap";

const HomePageLeftSideBar = ({ userInfo }) => {
    return (
        <>
            <Nav className="flex-column pJob border rounded mt-5">
                <div className="d-flex flex-column mt-3 mb-2">
                    <div className="text-center">
                    <Image className="rounded-circle sideBarProfileImg" src={userInfo.image} />
                    </div>
                    
                    <div className="text-center pName">{userInfo.name} {userInfo.surname}</div>
                    <div className="text-center">{userInfo.area}</div>
                    <div className="text-center">{userInfo.title}</div>
                </div>
                <div className="border-top mx-2"></div>
                <div className="flex-column justify-content-around">
                    <div className="d-flex" >
                        <div className="nav-link ">Connection</div>
                        <div className="ml-auto my-auto pr-2">1</div>
                    </div>
                    <div className="nav-link pName mt-n4">Grow your network</div>
                </div>
                <div className="border-top mx-2"></div>
                <div className="flex-column">
                    <div className="nav-link py-3"> Access exclussive tools &amp; insights</div>
                    <div className="nav-link pName mt-n4"> Try Premium</div>
                </div>
                <div className="border-top mx-2"></div>
                <div className="d-flex">
                <div className=" my-auto ml-3">
                        <BsFillBookmarkFill />
                    </div>
                    <div className="nav-link py-3 pName"> My Items</div>

                </div>
            </Nav>
        </>
    );
};

export default HomePageLeftSideBar;