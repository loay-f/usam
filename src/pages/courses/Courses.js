import "./Courses.css"
import ProgramCard from "../../components/program-card/ProgramCard";
import {NavLink} from "react-router-dom";

const Courses = () => {
    return (
        <div className="m-4">
            <h3 className="mb-4">Articles</h3>
            <div className="cards-divider">
                <div className="video-card">
                    <ProgramCard title="Unlocking the Power of OpenAI and ChatGPT"/>
                    <NavLink to={"/"} className="triangle-container">
                        <span className="triangle"></span>
                    </NavLink>
                </div>
                <div className="video-card">
                    <ProgramCard title="Unlocking the Power of OpenAI and ChatGPT"/>
                    <NavLink to={"/"} className="triangle-container">
                        <span className="triangle"></span>
                    </NavLink>
                </div>
                <div className="video-card">
                    <ProgramCard title="Unlocking the Power of OpenAI and ChatGPT"/>
                    <NavLink to={"/"} className="triangle-container">
                        <span className="triangle"></span>
                    </NavLink>
                </div>
                <div className="video-card">
                    <ProgramCard title="Unlocking the Power of OpenAI and ChatGPT"/>
                    <NavLink to={"/"} className="triangle-container">
                        <span className="triangle"></span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Courses