import "./FilterBtn.css";
import {
  AiOutlineFilter,
  AiOutlineCalendar,
  AiOutlineHome,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";

const FilterBtn = () => {
  return (
    <>
      <button className="btn bg-white d-flex align-items-center">
        <AiOutlineFilter className="fs-5"/>
        <span className="mx-1"> Quick Filter</span>
      </button>
      <button className="btn bg-white rounded-pill d-flex align-items-center">
        <AiOutlineCalendar className="fs-5"/>
        <span className="mx-1">Period</span>
      </button>
      <button className="btn bg-white rounded-pill d-flex align-items-center">
        <AiOutlineHome className="fs-5"/>
        <span className="mx-1">Property</span>
      </button>
      <button className="btn bg-white rounded-pill d-flex align-items-center">
        <AiOutlineUsergroupAdd className="fs-5"/>
        <span className="mx-1">Tenant</span>
      </button>
      <div>
        <span>23 of 34 items found!</span>
      </div>
    </>
  );
};

export default FilterBtn;
