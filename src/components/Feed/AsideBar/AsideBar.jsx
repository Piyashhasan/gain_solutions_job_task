import "./AsideBar.css";
import { AiOutlinePlus } from "react-icons/ai";
import EventItems from "./EventItems/EventItems";

const AsideBar = () => {
  return (
    <div className="feed_aside px-3">
      <div className="d-flex align-items-center justify-content-between ">
        <small>Upcoming event</small>
        <span>
          <AiOutlinePlus className="fs-3"/>
        </span>
      </div>
      <div className="event_item">
        <EventItems />
      </div>
    </div>
  );
};

export default AsideBar;
