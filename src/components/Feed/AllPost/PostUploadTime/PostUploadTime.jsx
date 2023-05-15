import "./PostUploadTime.css";
import userImg from "../../../../assets/img/profile_img.jpg";
import { FiLock } from "react-icons/fi";
import { BsPinAngle, BsThreeDots } from "react-icons/bs";

const PostUploadTime = () => {
  return (
    <>
      <div className="post_upload_time d-flex">
        <img className="img-fluid" src={userImg} alt="user image" />
        <div className="upload_details mx-2">
          <div className="user_name d-flex align-items-center">
            <h5 className="">Michael E. Gerace</h5>
            <div className="mx-2 lock_icon">
              <FiLock className="fs-5 my-2" />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <small>20 hours ago</small>
            <small className="mx-1">
              <span className="mx-1">&#8226;</span>Room name one
            </small>
          </div>
        </div>
      </div>
      <div className="">
        <span className="mx-3">
          <BsPinAngle className="fs-5" />
        </span>
        <span className="mx-3">
          <BsThreeDots className="fs-5" />
        </span>
      </div>
    </>
  );
};

export default PostUploadTime;
