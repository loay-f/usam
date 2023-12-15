import "./WhyJoin.css";
import wrapper from "../../hoc/Wrapper";
import Circle from "../circle/Circle";
import { PiBagBold } from "react-icons/pi";

const WhyJoin = () => {
  return (
    <>
      <h1 className="h1-color text-center mt-100 mb-100">Why join Start Hub</h1>
      <div className="why-to-join">
        <Circle
          title={<PiBagBold className="xl" />}
          desc="Simplified Business setup"
        />
        <Circle
          title={<PiBagBold className="xl" />}
          desc="Creative co-working spaces and specialised facilities"
        />
        <Circle
          title={<PiBagBold className="xl" />}
          desc="Workshops and networking events"
        />
      </div>
      <div className="flex-center">
        <Circle
          title={<PiBagBold className="xl" />}
          desc="Simplified Business setup"
        />
        <Circle
          title={<PiBagBold className="xl" />}
          desc="Simplified Business setup"
        />
      </div>
    </>
  );
};

export default wrapper(WhyJoin);
