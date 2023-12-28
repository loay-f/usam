import "./Analitycs.css";
import TransactionsCard from "../../components/transactionsCard/TransactionsCard";
import PerformanceCard from "../../components/performanceCard/PerformanceCard";

const Analytics = () => {
    return (
        <div className="m-4">
            <h3 className="mb-4">Analytics</h3>
            <div className="row gap-4">
                <TransactionsCard/>
                <PerformanceCard/>
            </div>
        </div>
    )
}

export default Analytics