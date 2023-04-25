import { ReactElement, useContext, useEffect } from "react";
import { gameContext, GameContextType } from "../contexts/GameContext";
import { v4 as uuid } from "uuid";
import Player from "./Player";
import Square from "./Square";
import Reset from "./Reset";
import Winner from "./Winner";
import History from "./History";
import calculateWinner from "../utils/calculateWinner";

const Board = (): ReactElement => {
  const { squares, setWhoIsWinner } = useContext<GameContextType | null>(
    gameContext
  ) as GameContextType;

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) setWhoIsWinner(winner);
  }, [squares]);
  return (
    <div className="boardContainer">
      <Player />
      <Winner />
      <Reset />
      <div className="board">
        {squares.map((value, index) => (
          <Square value={value as string} index={index} key={uuid()} />
        ))}
      </div>
      <History />
    </div>
  );
};

export default Board;
