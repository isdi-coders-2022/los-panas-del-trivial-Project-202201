import { useCallback, useContext } from "react";
import {
  addGameAction,
  loadGamesAction,
  loadQuestionsAction,
  removeGameAction,
} from "../store/actions/trivial/actionsCreators";
import TrivialContext from "../store/contexts/TrivialContext";

const useAPI = () => {
  const getTrivialUrl = (category, difficulty) =>
    `https://opentdb.com/api.php?amount=20&category=${category}&difficulty=${difficulty}`;

  const gamesAPIurl = "https://trivial-provider.herokuapp.com/games/";
  const { allQuestionsDispatch, gamesDispatch } = useContext(TrivialContext);

  const loadQuestionsAPI = useCallback(
    async (difficulty) => {
      let allQuestions = [];

      const responseSports = await fetch(getTrivialUrl(21, difficulty));
      const questionsSports = await responseSports.json();
      const questionsListSports = questionsSports.results;
      allQuestions.push(...questionsListSports);

      const responseAnimals = await fetch(getTrivialUrl(27, difficulty));
      const questionsAnimals = await responseAnimals.json();
      const questionsListAnimals = questionsAnimals.results;
      allQuestions.push(...questionsListAnimals);

      const responseVideogames = await fetch(getTrivialUrl(15, difficulty));
      const questionsVideogames = await responseVideogames.json();
      const questionsListVideogames = questionsVideogames.results;
      allQuestions.push(...questionsListVideogames);

      const responseComputers = await fetch(getTrivialUrl(18, difficulty));
      const questionsComputers = await responseComputers.json();
      const questionsListComputers = questionsComputers.results;
      allQuestions.push(...questionsListComputers);

      const responseGeography = await fetch(getTrivialUrl(22, difficulty));
      const questionsGeography = await responseGeography.json();
      const questionsListGeography = questionsGeography.results;
      allQuestions.push(...questionsListGeography);

      allQuestionsDispatch(loadQuestionsAction(allQuestions));
    },
    [allQuestionsDispatch]
  );

  const loadGamesAPI = useCallback(async () => {
    const response = await fetch(gamesAPIurl);
    const gamesList = await response.json();
    gamesDispatch(loadGamesAction(gamesList));
  }, [gamesDispatch]);

  const addGameAPI = async (game) => {
    const response = await fetch(gamesAPIurl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(game),
    });
    if (response.ok) {
      const newGame = response.json();
      gamesDispatch(addGameAction(newGame));
    }
  };

  const deleteGameAPI = async (id) => {
    const response = await fetch(`${gamesAPIurl}${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      gamesDispatch(removeGameAction(id));
    }
  };

  return { loadQuestionsAPI, loadGamesAPI, addGameAPI, deleteGameAPI };
};

export default useAPI;
