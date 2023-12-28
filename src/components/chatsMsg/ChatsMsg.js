import avatar from "../../assets/avatar.jpg";
import "./ChatsMsg.css"
import {FaRegFilePdf} from "react-icons/fa";
import {HiOutlineDotsVertical} from "react-icons/hi";

const ChatsMsg = () => {
    return (
        <div className="col-md-7 col-sm-12 bg-white px-4 py-3 rounded-4 inbox-msg">
            <div className="d-flex justify-content-between align-items-center mb-2 border-bottom">
                <div className="d-flex gap-2">
                    <img src={avatar} alt="avaatar" className="inbox-img"/>
                    <div>
                        <h6 className="fw-bold mb-0">Loay fathy</h6>
                        <p className="small text-muted">loayfathy404@gmail.com</p>
                    </div>
                </div>
                <HiOutlineDotsVertical className="pointer fs-4 text-muted"/>
            </div>
            <h6 className="my-3 fw-bold">Request Material Delivery</h6>
            <div className="text-muted small pb-2 border-bottom">
                <p className="m-0">Dear Mohamed Magdy,</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.</p>
                <ol className="text-dark mb-3">
                    <li className="mb-3">
                        Truck Delivery
                        <p className="m-0">Quantity: 1</p>
                        <p className="m-0">Can loading 5 Ton</p>
                    </li>
                    <li>
                        Truck Delivery
                        <p className="m-0">Quantity: 1</p>
                        <p className="m-0">Can loading 5 Ton</p>
                    </li>
                </ol>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s</p>
                <p>Warm Regard,</p>
                <p>Loay Fathy</p>
            </div>
            <h6 className="fw-bold my-3 fs-5">Attachment</h6>
            <div className="d-flex gap-3">
                <div className="pdf-parent">
                    <FaRegFilePdf className="pdf"/>
                    <p className="bg-white m-0 p-2 small">presentation</p>
                </div>
                <div className="pdf-parent">
                    <FaRegFilePdf className="pdf"/>
                    <p className="bg-white m-0 p-2 small">presentation</p>
                </div>
            </div>
        </div>
    )
}
export default ChatsMsg