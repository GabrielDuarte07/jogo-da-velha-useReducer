import { useContext } from "react";
import { gameContext, GameContextType } from "../contexts/GameContext";

const Winner = () => {
  const {
    state: { whoIsWinner },
  } = useContext<GameContextType | null>(gameContext) as GameContextType;

  return whoIsWinner ? <p className="winner">{whoIsWinner} ganhou!</p> : <></>;
};

export default Winner;
