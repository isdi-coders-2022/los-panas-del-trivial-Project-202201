import ButtonComponent from "../components/ButtonComponent/ButtonComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import styled from "styled-components";
import GameComponent from "../components/GameComponent/GameComponent";

const PageContainer = styled.div`
  background-color: #f6f7eb;
  height: 100vh;
`;

const TitleContainer = styled.div`
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
  height: 30%;
`;

const MainPage = () => {
  return (
    <>
      <PageContainer>
        <TitleContainer>
          <TitleComponent
            text={"Trivial.Provider"}
            size={"medium"}
          ></TitleComponent>
        </TitleContainer>
        <ContainerInferior>
          <TextMedium>Let's Play!</TextMedium>
          <GameComponent
            game={{
              name: "AAAAAAAAAA",
              creator: "Mario",
              difficulty: "Medium",
              questions: [],
            }}
          />
          <ButtonsContainer>
            <ButtonComponent text={"Play Now"}></ButtonComponent>
            <ButtonComponent text={"Create Game"}></ButtonComponent>
          </ButtonsContainer>
        </ContainerInferior>
      </PageContainer>
    </>
  );
};

export default MainPage;
