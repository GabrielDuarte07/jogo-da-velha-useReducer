import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type GameContextProps = {
  children: ReactNode;
};

export type GameContextType = {
  squares: Array<string | null>;
  setSquares: Dispatch<SetStateAction<Array<string | null>>>;
  isXNext: boolean;
  setIsXNext: Dispatch<SetStateAction<boolean>>;
  whoIsWinner: string | null;
  setWhoIsWinner: Dispatch<SetStateAction<string | null>>;
  history: Array<HistoryType | null>;
  setHistory: Dispatch<SetStateAction<Array<HistoryType | null>>>;
};

export type HistoryType = {
  squares: Array<string | null>;
  player: string;
};

export const gameContext = createContext<GameContextType | null>(null);

const GameContext = ({ children }: GameContextProps) => {
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [whoIsWinner, setWhoIsWinner] = useState<string | null>(null);
  const [squares, setSquares] = useState<Array<string | null>>(
    Array(9).fill(null)
  );
  const [history, setHistory] = useState<Array<HistoryType | null>>([]);
  const state = {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    whoIsWinner,
    setWhoIsWinner,
    history,
    setHistory,
  };
  return <gameContext.Provider value={state}>{children}</gameContext.Provider>;
};

export default GameContext;
