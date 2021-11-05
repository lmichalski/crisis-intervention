import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

interface iProps {
  startNewGame: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  resumeGame: (evt: React.MouseEvent<HTMLButtonElement>) => void;
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
                <NavLink
                  to={`/instructions/`}
                  className="Menu__link"
                  activeClassName="Menu__link--active"
                >
                  <FormattedMessage
                    id="Menu.instructions"
                    defaultMessage="1. How to Play"
                    description="How to Play Button"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/scenario/`}
                  className="Menu__link"
                  activeClassName="Menu__link--active"
                >
                  <FormattedMessage
                    id="Menu.scenario"
                    defaultMessage="2. Scenario"
                    description="Scenario Button"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/objectives/`}
                  className="Menu__link"
                  activeClassName="Menu__link--active"
                >
                  <FormattedMessage
                    id="Menu.objectives"
                    defaultMessage="3. Learning Objectives"
                    description="Objectives Button"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/principles/`}
                  className="Menu__link"
                  activeClassName="Menu__link--active"
                >
                  <FormattedMessage
                    id="Menu.principles"
                    defaultMessage="4. Essential Principles"
                    description="Principles Button"
                  />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/chart/`}
                  className="Menu__link"
                  activeClassName="Menu__link--active"
                >
                  <FormattedMessage
                    id="Menu.chart"
                    defaultMessage="5. Client Chart"
                    description="Client chart button"
                  />
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`/research/`}
                  className="Menu__link"
                  activeClassName="Menu__link--active"
                >
                  <FormattedMessage
                    id="Menu.research"
                    defaultMessage="6. Research"
                    description="Research button"
                  />
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`/readings/`}
                  className="Menu__link"
                  activeClassName="Menu__link--active"
                >
                  <FormattedMessage
                    id="Menu.readings"
                    defaultMessage="7. Readings"
                    description="Readings button"
                  />
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`/resources/`}
                  className="Menu__link"
                  activeClassName="Menu__link--active"
                >
                  <FormattedMessage
                    id="Menu.resources"
                    defaultMessage="8. Resources"
                    description="Resources button"
                  />
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`/credits/`}
                  className="Menu__link"
                  activeClassName="Menu__link--active"
                >
                  <FormattedMessage
                    id="Menu.credits"
                    defaultMessage="9. Credits"
                    description="Credits Button"
                  />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
