import "./TransactionsCard.css";
import {FaPaypal} from "react-icons/fa";
import {BsFillWalletFill} from "react-icons/bs";
import {RiRefund2Line} from "react-icons/ri";

const TransactionsCard = () => {
    return (
        <div className="col-md-4 p-4 bg-white rounded-4">
            <h5 className="fw-bold m-0">Recent Transactions</h5>
            <p className="text-muted m-0 small">Income vs</p>
            <p className="text-muted small">Expense</p>
            <div className="d-flex flex-column gap-5">

                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center flex-grow-1 gap-4">
                        <FaPaypal className="rounded-2 fs-1 p-2 bg-blue"/>
                        <div>
                            <h6 className="fw-bold m-0">PayPal Transfer</h6>
                            <p className="text-muted small m-0">Money added</p>
                        </div>
                    </div>
                    <p className="fw-bold">+$6.235</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center flex-grow-1 gap-4">
                        <BsFillWalletFill className="rounded-2 fs-1 p-2 bg-red"/>
                        <div>
                            <h6 className="fw-bold m-0">PayPal Transfer</h6>
                            <p className="text-muted small m-0">Money added</p>
                        </div>
                    </div>
                    <p className="fw-bold">+$6.235</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center flex-grow-1 gap-4">
                        <RiRefund2Line className="rounded-2 fs-1 p-2 bg-blue"/>
                        <div>
                            <h6 className="fw-bold m-0">PayPal Transfer</h6>
                            <p className="text-muted small m-0">Money added</p>
                        </div>
                    </div>
                    <p className="fw-bold">+$6.235</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center flex-grow-1 gap-4">
                        <RiRefund2Line className="rounded-2 fs-1 p-2 bg-blue"/>
                        <div>
                            <h6 className="fw-bold m-0">PayPal Transfer</h6>
                            <p className="text-muted small m-0">Money added</p>
                        </div>
                    </div>
                    <p className="fw-bold">+$6.235</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center flex-grow-1 gap-4">
                        <RiRefund2Line className="rounded-2 fs-1 p-2 bg-blue"/>
                        <div>
                            <h6 className="fw-bold m-0">PayPal Transfer</h6>
                            <p className="text-muted small m-0">Money added</p>
                        </div>
                    </div>
                    <p className="fw-bold">+$6.235</p>
                </div>
                <button className="transactions-btn">View all Transactions</button>
            </div>
        </div>
    )
}

export default TransactionsCard
