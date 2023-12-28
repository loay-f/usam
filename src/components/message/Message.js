const Message = (props) => {
    return (
        <div className={`d-flex justify-content-${props.dir}`}>
            <div className="rounded-3 p-3 mb-3"
                 style={{maxWidth: "65%" ,color: props.color, background: props.background}}>{props.text}</div>
        </div>
    )
}

export default Message