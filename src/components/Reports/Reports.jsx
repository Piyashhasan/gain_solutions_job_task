import FilterBtn from "./FilterBtn/FilterBtn";
import ReportModal from "./ReportModal/ReportModal";
import "./Reports.css";
import Title from "./Title/Title";
import UserTable from "./UserTable/UserTable";

const Reports = () => {
  // --------------
  const mobileBreakPoint = window.matchMedia(
    "(min-width: 320px) and (max-width: 479px)"
  );
  const tabletBreakPoint = window.matchMedia(
    "(min-width: 480px) and (max-width: 767px)"
  );
  const LargDevice = window.matchMedia(
    "(min-width: 768px) and (max-width: 1023px)"
  );

  // ------------

  const openNav = () => {
    if (mobileBreakPoint.matches) {
      document.getElementById("mySidepanel").style.width = "95%";
    } else if (tabletBreakPoint.matches) {
      document.getElementById("mySidepanel").style.width = "380px";
    } else if (LargDevice.matches) {
      document.getElementById("mySidepanel").style.width = "500px";
    } else {
      document.getElementById("mySidepanel").style.width = "40%";
    }
  };

  const closeNav = () => {
    document.getElementById("mySidepanel").style.width = "0";
  };
  return (
    <>
      <section className="container mx-2 my-2">
        <ReportModal closeNav={closeNav} />
        <div className="title d-flex align-items-center justify-content-between">
          <h5 className="reports_title">Reports</h5>
          <div className="modal_button">
            <Title openNav={openNav} closeNav={closeNav} />
          </div>
        </div>
        <div className="filter_btn_group d-flex align-items-center justify-content-between my-5">
          <FilterBtn />
        </div>
        <div className="user_table bg-white rounded p-2 mt-3">
          <UserTable />
        </div>
      </section>
    </>
  );
};

export default Reports;
