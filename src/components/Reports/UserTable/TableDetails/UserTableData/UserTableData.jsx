import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import "./UserTableData.css";

const UserTableData = ({ table_data }) => {
  const [showAllRows, setShowAllRows] = useState(false);

  const renderRows = () => {
    if (showAllRows) {
      return table_data.map((data) => (
        <tr key={data.id}>
          <td>{data.property}</td>
          <td>{data.property_id}</td>
          <td>{data.apartment_id}</td>
          <td>{data.type}</td>
          <td>{data.number}</td>
          <td>{data.date_1}</td>
          <td>{data.additional_data}</td>
          <td>{data.date_2}</td>
          <td>{data.amount}</td>
          <td>{data.balance}</td>
        </tr>
      ));
    } else {
      return table_data.slice(0, 6).map((data) => (
        <tr key={data.id}>
          <td>{data.property}</td>
          <td>{data.property_id}</td>
          <td>{data.apartment_id}</td>
          <td>{data.type}</td>
          <td>{data.number}</td>
          <td>{data.date_1}</td>
          <td>{data.additional_data}</td>
          <td>{data.date_2}</td>
          <td>{data.amount}</td>
          <td>{data.balance}</td>
        </tr>
      ));
    }
  };

  return (
    <div className="row">
      <div className="table">
        <table className="table_content">
          <thead>
            <tr>
              <th>Property</th>
              <th>Property ID</th>
              <th>Apartment ID</th>
              <th>Type</th>
              <th>Number</th>
              <th>Date 1</th>
              <th>Additional data</th>
              <th>Date 2</th>
              <th>Amount</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>
        <button
          className="btn btn-white my-4 fs-5 d-flex align-items-center text-capitalize"
          onClick={() => setShowAllRows(!showAllRows)}
        >
          {showAllRows
            ? `Show Less (${table_data.length - table_data.length})`
            : `View More (${table_data.length - 6})`}
          <AiOutlineDown className="mx-2" />
        </button>
      </div>
    </div>
  );
};

export default UserTableData;
