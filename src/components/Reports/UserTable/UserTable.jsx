import allData from "../../../fakeData/allData";
import TableDetails from "./TableDetails/TableDetails";
import "./UserTable.css";

const UserTable = () => {
  return (
    <div className="">
      <div className="row px-3 border-bottom">
        <div className="col-6 col-md-3">
          <p className="mt-3">Users</p>
        </div>
        <div className="col-6 col-md-9">
          <p className="mt-3">Other info</p>
        </div>
      </div>
      <div className="row mt-3 px-3">
        {/* <TableDetails /> */}
        {allData.map((allData) => (
          <TableDetails key={allData.id} data={allData} />
        ))}
      </div>
    </div>
  );
};

export default UserTable;
