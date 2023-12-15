import "./BecomePartner.css";
import wrapper from "../../hoc/Wrapper";
import Circle from "../circle/Circle";

const BecomePartner = (props) => {
  return (
    <>
      <div className="text-center">
        <h1 className="h1-color">{props.title}</h1>
        <p className="text-muted">
          Follow the steps ot join the dynamic success driven world OF Start Hub
        </p>
      </div>
      <div className="steps-parent">
        <div className="step">
          <div className="step-circle">
            <h3 className="text-center">
              <div>1</div>
              Apply
            </h3>
          </div>
          <div className="text-center circle-text">
            <p className="text-muted">Submit the following items:</p>
            <ol className="text-muted">
              <li style={{ listStyle: "circle" }}>Online application form</li>
              <li style={{ listStyle: "circle" }}>
                Business Plan Presentation
              </li>
            </ol>
          </div>
        </div>

        <Circle
          className="up"
          num="2"
          title="Shortlisting"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."
        />

        <Circle
          className="down"
          num="3"
          title="Shortlisting"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."
        />

        <Circle
          className="up"
          num="4"
          title="Shortlisting"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."
        />

        <Circle
          className=""
          num="5"
          title="Shortlisting"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."
        />
      </div>
    </>
  );
};

export default wrapper(BecomePartner);
