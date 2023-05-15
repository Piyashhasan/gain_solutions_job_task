import ModalContent from "./ModalContent/ModalContent";
import "./ReportModal.css";
const ReportModal = ({ closeNav }) => {
  return (
    <div>
      <div id="mySidepanel" className="sidepanel">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="px-5">Add User</h5>
          <a className="closebtn" onClick={closeNav}>
            ×
          </a>
        </div>
        <div className="mt-5 px-5">
            <ModalContent/>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
