import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillBell } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { ImEarth } from "react-icons/im";
import { BiPieChartAlt } from "react-icons/bi";
import { BiBriefcaseAlt } from "react-icons/bi";
import { BiTrendingUp } from "react-icons/bi";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Dashboard.css";
import profileIcon from "../assets/img/Vector.png";

const Dashboard = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div className="dashboard">
      {/* <!--Main Navigation--> */}
      <header>
        {/* Sidebar Nav Bar Start */}
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar">
          <div className="position-sticky nav_item">
            <div className="list-group list-group-flush mx-3 mt-5">
              <a
                href="/feed"
                className="list-group-item py-3 d-flex align-items-center"
                aria-current="true"
              >
                <BiPieChartAlt
                  className={
                    pathName === "/feed" ? "active" : "nonActive"
                  }
                />
                <span className="mx-3">Feed</span>
              </a>
              <a
                href="/accounts"
                className="list-group-item py-3 d-flex align-items-center"
              >
                <BiBriefcaseAlt
                  className={pathName === "/accounts" ? "active" : "nonActive"}
                />
                <span className="mx-3">Accounts</span>
              </a>
              <a
                href="/reports"
                className="list-group-item  py-3 d-flex align-items-center"
              >
                <BiTrendingUp
                  className={pathName === "/reports" ? "active" : "nonActive"}
                />
                <span className="mx-3">Reports</span>
              </a>
            </div>
          </div>
        </nav>
        {/* Sidebar Nav Bar End  */}

        {/*  Top Navbar Start */}
        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light fixed-top"
        >
          {/* <!-- Container wrapper --> */}
          <div className="container-fluid bg-white">
            {/* <!-- Toggle button --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <GiHamburgerMenu className="fs-1" />
            </button>

            {/* <!-- Right links --> */}
            <ul className="navbar-nav ms-auto flex-row align-items-center">
              {/* <!-- Icon --> */}
              <li className="nav-item mx-2">
                <a className="nav-link me-3 me-lg-0" href="#">
                  <ImEarth className="fs-3" />
                </a>
              </li>
              {/* <!-- Icon --> */}
              <li className="nav-item mx-2">
                <a className="nav-link me-3 me-lg-0" href="#">
                  <BsSun className="fs-3" />
                </a>
              </li>

              {/* <!-- Notification dropdown --> */}
              <li className="nav-item dropdown mx-2">
                <a className="nav-link me-3 me-lg-0">
                  <AiFillBell className="fs-3" />
                </a>
              </li>

              <div className="street_line"></div>

              {/* <!-- Icon --> */}
              <li className="mt-2 name_user">
                <small className="fs-4 text-gray">John Doe</small> <br />
                <small className="fs-5">Admin</small>
              </li>

              {/* <!-- Avatar --> */}
              <li className="nav-item dropdown mx-4">
                <a
                  className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={profileIcon}
                    className="rounded-circle img-fluid"
                    height="35"
                    alt=""
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end mt-2 mx-3"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item fs-4" href="#">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fs-4" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fs-4" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* <!-- Container wrapper --> */}
        </nav>
        {/* Top Navbar End */}
      </header>
      {/* <!--Main Navigation--> */}

      {/* <!--Main layout--> */}
      <main style={{ marginTop: "45px", backgroundColor: "#E5E5E5" }}>
        <div className="container pt-4">
          <section className="mb-4">
            <Outlet />
          </section>
        </div>
      </main>
      {/* <!--Main layout--> */}
    </div>
  );
};

export default Dashboard;
