import "./PerformanceCard.css"
import {PiDotsNineLight} from "react-icons/pi";
import {MdOutlineShowChart} from "react-icons/md";

const PerformanceCard = () => {
    return (

        <div className="col-7 p-4 bg-white rounded-4">
            <h5 className="fw-bold m-0">Product Performances</h5>
            <p className="text-muted mt-1 small">How it performs</p>
            <div className="d-flex gap-4">
                <div className="performance-item performance-item-active">
                    <PiDotsNineLight className="fs-2"/>
                    <p className="m-0">Apps</p>
                </div>
                <div className="performance-item">
                    <PiDotsNineLight className="fs-2"/>
                    <p className="m-0">Apps</p>
                </div>
                <div className="performance-item">
                    <PiDotsNineLight className="fs-2"/>
                    <p className="m-0">Apps</p>
                </div>
                <div className="performance-item">
                    <PiDotsNineLight className="fs-2"/>
                    <p className="m-0">Apps</p>
                </div>
                <div className="performance-item">
                    <PiDotsNineLight className="fs-2"/>
                    <p className="m-0">Apps</p>
                </div>
            </div>
            <ul className="p-0 pb-3 border-bottom mt-4 d-flex gap-3 align-items-center justify-content-between text-muted">
                <li>Assigned</li>
                <li>Assigned</li>
                <li>Assigned</li>
                <li>Assigned</li>
                <li>Assigned</li>
            </ul>
            <div className="d-flex justify-content-between border-bottom mt-3 align-items-center">
                <div>
                    <h6>Minecraft App</h6>
                    <p className="text-muted small">Jason Roy</p>
                </div>
                <p>73.2%</p>
                <span className="px-5 rounded-3 bg-red text-info h-fit-content">low</span>
                <p>$3.5K</p>
                <MdOutlineShowChart />
            </div>
            <div className="d-flex justify-content-between border-bottom mt-3 align-items-center">
                <div>
                    <h6>Minecraft App</h6>
                    <p className="text-muted small">Jason Roy</p>
                </div>
                <p>73.2%</p>
                <span className="px-5 rounded-3 bg-red text-info h-fit-content">low</span>
                <p>$3.5K</p>
                <MdOutlineShowChart />
            </div>
            <div className="d-flex justify-content-between border-bottom mt-3 align-items-center">
                <div>
                    <h6>Minecraft App</h6>
                    <p className="text-muted small">Jason Roy</p>
                </div>
                <p>73.2%</p>
                <span className="px-5 rounded-3 bg-red text-info h-fit-content">low</span>
                <p>$3.5K</p>
                <MdOutlineShowChart />
            </div>
            <div className="d-flex justify-content-between mt-3 align-items-center">
                <div>
                    <h6>Minecraft App</h6>
                    <p className="text-muted small">Jason Roy</p>
                </div>
                <p>73.2%</p>
                <span className="px-5 rounded-3 bg-red text-info h-fit-content">low</span>
                <p>$3.5K</p>
                <MdOutlineShowChart />
            </div>
        </div>
    )
}

export default PerformanceCard
