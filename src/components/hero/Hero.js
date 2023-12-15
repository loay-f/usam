import "./Hero.css";
import Nav from "../navbar/Nav";
import Button from "../button/Button";

const Hero = () => {
  return (
    <div className="hero">
      <div className="overlay">
        <div className="hero-text">
          <h1 className="hero-header">Bring Your Idea To Life</h1>
          <p className="hero-p">
            We identify and invest early in the world-class founders attacking
            large and global markets through disruptive technology.
          </p>
          <Button name="Apply Now" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
