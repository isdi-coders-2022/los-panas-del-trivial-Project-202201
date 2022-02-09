import BackArrowComponent from "../components/BackArrowComponent/BackArrowComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import styled from "styled-components";
import { backgroundLight } from "../globalStyles";
import FormComponent from "../components/FormComponent/FormComponent";
import SelectYourQuestionsComponent from "../components/SelectYourQuestionsComponent/SelectYourQuestionsComponent";
import { useState } from "react";

const PageContainerCreateGame = styled.div`
  background-color: ${backgroundLight};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 80px;
`;

const BackArrowContainer = styled.div`
  padding: 36px 20px;
  width: 100%;
`;

const CreateGamePage = () => {
  const [viewCreateGamePage, setViewCreateGamePage] = useState(true);

  const changeView = () => {
    setViewCreateGamePage(false);
  };

  const getView = () => {
    if (viewCreateGamePage) {
      return (
        <PageContainerCreateGame>
          <BackArrowContainer>
            <BackArrowComponent />
          </BackArrowContainer>
          <TitleComponent text={"Create Game"} size={"medium"}></TitleComponent>
          <FormComponent onSubmit={() => {}}></FormComponent>
        </PageContainerCreateGame>
      );
    }
    return <SelectYourQuestionsComponent />;
  };

  return getView();
};

export default CreateGamePage;
