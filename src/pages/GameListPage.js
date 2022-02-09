import styled from "styled-components";
import BackArrowComponent from "../components/BackArrowComponent/BackArrowComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import GameComponent from "../components/GameComponent/GameComponent";
import { backgroundLight } from "../globalStyles";

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

const GameHolder = styled.li``;

const GameListPage = () => {
  return (
    <PageContainer>
      <BackArrowContainer>
        <BackArrowComponent actionOnClick={() => {}} />
      </BackArrowContainer>
      <TitleComponent size="medium" text="Game List" />
      <GameList></GameList>
    </PageContainer>
  );
};

export default GameListPage;
