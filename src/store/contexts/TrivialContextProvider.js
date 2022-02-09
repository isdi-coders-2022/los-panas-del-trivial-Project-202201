import { useReducer } from "react";
import gameReducer from "../reducers/gameReducer";
import questionsReducer from "../reducers/questionsReducer";
import TrivialContext from "./TrivialContext";

const TrivialContextProvider = ({ children }) => {
  const [currentGames, gamesDispatch] = useReducer(gameReducer, []);
  const [currentQuestions, questionDispatch] = useReducer(questionsReducer, []);
  // const [currentAllQuestions, allquestionsDispatch] = useReducer(allquestionsReducer, [])

  const contextValue = {
    currentGames,
    gamesDispatch,
    currentQuestions,
    questionDispatch,
  };

  return (
    <TrivialContext.Provider value={contextValue}>
      {children}
    </TrivialContext.Provider>
  );
};

export default TrivialContextProvider;
