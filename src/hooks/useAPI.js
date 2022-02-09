import { useCallback, useContext } from "react";
import { loadQuestionsAction } from "../store/actions/trivial/actionsCreators";
import TrivialContext from "../store/contexts/TrivialContext";

const useAPI = () => {
  const getTrivialUrl = (category, difficulty) =>
    `https://opentdb.com/api.php?amount=20&category=${category}&difficulty=${difficulty}`;

  const gamesAPIurl = "https://trivial-provider.herokuapp.com/games";
  const { allQuestionsDispatch } = useContext(TrivialContext);

  const loadQuestionsAPI = useCallback(
    async (difficulty) => {
      const idCategory = [21, 27, 15, 18, 22];
      let allQuestions = [];

      const responseSports = await fetch(getTrivialUrl(21, difficulty));
      const questionsSports = await responseSports.json();
      const questionsListSports = questionsSports.results;
      allQuestions.push([...questionsListSports]);

      const responseAnimals = await fetch(getTrivialUrl(27, difficulty));
      const questionsAnimals = await responseAnimals.json();
      const questionsListAnimals = questionsAnimals.results;
      allQuestions.push([...questionsListAnimals]);
      allQuestionsDispatch(loadQuestionsAction(allQuestions));

      const responseVideogames = await fetch(getTrivialUrl(15, difficulty));
      const questionsVideogames = await responseVideogames.json();
      const questionsListVideogames = questionsVideogames.results;
      allQuestions.push([...questionsListVideogames]);
      allQuestionsDispatch(loadQuestionsAction(allQuestions));

      const responseComputers = await fetch(getTrivialUrl(18, difficulty));
      const questionsComputers = await responseComputers.json();
      const questionsListComputers = questionsComputers.results;
      allQuestions.push([...questionsListComputers]);
      allQuestionsDispatch(loadQuestionsAction(allQuestions));

      const responseGeography = await fetch(getTrivialUrl(22, difficulty));
      const questionsGeography = await responseGeography.json();
      const questionsListGeography = questionsGeography.results;
      allQuestions.push([...questionsListGeography]);
      allQuestionsDispatch(loadQuestionsAction(allQuestions));
    },
    [allQuestionsDispatch]
  );
  return loadQuestionsAPI;
};

export default useAPI;
