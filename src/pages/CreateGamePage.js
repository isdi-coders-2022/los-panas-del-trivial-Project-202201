import ButtonComponent from "../components/ButtonComponent/ButtonComponent";
import BackArrowComponent from "../components/BackArrowComponent/BackArrowComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import styled from "styled-components";
import { backgroundLight, secondary } from "../globalStyles";

const CreateGamePage = () => {
  return (
    <>
      <BackArrowComponent />
      <TitleComponent text={"Create Game"} size={"medium"}></TitleComponent>;
    </>
  );
};

export default CreateGame;
