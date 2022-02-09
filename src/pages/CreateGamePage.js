import BackArrowComponent from "../components/BackArrowComponent/BackArrowComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import styled from "styled-components";
import { backgroundLight } from "../globalStyles";
import FormComponent from "../components/FormComponent/FormComponent";
import useAPI from "../hooks/useAPI";
import { useState } from "react";


const PageContainer = styled.div`
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

  const { loadQuestionsAPI } = useAPI();
  const [name, setName] = useState("");
  const [creator, setCreator] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [, setNewGame] = useState({});

  const buildGame = () => {
    const game = {
      name,
      creator,
      difficulty,
    };
    setNewGame(game);
  };

  const actionOnSubmit = () => {
    buildGame();
    loadQuestionsAPI(difficulty)
  };

  return (
    <PageContainer>
      <BackArrowContainer>
        <BackArrowComponent actionOnClick={() => {}} />
      </BackArrowContainer>
      <TitleComponent text={"Create Game"} size={"medium"}></TitleComponent>
      <FormComponent
        name={{ name, setName }}
        creator={{ creator, setCreator }}
        difficulty={{ difficulty, setDifficulty }}
        onSubmit={actionOnSubmit}
      ></FormComponent>
    </PageContainer>
  );
};

export default CreateGamePage;
