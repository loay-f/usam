import "./Sidebar.css";
import { IoRocketOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import {
  MdOutlineAnalytics,
  MdOutlineArticle,
  MdOutlineChat,
  MdOutlineWindow,
} from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { CiMail, CiSettings } from "react-icons/ci";
import React from "react";
import { SlCalender } from "react-icons/sl";
import {IoMdClose} from "react-icons/io";

const Sidebar = (props) => {
  return (
    <div className={`dashboard-side-bar ${props.className}`} ref={props.refs}>
      <div className="close" onClick={props.close}>
        <IoMdClose />
      </div>
      <div className="logo-parent">
        <IoRocketOutline className="logo" />
        <h4 className="logo-name h1-color mt-100">Start Hub</h4>
      </div>

      <ul className="dashboard-ul">
        <li>
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive ? `active-dashboard-link` : "dashboard-link"
            }
          >
            <MdOutlineWindow />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/programs"}
            className={({ isActive }) =>
              isActive ? `active-dashboard-link` : "dashboard-link"
            }
          >
            <FaRegNewspaper />
            Programs
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/courses"}
            className={({ isActive }) =>
              isActive ? `active-dashboard-link` : "dashboard-link"
            }
          >
            <GoVideo />
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/articles"}
            className={({ isActive }) =>
              isActive ? `active-dashboard-link` : "dashboard-link"
            }
          >
            <MdOutlineArticle />
            Article
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/inbox"}
            className={({ isActive }) =>
              isActive ? `active-dashboard-link line` : "dashboard-link line"
            }
          >
            <CiMail />
            Inbox
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/chats"}
            className={({ isActive }) =>
              isActive ? `active-dashboard-link chat` : "dashboard-link chat"
            }
          >
            <MdOutlineChat />
            Chats
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/calender"}
            className={({ isActive }) =>
              isActive ? `active-dashboard-link` : "dashboard-link"
            }
          >
            <SlCalender />
            Calender
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/analytics"}
            className={({ isActive }) =>
              isActive ? `active-dashboard-link` : "dashboard-link"
            }
          >
            <MdOutlineAnalytics />
            Analytics
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/settings"}
            className={({ isActive }) =>
              isActive ? `active-dashboard-link` : "dashboard-link"
            }
          >
            <CiSettings />
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
