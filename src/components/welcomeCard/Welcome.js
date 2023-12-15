import "./Welcome.css";
import Button from "../button/Button";

const Welcome = () => {
  return (
    <div className="welcome-card">
      <div className="welcome-card-text">
        <h2 className="welcome-header">
          Welcome back Mohamed! Check you dashboard
        </h2>
        <p className="welcome-p">
          You have earned 54% more than last month which is great thing.
        </p>
        <div className="welcome-earnings">
          <h2 className="welcome-header">$63,489.50</h2>
          <span className="welcome-year">Year 2022</span>
        </div>
        <div>
          <Button name="Check" className="w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
