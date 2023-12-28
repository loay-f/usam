import "./DashboardNav.css";
import {FaAlignJustify} from "react-icons/fa";
import {CiBellOn, CiMail} from "react-icons/ci";
import avatar from "../../assets/avatar.jpg";
import {MdKeyboardArrowDown} from "react-icons/md";
import {useRef} from "react";
import Sidebar from "../sidebar/Sidebar";
import {Outlet} from "react-router-dom";

const DashboardNav = () => {
    const sidebar = useRef(null);
    const openSidebar = () => {
        sidebar.current.style.display = "block";
    };
    const closeSidebar = () => {
        sidebar.current.style.display = "none";
    };

    return (<div className="dashboard-divider">
        <Sidebar className="open-close" refs={sidebar} close={closeSidebar}/>

        <div>
            <nav className="dashboard-nav">
                <div className="d-flex">
                    <FaAlignJustify className="side-bar-btn" onClick={openSidebar}/>
                    <input
                        type="search"
                        placeholder={`Search....`}
                        className="search"
                    />
                </div>
                <div className="horizontal-center">
                    <CiMail className="dashboard-nav-icons"/>
                    <CiBellOn className="dashboard-nav-icons"/>
                    <div className="horizontal-center">
                        <p className="avatar-name">loay fathy</p>
                        <img src={avatar} className="nav-avatar" alt="profile"/>
                        <MdKeyboardArrowDown className="text-gray-400 text-14"/>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    </div>)
}

export default DashboardNav