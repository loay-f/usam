import "./Inbox.css";
import InboxContacts from "../../components/inbox-contacts/InboxContacts";
import InboxMsg from "../../components/InboxMsg/InboxMsg";
import ChatsMsg from "../../components/chatsMsg/ChatsMsg";

const Inbox = () => {
    return (
        <div className="m-5">
            <h3 className="mb-4">Inbox</h3>
            <div className="row gap-3">
                <InboxContacts/>
                <ChatsMsg/>
            </div>
        </div>
    )
}

export default Inbox