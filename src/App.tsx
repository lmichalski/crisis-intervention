import React, { useCallback, useMemo, useState } from "react";

import {
  Switch,
  Link,
  Route,
  useHistory,
  Redirect,
  useLocation,
} from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";

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
import Resources from "./pages/Resources";
import Transition from "./pages/Transition";
import Principles from "./pages/Principles";
import Chart from "./pages/Chart";
import Scenario from "./pages/Scenario";
import useLogGameEvent from "./hooks/useLogGameEvent";
import { getBrowser } from "./util";
import useGameState from "./hooks/useGameState";
import Intro from "./pages/Intro";
import DropDown from "./components/DropDown";
import Research from "./pages/Research";
import MenuItems from "./components/MenuItems";
import Debrief from "./pages/Debrief";

interface iProps {}

const App: React.FC<iProps> = () => {
  const history = useHistory();
  const location = useLocation();

  const logGameEvent = useLogGameEvent();
  const locale = useIntl().locale;

  const gameData = useGameData("crisis_intervention", locale);
  const gameState = useGameState("crisis_intervention");
  const [subtitlesEnabled, setSubtitlesEnabled] = useState<boolean>(true);
  const minSteps = gameData.decisionpoints.filter(
    ({ correct }) => correct === "correct"
  ).length;

  let onExpandedNavMenuPage: boolean;

  const base = location.pathname.split("/")[1];
  switch (base) {
    case "video":
    case "decision":
    case "intro":
    case "summary":
    case "settings":
    case "feedback":
      onExpandedNavMenuPage = false;

      break;
    default:
      onExpandedNavMenuPage = true;
  }

  const [navMenuExpanded, setNavMenuExpanded] = useState(onExpandedNavMenuPage);
  const handleMenuToggleButtonClick = useCallback(() => {
    setNavMenuExpanded(true);

    history.push(`/instructions/`);
  }, [history]);

  const lastDecisionPoint =
    gameData.decisionpoints[gameData.decisionpoints.length - 1].id ===
    gameState.currentStep;

  const currentDecisionPoint = useMemo(() => {
    return gameData.decisionpoints.find(
      ({ id }) => id === gameState.currentStep
    )!;
  }, [gameData.decisionpoints, gameState.currentStep]);

  const blurTarget = useCallback((e) => e.currentTarget.blur(), [])

  const handleStartNewGame = useCallback(
    (evt: React.MouseEvent<HTMLButtonElement>) => {
      blurTarget(evt)

      gameState.newGame();
      setNavMenuExpanded(false);
      history.push(`/chart/`);
      logGameEvent("", "start", "game", getBrowser(), "");
    },
    [history, logGameEvent, gameState, blurTarget]
  );

  const handleResumeGame = useCallback(
    (evt: React.MouseEvent<HTMLButtonElement>) => {
      blurTarget(evt)

      var dp = currentDecisionPoint;
      setNavMenuExpanded(false);

      if (dp && lastDecisionPoint) {
        history.push(`/summary/`);
      } else if (gameState.videoposition > 0.1) {
        history.push(`/video/`);
      } else if (gameState.currentStep === 0) {
        history.push(`/intro/`);
      } else {
        history.push(`/decision/`);
      }

      logGameEvent("", "resume", "game", "", "");
    },
    [
      history,
      logGameEvent,
      gameState.videoposition,
      gameState.currentStep,
      currentDecisionPoint,
      lastDecisionPoint,
      blurTarget,
    ]
  );

  const handleHideMenu = useCallback(() => {
    setNavMenuExpanded(false);
  }, []);

  const handleOptionChosen = useCallback(
    (nextId: number, label: string) => {
      const next = gameData.decisionpoints.find(({ id }) => id === nextId);

      gameState.selectOption(nextId, label);

      logGameEvent("", "select", "answer", label, next?.correct);

      switch (next?.type) {
        case "video":
          history.push(`/video/`);
          break;
        case "lo":
          if (next.feedback > "") {
            // If there's feedback, show it then advance
            history.push(`/feedback/`);
          } else {
            history.push(`/lo/`);
          }
          break;
      }

      // google analytics ???
    },
    [gameData.decisionpoints, history, logGameEvent, gameState]
  );

  const handleVideoFinished = useCallback(() => {
    const dp = currentDecisionPoint;
    gameState.setVideoposition(0);

    if (lastDecisionPoint) {
      history.push(`/summary/`);
    } else if (dp && dp.options.length > 0) {
      if (dp.feedback > "") {
        history.push(`/feedback/`);
      } else {
        // No feedback means go directly to the decision
        history.push(`/decision/`);
      }
    } else {
      gameState.setCurrentStep(gameState.currentStep + 1);
      if (dp?.next) {
        // If there are no options, go to the next decision point
        history.push(`/lo/`);
      } else {
        history.push(`/transition/`);
      }
    }
  }, [currentDecisionPoint, history, lastDecisionPoint, gameState]);

  return (
    <div className="fullscreen" style={gameData.colors as React.CSSProperties}>
      <header className="nav-header">
        <button className="menu-button" onClick={handleMenuToggleButtonClick}>
          Home
        </button>

        <Link className="Button" to={`/settings/`} onClick={handleHideMenu}>
          <FormattedMessage
            id="Menu.settings"
            defaultMessage="Settings"
            description="Settings Button"
          />
        </Link>

        <h1>{gameData.strings.menu.title}</h1>

        <DropDown label="Game">
          <button onClick={handleStartNewGame}>New Game</button>
          <button onClick={handleResumeGame}>Resume</button>
        </DropDown>
        <DropDown className="nav-header__content-dropdown" label="Content">
          <MenuItems
            pagesToShow={{
              principles: !!gameData.strings.principles,
            }}
            onItemClicked={blurTarget}
          />
        </DropDown>
      </header>

      <div className="content">
        <div
          className={`banner ${
            navMenuExpanded ? "banner--expanded" : "banner--collapsed"
          }`}
        >
          {/* <img
            src="/images/hand-left.png"
            className="img-left"
            alt="person's hand with white skin reaching toward the centre of the screen"
            width="450px"
            height="600px"
          ></img> */}
          <div className="quote">
            {" "}
            <p>
              "Hope is being able to see that there is light despite all the
              darkness."
            </p>{" "}
            <span className="quoted-person">Desmond Tutu</span>
          </div>
          {/* <img
            src="/images/hand-right.png"
            className="img-right"
            alt="person's hand with black skin reaching toward the centre of the screen"
            width="450px"
            height="600px"
          ></img> */}
        </div>

        <div className="body">
          <div
            className={`nav-content ${
              navMenuExpanded
                ? "nav-content--expanded"
                : "nav-content--collapsed"
            }`}
          >
            <div className="nav-menu-title">Module Content</div>
            <nav className="nav-menu">
              <Menu
                pagesToShow={{
                  principles: !!gameData.strings.principles,
                }}
              />
            </nav>
          </div>

          <div className="view" role="application">
            <Switch>
              <Route path={`/credits`}>
                <Credits />
              </Route>

              <Route path={`/decision`}>
                <Decision
                  decisionPoint={currentDecisionPoint}
                  onOptionChosen={handleOptionChosen}
                />
              </Route>

              <Route path={`/feedback`}>
                <Feedback decisionPoint={currentDecisionPoint} />
              </Route>

              <Route path={`/instructions`}>
                <Instructions
                  minSteps={minSteps}
                  strings={gameData.strings.instructions}
                />
              </Route>

              <Route path={`/intro`}>
                <Intro strings={gameData.strings.intro} />
              </Route>

              <Route path={`/objectives`}>
                <Objectives strings={gameData.strings.objectives} />
              </Route>

              <Route path={`/chart`}>
                <Chart image={""} />
              </Route>

              {gameData.strings.principles ? (
                <Route path={`/principles`}>
                  <Principles strings={gameData.strings.principles} />
                </Route>
              ) : null}

              <Route path={`/settings`}>
                <Settings
                  subtitlesEnabled={subtitlesEnabled}
                  onSubtitlesToggled={setSubtitlesEnabled}
                />
              </Route>

              <Route path={`/resources`}>
                <Resources />
              </Route>

              <Route path={`/research`}>
                <Research />
              </Route>

              <Route path={`/debrief`}>
                <Debrief />
              </Route>

              <Route path={`/summary`}>
                <Summary
                  decisionPoints={gameData.decisionpoints}
                  gameProgress={gameState.progress}
                  completed={lastDecisionPoint}
                />
              </Route>

              <Route path={`/scenario`}>
                <Scenario strings={gameData.strings.intro} />
              </Route>

              <Route path={`/transition`}>
                <Transition decisionPoint={currentDecisionPoint} />
              </Route>

              <Route path={`/video`}>
                <Video
                  decisionPoint={currentDecisionPoint}
                  onVideoFinished={handleVideoFinished}
                  videoposition={gameState.videoposition}
                  setVideoposition={gameState.setVideoposition}
                  subtitlesEnabled={subtitlesEnabled}
                  onSubtitlesToggled={setSubtitlesEnabled}
                />
              </Route>

              <Route path={`/lo`}>Something's going on here, I swear</Route>

              <Route path="/">
                <Redirect to={`/instructions`} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
