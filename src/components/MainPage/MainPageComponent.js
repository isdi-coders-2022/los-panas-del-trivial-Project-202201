import ButtonComponent from "../ButtonComponent/ButtonComponent";
import TitleComponent from "../TitleComponent/TitleComponent";
import styled from "styled-components";

const TextMedium = styled.h2`
  font-size: 48px;
  text-align: center;
  color: #f6f7eb;
  padding-top: 150px;
  padding-bottom: 50px;
`;

const ContainerInferior = styled.div`
  background-color: #333533;
  border-radius: 50px 50px 0 0;
  width: 100%;
  position: absolute;
  bottom: 0px;
  height: 70%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const MainPage = () => {
  return (
    <>
      <TitleComponent
        text={"Trivial.Provider"}
        size={"medium"}
      ></TitleComponent>
      <ContainerInferior>
        <TextMedium>Let's Play!</TextMedium>
        <ButtonsContainer>
          <ButtonComponent text={"Play Now"}></ButtonComponent>
          <ButtonComponent text={"Create Game"}></ButtonComponent>
        </ButtonsContainer>
      </ContainerInferior>
    </>
  );
};

export default MainPage;
