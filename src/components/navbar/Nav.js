import "./Nav.css";
import {NavLink, Outlet} from "react-router-dom";
import { IoRocketOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

const Nav = () => {
  const [isMini, setIsMini] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="big-nav">
          <div className="logo-parent">
            <IoRocketOutline className="logo" />
            <h4 className="logo-name">Start Hub</h4>
          </div>
          <ul className="links">
            <li>
              <NavLink to={"./"} className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"./about"} className="nav-link">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to={"./news"} className="nav-link">
                News
              </NavLink>
            </li>
            <li>
              <NavLink to={""} className="nav-link">
                Programs
              </NavLink>
            </li>
            <li>
              <NavLink to={"./partners"} className="nav-link">
                Partners
              </NavLink>
            </li>
          </ul>
          <NavLink to={"./login"} className="nav-link nav-login">
            Login
          </NavLink>
        </div>

        <div className="mini-nav">
          <div className="logo-parent">
            <IoRocketOutline className="logo" />
            <h4 className="logo-name">Start Hub</h4>
          </div>
          <AiOutlineMenu onClick={() => setIsMini(true)} className="pointer open-sidebar" />
          {isMini && (
            <div className="side-bar">
              <IoIosClose
                onClick={() => setIsMini(false)}
                className="pointer close-sidebar"
              />
              <ul className="mini-links">
                <li>
                  <NavLink to={"./"} className="mini-nav-link">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"./about"} className="mini-nav-link">
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"./news"} className="mini-nav-link">
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink to={""} className="mini-nav-link">
                    Programs
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"./partners"} className="mini-nav-link">
                    Partners
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
