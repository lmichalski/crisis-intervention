import { FormattedMessage } from "react-intl";
import "./Chart.scss";

interface iProps {
  image: string;
  proceedToScenario: () => void;
}

const Chart: React.FC<iProps> = ({ image, proceedToScenario }) => {
  return (
    <div className="Chart container">
      <div className="Chart__panel panel info">
        <header>
          <h2>Client Chart</h2>
        </header>
        <img
          className="chart"
          src="/images/chart_image.png"
          alt="Client's Chart with some background information for this visit"
        />
        <button className="Chart__proceed-button" onClick={proceedToScenario}>
          <FormattedMessage
            id="Chart.proceedToScenario"
            defaultMessage="Proceed to the Scenario"
            description="Proceed to scenario button"
          />
        </button>
      </div>
    </div>
  );
};

export default Chart;
