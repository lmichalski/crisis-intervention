import React from "react";
import { DecisionPoint } from "../hooks/useGameData";

interface iProps {
  decisionPoint: DecisionPoint;
  decisionPoints: DecisionPoint[];
  gameProgress: { id: number; label: string; option: number }[];
  total: number;
}

const ProgressBar: React.FC<iProps> = ({ decisionPoint, total }) => {
  return <progress value={decisionPoint.id} max={total}></progress>;
};

export default ProgressBar;
