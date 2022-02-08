import { SWMIcon } from "react-swm-icon-pack";
import { textPrimary } from "../../globalStyles";

const GameComponent = ({ game: { name, creator, questions, difficulty } }) => {
  return (
    <article>
      <div>
        <h2>{name}</h2>
        <p>{`Difficulty: ${difficulty}`}</p>
        <p>{`Questions: ${questions.length}`}</p>
        <p>{creator}</p>
      </div>
      <div>
        <SWMIcon name="Edit1" color={textPrimary} set="outline" />
        <SWMIcon name="CrossCircle" color={textPrimary} set="outline" />;
      </div>
    </article>
  );
};

export default GameComponent;
