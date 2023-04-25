import "./App.css";
import Board from "./components/Board";
import GameContext from "./contexts/GameContext";

function App() {
  return (
    <GameContext>
      <Board />
    </GameContext>
  );
}

export default App;
