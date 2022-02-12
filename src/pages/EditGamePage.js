import BackArrowComponent from "../components/BackArrowComponent/BackArrowComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import styled from "styled-components";
import { backgroundLight } from "../globalStyles";
import FormComponent from "../components/FormComponent/FormComponent";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TrivialContext from "../store/contexts/TrivialContext";
import useAPI from "../hooks/useAPI";

const PageContainer = styled.div`
  background-color: ${backgroundLight};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 80px;
`;

const BackArrowContainer = styled.div`
  padding: 36px 20px;
  width: 100%;
`;

const EditGamePage = () => {
  const params = useParams();
  const { currentGames } = useContext(TrivialContext);
  const navigate = useNavigate();
  const { updateGameAPI } = useAPI();
  const game = currentGames.find(
    (currentGame) => currentGame.id === +params.id
  );

  const [name, setName] = useState(game.name);
  const [creator, setCreator] = useState(game.creator);
  const [difficulty, setDifficulty] = useState(game.difficulty);

  const actionOnSubmit = () => {
    const gameNames = {
      name: name,
      creator: creator,
    };
    updateGameAPI(game.id, gameNames);
    gotoGamesList();
  };

  const gotoGamesList = () => {
    navigate(`/games-list`);
  };

  return (
    <PageContainer>
      <BackArrowContainer>
        <BackArrowComponent actionOnClick={gotoGamesList} />
      </BackArrowContainer>
      <TitleComponent text={"Edit Game"} size={"medium"}></TitleComponent>
      <FormComponent
        editing
        name={{ name, setName }}
        creator={{ creator, setCreator }}
        difficulty={{ difficulty, setDifficulty }}
        onSubmit={actionOnSubmit}
      ></FormComponent>
    </PageContainer>
  );
};

export default EditGamePage;
