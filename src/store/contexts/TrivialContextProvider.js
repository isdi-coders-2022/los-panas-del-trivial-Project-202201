import { useReducer } from "react";
import allQuestionsReducer from "../reducers/allQuestionsReducer";
import gameReducer from "../reducers/gameReducer";
import questionsReducer from "../reducers/questionsReducer";
import TrivialContext from "./TrivialContext";

const TrivialContextProvider = ({ children }) => {
  const [currentGames, gamesDispatch] = useReducer(gameReducer, []);
  const [currentQuestions, questionDispatch] = useReducer(questionsReducer, []);
  const [currentAllQuestions, allQuestionsDispatch] = useReducer(
    allQuestionsReducer,
    []
  );

  const contextValue = {
    currentGames,
    gamesDispatch,
    currentQuestions,
    questionDispatch,
    currentAllQuestions,
    allQuestionsDispatch,
  };

  return (
    <TrivialContext.Provider value={contextValue}>
      {children}
    </TrivialContext.Provider>
  );
};

export default TrivialContextProvider;
