import { ReactElement, useContext } from "react";
import {
  gameContext,
  GameContextType,
  ValidActions,
} from "../contexts/GameContext";

type SquareProps = {
  value: string;
  index: number;
};

const Square = ({ value, index }: SquareProps): ReactElement => {
  const {
    state: { squares, isXNext, whoIsWinner },
    dispatch,
  } = useContext<GameContextType | null>(gameContext) as GameContextType;

  const handleClick = (): void => {
    if (whoIsWinner) return;
    const newSquares = [...squares];
    if (newSquares[index]) return;
    newSquares[index] = isXNext ? "X" : "O";
    dispatch({
      type: ValidActions.UPDATE_SQUARES,
      payload: {
        squares: newSquares,
      },
    });
  };

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
