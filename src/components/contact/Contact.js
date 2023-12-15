import "./Contact.css";
import wrapper from "../../hoc/Wrapper";
import callCenter from "../../assets/call-center-customer-service-tips-scaled.jpeg"
import Input from "../../input/Input";
import Button from "../button/Button";

const Contact = () => {
  return (
    <>
      <div className="text-center mt-100">
        <h1 className="h1-color">Contact with us</h1>
      </div>
        <div className="contact-page">
            <div className="contact-form">
                <Input type="mail" placeholder="E-mail" className="contact-mail" />
                <textarea placeholder="Your message......" className="contact-msg"></textarea>
                <div className="text-center">
                    <Button name="Submit" className="submit-form" />
                </div>
            </div>
            <div className="w-50">
                <img src={callCenter} alt="cutomer service" className="w-100" />
            </div>
        </div>
    </>
  );
};

export default wrapper(Contact);
