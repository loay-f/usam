import "./InboxContacts.css";
import {useState} from "react";
import ContactsSlide from "../contacts-slide/ContactsSlide";

const InboxContacts = () => {

    const [type, setType] = useState("primary")

    return (

        <div className="bg-white rounded-4 p-4 col-md-4">
            <div className="bg-body-tertiary rounded-3 d-flex align-items-center justify-content-around py-2">
                <button className={type === "primary" && `rounded-3 bg-white shadow border-0 px-2`}>Primary</button>
                <button className={`rounded-3 bg-transparent border-0 px-2`}>Primary</button>
                <button className={`rounded-3 bg-transparent border-0 px-2`}>Primary</button>
            </div>
            <ul className="p-0 mt-4">
                <ContactsSlide/>
                <ContactsSlide/>
                <ContactsSlide/>
                <ContactsSlide/>
                <ContactsSlide/>
                <ContactsSlide/>
                <ContactsSlide/>
            </ul>
        </div>

    )
}

export default InboxContacts
