import ButtonComponent from "../ButtonComponent/ButtonComponent";
import TitleComponent from "../TitleComponent/TitleComponent";
import styled from "styled-components";

const TextMedium = styled.h2`
  font-family: "Nunito", Arial, Sans Serif;
`;

const MainPage = () => {
  return (
    <>
      <TitleComponent
        text={"Trivial.Provider"}
        size={"medium"}
        textColor={"backgroundDark"}
      ></TitleComponent>
      <div>
        <TextMedium>Let's Play!</TextMedium>
        <ButtonComponent text={"Play Now"}></ButtonComponent>
        <ButtonComponent text={"Create Game"}></ButtonComponent>
      </div>
    </>
  );
};

export default MainPage;
