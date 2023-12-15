import "./ProductGoal.css";
import {IoChatbubbleOutline} from "react-icons/io5";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";

const ProductGoal = () => {
    const styles = {
        color: "red"
    }
    return (
      <div className="goal-card">
        <div className="goal-text">
          <div className="flex-10">
            <h2 className="goal-header">3267</h2>
            <p className="m-0">Product Goal</p>
          </div>
          <IoChatbubbleOutline className="goal-icon" />
        </div>
        <TooltipComponent content="65%" style={styles}>
            <div className="progress-bar"></div>
        </TooltipComponent>
      </div>
    );
};

export default ProductGoal;
