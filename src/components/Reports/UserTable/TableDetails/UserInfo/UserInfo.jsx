import "./UserInfo.css";

const UserInfo = ({ user_info }) => {
  return (
    <>
      <div className="text-center user_id">
        <img
          className="img-fluid rounded-circle"
          src={user_info.img}
          alt="User"
        />
        <p className="mt-2">User name name one</p>
        <button className="btn rounded-pill">User ID - #123</button>
      </div>
      <div className="mt-5 text-center user_date_value mb-5">
        <div>
          <button className="btn w-75">
            <span className="noOne common_no">13 080,38</span> <br />
            <span className="data_value">Data no 1</span>
          </button>
        </div>
        <div>
          <button className="btn w-75 my-3">
            <span className="noTwo common_no">27 268,86</span> <br />
            <span className="data_value">Data no 1</span>
          </button>
        </div>
        <div>
          <button className="btn w-75">
            <span className="noThree common_no">14 188,48</span> <br />
            <span className="data_value">Data no 1</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
