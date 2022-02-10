import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import BackArrowComponent from "../components/BackArrowComponent/BackArrowComponent";
import GameComponent from "../components/GameComponent/GameComponent";
import QuestionComponent from "../components/QuestionComponent/QuestionComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import { backgroundLight } from "../globalStyles";
import TrivialContext from "../store/contexts/TrivialContext";
import NotFoundPage from "./NotFoundPage";

const PageContainer = styled.div`
  background-color: ${backgroundLight};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 80px;
`;

const BackArrowContainer = styled.div`
  padding: 36px 20px;
  width: 100%;
`;

const GameContainer = styled.div`
  margin-top: 50px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuestionList = styled.ul`
  list-style: none;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 0;
  height: 597px;
  overflow-y: scroll;
`;

const GameDetailsPage = () => {
  const params = useParams();
  const { currentGames } = useContext(TrivialContext);
  const navigate = useNavigate();
  const game = currentGames.find(
    (currentGame) => currentGame.id === +params.id
  );

  const gotoGamesList = () => {
    navigate(`/games-list`);
  };

  return (
    <>
      {game ? (
        <PageContainer>
          <BackArrowContainer>
            <BackArrowComponent actionOnClick={gotoGamesList} />
          </BackArrowContainer>

          <TitleComponent size="medium" text="Game List" />
          <GameContainer>
            <GameComponent game={game} />
          </GameContainer>
          <QuestionList>
            {game.questions.map((question, index) => (
              <QuestionComponent key={index} question={question} />
            ))}
          </QuestionList>
        </PageContainer>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};

export default GameDetailsPage;
