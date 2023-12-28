import "./ContactsSlide.css";
import avatar from "../../assets/avatar.jpg"

const ContactsSlide = () => {
    return (
        <li className="d-flex align-items-center gap-3 pt-3 border-bottom pb-2 pointer">
            <img src={avatar} alt="avatar" className="rounded-circle avatar"/>
            <div className="flex-grow-1">
                <h6 className="fw-bold m-0">Loay Fathy</h6>
                <div className="align-items-stretch d-flex justify-content-between text-muted small">
                    <p className="m-0 mt-1">lorem ipsum </p>
                    <p className="m-0 mt-1">5:54PM</p>
                </div>
            </div>
        </li>
    )
}

export default ContactsSlide