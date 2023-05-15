import "./AllPost.css";
import Post from "./Post/Post";

import PostUploadTime from "./PostUploadTime/PostUploadTime";

const AllPost = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <PostUploadTime />
      </div>
      <div>
        <Post />
      </div>
    </>
  );
};

export default AllPost;
