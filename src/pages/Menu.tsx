import { FormattedMessage } from "react-intl";
import { Link, useParams } from "react-router-dom";
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
  startNewGame,
  resumeGame,
  gamesaved,
  strings,
  pagesToShow: { principles: showPrinciples },
}) => {
  const { game_id } = useParams<{ game_id: string }>();

  return (
    <div className="Menu container">
      <div className="panel menu">
        <div className="main">
          <div className="content">
            <ul className="controls">
              <li>
                <Link to={`/games/${game_id}/instructions/`}>
                  <FormattedMessage
                    id="Menu.instructions"
                    defaultMessage="1. How to Play"
                    description="How to Play Button"
                  />
                </Link>
              </li>
              <li>
                <Link to={`/games/${game_id}/scenario/`}>
                  <FormattedMessage
                    id="Menu.scenario"
                    defaultMessage="2. Scenario"
                    description="Scenario Button"
                  />
                </Link>
              </li>
              <li>
                <Link to={`/games/${game_id}/objectives/`}>
                  <FormattedMessage
                    id="Menu.objectives"
                    defaultMessage="3. Learning Objectives"
                    description="Objectives Button"
                  />
                </Link>
              </li>
              {showPrinciples ? (
                <li>
                  <Link to={`/games/${game_id}/principles/`}>
                    <FormattedMessage
                      id="Menu.principles"
                      defaultMessage="4. Essential Principles"
                      description="Principles Button"
                    />
                  </Link>
                </li>
              ) : null}
              <li>
                <Link to={`/games/${game_id}/chart/`}>
                  <FormattedMessage
                    id="Menu.chart"
                    defaultMessage="5. Client Chart"
                    description="Client chart button"
                  />
                </Link>
              </li>
              {/* <li>
                <Link to={`/games/${game_id}/resources/`}>
                  <FormattedMessage
                    id="Menu.resources"
                    defaultMessage="Resources"
                    description="Resources button"
                  />
                </Link>
              </li> */}

              {/* <li>
                <Link to={`/games/${game_id}/research/`}>
                  <FormattedMessage
                    id="Menu.research"
                    defaultMessage="Research"
                    description="Research button"
                  />
                </Link>
              </li> */}

              {/* <li>
                <Link to={`/games/${game_id}/settings/`}>
                  <FormattedMessage
                    id="Menu.settings"
                    defaultMessage="Settings"
                    description="Settings Button"
                  />
                </Link>
              </li> */}
              <li>
                <Link to={`/games/${game_id}/credits/`}>
                  <FormattedMessage
                    id="Menu.credits"
                    defaultMessage="6. Credits"
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
