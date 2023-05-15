import "./Feed.css";
import PostTypeField from "./PostTypeField/PostTypeField";
import PostItems from "./MostRecent/MostRecent";
import AllPost from "./AllPost/AllPost";
import AsideBar from "./AsideBar/AsideBar";

const Feed = () => {
  return (
    <section className="container mx-2 my-2">
      <div className="row">
        <div className="col-md-8 feed_main">
          <div className="post_field bg-white p-3 rounded">
            <PostTypeField />
          </div>
          <div className="post_item my-4">
            <PostItems />
          </div>
          <div className="mt-2 bg-white rounded p-3">
            <AllPost />
          </div>
          <div className="spinner mt-4 text-center">
            <div className="spinner-border m-5" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 aside_bar">
          <AsideBar />
        </div>
      </div>
    </section>
  );
};

export default Feed;
