import { useContext } from "react";
import { gameContext, GameContextType } from "../contexts/GameContext";

const Player = () => {
  const { isXNext } = useContext<GameContextType | null>(
    gameContext
  ) as GameContextType;

  return <h1>Player: {isXNext ? "X" : "O"}</h1>;
};

export default Player;
