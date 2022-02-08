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

const GameComponent = ({
  game: { id, name, creator, questions, difficulty },
}) => {
  const navigate = useNavigate();
  const { deleteGame } = useContext(TrivialContext);

  return (
    <GameContainer>
      <InfoContiner>
        <GameName>{name}</GameName>
        <GameInfoItem>{`Difficulty: ${difficulty}`}</GameInfoItem>
        <GameInfoItem>{`Questions: ${questions.length}`}</GameInfoItem>
        <GameCreator>{creator}</GameCreator>
      </InfoContiner>
      <IconContainer>
        <FontAwesomeIcon
          onClick={navigate(`/game/edit/${id}`)}
          icon={faPencil}
          data-testid="editIcon"
        />
        <FontAwesomeIcon
          onClick={() => {
            deleteGame(id);
          }}
          icon={faTrashAlt}
          data-testid="deleteIcon"
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
