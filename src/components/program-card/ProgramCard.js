import "./ProgramCard.css";
import img from "../../assets/Screenshot 2023-12-13 125304.png"

const ProgramCard = (props) => {
    return (
        <div className="bg-white rounded-4 shadow">
            <img src={img} alt={props.alt} className="img-fluid"/>
            <div className="p-4">
                <h5 className="fw-bold">{props.title}</h5>
                <p className="text-muted h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s</p>
                {props.elements}
            </div>
        </div>
    )
}

export default ProgramCard