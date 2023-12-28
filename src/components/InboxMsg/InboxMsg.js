import "./InboxMsg.css";
import avatar from "../../assets/avatar.jpg"
import {FaPhoneVolume} from "react-icons/fa";
import {IoMicOutline, IoSendOutline, IoVideocamOutline} from "react-icons/io5";
import {HiDotsVertical} from "react-icons/hi";
import Message from "../message/Message";
import {IoIosAttach} from "react-icons/io";


const InboxMsg = () => {
    return (<div className="col-md-7 col-sm-12 bg-white px-4 py-3 rounded-4 inbox-msg">
        <div className="d-flex justify-content-between align-items-center mb-2 border-bottom">
            <div className="d-flex gap-2">
                <img src={avatar} alt="avaatar" className="inbox-img"/>
                <div>
                    <h6 className="fw-bold mb-0">Loay fathy</h6>
                    <p className="small text-muted">Last Seen 5:45PM</p>
                </div>
            </div>
            <div className="d-flex gap-3 text-muted">
                <IoVideocamOutline className="pointer fs-4"/>
                <FaPhoneVolume className="pointer fs-5"/>
                <HiDotsVertical className="pointer fs-5"/>

            </div>
        </div>

        <div className="mt-4 overflow-y-scroll position-relative" style={{height: "100vh"}}>
            <Message color="#FFF" background="var(--main-color)"
                     text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                     dir="start"/>
            <Message color="#FFF" background="var(--main-color)" text="hlello" dir="start"/>
            <Message color="#FFF" background="var(--main-color)" text="hlello" dir="start"/>
            <Message color="black" background="#CCC" text="hlello" dir="end"/>
            <Message color="#FFF" background="var(--main-color)" text="hlello" dir="start"/>
            <Message color="#FFF" background="var(--main-color)" text="hlello" dir="start"/>
            <Message color="#FFF" background="var(--main-color)" text="hlello" dir="start"/>
            <Message color="#FFF" background="var(--main-color)" text="hlello" dir="start"/>

            <div
                className="pe-3 position-absolute bottom-0 left-0 right-0 w-100 d-flex rounded-5 align-items-center overflow-hidden justify-content-between"
                style={{background: "# pointerF4F4F4"}}>
                <input
                    type="search"
                    placeholder={`Your Message...`}
                    className="search w-75 rounded-0"
                />
                <div className="d-flex gap-2 align-items-center">
                    <IoMicOutline className="text-muted fs-5 pointer"/>
                    <IoIosAttach className="text-muted fs-5 pointer"/>
                    <IoSendOutline className="text-white rounded-circle p-2 pointer"
                                   style={{background: "var(--main-color)"}}/>
                </div>
            </div>
        </div>
    </div>)
}

export default InboxMsg