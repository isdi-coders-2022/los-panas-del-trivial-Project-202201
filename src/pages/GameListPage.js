import styled from "styled-components";
import BackArrowComponent from "../components/BackArrowComponent/BackArrowComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import GameComponent from "../components/GameComponent/GameComponent";
import { backgroundLight } from "../globalStyles";

const PageContainer = styled.div`
  background-color: ${backgroundLight};
  padding: 36px 20px;
  height: 100vh;
`;

const GameList = styled.ul`
  list-style: none;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const GameHolder = styled.li``;

const GameListPage = () => {
  return (
    <PageContainer>
      <BackArrowComponent actionOnClick={() => {}} />
      <TitleComponent size="medium" text="Game List" />
      <GameList>
        <GameHolder>
          <GameComponent
            game={{
              id: 3,
              name: "",
              creator: "",
              difficulty: "",
              questions: [],
            }}
          ></GameComponent>
        </GameHolder>
      </GameList>
    </PageContainer>
  );
};

export default GameListPage;
