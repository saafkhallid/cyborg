import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import Navitem, { NavitemDropdown } from "../../components/Navitem/Navitem";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark cyborg-navbar  ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Navitem>
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </Navitem>

              <Navitem>
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Browse
                </a>
              </Navitem>

              <NavitemDropdown>
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Details
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item text-dark" href="#">
                      Steams
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-dark" href="#">
                      Profile
                    </a>
                  </li>
                </ul>
              </NavitemDropdown>
              <Navitem>
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Profile
                </a>
              </Navitem>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
