import "./Dashboard.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { CiBellOn, CiMail } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import avatar from "../../assets/avatar.jpg";
import { FaAlignJustify } from "react-icons/fa";
import { useRef } from "react";
import Welcome from "../../components/welcomeCard/Welcome";
import ProductGoal from "../../components/productGoal/ProductGoal";
import Earnings from "../../components/earnings/Earnings";
import Chart from "../../components/chart/Chart";

const Dashboard = () => {
  const sidebar = useRef(null);
  const openSidebar = () => {
    sidebar.current.style.display = "block";
  };
  const closeSidebar = () => {
    sidebar.current.style.display = "none";
  };

  return (
    <div className="dashboard">
      <Sidebar className="open-close" refs={sidebar} close={closeSidebar} />

      <div className="page">
        <nav className="dashboard-nav">
          <div className="d-flex">
            <FaAlignJustify className="side-bar-btn" onClick={openSidebar} />
            <input
              type="search"
              placeholder={`Search....`}
              className="search"
            />
          </div>
          <div className="horizontal-center">
            <CiMail className="dashboard-nav-icons" />
            <CiBellOn className="dashboard-nav-icons" />
            <div className="horizontal-center">
              <p className="avatar-name">loay fathy</p>
              <img src={avatar} className="rounded-full" alt="profile" />
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </div>
          </div>
        </nav>
        <div className="dashboard-cards">
          <h1 className="h1-color">Dashboard</h1>
          <div className="cards-parent">
            <div className="welcome-parent">
              <Welcome />
            </div>
            <div className="small-cards">
              <ProductGoal />
              <Earnings />
            </div>
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
