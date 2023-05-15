import "./PostTypeField.css";
import profile_img from "../../../assets/img/profile_img.jpg";
import { GrGallery } from "react-icons/gr";
import { GiClapperboard } from "react-icons/gi";
import { AiOutlineFileGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlinePaperClip } from "react-icons/ai";

const PostTypeField = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <img
          className="img-fluid profile_img"
          src={profile_img}
          alt="profile image"
        />
        <div className="w-100">
          <textarea
            className="form-control w-100"
            id="exampleFormControlTextarea1"
            rows="1"
            placeholder="Compose new post..."
          ></textarea>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between mt-5">
        <div className="icon_button postType_big_screen">
          <button className="live_btn">
            <span className="mx-1">&#8226;</span>Go live
          </button>
          <button className="common_btn">
            <GrGallery className="fs-4" />
          </button>
          <button className="common_btn">
            <GiClapperboard className="fs-4" />
          </button>
          <button className="common_btn">
            <AiOutlineFileGif className="fs-4" />
          </button>
          <button className="common_btn">
            <BsEmojiSmile className="fs-4" />
          </button>
          <button className="common_btn last_btn">
            <AiOutlinePaperClip className="fs-4" />
          </button>
        </div>
        <div className="post_btn postType_big_screen">
          <button className="btn btn-primary fs-5 text-capitalize">Post</button>
        </div>
      </div>

      {/* mobile device start */}
      <div className="postType_mobile_device">
        <div className="icon_button">
          <button className="common_btn m-0">
            <GrGallery className="fs-4" />
          </button>
          <button className="common_btn">
            <GiClapperboard className="fs-4" />
          </button>
          <button className="common_btn">
            <AiOutlineFileGif className="fs-4" />
          </button>
          <button className="common_btn">
            <BsEmojiSmile className="fs-4" />
          </button>
          <button className="common_btn">
            <AiOutlinePaperClip className="fs-4" />
          </button>
        </div>
        <div className="post_btn mt-3 d-flex align-items-center">
          <button className="live_btn">
            <span className="mx-1">&#8226;</span>Go live
          </button>
          <button className="btn btn-primary fs-5 text-capitalize mx-4">
            Post
          </button>
        </div>
      </div>
      {/* mobile device end */}
    </>
  );
};

export default PostTypeField;
