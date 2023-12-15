import "./Earnings.css";
import { AiOutlineRise } from "react-icons/ai";
import img from "../../assets/Screenshot 2023-12-15 013729.png";

const Earnings = () => {
  return (
    <div className="earnings">
      <div className="earnings-text">
        <p className="m-0">Earnings</p>
        <h2 className="h1-color">$678,298</h2>
        <div className="percent">
          <AiOutlineRise className="green" />
          <span> +9%</span>
        </div>
      </div>
      <img src={img} alt="sh*t" />
    </div>
  );
};

export default Earnings;
