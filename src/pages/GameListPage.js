import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackArrowComponent from "../components/BackArrowComponent/BackArrowComponent";
import GameComponent from "../components/GameComponent/GameComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import { backgroundLight } from "../globalStyles";
import useAPI from "../hooks/useAPI";
import TrivialContext from "../store/contexts/TrivialContext";

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

const GameList = styled.ul`
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

const GameListPage = () => {
  const navigate = useNavigate();
  const { loadGamesAPI } = useAPI();
  const { currentGames } = useContext(TrivialContext);

  useEffect(() => {
    loadGamesAPI();
  }, [loadGamesAPI]);

  const gotoMainPage = () => {
    navigate(`/home`);
  };

  return (
    <PageContainer>
      <BackArrowContainer>
        <BackArrowComponent actionOnClick={gotoMainPage} />
      </BackArrowContainer>
      <TitleComponent size="medium" text="Game List" />
      <GameList>
        {currentGames.map((game) => (
          <GameComponent game={game} key={game.id} />
        ))}
      </GameList>
    </PageContainer>
  );
};

export default GameListPage;
