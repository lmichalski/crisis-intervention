import { useCallback, useContext } from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router";
import RootScopeContext from "../controllers/RootScopeContext";
import "./Transition.scss";

const Transition: React.FC<{}> = () => {
  const history = useHistory();
  const rootScope = useContext(RootScopeContext);

  const dp = rootScope.dataProvider.find(
    ({ id }) => id === rootScope.sg.current
  );

  const playNextVideo = useCallback(() => {
    history.push("/video/");
  }, []);

  return (
    <div className="container">
      <div className="panel feedback">
        <header>
          <FormattedMessage
            id="Transition.title"
            defaultMessage="Game Paused"
            description="game paused transition title"
            tagName="h1"
          />
        </header>
        <div className="main" ng-bind-html="dp.feedback"></div>
        <footer>
          <p className="controls">
            <a href="javascript:void(0)" onClick={playNextVideo}>
              Resume Game
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Transition;