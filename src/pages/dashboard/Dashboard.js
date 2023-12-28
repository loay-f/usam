import "./Dashboard.css";
import Sidebar from "../../components/sidebar/Sidebar";
import {CiBellOn, CiMail} from "react-icons/ci";
import {MdKeyboardArrowDown} from "react-icons/md";
import avatar from "../../assets/avatar.jpg";
import {FaAlignJustify} from "react-icons/fa";
import {useRef} from "react";
import Welcome from "../../components/welcomeCard/Welcome";
import ProductGoal from "../../components/productGoal/ProductGoal";
import Earnings from "../../components/earnings/Earnings";
import Chart from "../../components/chart/Chart";

const Dashboard = () => {
    return (
        <div className="page">
            <div className="dashboard-cards">
                <h1 className="h1-color">Dashboard</h1>
                <div className="cards-parent">
                    <div className="welcome-parent">
                        <Welcome/>
                    </div>
                    <div className="small-cards">
                        <ProductGoal/>
                        <Earnings/>
                    </div>
                    <Chart/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
