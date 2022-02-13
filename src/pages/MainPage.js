import ButtonComponent from "../components/ButtonComponent/ButtonComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import styled from "styled-components";
import {
  backgroundLight,
  breakpointM,
  breakpointS,
  secondary,
} from "../globalStyles";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  background-color: ${secondary};
  height: 100vh;
  @media (min-width: ${breakpointS}) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const TitleContainer = styled.div`
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${breakpointS}) {
    position: absolute;
    left: 3%;
  }
  @media (min-width: ${breakpointM}) {
    position: absolute;
    left: 8%;
  }
`;

const TextMedium = styled.h2`
  font-size: 48px;
  text-align: center;
  color: ${secondary};
  padding-top: 150px;
  padding-bottom: 50px;
`;

const ContainerGameDark = styled.div`
  background-color: ${backgroundLight};
  border-radius: 50px 50px 0 0;
  width: 100%;
  position: absolute;
  bottom: 0px;
  height: 70%;
  @media (min-width: ${breakpointS}) {
    border-radius: 50px 0 0 50px;
    position: absolute;
    height: 100%;
    width: 60%;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 30%;

  @media (min-width: ${breakpointS}) {
    height: 25%;
  }
`;

const MainPage = () => {
  const navigate = useNavigate();

  const gotoGameList = () => {
    navigate(`/games-list`);
  };

  const gotoCreateGame = () => {
    navigate(`/game/new`);
  };

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
        <ContainerGameDark>
          <TextMedium>Let's Play!</TextMedium>
          <ButtonsContainer>
            <ButtonComponent
              text={"Play Now"}
              actionOnClick={gotoGameList}
            ></ButtonComponent>
            <ButtonComponent
              text={"Create Game"}
              actionOnClick={gotoCreateGame}
            ></ButtonComponent>
          </ButtonsContainer>
        </ContainerGameDark>
      </PageContainer>
    </>
  );
};

export default MainPage;
