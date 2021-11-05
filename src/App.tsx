import React, { useCallback, useMemo, useState } from "react";

import {
  Switch,
  Route,
  useHistory,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import { useIntl } from "react-intl";

import Menu from "./pages/Menu";
import "./App.scss";

import { useGameData } from "./hooks/useGameData";

import Objectives from "./pages/Objectives";
import Decision from "./pages/Decision";
import Video from "./pages/Video";
import Credits from "./pages/Credits";
import Instructions from "./pages/Instructions";
import Feedback from "./pages/Feedback";
import Settings from "./pages/Settings";
import Summary from "./pages/Summary";
import Transition from "./pages/Transition";
import Principles from "./pages/Principles";
import Chart from "./pages/Chart";
import Scenario from "./pages/Scenario";
import useLogGameEvent from "./hooks/useLogGameEvent";
import { getBrowser } from "./util";
import useGameState from "./hooks/useGameState";
import Intro from "./pages/Intro";

interface iProps {
  gameId: string;
}

const App: React.FC<iProps> = ({ gameId }) => {
  const history = useHistory();
  let { path, url } = useRouteMatch();

  const logGameEvent = useLogGameEvent();
  const locale = useIntl().locale;

  const gameData = useGameData(gameId, locale);
  const gameState = useGameState(gameId);
  const minSteps = gameData.decisionpoints.filter(
    ({ correct }) => correct === "correct"
  ).length;

  const [navMenuExpanded, setNavMenuExpanded] = useState(true);
  const handleMenuToggleButtonClick = useCallback(() => {
    setNavMenuExpanded(true);

    history.push(`${url}/instructions/`);
  }, [history, url]);

  const lastDecisionPoint =
    gameData.decisionpoints[gameData.decisionpoints.length - 1].id ===
    gameState.currentStep;

  const currentDecisionPoint = useMemo(() => {
    return gameData.decisionpoints.find(
      ({ id }) => id === gameState.currentStep
    )!;
  }, [gameData.decisionpoints, gameState.currentStep]);

  const handleStartNewGame = useCallback(() => {
    gameState.newGame();
    setNavMenuExpanded(false);

    history.push(`${url}/intro/`);
    logGameEvent("", "start", "game", getBrowser(), "");
  }, [history, logGameEvent, gameState, url]);

  const handleResumeGame = useCallback(() => {
    var dp = currentDecisionPoint;
    setNavMenuExpanded(false);

    if (dp && lastDecisionPoint) {
      history.push(`${url}/summary/`);
    } else if (gameState.videoposition > 0.1) {
      history.push(`${url}/video/`);
    } else {
      history.push(`${url}/decision/`);
    }

    logGameEvent("", "resume", "game", "", "");
  }, [
    history,
    logGameEvent,
    gameState.videoposition,
    currentDecisionPoint,
    lastDecisionPoint,
    url,
  ]);

  const handleOptionChosen = useCallback(
    (nextId: number, label: string) => {
      const next = gameData.decisionpoints.find(({ id }) => id === nextId);

      gameState.selectOption(nextId, label);

      logGameEvent("", "select", "answer", label, next?.correct);

      switch (next?.type) {
        case "video":
          history.push(`${url}/video/`);
          break;
        case "lo":
          if (next.feedback > "") {
            // If there's feedback, show it then advance
            history.push(`${url}/feedback/`);
          } else {
            history.push(`${url}/lo/`);
          }
          break;
      }

      // google analytics ???
    },
    [gameData.decisionpoints, history, logGameEvent, gameState, url]
  );

  const handleVideoFinished = useCallback(() => {
    const dp = currentDecisionPoint;
    gameState.setVideoposition(0);

    if (lastDecisionPoint) {
      history.push(`${url}/summary/`);
    } else if (dp && dp.options.length > 0) {
      if (dp.feedback > "") {
        history.push(`${url}/feedback/`);
      } else {
        // No feedback means go directly to the decision
        history.push(`${url}/decision/`);
      }
    } else {
      gameState.setCurrentStep(gameState.currentStep + 1);
      if (dp?.next) {
        // If there are no options, go to the next decision point
        history.push(`${url}/lo/`);
      } else {
        history.push(`${url}/transition/`);
      }
    }
  }, [currentDecisionPoint, history, lastDecisionPoint, gameState, url]);

  return (
    <div className="fullscreen" style={gameData.colors as React.CSSProperties}>
      <header className="nav-header">
        <button className="settings-button">SETTINGS</button>
        <h1>{gameData.strings.menu.title}</h1>

        <button className="menu-button" onClick={handleMenuToggleButtonClick}>
          HOME
        </button>
        <button className="Link">GAME</button>
      </header>

      <div className="content">
        <div
          className={`banner ${
            navMenuExpanded ? "banner--expanded" : "banner--collapsed"
          }`}
        >
          <img
            src="/images/hands-reaching.png"
            alt="a black and a white hand reaching for each other"
          ></img>
        </div>

        <div className="body">
          <div className="nav-content">
            <div className="nav-menu-title">Module Content</div>
            <nav
              className={`nav-menu ${
                navMenuExpanded ? "nav-menu--expanded" : "nav-menu--collapsed"
              }`}
            >
              <Menu
                strings={gameData.strings.menu}
                startNewGame={handleStartNewGame}
                resumeGame={handleResumeGame}
                gamesaved={gameState.gamesaved}
                pagesToShow={{
                  principles: !!gameData.strings.principles,
                }}
              />
            </nav>
          </div>

          <div className="view" role="application">
            <Switch>
              <Route path={`${path}/credits`}>
                <Credits />
              </Route>

              <Route path={`${path}/decision`}>
                <Decision
                  decisionPoint={currentDecisionPoint}
                  onOptionChosen={handleOptionChosen}
                />
              </Route>

              <Route path={`${path}/feedback`}>
                <Feedback decisionPoint={currentDecisionPoint} />
              </Route>

              <Route path={`${path}/instructions`}>
                <Instructions
                  minSteps={minSteps}
                  strings={gameData.strings.instructions}
                />
              </Route>

              <Route path={`${path}/intro`}>
                <Intro strings={gameData.strings.intro} />
              </Route>

              <Route path={`${path}/objectives`}>
                <Objectives strings={gameData.strings.objectives} />
              </Route>

              <Route path={`${path}/chart`}>
                <Chart image={""} />
              </Route>

              {gameData.strings.principles ? (
                <Route path={`${path}/principles`}>
                  <Principles strings={gameData.strings.principles} />
                </Route>
              ) : null}

              <Route path={`${path}/settings`}>
                <Settings />
              </Route>

              <Route path={`${path}/scenario`}>
                <Scenario strings={gameData.strings.intro} />
              </Route>

              <Route path={`${path}/summary`}>
                <Summary
                  decisionPoints={gameData.decisionpoints}
                  gameProgress={gameState.progress}
                  completed={lastDecisionPoint}
                />
              </Route>

              <Route path={`${path}/transition`}>
                <Transition decisionPoint={currentDecisionPoint} />
              </Route>

              <Route path={`${path}/video`}>
                <Video
                  decisionPoint={currentDecisionPoint}
                  onVideoFinished={handleVideoFinished}
                  videoposition={gameState.videoposition}
                  setVideoposition={gameState.setVideoposition}
                />
              </Route>

              <Route path={`${path}/lo`}>
                Something's going on here, I swear
              </Route>

              <Route path="/">
                <Redirect to={`${url}/instructions`} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
