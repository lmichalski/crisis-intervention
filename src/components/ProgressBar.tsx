import React, { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
import { Correctness, DecisionPoint } from "../hooks/useGameData";

interface iProps {
    decisionPoints: DecisionPoint[];
    gameProgress: { id: number; label: string; option: number }[];
    total: number;
}

const ProgressBar: React.FC<iProps> = ({
  gameProgress,
  decisionPoints,
  total,
}) => {
  // const [progress, setProgress] = useState([])

  let progress: {
    question: string;
    answer: string;
    correct: Correctness;
    feedback: string;
  }[] = useMemo(() => {
    let progress = [];
    var i;
    for (i = 0; i < gameProgress.length; i++) {
      const dp = gameProgress[i];
      const current = decisionPoints.find(({ id }) => id === dp.id)!;
      const next = decisionPoints.find(({ id }) => id === dp.option)!;

      progress.push({
        question: current.message,
        answer: dp.label,
        correct: next.correct,
        feedback: next.feedback,
      });
    }
    return progress;
  }, [decisionPoints, gameProgress]);
  
  return (
    <progress value= {decisionPoints.filter(({ correct }) => correct === "correct").length} max={total}></progress>
  );
};

export default ProgressBar;
