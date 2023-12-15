import "./Events.css";
import wrapper from "../../hoc/Wrapper";
import event from "../../assets/Screenshot 2023-12-13 125304.png";
import Button from "../button/Button";

const Events = () => {
  return (
    <>
      <h1 className="text-center h1-color">Upcoming events</h1>
      <div className="events-card-container">
        <div className="event-card">
          <img src={event} alt="event" className="event-img" />
          <div className="event-card-text">
            <h2>Designing for Longevity Workshop</h2>
            <p className="text-muted">Workshop goals:</p>
            <p className="text-muted">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="text-center">
            <Button name="Attend" className="attend-btn" />
          </div>
        </div>
        <div className="event-card">
          <img src={event} alt="event" className="event-img" />
          <div className="event-card-text">
            <h2>Designing for Longevity Workshop</h2>
            <p className="text-muted">Workshop goals:</p>
            <p className="text-muted">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="text-center">
            <Button name="Attend" className="attend-btn" />
          </div>
        </div>
      </div>
    </>
  );
};

export default wrapper(Events);
