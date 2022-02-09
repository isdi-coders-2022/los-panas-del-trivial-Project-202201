import { useCallback, useContext } from "react";
import TrivialContext from "../store/contexts/TrivialContext";

const useAPI = () => {
  const getTrivialUrl = (category, difficulty) =>
    `https://opentdb.com/api.php?amount=20&category=${category}&difficulty=${difficulty}`;

  const gamesAPIurl = "https://trivial-provider.herokuapp.com/games";
  const { gamesDispatch, questionDispatch } = useContext(TrivialContext);

  const loadQuestionsAPI = useCallback(async (difficulty) => {
    const idCategory = [21, 27, 15, 18, 22];
    let allQuestions = [];
    idCategory.forEach(async (category) => {
      const response = await fetch(getTrivialUrl(category, difficulty));
      const questions = await response.json().results;
      allQuestions.push(questions);
    });
  });
};

export default useAPI;
