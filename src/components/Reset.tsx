import { ReactElement, useContext } from "react";
import {
  gameContext,
  GameContextType,
  ValidActions,
} from "../contexts/GameContext";

const Reset = (): ReactElement => {
  const { dispatch } = useContext<GameContextType | null>(
    gameContext
  ) as GameContextType;

  const handleClick = (): void => {
    dispatch({ type: ValidActions.RESET, payload: {} });
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
