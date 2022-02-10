import GameComponent from "../components/GameComponent/GameComponent";
import QuestionComponent from "../components/QuestionComponent/QuestionComponent";

const GameDetailsPage = () => {
  const game = { name: "a", creator: "b", questions: [], difficulty: "medium" };
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
