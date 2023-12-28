import "./Chats.css";
import InboxMsg from "../../components/InboxMsg/InboxMsg";
import ChatContacts from "../../components/ChatContacts/ChatContacts";

const Chats = () => {
    return (
        <div className="m-5">
            <h3 className="mb-4">Chats</h3>
            <div className="row gap-3">
                <ChatContacts/>
                <InboxMsg/>
            </div>
        </div>
    )
}

export default Chats