import "./MostRecent.css";
import { AiOutlineDown } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const PostItems = () => {
  return (
    <div className="title d-flex align-items-center justify-content-between mt-5">
      <h4>Feed</h4>
      <div className="d-flex align-items-center justify-content-between">
        <div className="mx-4 d-flex align-items-center">
          <small className="mx-2 fs-5">Most recent</small>
          <AiOutlineDown className="fs-5" />
        </div>
        <BsThreeDots className="fs-5" />
      </div>
    </div>
  );
};

export default PostItems;
