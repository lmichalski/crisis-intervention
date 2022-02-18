import React, { useMemo } from "react";
import { Correctness, DecisionPoint } from "../hooks/useGameData";

interface iProps {
  decisionPoint: DecisionPoint;
  decisionPoints: DecisionPoint[];
  gameProgress: { id: number; label: string; option: number }[];
  total: number;
}

const ProgressBar: React.FC<iProps> = ({
  decisionPoint,
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

  return <progress value={decisionPoint.id} max={total}></progress>;
};

export default ProgressBar;
