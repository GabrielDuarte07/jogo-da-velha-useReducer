import { useContext } from "react";
import { gameContext, GameContextType } from "../contexts/GameContext";

const Reset = () => {
  const { setSquares, setIsXNext, setWhoIsWinner, setHistory } =
    useContext<GameContextType | null>(gameContext) as GameContextType;

  const handleClick = (): void => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWhoIsWinner(null);
    setHistory([]);
  };

  return (
    <p className="reset">
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </p>
  );
};

export default Reset;
