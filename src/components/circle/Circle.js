import "./Circle.css";

const Circle = (props) => {
  return (
    <div className={`step ${props.className}`}>
      <div className="step-circle">
        <h4 className="text-center">
          <div>{props.num}</div>
          {props.title}
        </h4>
      </div>
      <div className="text-center circle-text">
        <p className="text-muted circle-p">{props.desc}</p>
      </div>
    </div>
  );
};

export default Circle;
