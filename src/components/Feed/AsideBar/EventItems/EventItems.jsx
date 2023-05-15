import "./EventItems.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";

import eventImg from "../../../../assets/event/eventPic.png";
const EventItems = () => {
  return (
    <>
      <div className="event_one">
        <div className="d-flex align-items-center mt-4">
          <img className="img-fluid" src={eventImg} alt="event picture" />
          <p className="event_title my-0 mx-2">
            Join us for our Earth Day Clean-up Event!
          </p>
        </div>
        <div className="event_schedule mt-4">
          <div>
            <span>
              <BiCalendar />
            </span>
            <small className="mx-2">16.03.2023 - 18.03.2023</small>
          </div>
          <div>
            <span>
              <AiOutlineClockCircle />
            </span>
            <small className="mx-2">10:00 am - 08:00 pm</small>
          </div>
          <div>
            <span>
              <GrLocation />
            </span>
            <small className="mx-2">Dhaka, Bangladesh</small>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="d-flex align-items-center">
          <img className="img-fluid" src={eventImg} alt="event picture" />
          <p className="event_title my-0 mx-2">Creators Meetup</p>
        </div>
        <div className="event_schedule mt-4">
          <div>
            <span>
              <BiCalendar />
            </span>
            <small className="mx-2">02.05.2023</small>
          </div>
          <div>
            <span>
              <AiOutlineClockCircle />
            </span>
            <small className="mx-2">05:00 pm - 12:00 am</small>
          </div>
          <div>
            <span>
              <GrLocation />
            </span>
            <small className="mx-2">TBA</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventItems;
