import "./Feature.css";
import wrapper from "../../hoc/Wrapper";
import Button from "../button/Button";
import featureImg from "../../assets/pexels-drew-williams-3098619.jpg";

const Feature = () => {
  return (
    <>
      <h1 className="text-center mt-100">
        Make at <span className="feature-header">Start Hub</span>
      </h1>
      <div className="feature">
        <div className="feature-text">
          <p className="feature-p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <Button name="Learn more" />
        </div>
        <div className="items-center">
          <div className="feature-img-parent">
            <img src={featureImg} alt="Meeting" className="feature-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default wrapper(Feature);
