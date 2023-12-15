import "./ServiceCard.css";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = (props) => {
  return (
    <div className="service-card">
      <img src={props.img} alt={props.alt} />
      <div className="card-text">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <NavLink to={props.src} className="learn-more">
          Learn more
          <FaArrowRight className="right-arrow" />
        </NavLink>
      </div>
    </div>
  );
};

export default ServiceCard;
