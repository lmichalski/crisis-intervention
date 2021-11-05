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
  const label = "NEXT";

  const [currentMessage, setCurrentMessage] = useState(0);
  const intro = strings.introCards;

  const skipToNext = useCallback((evt:React.MouseEvent<HTMLButtonElement>) => {
    if (currentMessage < intro.length - 1) {
      setCurrentMessage((n) => n + 1);
      evt.currentTarget.blur()
    } else {
      history.push(`/video/`);
    }
  }, [currentMessage, history, intro.length]);

  const text = intro[currentMessage];

  return (
    <div className="container">
      <div className="intro">
        <div className="main">
          <div className="content">{text}</div>
        </div>
        <footer>
            <button className="button" onClick={skipToNext}>
              {label}
            </button>
        </footer>
      </div>
    </div>
  );
};

export default Intro;
