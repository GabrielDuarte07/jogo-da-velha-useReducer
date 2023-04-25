import { createContext, Dispatch, ReactNode, useReducer } from "react";

type GameContextProps = {
  children: ReactNode;
};

export type GameContextType = {
  state: StateType;
  dispatch: Dispatch<ActionType>;
};

export type HistoryType = {
  squares: Array<string | null>;
  player: string;
  whoIsWinner: string;
};

export enum ValidActions {
  UPDATE_SQUARES = "UPDATE_SQUARES",
  UPDATE_WINNER = "UPDATE_WINNER",
  RESET = "RESET",
  UPDATE_HISTORY = "UPDATE_HISTORY",
}

type ActionType = {
  type: ValidActions;
  payload: Partial<StateType>;
};

type StateType = {
  squares: Array<string | null>;
  isXNext: boolean;
  whoIsWinner: string;
  history: HistoryType[] | number;
};

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case ValidActions.UPDATE_SQUARES: {
      const { squares, history, isXNext, whoIsWinner } = state;
      const player = isXNext ? "O" : "X";
      const newHistory = [
        ...(history as HistoryType[]),
        {
          squares,
          player,
          whoIsWinner,
        },
      ];
      const newState = { ...state };
      newState.squares = action.payload.squares || [];
      newState.isXNext = !isXNext;
      newState.history = newHistory;
      newState.whoIsWinner = whoIsWinner;
      return newState;
    }
    case ValidActions.UPDATE_WINNER: {
      const newState = { ...state };
      newState.whoIsWinner = action.payload.whoIsWinner as string;
      return newState;
    }
    case ValidActions.RESET: {
      return INITIAL_STATE;
    }
    case ValidActions.UPDATE_HISTORY: {
      const { history: index } = action.payload;
      const { history } = state;
      const newHistory = [...(history as HistoryType[])];
      const { squares, whoIsWinner } = newHistory[index as number];
      const whoPlayed = newHistory[index as number].player;

      newHistory.splice(index as number, newHistory.length);

      const newState = {
        ...state,
        squares,
        whoIsWinner,
        history: newHistory,
        isXNext: whoPlayed === "O" ? true : false,
      };
      return newState;
    }
    default:
      return state;
  }
}

const INITIAL_STATE: Readonly<StateType> = {
  squares: Array(9).fill(null),
  isXNext: true,
  whoIsWinner: "",
  history: [],
};

export const gameContext = createContext<GameContextType | null>(null);

const GameContext = ({ children }: GameContextProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <gameContext.Provider value={{ state, dispatch }}>
      {children}
    </gameContext.Provider>
  );
};

export default GameContext;
