import "./Founder.css";
import wrapper from "../../hoc/Wrapper";
import abdallah from "../../assets/abdallah.jpeg";
import { RiDoubleQuotesL } from "react-icons/ri";

const Founder = () => {
  return (
    <>
      <h1 className="text-center">What our founder says</h1>
      <div className="founder-section">
        <img src={abdallah} alt="Founder" className="founder-img" />
        <div>
          <h1>Johnny</h1>
          <RiDoubleQuotesL className="quotes" />
          <p className="founder-talk">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <span className="sign">
              Johnny Teicke,
              <br />
              CEO and Founder
            </span>
          </p>
          <br />
          <div className="right">
            <RiDoubleQuotesL className="end-quotes" />
          </div>
        </div>
      </div>
    </>
  );
};

export default wrapper(Founder);
