import { useContext } from "react";
import { gameContext, GameContextType } from "../contexts/GameContext";
import { v4 as uuid } from "uuid";

const History = () => {
  const { history, setHistory, setSquares, setIsXNext, setWhoIsWinner } =
    useContext<GameContextType | null>(gameContext) as GameContextType;

  const handleClick = (index: number) => {
    const newHistory = [...history];
    newHistory.splice(index, Number.MAX_SAFE_INTEGER);
    setHistory(newHistory);

    setSquares(history[index]?.squares as string[]);
    const whoPlayed = history[index]?.player as string;
    setIsXNext(whoPlayed === "X" ? true : false);
    setWhoIsWinner(null);
  };

  return (
    <div>
      {history.map((data, index) => (
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
