import styled from "styled-components";
import BackArrowComponent from "../components/BackArrowComponent/BackArrowComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";

const GameList = styled.ul``;

const GameListPage = () => {
  return (
    <div>
      <BackArrowComponent actionOnClick={() => {}} />
      <TitleComponent size="medium" text="Game List" />
      <GameList></GameList>
    </div>
  );
};

export default GameListPage;
