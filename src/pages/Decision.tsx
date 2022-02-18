import { useMemo, useState } from "react";
import ProgressBar from "../components/ProgressBar";
import { DecisionPoint } from "../hooks/useGameData";
import useLogGameEvent from "../hooks/useLogGameEvent";
import "./Decision.scss";

interface iProps {
  decisionPoint: DecisionPoint;
  decisionPoints: DecisionPoint[];
  onOptionChosen: (option: number, label: string) => void;
  gameProgress: { id: number; label: string; option: number }[];
  total: number;
}

const Decision: React.FC<iProps> = ({
  decisionPoint,
  onOptionChosen,
  gameProgress,
  decisionPoints,
  total,
}) => {
  const logGameEvent = useLogGameEvent();

  const dp = decisionPoint;

  logGameEvent("", "show", "question", dp.message, "");

  const [randomizedOptions] = useState(dp.options); // TODO shuffle these

  const optionBoxes = useMemo(() => {
    return randomizedOptions.map((opt) => {
      const chooseOption = () => onOptionChosen(opt.next, opt.label);

      return (
        <li
          key={opt.label}
          className="option"
          ng-repeat="opt in randomizedOptions"
        >
          <button onClick={chooseOption}>{opt.label}</button>
        </li>
      );
    });
  }, [randomizedOptions, onOptionChosen]);

  // const replayVideo = useCallback(() => {
  //   /*gtag('event', 'video_replayed', {
  //     'event_category': 'video',
  //     'event_label': $scope.dp.data,
  //     'value': $scope.dp.id
  //   });*/
  //   logGameEvent("", "replay", "video", dp.data, dp.id);
  //   history.push(`/games/${game_id}/video`);
  // }, [dp.data, dp.id, history, logGameEvent, game_id]);

  return (
    <div className="container">
      <div className="question" tabIndex={0}>
        <div className="vertical_outer">
          <div className="vertical_inner">{dp?.message}</div>
        </div>
      </div>
      <ul className="option_box cf">{optionBoxes}</ul>
      <div className="progress">
        <ProgressBar
          decisionPoint={decisionPoint}
          decisionPoints={decisionPoints}
          gameProgress={gameProgress}
          total={total}
        ></ProgressBar>
      </div>
    </div>
  );
};

export default Decision;
