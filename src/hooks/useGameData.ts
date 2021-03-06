import { useMemo } from "react";

const games: Record<string, Record<string, GameDataShape>> = {
  emergency: {
    en: require("../games/er_game_data.json"),
  },
  crisis_intervention: {
    en: require("../games/suicidal_patient_data.json"),
  },
};

export type Correctness = "correct" | "half" | "wrong";

export interface DecisionPoint {
  id: number;
  title?: string;
  type: "video" | "string" | "lo";
  data: string;

  video:
    | {
        vimeo_url: string;
        videojs_url?: string;
      }
    | {
        vimeo_url?: string;
        videojs_url: string;
      }
    | null;

  correct: Correctness;
  feedback: string;
  message: string;
  options: {
    label: string;
    next: number;
  }[];
  next: null;
}

interface GameDataShape {
  decisionpoints: DecisionPoint[];
  colors: {
    "--theme-light": string;
    "--theme-dark": string;
    "--theme-primary": string;
    "--primary-text-color": string;
    "--link-color": string;
  };

  questions: {
    total: number;
  };

  strings: {
    menu: {
      title: string;
    };
    intro: {
      introCards: string[];
    };
    objectives: {
      paragraph1: string;
      paragraph2: string;
      bullet_list: string[];
    };
    chart: {
      image: string;
    };
    scenario: {
      introCards: string[];
    };
    principles?: {
      paragraph: string;
      bullet_list: string[];
    };
    instructions: {
      paragraph: string;
      bullet_list: string[];
    };

    resources: {
      paragraph: string;
      bullet_list: string[];
    };
  };
}

export const useGameData = (game: string, locale: string): GameDataShape => {
  const data = useMemo(
    () => games[game]?.[locale] || games[game]?.["en"],
    [game, locale]
  );
  if (!data) {
    throw new Error("That game could not be found");
  }
  return data;
};
