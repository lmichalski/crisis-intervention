import { FormattedMessage } from "react-intl";
import "./Objectives.scss";

interface iProps {
  strings: {
    introCards: string[];
  };
}

const Objectives: React.FC<iProps> = ({ strings }) => {
  return (
    <div className="container">
      <div className="panel info">
        <header>
          <h2>
            <FormattedMessage
              id="Scenario.title"
              defaultMessage="Client Background"
              description="Scenario title"
            />
          </h2>
        </header>
        <div className="main">
          <div className="content cf">
            <ul>
              {strings.introCards.map((list_item) => (
                <li>{list_item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
