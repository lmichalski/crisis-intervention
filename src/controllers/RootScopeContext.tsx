import React from "react";

import { generateUUID, Storage } from "../util";
import er_game_data from "../games/er_game_data.json";
import { DataStore } from "@aws-amplify/datastore";
import { DecisionPoint, Game, VideoSources, Option } from "../models";

const data: GameDataShape = er_game_data;


interface iDecisionPoint {
  id: number;
  title?: string;
  type: string; //"video" | "string",
  data: string;

  video?: {
    vimeoUrl?: string;
  };

  correct: boolean;
  feedback: string;
  message: string;
  options: {
    label: string;
    next: number;
  }[];
  next?: number;
  last?: boolean;
}

interface GameDataShape {
  decisionpoints: iDecisionPoint[];
}

interface iGameSave {
  uuid: string;
  gamesaved: boolean;
  subtitles: boolean;
  fullscreen: boolean;
  current: number;
  completed: boolean;
  videoposition: number;
  progress: {
    id: number;
    label: string;
    option: number;
  }[];
}

interface HistoryWithPush {
  push: (path: string) => void;
}

interface iRootScope {
  dataProvider: DecisionPoint[];
  correctOptions: DecisionPoint[];
  eventLog: unknown[];
  sg: iGameSave;
  resumeURL?: string;
  saveState: () => void;
  logGameEvent: (
    level: any,
    type: any,
    target: any,
    label: any,
    data: any
  ) => void;
  resumeGame: (history: HistoryWithPush) => void;
}

export const emptyRootScope = (): iRootScope => ({
  dataProvider: [],
  correctOptions: [],
  eventLog: [],
  sg: (Storage.getObject("prenatal") as iGameSave | false) || {
    uuid: generateUUID(),
    gamesaved: false,
    subtitles: false,
    fullscreen: false,
    current: 0,
    completed: false,
    videoposition: 0,
    progress: [],
  },
  resumeURL: undefined,
  saveState() {
    Storage.setObject("prenatal", this.sg);
  },
  logGameEvent(level: any, type: any, target: any, label: any, data: any) {
    this.eventLog.push({
      game: "app.name",
      level: level,
      type: type,
      target: target,
      label: label,
      data: data,
      user: this.sg.uuid,
      datetime: new Date(),
    });

    console.log(this.eventLog);
  },
  resumeGame(history: HistoryWithPush) {
    var dp = this.dataProvider.find(({ id }) => id === this.sg.current);

    this.resumeURL = "";

    if (dp && dp.last) {
      history.push("/summary/");
    } else if (this.sg.videoposition > 0.1) {
      history.push("/video/");
    } else {
      history.push("/decision/");
    }

    this.logGameEvent("", "resume", "game", "", "");
  },
});

const RootScopeContext = React.createContext(emptyRootScope());
export default RootScopeContext;