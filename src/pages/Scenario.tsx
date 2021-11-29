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
          <div>
            Kelly's roommate Talia is worried about Kelly's late nights of
            partying and drinking. Kelly has been more distant towards Talia and
            has not been in contact with her family for a long time. Talia has
            expressed concern for Kelly and urged her to make an appointment to
            address her current state.
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
