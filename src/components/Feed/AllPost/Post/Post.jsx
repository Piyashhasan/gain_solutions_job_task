import "./Post.css";
import imgOne from "../../../../assets/postImg/imgOne.png";
import imgTwo from "../../../../assets/postImg/imgTwo.png";
import { BiHeart, BiCommentDots } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";

const Post = () => {
  return (
    <div className="post my-3">
      <h5 className="post_title mt-5">About “ExperienceFest” 🎉</h5>
      <div className="post_content">
        <p>
          The conference was a vibrant and exciting event that brought together
          UX designers from different parts of the world. The conference kicked
          off with an inspiring keynote address by a prominent UX designer who
          spoke about the importance of designing with empathy and understanding
          the users needs. 🎤
        </p>
        <img className="img-fluid" src={imgOne} alt="post image" />
        <p className="mt-4">
          Throughout the event, there were several informative sessions,
          workshops, and discussions that covered a wide range of topics related
          to UX design, such as user research, usability testing, design
          thinking, and more. The presenters were all experts in their
          respective fields, and their presentations were well-prepared and
          engaging.
        </p>
        <p>
          One of the most memorable sessions was a hands-on workshop that
          focused on designing for accessibility. The presenter guided the
          attendees through various exercises and activities that helped them
          understand the challenges faced by users with disabilities and how to
          design products that are inclusive and accessible to all.
        </p>
        <p>
          Another highlight of the conference was the networking opportunities.
          Attendees had the chance to connect and share ideas with fellow
          designers from different companies and industries. The atmosphere was
          friendly and collaborative, and everyone was eager to learn from one
          another. ✏️✏️✏️
        </p>
        <img className="img-fluid" src={imgTwo} alt="post image" />
        <p className="mt-4">
          Overall, the Experience Fest conference was an incredible event that
          provided valuable insights and practical tips for UX designers. It was
          a great opportunity to learn from industry leaders, connect with
          peers, and gain inspiration for future projects. I left the conference
          feeling energized and motivated to apply the new knowledge and skills
          I had acquired in my own work.
        </p>
      </div>
      <div className="post_like_comment_share d-flex align-items-center justify-content-between mt-5">
        <div className="like_comment_share_icon">
          <span>
            <BiHeart className="fs-1" />
          </span>

          <span className="mx-3">
            <BiCommentDots className="fs-1" />
          </span>
          <span>
            <TbShare3 className="fs-1" />
          </span>
        </div>
        <div className="">
          <small className="mx-3 fs-5">38 Likes</small>
          <small className="fs-5">21 Comments</small>
        </div>
      </div>
    </div>
  );
};

export default Post;
