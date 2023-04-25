import { ReactElement, useContext } from "react";
import { gameContext, GameContextType } from "../contexts/GameContext";

type SquareProps = {
  value: string;
  index: number;
};

const Square = ({ value, index }: SquareProps): ReactElement => {
  const {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    whoIsWinner,
    history,
    setHistory,
  } = useContext<GameContextType | null>(gameContext) as GameContextType;

  const handleClick = (): void => {
    if (whoIsWinner) return;
    const newSquares = [...squares];
    if (newSquares[index]) return;
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
    setHistory([
      ...history,
      {
        squares: [...squares],
        player: isXNext ? "O" : "X",
      },
    ]);
    console.log(history);
  };

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
