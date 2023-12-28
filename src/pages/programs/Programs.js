import ProgramCard from "../../components/program-card/ProgramCard";
import Button from "../../components/button/Button";

const Programs = () => {

    const elements = <>
        <div className="d-flex gap-3 mt-4"><h6>Program Starts: 01 Mar 2024</h6> <h6>Program End: 25 jun
            2024</h6>
        </div>
        <div className="text-center mt-2">
            <Button name="Apply now" className="p-4 py-2 text-center rounded-5"/>
        </div>
    </>

    return (
        <div className="m-4">
            <h3 className="mb-4">Programs</h3>
            <div className="cards-divider">
                <ProgramCard title="Design for how people think" elements={elements}/>
                <ProgramCard title="Design for how people think" elements={elements}/>
            </div>
        </div>)
}

export default Programs