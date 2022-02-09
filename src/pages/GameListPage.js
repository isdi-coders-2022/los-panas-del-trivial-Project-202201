import BackArrowComponent from "../components/BackArrowComponent/BackArrowComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";

const GameListPage = () => {
  return (
    <div>
      <BackArrowComponent actionOnClick={() => {}} />
      <TitleComponent size="medium" text="Game List" />
    </div>
  );
};

export default GameListPage;
