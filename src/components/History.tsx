import { useContext } from "react";
import {
  gameContext,
  GameContextType,
  HistoryType,
  ValidActions,
} from "../contexts/GameContext";
import { v4 as uuid } from "uuid";

const History = () => {
  const {
    dispatch,
    state: { history },
  } = useContext<GameContextType | null>(gameContext) as GameContextType;

  const handleClick = (index: number) => {
    dispatch({
      type: ValidActions.UPDATE_HISTORY,
      payload: { history: index },
    });
  };
  const historyFinal = history as HistoryType[];
  return (
    <div>
      {historyFinal.map((data, index) => (
        <div className="history" key={uuid()}>
          <button type="button" onClick={() => handleClick(index)}>
            voltar para jogada {index}
          </button>
        </div>
      ))}
    </div>
  );
};

export default History;
