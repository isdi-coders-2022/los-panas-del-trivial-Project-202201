import { useContext } from "react";
import { useParams } from "react-router-dom";
import GameComponent from "../components/GameComponent/GameComponent";
import QuestionComponent from "../components/QuestionComponent/QuestionComponent";
import TrivialContext from "../store/contexts/TrivialContext";

const GameDetailsPage = () => {
  const params = useParams();
  const { currentGames } = useContext(TrivialContext);
  const game = currentGames.find((game) => game.id === params.id);
  return (
    <div>
      <h2>Game details</h2>
      <GameComponent game={game} />
      <ul>
        {game.questions.map((question) => (
          <QuestionComponent question={question} />
        ))}
      </ul>
    </div>
  );
};

export default GameDetailsPage;
