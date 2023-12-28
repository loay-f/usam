import ContactsSlide from "../contacts-slide/ContactsSlide";

const ChatContacts = () => {
    return (

        <div className="bg-white rounded-4 p-4 col-md-4">
            <input
                type="search"
                placeholder={`Search....`}
                className="search w-100"
            />
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

export default ChatContacts
