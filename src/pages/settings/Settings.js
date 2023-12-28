import "./Settings.css";
import img from "../../assets/avatar.jpg"
import {IoIosArrowForward} from "react-icons/io";

const Settings = () => {
    return (
        <div className="m-5">
            <h3 className="mb-4">Settings</h3>
            <div className="bg-white rounded-4 px-3 py-4">
                <div className="d-flex align-items-center gap-3 mb-5">
                    <img src={img} alt="account image" className="settings-img"/>
                    <div>
                        <h5 className="m-0">Mohamed Magdy</h5>
                        <p className="text-muted mx-0 my-1">mohamedmagdy@gmail.com</p>
                        <p className="text-muted m-0">01065579568</p>
                    </div>
                </div>
                <div className="d-flex flex-column gap-4 px-5">
                    <div className="d-flex bg-white pointer shadow-sm py-3 justify-content-between align-items-center w-100 px-3 rounded-4">
                        <p className="m-0">Credit card data</p>
                        <IoIosArrowForward className="fs-4" style={{color: "var(--main-color)"}}/>
                    </div>
                    <div className="d-flex bg-white pointer shadow-sm py-3 justify-content-between align-items-center w-100 px-3 rounded-4">
                        <p className="m-0">Credit card data</p>
                        <IoIosArrowForward className="fs-4" style={{color: "var(--main-color)"}}/>
                    </div>
                    <div className="d-flex bg-white pointer shadow-sm py-3 justify-content-between align-items-center w-100 px-3 rounded-4">
                        <p className="m-0">Credit card data</p>
                        <IoIosArrowForward className="fs-4" style={{color: "var(--main-color)"}}/>
                    </div>
                    <div className="d-flex bg-white pointer shadow-sm py-3 justify-content-between align-items-center w-100 px-3 rounded-4">
                        <p className="m-0">Credit card data</p>
                        <IoIosArrowForward className="fs-4" style={{color: "var(--main-color)"}}/>
                    </div>
                    <div className="text-end">
                        <button className="edit-btn">Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings