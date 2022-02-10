import BackArrowComponent from "../components/BackArrowComponent/BackArrowComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import styled from "styled-components";
import { backgroundLight } from "../globalStyles";
import FormComponent from "../components/FormComponent/FormComponent";
import useAPI from "../hooks/useAPI";
import { useContext, useState } from "react";
import SelectYourQuestionsComponent from "../components/SelectYourQuestionsComponent/SelectYourQuestionsComponent";
import { useNavigate } from "react-router-dom";
import TrivialContext from "../store/contexts/TrivialContext";
import { emptyQuestionsAction } from "../store/actions/trivial/actionsCreators";

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
  const { loadQuestionsAPI, addGameAPI } = useAPI();
  const [name, setName] = useState("");
  const [creator, setCreator] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [game, setNewGame] = useState({});
  const [viewCreateGamePage, setViewCreateGamePage] = useState(true);
  const navigate = useNavigate();

  const { currentQuestions, questionDispatch, allQuestionsDispatch } =
    useContext(TrivialContext);

  const buildGame = () => {
    const gameInfo = {
      name,
      creator,
      difficulty,
    };
    setNewGame(gameInfo);
  };

  const createGame = () => {
    const questionsToSend = currentQuestions.map((question) => {
      const newQuestion = { ...question };
      delete newQuestion.selected;
      delete newQuestion.id;
      return newQuestion;
    });
    const gameToSend = { ...game, questions: questionsToSend };
    addGameAPI(gameToSend);
    gotoMainPage();
  };

  const changeView = () => {
    setViewCreateGamePage(false);
  };

  const actionOnSubmit = () => {
    buildGame();
    loadQuestionsAPI(difficulty);
    changeView();
  };

  const gotoMainPage = () => {
    allQuestionsDispatch(emptyQuestionsAction());
    questionDispatch(emptyQuestionsAction());
    navigate(`/home`);
  };

  const getView = () => {
    if (viewCreateGamePage) {
      return (
        <PageContainer>
          <BackArrowContainer>
            <BackArrowComponent actionOnClick={gotoMainPage} />
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
    }
    return <SelectYourQuestionsComponent onSave={createGame} />;
  };
  return getView();
};

export default CreateGamePage;
