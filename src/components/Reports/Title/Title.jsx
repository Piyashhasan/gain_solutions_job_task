import "./Title.css";
import { FaRegUser } from "react-icons/fa";

const Title = ({ openNav }) => {
  return (
    <div className="title">
      <button
        onClick={openNav}
        className="btn btn-primary d-flex align-items-center"
      >
        <FaRegUser className="fs-5 mx-2" />
        <span className="text-capitalize">Add User</span>
      </button>
    </div>
  );
};

export default Title;
