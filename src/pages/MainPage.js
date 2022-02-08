import ButtonComponent from "../components/ButtonComponent/ButtonComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import styled from "styled-components";
import { backgroundLight, secondary } from "../globalStyles";

const PageContainer = styled.div`
  background-color: ${secondary};
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
  color: ${secondary};
  padding-top: 150px;
  padding-bottom: 50px;
`;

const ContainerInferior = styled.div`
  background-color: ${backgroundLight};
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
            textColor={"#242423"}
          ></TitleComponent>
        </TitleContainer>
        <ContainerInferior>
          <TextMedium>Let's Play!</TextMedium>
          <ButtonsContainer>
            <ButtonComponent
              text={"Play Now"}
              actionOnClick={() => {}}
            ></ButtonComponent>
            <ButtonComponent
              text={"Create Game"}
              actionOnClick={() => {}}
            ></ButtonComponent>
          </ButtonsContainer>
        </ContainerInferior>
      </PageContainer>
    </>
  );
};

export default MainPage;
