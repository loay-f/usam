import "./Input.css";

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={`input ${props.className}`}
    />
  );
};

export default Input;
