import { useCallback, useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router";
import { DecisionPoint } from "../hooks/useGameData";
import "./Feedback.scss";

interface iProps {
  decisionPoint: DecisionPoint;
}

const Feedback: React.FC<iProps> = ({ decisionPoint: dp }) => {
  const history = useHistory();

  const goNext = useCallback(() => {
    switch (dp?.type) {
      case "video":
        history.push(`/decision/`);
        break;
      case "lo":
        history.push(`/lo/`);
        break;
    }
  }, [dp?.type, history]);

  const correctnessIcon = useMemo(() => {
    switch (dp?.correct) {
      case "half":
        return (
          <>
            <img
              src="/images/icon-partial.png"
              alt="yellow triangular warning icon"
              width="20"
              height="20"
            ></img>
            &nbsp;<span>Not-the-Best</span>
          </>
        );
      case "wrong":
        return (
          <>
            <img
              src="/images/icon-incorrect.png"
              alt="red circular x icon"
              width="20"
              height="20"
            ></img>
            &nbsp;<span>Incorrect</span>
          </>
        );
    }
  }, [dp?.correct]);

  return (
    <div className="container">
      <div className="panel feedback" role="alert">
        <div>
          <FormattedMessage
            id="Feedback.title"
            defaultMessage="Feedback"
            description="feedback title"
            tagName="h2"
          />
          {correctnessIcon}
          <div className="main">{dp?.feedback}</div>
        </div>
        <footer>
          <p className="controls">
            <button className="button" onClick={goNext}>
              <FormattedMessage
                id="General.resume"
                defaultMessage="Resume Game"
                description="resume game button"
              />
            </button>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Feedback;
