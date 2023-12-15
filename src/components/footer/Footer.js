import "./Footer.css";
import wrapper from "../../hoc/Wrapper";
import { IoRocketOutline } from "react-icons/io5";
import Button from "../button/Button";
import Input from "../../input/Input";

const Footer = () => {
  return (
    <div className="container">
      <div>
        <div className="logo-parent w-auto">
          <IoRocketOutline className="logo" />
          <h4 className="logo-name">Start Hub</h4>
        </div>
        <p>
          Start Hub is an enabling platform fir entrepreneurs and startups,
          fostering innovation and helping new ideas reach the marketplace
        </p>
        <br />

        <h4>
          Contact Details <br /> info@starthub@gmail.com
        </h4>
      </div>
      <div>
        <h4 className="facilities">Facilities</h4>
        <ul>
          <li className="footer-li">Meeting Room</li>
          <li className="footer-li">Conference hall</li>
          <li className="footer-li">Border room</li>
          <li className="footer-li">Fashion Lab</li>
          <li className="footer-li">Editing suites</li>
          <li className="footer-li">All Facilities</li>
        </ul>
      </div>
      <div className="centered">
        <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
        <Input
          type="mail"
          placeholder="Enter your email"
          className="footer-input"
        />
        <Button name="Subscribe" />
      </div>
    </div>
  );
};

export default wrapper(Footer);
