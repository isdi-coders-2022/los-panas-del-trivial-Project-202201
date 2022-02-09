import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import PropTypes from "prop-types";
import { backgroundDark, textPrimary } from "../../globalStyles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import TrivialContext from "../../store/contexts/TrivialContext";

const GameContainer = styled.article`
  width: 365px;
  height: 183px;

  border-radius: 10px;

  background-color: ${backgroundDark};
  color: white;

  display: flex;
  justify-content: space-between;

  padding: 15px;
  margin: 0 auto;
`;

const InfoContiner = styled.div`
  width: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  width: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${textPrimary};
`;

const GameName = styled.h2`
  color: ${textPrimary};

  margin: 0;
  padding: 0;

  font-size: 30px;
`;

const GameInfoItem = styled.p`
  margin: 0;
  padding: 0;

  font-size: 20px;
`;

const GameCreator = styled(GameInfoItem)`
  color: #80807e;
`;

const GameComponent = ({ game }) => {
  const navigate = useNavigate();
  const goToEdit = () => {
    navigate(`/game/edit/${game.id}`);
  };
  const { deleteGame } = useContext(TrivialContext);

  const firstLetterToUpperCase = (text) =>
    text[0].toUpperCase() + text.substring(1);

  const gameToRender = {
    ...game,
    name: firstLetterToUpperCase(game.name),
    creator: firstLetterToUpperCase(game.creator),
  };

  return (
    <GameContainer>
      <InfoContiner>
        <GameName>{gameToRender.name}</GameName>
        <GameInfoItem>{`Difficulty: ${gameToRender.difficulty}`}</GameInfoItem>
        <GameInfoItem>{`Questions: ${gameToRender.questions.length}`}</GameInfoItem>
        <GameCreator>{gameToRender.creator}</GameCreator>
      </InfoContiner>
      <IconContainer>
        <FontAwesomeIcon
          onClick={goToEdit}
          icon={faPencil}
          data-testid="editIcon"
          size="2x"
        />
        <FontAwesomeIcon
          onClick={() => {
            deleteGame(game.id);
          }}
          icon={faTrashAlt}
          data-testid="deleteIcon"
          size="2x"
        />
      </IconContainer>
    </GameContainer>
  );
};

GameComponent.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string,
    creator: PropTypes.string,
    difficulty: PropTypes.string,
    questions: PropTypes.array,
  }).isRequired,
};

export default GameComponent;
