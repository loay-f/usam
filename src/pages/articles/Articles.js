import "./Articles.css";
import ProgramCard from "../../components/program-card/ProgramCard";
import {NavLink} from "react-router-dom";
import {FaArrowRight} from "react-icons/fa";


const Articles = (props) => {
    const learnMore = <NavLink to={"./1"} className="learn-more">Learn more <FaArrowRight
        className="right-arrow"/></NavLink>
    return (
        <div className="m-4">
            <h3 className="mb-4">Articles</h3>
            <div className="cards-divider">
                <ProgramCard title="Design for how people think" elements={learnMore} />
                <ProgramCard title="Design for how people think" elements={learnMore} />
                <ProgramCard title="Design for how people think" elements={learnMore} />
                <ProgramCard title="Design for how people think" elements={learnMore} />
            </div>
        </div>
    )
}

export default Articles