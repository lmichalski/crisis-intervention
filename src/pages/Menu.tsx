import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "./Menu.scss";

interface iProps {
  startNewGame: () => void;
  resumeGame: () => void;
  gamesaved: boolean;
  strings: {
    title: string;
  };
  pagesToShow: {
    principles: boolean;
  };
}

const Menu: React.FC<iProps> = ({

  pagesToShow: { principles: showPrinciples },
}) => {

  return (
    <div className="Menu container">
      <div className="panel menu">
        <div className="main">
          <div className="content">
            <ul className="controls">
              <li>
                <Link to={`/instructions/`}>
                  <FormattedMessage
                    id="Menu.instructions"
                    defaultMessage="1. How to Play"
                    description="How to Play Button"
                  />
                </Link>
              </li>
              <li>
                <Link to={`/scenario/`}>
                  <FormattedMessage
                    id="Menu.scenario"
                    defaultMessage="2. Scenario"
                    description="Scenario Button"
                  />
                </Link>
              </li>
              <li>
                <Link to={`/objectives/`}>
                  <FormattedMessage
                    id="Menu.objectives"
                    defaultMessage="3. Learning Objectives"
                    description="Objectives Button"
                  />
                </Link>
              </li>
              {showPrinciples ? (
                <li>
                  <Link to={`/principles/`}>
                    <FormattedMessage
                      id="Menu.principles"
                      defaultMessage="4. Essential Principles"
                      description="Principles Button"
                    />
                  </Link>
                </li>
              ) : null}
              <li>
                <Link to={`/chart/`}>
                  <FormattedMessage
                    id="Menu.chart"
                    defaultMessage="5. Client Chart"
                    description="Client chart button"
                  />
                </Link>
              </li>
              <li>
                <Link to={`/resources/`}>
                  <FormattedMessage
                    id="Menu.resources"
                    defaultMessage="6. Resources"
                    description="Resources button"
                  />
                </Link>
              </li>

              <li>
                <Link to={`/research/`}>
                  <FormattedMessage
                    id="Menu.research"
                    defaultMessage="7. Research"
                    description="Research button"
                  />
                </Link>
              </li>

              <li>
                <Link to={`/credits/`}>
                  <FormattedMessage
                    id="Menu.credits"
                    defaultMessage="8. Credits"
                    description="Credits Button"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
