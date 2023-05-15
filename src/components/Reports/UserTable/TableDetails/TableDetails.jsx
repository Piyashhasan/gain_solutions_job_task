import "./TableDetails.css";
import UserInfo from "./UserInfo/UserInfo";
import UserTableData from "./UserTableData/UserTableData";

const TableDetails = ({ data }) => {
  const { user_info, table_data } = data;

  return (
    <div className="row mb-5">
      <div className="col-md-3 user_info text-center mt-3">
        <UserInfo user_info={user_info} />
      </div>
      <div className="col-md-9 user_data mt-3">
        <UserTableData table_data={table_data} />
      </div>
    </div>
  );
};

export default TableDetails;
