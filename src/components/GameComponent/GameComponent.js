import { SWMIcon } from "react-swm-icon-pack";
import styled from "styled-components";
import { backgroundDark, textPrimary } from "../../globalStyles";

const GameContainer = styled.article`
  width: 365px;
  height: 183px;

  border-radius: 10px;

  background-color: ${backgroundDark};
  color: white;

  display: flex;
  justify-content: space-between;
`;

const InfoContiner = styled.div`
  height: 100%;
  width: fit-content;
`;

const IconContainer = styled.div`
  width: fit-content;

  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const GameComponent = ({ game: { name, creator, questions, difficulty } }) => {
  return (
    <GameContainer>
      <InfoContiner>
        <h2>{name}</h2>
        <p>{`Difficulty: ${difficulty}`}</p>
        <p>{`Questions: ${questions.length}`}</p>
        <p>{creator}</p>
      </InfoContiner>
      <IconContainer>
        <SWMIcon name="Edit1" color={textPrimary} set="outline" size="40" />
        <SWMIcon
          name="CrossCircle"
          color={textPrimary}
          set="outline"
          size="40"
        />
      </IconContainer>
    </GameContainer>
  );
};

export default GameComponent;
