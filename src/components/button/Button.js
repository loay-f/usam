import "./Button.css";

const Button = (props) => {
  return (
    <button type="button" className={`button ${props.className}`}>
      {props.name}
    </button>
  );
};

export default Button;
