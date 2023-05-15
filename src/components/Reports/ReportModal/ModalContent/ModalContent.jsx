import "./ModalContent.css";
import { BiSearchAlt } from "react-icons/bi";

import modalUserInfo from "../../../../fakeData/modalUserInfo";

const ModalContent = () => {
  return (
    <div className="modal_content">
      <p>Search Member</p>
      <div className="input-icons d-flex align-items-center">
        <BiSearchAlt className="search_icon" />
        <input
          className="input-field"
          type="text"
          placeholder="Type name or email"
        />
      </div>

 

      <div className="add_every_one mt-5 d-flex align-items-center justify-content-between">
        <p className="">Add everyone from this list</p>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
          />
        </div>
      </div>
      <hr />
      <div className="all_user_list mt-5">
        <h5 className="mb-5">All Users</h5>
        {modalUserInfo.map((userInfo) => {
          return (
            <div
              key={userInfo.id}
              className="user_list mt-4 d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center">
                <img src={userInfo.img} alt="something" className="img-fluid" />
                <small className="mx-3">{userInfo.name}</small>
              </div>
              <div>
                <small>{userInfo.email}</small>
              </div>
            </div>
          );
        })}
      </div>
      <div className="modal_bottom_btn mt-5 d-flex align-item-center justify-content-end">
        <div className="mx-3">
          <button className="btn border">Cancel</button>
        </div>
        <div>
          <button className="btn btn-primary">Add User</button>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
