import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Intro.scss";

interface iProps {
  strings: {
    introCards: string[];
  };
}

const Intro: React.FC<iProps> = ({ strings }) => {
  const history = useHistory();

  const [currentMessage, setCurrentMessage] = useState(0);
  const intro = strings.introCards;

  const skipToNext = useCallback(
    (evt: React.MouseEvent<HTMLButtonElement>) => {
      if (currentMessage < intro.length - 1) {
        setCurrentMessage((n) => n + 1);
        evt.currentTarget.blur();
      } else {
        history.push(`/video/`);
      }
    },
    [currentMessage, history, intro.length]
  );

  return (
    <div className="container">
      <div className="intro">
        <div className="main">
          <div className="content">
            <h2>Trigger Warning</h2>
            <p>
              This virtual gaming simulation contains sensitive information that
              may be triggering for some players. If at any time you are unable
              to continue playing, please take a break or stop immediately. If
              you continue to feel triggered, please use the resources provided
              to obtain support.
            </p>
          </div>
        </div>
        <footer>
          <button className="button" onClick={skipToNext}>
            Next
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Intro;
